// ==========================================
// US College Soccer Recruiting App - Main JS
// ==========================================

const STORAGE_KEYS = {
  PROFILE: "us_soccer_profile",
  COLLEGES: "us_soccer_colleges",
  PIPELINE: "us_soccer_pipeline",
  ROADMAP: "us_soccer_roadmap",
  CALCULATOR: "us_soccer_calculator"
};

// Global App State
let state = {
  currentTab: "dashboard",
  profile: null,
  colleges: [],
  pipeline: [],
  roadmap: [],
  calculator: {
    tuitionUSD: 35000,
    roomAndBoardUSD: 13000,
    booksInsuranceUSD: 3000,
    athleticPct: 50,
    academicUSD: 5000,
    exchangeRate: 155
  },
  filters: {
    division: "ALL",
    region: "ALL",
    strength: "ALL",
    finRisk: "ALL",
    gender: "ALL",
    search: "",
    sort: "DEFAULT"
  },
  selectedCollegeForEmail: null,
  selectedTemplateId: "intro-video",
  // true = "browse without profile" for this session: the saved profile stays untouched in localStorage but is not applied
  profileBypassed: false,
  compareIds: []
};

const COMPARE_MAX = 4;
const STALE_CONTACT_DAYS = 14;
const UPCOMING_DAYS = 7;

// ==========================================
// Helpers
// ==========================================
// Escape a value for safe insertion into HTML text/attribute contexts
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// MF count / ratio parsed from rosterStats ("公式ロスター全29名 / ... / MF 10名 (Sr・Gr 2名)"); null when the roster is not verified
function mfInfo(col) {
  const m = /全(\d+)名.*?MF\s*(\d+)名/.exec(col.rosterStats || "");
  if (!m) return null;
  const total = Number(m[1]), mf = Number(m[2]);
  return { total, mf, pct: total ? Math.round((mf / total) * 100) : 0 };
}

// True when japanesePlayers reports at least one Japanese player ("3名 (...)" / "在籍"); "0名 (... 出身地不明1名)" is false
function hasJapanesePlayers(col) {
  const t = col.japanesePlayers || "";
  return /^\s*[1-9]\d*名/.test(t) || t.includes("在籍");
}

// Safe string literal for use inside a double-quoted inline handler attribute, e.g. onclick="fn(${jsArg(id)})"
function jsArg(value) {
  return esc(JSON.stringify(String(value ?? "")));
}

// Allow only http(s) URLs in href attributes (blocks javascript: etc.)
function safeUrl(url) {
  const s = String(url ?? "").trim();
  return /^https?:\/\//i.test(s) ? s : "";
}

// Link target for a college name: official men's soccer page when known, otherwise a Google search (same convention as the Excel sheet)
function collegeSiteHref(col) {
  return safeUrl(col.siteUrl) ||
    "https://www.google.com/search?q=" + encodeURIComponent(`${col.name} ${col.gender === "Women" ? "Women's" : "Men's"} Soccer`);
}

// College name rendered as a link to the soccer program's homepage
function collegeNameLink(col) {
  const official = !!safeUrl(col.siteUrl);
  return `<a href="${esc(collegeSiteHref(col))}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-sky-400 underline-offset-2" title="${official ? "サッカー部の公式ページを開く" : "サッカー部のページをGoogleで検索"}">${esc(col.name)}</a>`;
}

function cloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Whole days from today (local time) to a "YYYY-MM-DD" date; negative = past, null = missing/invalid
function daysUntil(dateStr) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateStr || ""));
  if (!m) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) - today) / 86400000);
}

// Badge label + classes describing how close a due date is
function dueBadge(days) {
  if (days === null) return { label: "期日未定", cls: "bg-slate-700 text-slate-400" };
  if (days < 0) return { label: `${-days}日超過`, cls: "bg-red-950 text-red-300 border border-red-700" };
  if (days === 0) return { label: "今日が期日", cls: "bg-red-950 text-red-300 border border-red-700" };
  if (days <= UPCOMING_DAYS) return { label: `あと${days}日`, cls: "bg-amber-950 text-amber-300 border border-amber-700" };
  return { label: `あと${days}日`, cls: "bg-indigo-900/60 text-indigo-200 border border-indigo-700" };
}

// Pipeline entries that are still being worked on
function isActivePipeline(p) {
  return p.status !== "Closed" && p.status !== "Committed";
}

// A profile counts as "created" once the user has entered a name (English or Japanese).
// The profile lives only in this device's localStorage; nothing is ever sent to the server.
function hasProfile() {
  const p = state.profile;
  return !!(p && (String(p.fullNameEng || "").trim() || String(p.fullNameJp || "").trim()));
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  setupNavigation();
  setupEventListeners();
  renderAll();
  openProfileCheck();
  showLineBrowserNotice();
});

// LINE's in-app browser has its own localStorage (separate from the phone's default browser), so saved data would be
// split between the two. A page cannot make LINE switch browsers by itself (?openExternalBrowser=1 is only honoured
// when the link is tapped inside a LINE message), so:
//  - Android: hand the URL to the OS with an intent:// link (opens the default browser)
//  - iOS: no web API exists; show how to open it from LINE's menu and offer a copy-URL button
function isLineInAppBrowser() {
  return /\bLine\//i.test(navigator.userAgent || "");
}

function plainPageUrl() {
  const url = new URL(location.href);
  url.searchParams.delete("openExternalBrowser");
  return url.toString();
}

// intent:// URL without a package name => Android resolves it to the user's default browser
function androidIntentUrl() {
  const u = new URL(plainPageUrl());
  return `intent://${u.host}${u.pathname}${u.search}#Intent;scheme=${u.protocol.replace(":", "")};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`;
}

function openInDefaultBrowser() {
  if (/Android/i.test(navigator.userAgent)) location.href = androidIntentUrl();
}

function copyPageUrl() {
  const url = plainPageUrl();
  const done = () => showToast("URLをコピーしました。SafariやChromeに貼り付けて開いてください");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(done, () => window.prompt("このURLをコピーして、ブラウザで開いてください", url));
  } else {
    window.prompt("このURLをコピーして、ブラウザで開いてください", url);
  }
}

function showLineBrowserNotice() {
  if (!isLineInAppBrowser() || document.getElementById("line-browser-notice")) return;
  const isAndroid = /Android/i.test(navigator.userAgent);
  const bar = document.createElement("div");
  bar.id = "line-browser-notice";
  bar.className = "fixed top-0 inset-x-0 z-[60] bg-amber-900 text-amber-50 text-xs px-3 py-2 no-print shadow-lg";
  bar.innerHTML = `
    <div class="flex items-start gap-2">
      <div class="flex-1 space-y-1">
        <p class="font-bold">LINE内のブラウザで開いています</p>
        <p>ここに保存したデータは、スマホの通常のブラウザと共有されません。${isAndroid
          ? "下のボタンで標準ブラウザに切り替えてください。"
          : "画面右下の「…」または共有ボタン →「Safariで開く」（「デフォルトのブラウザで開く」）を選ぶか、URLをコピーして開いてください。"}</p>
      </div>
      <button onclick="document.getElementById('line-browser-notice').remove()" class="px-1 text-amber-200" aria-label="閉じる">✕</button>
    </div>
    <div class="flex gap-2 mt-1.5">
      ${isAndroid ? `<button onclick="openInDefaultBrowser()" class="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded">標準ブラウザで開く</button>` : ""}
      <button onclick="copyPageUrl()" class="px-3 py-1 bg-amber-800 hover:bg-amber-700 text-amber-50 font-bold rounded border border-amber-600">URLをコピー</button>
    </div>`;
  document.body.appendChild(bar);
}

// Launch-time profile check: confirm the profile stored on this device, or offer to create one.
// Not dismissible by Escape/backdrop, so the user always makes an explicit choice.
function openProfileCheck() {
  const modal = document.getElementById("profile-check-modal");
  const content = document.getElementById("profile-check-content");
  if (!modal || !content) return;

  if (hasProfile()) {
    const p = state.profile;
    const name = p.fullNameEng || p.fullNameJp;
    const sub = [p.fullNameJp && p.fullNameEng ? p.fullNameJp : "", p.transferTerm ? `Transfer ${p.transferTerm}` : "", p.primaryPosition].filter(Boolean).join(" | ");
    content.innerHTML = `
      <div class="flex items-center gap-3 mb-4">
        <div class="w-11 h-11 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-500/30">
          <i data-lucide="user-check" class="w-5 h-5"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[11px] text-slate-400">この端末に保存されているプロフィール</p>
          <h3 id="profile-check-title" class="text-lg font-bold text-white truncate">${esc(name)} さん</h3>
          ${sub ? `<p class="text-xs text-slate-400 truncate">${esc(sub)}</p>` : ""}
        </div>
      </div>
      <p class="text-xs text-slate-400 mb-4">このプロフィールで続けますか？ データはこの端末のブラウザ内にのみ保存され、サーバーには送信されません。</p>
      <div class="flex flex-col gap-2">
        <button onclick="closeProfileCheck('dashboard')" class="w-full py-2.5 text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow transition">${esc(name)} さんとして続ける</button>
        <button onclick="closeProfileCheck('profile')" class="w-full py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 transition">プロフィールを編集する</button>
        <button onclick="browseWithoutProfile()" class="w-full py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-amber-200 rounded-xl border border-amber-800/60 transition">プロフィールを適用せずに大学を検索する</button>
      </div>
      <p class="text-[11px] text-slate-500 mt-3">「適用せずに検索」を選んでも、保存済みのプロフィールは削除されません。</p>`;
  } else {
    content.innerHTML = `
      <div class="flex items-center gap-3 mb-4">
        <div class="w-11 h-11 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
          <i data-lucide="user-plus" class="w-5 h-5"></i>
        </div>
        <div>
          <h3 id="profile-check-title" class="text-lg font-bold text-white">プロフィールを作成しますか？</h3>
          <p class="text-xs text-slate-400">この端末にはまだプロフィールがありません</p>
        </div>
      </div>
      <p class="text-xs text-slate-400 mb-4">プロフィールはこの端末のブラウザ内にのみ保存され、サーバー・GitHubには送信されません。作成しなくても大学の検索・比較はできます（メール文面やレジュメには氏名などが入りません）。</p>
      <div class="flex flex-col gap-2">
        <button onclick="closeProfileCheck('profile')" class="w-full py-2.5 text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow transition">プロフィールを作成する</button>
        <button onclick="closeProfileCheck('explorer')" class="w-full py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 transition">作成せずに大学を探す</button>
        <button onclick="document.getElementById('file-import-profile').click()" class="w-full py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-xl border border-slate-700 transition">プロフィールファイルを読み込む（キャッシュ削除後・別端末）</button>
        <button onclick="closeProfileCheck(null); document.getElementById('btn-import-json').click()" class="w-full py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition">全体バックアップ(JSON)を復元する</button>
      </div>`;
  }
  modal.classList.remove("hidden");
  lucide.createIcons();
}

// Close the launch-time check and move to the chosen tab (null = stay where we are)
function closeProfileCheck(tabId) {
  const modal = document.getElementById("profile-check-modal");
  if (modal) modal.classList.add("hidden");
  if (tabId) switchTab(tabId);
}

// Browse colleges without applying the saved profile. The saved profile stays in localStorage untouched;
// this session just uses a blank placeholder (see the saveState / syncProfileFromForm guards).
function browseWithoutProfile() {
  state.profileBypassed = true;
  state.profile = cloneData(DEFAULT_ATHLETE_PROFILE);
  renderAll();
  closeProfileCheck("explorer");
}

// Leave browse-without-profile mode and load the saved profile again
function applySavedProfile() {
  const saved = readStored(STORAGE_KEYS.PROFILE);
  state.profileBypassed = false;
  state.profile = saved && typeof saved === "object" && !Array.isArray(saved)
    ? { ...cloneData(DEFAULT_ATHLETE_PROFILE), ...saved }
    : cloneData(DEFAULT_ATHLETE_PROFILE);
  renderAll();
  showToast("保存済みのプロフィールを適用しました");
}

// Display name of the profile saved on this device (works even while browsing without the profile)
function getSavedProfileName() {
  const saved = readStored(STORAGE_KEYS.PROFILE);
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) return "";
  const eng = String(saved.fullNameEng || "").trim();
  const jp = String(saved.fullNameJp || "").trim();
  return [eng, jp && eng ? `(${jp})` : jp].filter(Boolean).join(" ");
}

// Read and parse a localStorage key; returns null if missing or corrupt
function readStored(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error(`Failed to parse localStorage key "${key}":`, e);
    return null;
  }
}

// Load state from localStorage or defaults (each section falls back independently)
function loadState() {
  const savedProfile = readStored(STORAGE_KEYS.PROFILE);
  state.profile = savedProfile && typeof savedProfile === "object" && !Array.isArray(savedProfile)
    ? { ...cloneData(DEFAULT_ATHLETE_PROFILE), ...savedProfile }
    : cloneData(DEFAULT_ATHLETE_PROFILE);

  const savedColleges = readStored(STORAGE_KEYS.COLLEGES);
  if (Array.isArray(savedColleges)) {
    // Ensure all standard colleges exist and back-fill missing stadium names; never overwrite user edits
    INITIAL_COLLEGES.forEach(initCol => {
      const existing = savedColleges.find(c => c.id === initCol.id);
      if (!existing) {
        savedColleges.push(cloneData(initCol));
      } else {
        if (!existing.stadium && initCol.stadium) existing.stadium = initCol.stadium;
        if (!existing.siteUrl && initCol.siteUrl) existing.siteUrl = initCol.siteUrl;
      }
    });
    migrateCollegeData(savedColleges);
    // Women's programs were removed from the database; drop saved ones unless a pipeline entry still uses them
    const savedPipelineIds = new Set(
      (Array.isArray(readStored(STORAGE_KEYS.PIPELINE)) ? readStored(STORAGE_KEYS.PIPELINE) : []).map(p => p.collegeId)
    );
    state.colleges = savedColleges.filter(c => c.gender !== "Women" || savedPipelineIds.has(c.id));
    saveState("colleges");
  } else {
    state.colleges = cloneData(INITIAL_COLLEGES);
  }

  const savedPipeline = readStored(STORAGE_KEYS.PIPELINE);
  if (Array.isArray(savedPipeline)) {
    // Migrate legacy college ID that no longer exists in the database
    savedPipeline.forEach(p => {
      if (p.collegeId === "grandviewuniversity-mens") p.collegeId = "grandview-mens";
    });
    remapPipelineCollegeIds(savedPipeline);
    state.pipeline = savedPipeline;
    saveState("pipeline");
  } else {
    state.pipeline = cloneData(INITIAL_PIPELINE);
  }

  const savedRoadmap = readStored(STORAGE_KEYS.ROADMAP);
  // Legacy high-school roadmap ("Grade 9" ... "Grade 12") is replaced by the transfer roadmap
  const isLegacyRoadmap = Array.isArray(savedRoadmap) &&
    savedRoadmap.some(r => /^Grade\s*\d+/.test(String(r && r.grade)));
  if (Array.isArray(savedRoadmap) && !isLegacyRoadmap) {
    state.roadmap = savedRoadmap;
  } else {
    state.roadmap = cloneData(RECRUITING_ROADMAP);
    if (isLegacyRoadmap) saveState("roadmap");
  }

  const savedCalc = readStored(STORAGE_KEYS.CALCULATOR);
  if (savedCalc && typeof savedCalc === "object" && !Array.isArray(savedCalc)) {
    state.calculator = { ...state.calculator, ...savedCalc };
  }
}

// Apply database corrections to colleges already saved in the browser (or imported from a backup).
// - Merged duplicate entries are dropped (their pipeline references are remapped separately).
// - A field is only corrected while it still holds the old default value, so user edits are never overwritten.
function migrateCollegeData(colleges) {
  Object.entries(DUPLICATE_COLLEGE_ID_MAP).forEach(([removedId, keptId]) => {
    const idx = colleges.findIndex(c => c.id === removedId);
    if (idx === -1) return;
    colleges.splice(idx, 1);
    if (!colleges.some(c => c.id === keptId)) {
      const kept = INITIAL_COLLEGES.find(c => c.id === keptId);
      if (kept) colleges.push(cloneData(kept));
    }
  });

  colleges.forEach(col => {
    const fixes = COLLEGE_DATA_FIXES[col.id];
    if (!fixes) return;
    Object.entries(fixes).forEach(([field, [from, to]]) => {
      const current = col[field] === undefined ? null : col[field];
      if (JSON.stringify(current) !== JSON.stringify(from)) return;
      if (to === null) delete col[field];
      else col[field] = to;
    });
  });
}

function remapPipelineCollegeIds(pipeline) {
  pipeline.forEach(p => {
    if (DUPLICATE_COLLEGE_ID_MAP[p.collegeId]) p.collegeId = DUPLICATE_COLLEGE_ID_MAP[p.collegeId];
  });
}

// Save state to localStorage
function saveState(key) {
  try {
    // While browsing without the profile, state.profile is a blank placeholder: never overwrite the saved profile with it
    if ((key === "profile" || !key) && !state.profileBypassed) localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(state.profile));
    if (key === "colleges" || !key) localStorage.setItem(STORAGE_KEYS.COLLEGES, JSON.stringify(state.colleges));
    if (key === "pipeline" || !key) localStorage.setItem(STORAGE_KEYS.PIPELINE, JSON.stringify(state.pipeline));
    if (key === "roadmap" || !key) localStorage.setItem(STORAGE_KEYS.ROADMAP, JSON.stringify(state.roadmap));
    if (key === "calculator" || !key) localStorage.setItem(STORAGE_KEYS.CALCULATOR, JSON.stringify(state.calculator));
  } catch (e) {
    console.error("Error saving state:", e);
  }
}

// Reset to factory demo data
function resetToDemoData() {
  if (confirm("全てのデータを初期デモデータに戻しますか？現在の入力内容は上書きされます。")) {
    state.profileBypassed = false;
    state.profile = JSON.parse(JSON.stringify(DEFAULT_ATHLETE_PROFILE));
    state.colleges = JSON.parse(JSON.stringify(INITIAL_COLLEGES));
    state.pipeline = JSON.parse(JSON.stringify(INITIAL_PIPELINE));
    state.roadmap = JSON.parse(JSON.stringify(RECRUITING_ROADMAP));
    saveState();
    renderAll();
    showToast("デモデータに初期化しました");
  }
}

// Toast notification helper
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${
    type === "error" ? "bg-red-600 text-white" : "bg-emerald-600 text-white"
  }`;
  toast.innerHTML = `<i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle-2'}" class="w-4 h-4"></i><span></span>`;
  toast.querySelector("span").textContent = message;
  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Setup Navigation Tabs
function setupNavigation() {
  const navButtons = document.querySelectorAll("[data-nav-target]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-nav-target");
      switchTab(target);
      setSidebarOpen(false);
    });
  });

  // Mobile sidebar drawer
  const toggle = document.getElementById("btn-sidebar-toggle");
  const backdrop = document.getElementById("sidebar-backdrop");
  if (toggle) toggle.addEventListener("click", () => setSidebarOpen(true));
  if (backdrop) backdrop.addEventListener("click", () => setSidebarOpen(false));

  // Modals: close with Escape or by clicking the dimmed backdrop
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document.querySelectorAll("[data-modal]:not(.hidden)").forEach(m => m.classList.add("hidden"));
    setSidebarOpen(false);
  });
  document.querySelectorAll("[data-modal]").forEach(modal => {
    modal.addEventListener("mousedown", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
}

function setSidebarOpen(open) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const toggle = document.getElementById("btn-sidebar-toggle");
  if (!sidebar) return;
  sidebar.classList.toggle("-translate-x-full", !open);
  if (backdrop) backdrop.classList.toggle("hidden", !open);
  if (toggle) toggle.setAttribute("aria-expanded", String(open));
}

function switchTab(tabId) {
  state.currentTab = tabId;
  document.querySelectorAll("[data-nav-target]").forEach(btn => {
    const isTarget = btn.getAttribute("data-nav-target") === tabId;
    if (isTarget) {
      btn.classList.add("bg-sky-600", "text-white", "font-semibold");
      btn.classList.remove("text-slate-300", "hover:bg-slate-800");
    } else {
      btn.classList.remove("bg-sky-600", "text-white", "font-semibold");
      btn.classList.add("text-slate-300", "hover:bg-slate-800");
    }
  });

  document.querySelectorAll(".tab-pane").forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.remove("hidden");
    } else {
      pane.classList.add("hidden");
    }
  });

  // Re-render specific views if needed
  if (tabId === "dashboard") renderDashboard();
  if (tabId === "explorer") renderExplorer();
  if (tabId === "pipeline") renderPipeline();
  if (tabId === "email") renderEmailGenerator();
  if (tabId === "roadmap") renderRoadmap();
  if (tabId === "calculator") renderCalculator();
  if (tabId === "profile") renderProfileTab();

  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

// Setup Global Event Listeners
function setupEventListeners() {
  // Explorer filters
  const divisionFilter = document.getElementById("filter-division");
  if (divisionFilter) {
    divisionFilter.addEventListener("change", (e) => {
      state.filters.division = e.target.value;
      renderExplorer();
    });
  }

  const regionFilter = document.getElementById("filter-region");
  if (regionFilter) {
    regionFilter.addEventListener("change", (e) => {
      state.filters.region = e.target.value;
      renderExplorer();
    });
  }

  const strengthFilter = document.getElementById("filter-strength");
  if (strengthFilter) {
    strengthFilter.addEventListener("change", (e) => {
      state.filters.strength = e.target.value;
      renderExplorer();
    });
  }

  const finRiskFilter = document.getElementById("filter-finrisk");
  if (finRiskFilter) {
    finRiskFilter.addEventListener("change", (e) => {
      state.filters.finRisk = e.target.value;
      renderExplorer();
    });
  }

  const genderFilter = document.getElementById("filter-gender");
  if (genderFilter) {
    genderFilter.addEventListener("change", (e) => {
      state.filters.gender = e.target.value;
      renderExplorer();
    });
  }

  const sortSelect = document.getElementById("sort-college");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.filters.sort = e.target.value;
      renderExplorer();
    });
  }

  const searchInput = document.getElementById("search-college");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.search = e.target.value.toLowerCase().trim();
      renderExplorer();
    });
  }

  // Backup Import/Export
  const btnExport = document.getElementById("btn-export-json");
  if (btnExport) {
    btnExport.addEventListener("click", exportDataJSON);
  }

  const btnImport = document.getElementById("btn-import-json");
  const fileImport = document.getElementById("file-import-json");
  if (btnImport && fileImport) {
    btnImport.addEventListener("click", () => fileImport.click());
    fileImport.addEventListener("change", importDataJSON);
  }

  const btnResetDemo = document.getElementById("btn-reset-demo");
  if (btnResetDemo) {
    btnResetDemo.addEventListener("click", resetToDemoData);
  }

  // Real-time live profile form synchronization
  const profileForm = document.getElementById("profile-form-container");
  if (profileForm) {
    profileForm.addEventListener("input", () => {
      syncProfileFromForm(false, false);
    });
    profileForm.addEventListener("change", () => {
      syncProfileFromForm(true, false);
    });
  }
}

// Render All Components
function renderAll() {
  renderProfileHeader();
  renderDashboard();
  renderExplorer();
  renderPipeline();
  renderEmailGenerator();
  renderRoadmap();
  renderCalculator();
  renderProfileTab();
  lucide.createIcons();
}

// Render Profile Header Summary in Top Bar
function renderProfileHeader() {
  const p = state.profile;
  const nameEl = document.getElementById("header-player-name");
  const subEl = document.getElementById("header-player-sub");
  if (state.profileBypassed) {
    if (nameEl) nameEl.textContent = "プロフィール未適用（大学検索モード）";
    const savedName = getSavedProfileName();
    if (subEl) subEl.innerHTML = savedName
      ? `保存済みプロフィール: <strong class="text-slate-200">${esc(savedName)}</strong>（未適用） <button onclick="applySavedProfile()" class="underline text-sky-400 hover:text-sky-300">適用する</button>`
      : `保存済みのプロフィールはありません。`;
    return;
  }
  if (!hasProfile()) {
    if (nameEl) nameEl.textContent = "プロフィール未作成";
    if (subEl) subEl.textContent = "「選手プロフィール & レジュメ」から作成してください（この端末にのみ保存されます）";
    return;
  }
  const name = [p.fullNameEng, p.fullNameJp ? `(${p.fullNameJp})` : ""].filter(Boolean).join(" ");
  if (nameEl) nameEl.textContent = name;
  if (subEl) subEl.textContent = `Transfer ${p.transferTerm || '-'} (Rising Junior) | ${p.primaryPosition || '-'} | College GPA ${p.gpa || '-'} | NCAA #${p.ncaaEligibilityId || '未登録'}`;
}

// Banner at the top of the profile tab: explains where the profile is stored and prompts creation when empty
function renderProfileNotice() {
  const el = document.getElementById("profile-notice");
  if (!el) return;
  if (state.profileBypassed) {
    el.className = "no-print bg-amber-950/40 border border-amber-700/60 rounded-xl px-4 py-3 text-xs text-amber-100 flex items-start gap-2";
    el.innerHTML = `<i data-lucide="eye-off" class="w-4 h-4 text-amber-300 shrink-0 mt-0.5"></i>
      <div class="space-y-1.5">
        <p>現在は<strong>プロフィールを適用せずに</strong>大学を検索中です。保存済みのプロフィールは削除されておらず、この端末に残っています。</p>
        ${getSavedProfileName() ? `<p>保存済みプロフィール: <strong class="text-white">${esc(getSavedProfileName())}</strong></p>` : ""}
        <button onclick="applySavedProfile()" class="px-3 py-1 text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition">保存済みのプロフィールを適用する</button>
      </div>`;
    return;
  }
  if (hasProfile()) {
    el.className = "no-print bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-400 flex items-start gap-2";
    el.innerHTML = `<i data-lucide="lock" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
      <span>保存済みプロフィール: <strong class="text-white">${esc(getSavedProfileName())}</strong>。このプロフィールは<strong class="text-slate-200">この端末のブラウザ内にのみ</strong>保存されています。サーバー・GitHubには送信されません。ブラウザのキャッシュ・サイトデータを削除すると消えるため、<strong class="text-sky-300">「ファイルに保存」</strong>でプロフィールをファイルに書き出しておくと安心です（別端末では「ファイルから読み込む」）。ファイルはGitHubに上げないでください。</span>`;
  } else {
    el.className = "no-print bg-sky-950/60 border border-sky-700 rounded-xl px-4 py-3 text-sm text-sky-100 flex items-start gap-2";
    el.innerHTML = `<i data-lucide="user-plus" class="w-5 h-5 text-sky-300 shrink-0 mt-0.5"></i>
      <div class="space-y-1">
        <p class="font-bold">はじめに、選手プロフィールを作成してください</p>
        <p class="text-xs text-sky-200">氏名などを入力して「プロフィールを保存」を押すと、この端末（PC / スマホ）のブラウザにのみ保存されます。サーバー・GitHubには送信されません。</p>
        <p class="text-xs text-sky-300">作成済みのプロフィールファイルがある場合は、上の「ファイルから読み込む」で復元できます（キャッシュ削除後・別端末）。</p>
      </div>`;
  }
}

// ==========================================
// 1. DASHBOARD
// ==========================================
function renderDashboard() {
  const pipeline = state.pipeline;
  const colleges = state.colleges;

  // Counts by status
  const totalTracked = pipeline.length;
  const contactedCount = pipeline.filter(p => p.status === "Contacted").length;
  const activeDiscussionCount = pipeline.filter(p => p.status === "In Discussion").length;
  const offerCount = pipeline.filter(p => p.status === "Offer Received").length;
  const committedCount = pipeline.filter(p => p.status === "Committed").length;

  // Total scholarship value calculation
  const totalScholarshipUSD = pipeline.reduce((sum, item) => sum + (Number(item.offerAmountUSD) || 0), 0);

  // Roadmap tasks completion count
  let totalTasks = 0;
  let doneTasks = 0;
  state.roadmap.forEach(r => {
    r.tasks.forEach(t => {
      totalTasks++;
      if (t.done) doneTasks++;
    });
  });
  const roadmapPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Update Stat Cards
  const elTracked = document.getElementById("dash-stat-tracked");
  const elOffers = document.getElementById("dash-stat-offers");
  const elDiscussions = document.getElementById("dash-stat-discussions");
  const elScholarship = document.getElementById("dash-stat-scholarship");
  const elRoadmapProgress = document.getElementById("dash-roadmap-pct");
  const elRoadmapBar = document.getElementById("dash-roadmap-bar");

  if (elTracked) elTracked.textContent = totalTracked;
  if (elOffers) elOffers.textContent = offerCount;
  if (elDiscussions) elDiscussions.textContent = activeDiscussionCount;
  if (elScholarship) elScholarship.textContent = `$${totalScholarshipUSD.toLocaleString()}`;
  if (elRoadmapProgress) elRoadmapProgress.textContent = `${roadmapPct}% (${doneTasks}/${totalTasks})`;
  if (elRoadmapBar) elRoadmapBar.style.width = `${roadmapPct}%`;

  renderDashboardReminders();
  renderDashboardFunnel();

  // Upcoming Actions List
  const upcomingContainer = document.getElementById("dash-upcoming-actions");
  if (upcomingContainer) {
    // Sort by due date (soonest first); entries without a date go last
    const activeWithActions = pipeline
      .filter(p => p.nextAction && isActivePipeline(p))
      .sort((a, b) => {
        const da = daysUntil(a.nextActionDate), db = daysUntil(b.nextActionDate);
        if (da === null && db === null) return 0;
        if (da === null) return 1;
        if (db === null) return -1;
        return da - db;
      });
    if (activeWithActions.length === 0) {
      upcomingContainer.innerHTML = `
        <div class="p-6 text-center text-slate-400 bg-slate-800/50 rounded-xl border border-slate-700/60">
          <i data-lucide="check-circle" class="w-8 h-8 mx-auto mb-2 text-emerald-400"></i>
          <p>現在予定されている次のアクションはありません。「大学を探す」または「リクルート管理」から大学を追加してアクションを設定しましょう。</p>
        </div>
      `;
    } else {
      upcomingContainer.innerHTML = activeWithActions.map(p => {
        const college = colleges.find(c => c.id === p.collegeId) || { name: "Unknown College", division: "" };
        return `
          <div class="flex items-start justify-between p-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="calendar" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-white">${collegeNameLink(college)}</span>
                  <span class="px-2 py-0.5 text-xs rounded bg-sky-950 text-sky-300 border border-sky-800">${esc(college.division)}</span>
                  <span class="px-2 py-0.5 text-xs rounded bg-amber-950 text-amber-300 border border-amber-800 font-medium">${esc(p.status)}</span>
                </div>
                <p class="text-sm text-slate-200 mt-1 font-medium"><i data-lucide="arrow-right" class="w-3.5 h-3.5 inline mr-1 text-sky-400"></i>${esc(p.nextAction)}</p>
                ${p.notes ? `<p class="text-xs text-slate-400 mt-1 line-clamp-1">メモ: ${esc(p.notes)}</p>` : ''}
              </div>
            </div>
            <div class="text-right shrink-0">
              ${(() => { const b = dueBadge(daysUntil(p.nextActionDate)); return `<span class="text-xs px-2.5 py-1 rounded-full ${b.cls} font-medium" title="期日: ${esc(p.nextActionDate || '未定')}">${esc(p.nextActionDate || '期日未定')} (${esc(b.label)})</span>`; })()}
              <div class="mt-2 flex gap-1 justify-end">
                <button onclick="prepareEmailForCollege(${jsArg(p.collegeId)})" class="text-xs px-2 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded transition">
                  メール作成
                </button>
                <button onclick="openPipelineEditModal(${jsArg(p.id)})" class="text-xs px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition">
                  編集
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Active Offers Showcase
  const offersContainer = document.getElementById("dash-offers-showcase");
  if (offersContainer) {
    const offers = pipeline.filter(p => p.status === "Offer Received" || p.status === "Committed");
    if (offers.length === 0) {
      offersContainer.innerHTML = `
        <div class="p-6 text-center text-slate-400 bg-slate-800/50 rounded-xl border border-slate-700/60">
          <i data-lucide="award" class="w-8 h-8 mx-auto mb-2 text-amber-400"></i>
          <p>獲得オファーはまだありません。コーチへ映像を送付し、選考を進めましょう！</p>
        </div>
      `;
    } else {
      offersContainer.innerHTML = offers.map(o => {
        const college = colleges.find(c => c.id === o.collegeId) || { name: "University", location: "", division: "" };
        return `
          <div class="p-4 bg-gradient-to-r from-amber-950/40 via-slate-800 to-slate-800 border border-amber-600/40 rounded-xl flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                <i data-lucide="trophy" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-white text-base">${collegeNameLink(college)}</h4>
                  <span class="px-2 py-0.5 text-xs font-semibold rounded bg-amber-500 text-slate-950">${esc(o.status)}</span>
                </div>
                <p class="text-xs text-slate-400">${esc(college.location)} | ${esc(college.division)} | ${esc(college.conference || '')}</p>
                <p class="text-sm text-emerald-400 font-semibold mt-1">
                  提示内容: ${esc(o.offerType || '奨学金オファー')} ${o.offerAmountUSD ? `($${Number(o.offerAmountUSD).toLocaleString()}/年)` : ''}
                </p>
              </div>
            </div>
            <div class="text-right">
              <button onclick="switchTab('pipeline')" class="px-3 py-1.5 text-xs bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition">
                パイプラインで確認
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  lucide.createIcons();
}

// Reminder banner: overdue / due-soon actions and contacts that have gone quiet
function renderDashboardReminders() {
  const container = document.getElementById("dash-reminders");
  if (!container) return;

  const nameOf = p => (state.colleges.find(c => c.id === p.collegeId) || { name: "University" }).name;
  const active = state.pipeline.filter(isActivePipeline);

  const overdue = active.filter(p => p.nextAction && daysUntil(p.nextActionDate) !== null && daysUntil(p.nextActionDate) < 0);
  const soon = active.filter(p => p.nextAction && daysUntil(p.nextActionDate) !== null && daysUntil(p.nextActionDate) >= 0 && daysUntil(p.nextActionDate) <= UPCOMING_DAYS);
  // Contacted or later with no contact for STALE_CONTACT_DAYS+ days
  const stale = active.filter(p => {
    if (p.status === "Prospect" || !p.lastContactDate) return false;
    const d = daysUntil(p.lastContactDate);
    return d !== null && -d >= STALE_CONTACT_DAYS;
  });

  const rows = [];
  const addRows = (items, icon, cls, text) => items.forEach(p => rows.push(`
    <div class="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border ${cls} text-xs">
      <span class="flex items-center gap-2 min-w-0">
        <i data-lucide="${icon}" class="w-3.5 h-3.5 shrink-0"></i>
        <span class="font-bold truncate">${esc(nameOf(p))}</span>
        <span class="truncate">${esc(text(p))}</span>
      </span>
      <button onclick="openPipelineEditModal(${jsArg(p.id)})" class="px-2 py-0.5 rounded bg-slate-700/80 hover:bg-slate-600 text-slate-100 shrink-0">編集</button>
    </div>`));

  addRows(overdue, "alert-triangle", "bg-red-950/50 border-red-800 text-red-200", p => `期日超過 ${-daysUntil(p.nextActionDate)}日: ${p.nextAction}`);
  addRows(soon, "bell", "bg-amber-950/40 border-amber-800 text-amber-200", p => `${daysUntil(p.nextActionDate) === 0 ? "今日" : "あと" + daysUntil(p.nextActionDate) + "日"}: ${p.nextAction}`);
  addRows(stale, "clock", "bg-slate-800 border-slate-600 text-slate-200", p => `最終連絡から${-daysUntil(p.lastContactDate)}日経過 - フォローを検討`);

  if (rows.length === 0) {
    container.classList.add("hidden");
    container.innerHTML = "";
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = `
    <h3 class="text-sm font-bold text-white flex items-center gap-2">
      <i data-lucide="bell-ring" class="w-4 h-4 text-amber-400"></i> リマインダー
      <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-600/40">${rows.length}件</span>
    </h3>
    <div class="space-y-1.5">${rows.join("")}</div>`;
}

// Pipeline funnel: number of colleges at each stage
function renderDashboardFunnel() {
  const container = document.getElementById("dash-funnel");
  if (!container) return;
  const max = Math.max(1, ...PIPELINE_STATUSES.map(st => state.pipeline.filter(p => p.status === st.id).length));
  container.innerHTML = PIPELINE_STATUSES.map(st => {
    const n = state.pipeline.filter(p => p.status === st.id).length;
    return `
      <div class="flex items-center gap-3 text-xs">
        <span class="w-40 shrink-0 text-slate-300 truncate">${esc(st.label)}</span>
        <div class="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
          <div class="bg-sky-500 h-full" style="width:${Math.round((n / max) * 100)}%"></div>
        </div>
        <span class="w-6 text-right font-bold text-sky-300">${n}</span>
      </div>`;
  }).join("");
}

// ==========================================
// 2. ATHLETE PROFILE & RESUME
// ==========================================
function renderProfileTab() {
  const p = state.profile;
  renderProfileNotice();

  // Fill in form inputs
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("prof-fullNameEng", p.fullNameEng);
  setVal("prof-fullNameJp", p.fullNameJp);
  setVal("prof-gender", p.gender);
  setVal("prof-transferTerm", p.transferTerm);
  setVal("prof-gradYear", p.gradYear);
  setVal("prof-currentLevel", p.currentLevel);
  setVal("prof-creditsEarned", p.creditsEarned);
  setVal("prof-seasonsRemaining", p.seasonsRemaining);
  setVal("prof-dateOfBirth", p.dateOfBirth);
  setVal("prof-nationality", p.nationality);
  setVal("prof-currentTeam", p.currentTeam);
  setVal("prof-jerseyNumber", p.jerseyNumber);
  setVal("prof-primaryPosition", p.primaryPosition);
  setVal("prof-secondaryPosition", p.secondaryPosition);
  setVal("prof-dominantFoot", p.dominantFoot);
  setVal("prof-heightCm", p.heightCm);
  setVal("prof-weightKg", p.weightKg);
  setVal("prof-gpa", p.gpa);
  setVal("prof-toeflScore", p.toeflScore);
  setVal("prof-satScore", p.satScore);
  setVal("prof-duolingoScore", p.duolingoScore);
  setVal("prof-ncaaEligibilityId", p.ncaaEligibilityId);
  setVal("prof-naiaEligibilityId", p.naiaEligibilityId);
  setVal("prof-intendedMajor", p.intendedMajor);
  setVal("prof-highlightVideoUrl", p.highlightVideoUrl);
  setVal("prof-fullGameVideoUrl", p.fullGameVideoUrl);
  setVal("prof-athleticStats", p.athleticStats);
  setVal("prof-honors", p.honors);
  setVal("prof-personalBio", p.personalBio);
  setVal("prof-referenceCoach", p.referenceCoach);

  // Render Resume Preview Sheet
  renderResumePreview();
}

// Profile-only file backup: survives clearing the browser cache and can be loaded on another device.
function exportProfileFile() {
  if (!state.profileBypassed) syncProfileFromForm(true, false);
  if (state.profileBypassed || !hasProfile()) {
    showToast("保存できるプロフィールがありません。先にプロフィールを作成・適用してください", "error");
    return;
  }
  const payload = { type: "us-soccer-profile", version: 1, exportedAt: new Date().toISOString(), profile: state.profile };
  const safeName = String(state.profile.fullNameEng || state.profile.fullNameJp || "player").replace(/[^\w\-]+/g, "_");
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `US_Soccer_Profile_${safeName}_${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("プロフィールをファイルに保存しました。このファイルは安全な場所に保管してください");
}

// Load a profile file (profile-only file or a full backup JSON) and make it the saved profile on this device
function importProfileFile(event) {
  const input = event.target;
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
      const named = (p) => isObj(p) && !!(String(p.fullNameEng || "").trim() || String(p.fullNameJp || "").trim());
      const prof = isObj(data) && named(data.profile) ? data.profile : null;
      if (!prof) throw new Error("No profile in file");
      if (named(readStored(STORAGE_KEYS.PROFILE)) && !confirm("この端末に保存されているプロフィールを、ファイルの内容で上書きします。よろしいですか？")) return;
      state.profileBypassed = false;
      state.profile = { ...cloneData(DEFAULT_ATHLETE_PROFILE), ...prof };
      saveState("profile");
      renderAll();
      closeProfileCheck(null);
      showToast("プロフィールをファイルから読み込みました");
    } catch (err) {
      console.error("Profile import failed:", err);
      showToast("プロフィールを読み込めませんでした。プロフィール用ファイル、またはバックアップJSONを選んでください", "error");
    } finally {
      input.value = "";
    }
  };
  reader.readAsText(file);
}

function syncProfileFromForm(shouldSave = true, showNotification = false) {
  // Browsing without the profile: the form must not touch the saved profile
  if (state.profileBypassed) {
    if (showNotification) showToast("「プロフィール未適用」モードのため保存されません。先に保存済みプロフィールを適用してください", "error");
    return;
  }
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  const wasCreated = hasProfile();
  state.profile = {
    fullNameEng: getVal("prof-fullNameEng"),
    fullNameJp: getVal("prof-fullNameJp") || "",
    gender: getVal("prof-gender") || "Men",
    transferTerm: getVal("prof-transferTerm") || "Fall 2027",
    gradYear: getVal("prof-gradYear") || "2029",
    currentLevel: getVal("prof-currentLevel"),
    creditsEarned: getVal("prof-creditsEarned"),
    seasonsRemaining: getVal("prof-seasonsRemaining") || "2",
    dateOfBirth: getVal("prof-dateOfBirth"),
    nationality: getVal("prof-nationality") || "Japan",
    currentTeam: getVal("prof-currentTeam"),
    jerseyNumber: getVal("prof-jerseyNumber"),
    primaryPosition: getVal("prof-primaryPosition"),
    secondaryPosition: getVal("prof-secondaryPosition"),
    dominantFoot: getVal("prof-dominantFoot"),
    heightCm: getVal("prof-heightCm"),
    weightKg: getVal("prof-weightKg"),
    gpa: getVal("prof-gpa"),
    toeflScore: getVal("prof-toeflScore"),
    satScore: getVal("prof-satScore"),
    duolingoScore: getVal("prof-duolingoScore"),
    ncaaEligibilityId: getVal("prof-ncaaEligibilityId"),
    naiaEligibilityId: getVal("prof-naiaEligibilityId"),
    intendedMajor: getVal("prof-intendedMajor"),
    highlightVideoUrl: getVal("prof-highlightVideoUrl"),
    fullGameVideoUrl: getVal("prof-fullGameVideoUrl"),
    athleticStats: getVal("prof-athleticStats"),
    honors: getVal("prof-honors"),
    personalBio: getVal("prof-personalBio"),
    referenceCoach: getVal("prof-referenceCoach")
  };

  if (shouldSave) {
    saveState("profile");
  }
  renderProfileHeader();
  renderResumePreview();
  // Refresh the notice only when the created/empty state flips, so typing never re-renders the banner
  if (wasCreated !== hasProfile()) {
    renderProfileNotice();
    lucide.createIcons();
  }

  if (showNotification) {
    showToast("プロフィールを保存しました！");
  }
}

function saveProfileFromForm() {
  syncProfileFromForm(true, true);
}

function renderResumePreview() {
  const preview = document.getElementById("resume-sheet-preview");
  if (!preview) return;
  const p = state.profile;

  preview.innerHTML = `
    <div class="bg-white text-slate-900 p-8 rounded-xl shadow-xl max-w-4xl mx-auto border border-slate-300 font-sans printable-resume">
      <!-- Resume Header -->
      <div class="border-b-4 border-sky-900 pb-4 flex items-start justify-between">
        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-extrabold text-sky-950 uppercase tracking-tight">${esc(p.fullNameEng || "Your Name")}</h1>
            ${p.fullNameJp ? `<span class="text-lg text-slate-500 font-medium">(${esc(p.fullNameJp)})</span>` : ""}
          </div>
          <p class="text-sky-700 font-bold text-lg mt-0.5">
            Transfer Candidate (Rising Junior) - ${esc(p.transferTerm || '-')} | #${esc(p.jerseyNumber || '--')} | ${esc(p.primaryPosition)}
          </p>
          <p class="text-slate-600 text-sm mt-1">
            <strong>Current School:</strong> ${esc(p.currentTeam || 'N/A')}${p.currentLevel ? ` (${esc(p.currentLevel)})` : ''} | <strong>Country:</strong> ${esc(p.nationality)}
          </p>
          <p class="text-slate-600 text-xs mt-0.5">
            <strong>Expected Graduation:</strong> ${esc(p.gradYear || '-')} | <strong>Eligibility Remaining:</strong> ${esc(p.seasonsRemaining || '-')} season(s) | <strong>Credits Earned:</strong> ${esc(p.creditsEarned || '-')}
          </p>
        </div>
        <div class="text-right bg-sky-50 border border-sky-200 p-3 rounded-lg">
          <p class="text-xs uppercase tracking-wider font-bold text-sky-900">NCAA Eligibility ID</p>
          <p class="text-lg font-black text-sky-700 tracking-wide">${esc(p.ncaaEligibilityId || 'PENDING')}</p>
          ${p.naiaEligibilityId ? `<p class="text-xs text-slate-600 mt-0.5">NAIA ID: <strong>${esc(p.naiaEligibilityId)}</strong></p>` : ''}
        </div>
      </div>

      <!-- Key Metrics Strip -->
      <div class="grid grid-cols-4 gap-3 my-4 bg-slate-100 p-3 rounded-lg text-center border border-slate-200">
        <div>
          <span class="text-xs uppercase text-slate-700 font-bold block">Height / Weight</span>
          <span class="text-sm font-extrabold text-slate-800">${esc(p.heightCm)} cm / ${esc(p.weightKg)} kg</span>
        </div>
        <div>
          <span class="text-xs uppercase text-slate-700 font-bold block">Dominant Foot</span>
          <span class="text-sm font-extrabold text-slate-800">${esc(p.dominantFoot)}</span>
        </div>
        <div>
          <span class="text-xs uppercase text-slate-700 font-bold block">College GPA</span>
          <span class="text-sm font-extrabold text-sky-700">${esc(p.gpa)} / 4.0</span>
        </div>
        <div>
          <span class="text-xs uppercase text-slate-700 font-bold block">English Test</span>
          <span class="text-sm font-extrabold text-emerald-700">TOEFL ${esc(p.toeflScore || '--')} / Duolingo ${esc(p.duolingoScore || '--')}</span>
        </div>
      </div>

      <!-- Main Body 2-Columns -->
      <div class="grid grid-cols-3 gap-6 mt-4">
        <!-- Left Column: Athletic & Stats -->
        <div class="col-span-2 space-y-4">
          <!-- Athletic Profile -->
          <div>
            <h3 class="text-sm font-black uppercase tracking-wider text-sky-950 border-b-2 border-sky-800 pb-1 mb-2 flex items-center gap-1.5">
              ⚽ Athletic Overview & Positions
            </h3>
            <p class="text-sm text-slate-700 leading-relaxed">${esc(p.personalBio || 'Dedicated and tactical collegiate prospect.')}</p>
            <div class="mt-2 text-xs text-slate-600 space-y-1">
              <p>• <strong>Primary Position:</strong> ${esc(p.primaryPosition)}</p>
              <p>• <strong>Secondary Position:</strong> ${esc(p.secondaryPosition || 'N/A')}</p>
              <p>• <strong>Physical / Testing:</strong> ${esc(p.athleticStats || 'N/A')}</p>
            </div>
          </div>

          <!-- Video Links -->
          <div class="bg-amber-50 border border-amber-300 p-3 rounded-lg">
            <h3 class="text-xs font-black uppercase text-amber-900 mb-1.5 flex items-center gap-1">
              🎥 Video Highlights & Game Footage
            </h3>
            <div class="space-y-1 text-xs">
              <p class="text-slate-800">
                <strong>Highlight Reel:</strong> 
                <a href="${esc(safeUrl(p.highlightVideoUrl))}" target="_blank" rel="noopener noreferrer" class="text-sky-700 underline font-medium break-all">${esc(p.highlightVideoUrl || 'No video link added')}</a>
              </p>
              ${p.fullGameVideoUrl ? `
                <p class="text-slate-800">
                  <strong>Full Match Footage:</strong> 
                  <a href="${esc(safeUrl(p.fullGameVideoUrl))}" target="_blank" rel="noopener noreferrer" class="text-sky-700 underline font-medium break-all">${esc(p.fullGameVideoUrl)}</a>
                </p>
              ` : ''}
            </div>
          </div>

          <!-- Honors & Achievements -->
          <div>
            <h3 class="text-sm font-black uppercase tracking-wider text-sky-950 border-b-2 border-sky-800 pb-1 mb-2">
              🏆 Honors & Major Tournament Records
            </h3>
            <p class="text-xs text-slate-800 whitespace-pre-line leading-relaxed font-medium bg-slate-50 p-2.5 rounded border border-slate-200">
              ${esc(p.honors || 'No honors listed')}
            </p>
          </div>
        </div>

        <!-- Right Column: Academic & References -->
        <div class="space-y-4">
          <!-- Academic Information -->
          <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <h3 class="text-xs font-black uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              🎓 Academic Profile
            </h3>
            <ul class="text-xs text-slate-700 space-y-1.5">
              <li><strong>Cumulative GPA:</strong> ${esc(p.gpa)} / 4.0</li>
              <li><strong>TOEFL iBT:</strong> ${esc(p.toeflScore || 'N/A')}</li>
              <li><strong>Duolingo Score:</strong> ${esc(p.duolingoScore || 'N/A')}</li>
              <li><strong>SAT Score:</strong> ${esc(p.satScore || 'N/A')}</li>
              <li><strong>Intended Major:</strong> ${esc(p.intendedMajor || 'Undecided')}</li>
            </ul>
          </div>

          <!-- References -->
          <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <h3 class="text-xs font-black uppercase tracking-wider text-sky-950 border-b border-slate-300 pb-1 mb-2">
              📞 Coach References
            </h3>
            <p class="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
              ${esc(p.referenceCoach || 'Available upon request.')}
            </p>
          </div>

          <!-- Official Stamp box -->
          <div class="p-3 border-2 border-dashed border-sky-300 rounded-lg text-center text-xs text-slate-500">
            <span class="font-bold text-sky-900 block">USA College Recruit Ready</span>
            Verified Student-Athlete Profile
          </div>
        </div>
      </div>
    </div>
  `;
}

function printResumeSheet() {
  window.print();
}

// Financial risk (1 = no flag, 2 = caution, 3 = high caution). Derived from public IPEDS finance data (private non-profits only);
// it is a screening aid, not a forecast of closure. Colleges without data (public, community colleges) have no rating.
const FIN_RISK_LABEL = { 1: "財務:指標上は問題なし", 2: "⚠ 財務リスク:注意", 3: "⚠ 財務リスク:要注意" };

function financialRiskBadge(col) {
  const lv = col.financialRisk;
  if (lv !== 2 && lv !== 3) return "";
  const cls = lv === 3 ? "bg-red-950 text-red-300 border-red-500" : "bg-amber-950 text-amber-300 border-amber-600";
  return `<span class="px-2 py-0.5 text-xs font-bold rounded border ${cls}" title="${esc(col.financialNote || "")}">${FIN_RISK_LABEL[lv]}</span>`;
}

function financialRiskDetail(col) {
  const lv = col.financialRisk;
  if (lv !== 2 && lv !== 3) return "";
  const cls = lv === 3 ? "bg-red-950/40 border-red-500/60 text-red-200" : "bg-amber-950/30 border-amber-600/50 text-amber-200";
  return `<div class="my-2.5 px-3 py-1.5 ${cls} border rounded-xl text-[11px] leading-relaxed">
    <span class="font-bold">${FIN_RISK_LABEL[lv]}</span>
    <span class="block opacity-90">${esc(col.financialNote || "")}</span>
  </div>`;
}

// ==========================================
// 3. UNIVERSITY EXPLORER & DATABASE
// ==========================================
function renderExplorer() {
  const container = document.getElementById("colleges-grid");
  if (!container) return;

  renderCompareBar();
  const { division, region, strength, finRisk, gender, search, sort } = state.filters;

  const filtered = state.colleges.filter(col => {
    if (division !== "ALL" && col.division !== division) return false;
    if (region !== "ALL" && col.region !== region) return false;
    if (strength === "NONE") {
      if (Number.isFinite(col.strengthLevel)) return false;
    } else if (strength !== "ALL") {
      // "N" = N以上, "maxN" = N以下. Colleges without a strength rating are excluded.
      if (!Number.isFinite(col.strengthLevel)) return false;
      if (strength.startsWith("max")) {
        if (col.strengthLevel > Number(strength.slice(3))) return false;
      } else if (col.strengthLevel < Number(strength)) {
        return false;
      }
    }
    if (finRisk !== "ALL") {
      const lv = Number.isFinite(col.financialRisk) ? col.financialRisk : null;
      if (finRisk === "NONE") { if (lv !== null) return false; }
      else if (finRisk === "HIDE") { if (lv !== null && lv >= 2) return false; }
      else if (lv === null || lv < Number(finRisk)) return false;
    }
    if (gender !== "ALL" && col.gender !== gender) return false;
    if (search) {
      const q = search.toLowerCase();
      const inName = col.name.toLowerCase().includes(q);
      const inState = col.state.toLowerCase().includes(q) || col.location.toLowerCase().includes(q);
      const inCoach = (col.headCoach || "").toLowerCase().includes(q);
      const inConf = (col.conference || "").toLowerCase().includes(q);
      const inNotes = (col.notes || "").toLowerCase().includes(q);
      if (!inName && !inState && !inCoach && !inConf && !inNotes) return false;
    }
    return true;
  });

  // Cost sort: the chosen cost ascending/descending; colleges with no tuition on file (0 / missing) always go last
  const costSort = {
    TUITION_ASC: { cost: c => c.annualTuitionUSD, dir: 1 },
    TUITION_DESC: { cost: c => c.annualTuitionUSD, dir: -1 },
    TOTAL_ASC: { cost: c => c.annualTuitionUSD + (c.roomAndBoardUSD || 0), dir: 1 },
    TOTAL_DESC: { cost: c => c.annualTuitionUSD + (c.roomAndBoardUSD || 0), dir: -1 }
  }[sort];
  if (costSort) {
    const known = c => Number.isFinite(c.annualTuitionUSD) && c.annualTuitionUSD > 0;
    filtered.sort((a, b) => {
      if (known(a) !== known(b)) return known(a) ? -1 : 1;
      if (known(a)) {
        const diff = (costSort.cost(a) - costSort.cost(b)) * costSort.dir;
        if (diff !== 0) return diff;
      }
      return a.name.localeCompare(b.name);
    });
  }

  // Default sort: Pipeline colleges come first (prioritized by recruiting stage), then alphabetical
  if (!costSort) filtered.sort((a, b) => {
    const aPipe = state.pipeline.find(p => p.collegeId === a.id);
    const bPipe = state.pipeline.find(p => p.collegeId === b.id);

    // 1. Pipeline items always come first
    if (aPipe && !bPipe) return -1;
    if (!aPipe && bPipe) return 1;

    // 2. If both are in pipeline, sort by pipeline progress priority
    if (aPipe && bPipe) {
      const statusPriority = {
        "Committed": 1,
        "Offer Received": 2,
        "In Discussion": 3,
        "ID Camp / Visit": 4,
        "Contacted": 5,
        "Prospect": 6,
        "Closed": 7
      };
      const diff = (statusPriority[aPipe.status] || 99) - (statusPriority[bPipe.status] || 99);
      if (diff !== 0) return diff;
    }

    // 3. Fallback to name alphabetical
    return a.name.localeCompare(b.name);
  });

  const pipelineCountInFiltered = filtered.filter(c => state.pipeline.some(p => p.collegeId === c.id)).length;
  const countEl = document.getElementById("explorer-match-count");
  if (countEl) {
    countEl.innerHTML = `${filtered.length} 校がヒット ${
      pipelineCountInFiltered > 0
        ? `<span class="ml-1.5 px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold text-[10px]">⭐ パイプライン中 ${pipelineCountInFiltered} 校${costSort ? "" : "を先頭表示"}</span>`
        : ''
    }`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-12 text-center text-slate-400 bg-slate-800/40 rounded-2xl border border-slate-700/60">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
        <h4 class="text-lg font-bold text-slate-200">該当する大学が見つかりませんでした</h4>
        <p class="text-sm mt-1">フィルター条件を変更するか、右上の「＋大学を新規登録」から追加してください。</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(col => {
    const inPipeline = state.pipeline.find(p => p.collegeId === col.id);
    const divColor = col.division.includes("D1") ? "bg-amber-950 text-amber-300 border-amber-700" :
                     col.division.includes("D2") ? "bg-emerald-950 text-emerald-300 border-emerald-700" :
                     col.division.includes("D3") ? "bg-indigo-950 text-indigo-300 border-indigo-700" :
                     col.division.includes("NAIA") ? "bg-purple-950 text-purple-300 border-purple-700" :
                     "bg-teal-950 text-teal-300 border-teal-700";

    const cardBorderClass = inPipeline
      ? "bg-gradient-to-b from-sky-950/40 via-slate-800 to-slate-800/90 border-sky-500/80 hover:border-sky-400 shadow-xl ring-1 ring-sky-500/40"
      : "bg-slate-800/90 hover:bg-slate-800 border-slate-700 hover:border-sky-500/60 shadow-lg";

    const pipeStatusBadge = inPipeline ? `
      <span class="px-2.5 py-0.5 text-[11px] font-black rounded-full border bg-sky-500/20 text-sky-300 border-sky-400 flex items-center gap-1 shadow animate-pulse">
        <i data-lucide="bookmark-check" class="w-3.5 h-3.5 text-sky-300"></i> ${esc(inPipeline.status)}
      </span>
    ` : '';

    return `
      <div class="${cardBorderClass} border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group">
        <div>
          <!-- Top Tag Bar -->
          <div class="flex flex-wrap items-center justify-between gap-1.5 mb-2">
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 text-xs font-bold rounded-full border ${divColor}">
                ${esc(col.division)}
              </span>
              ${pipeStatusBadge}
            </div>
            <div class="flex items-center gap-1.5">
              ${financialRiskBadge(col)}
              <span class="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">${esc(col.gender)}</span>
              <span class="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">${esc(col.region)} (${esc(col.state)})</span>
            </div>
          </div>

          <!-- College Name & Conference -->
          <h3 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            ${collegeNameLink(col)}
          </h3>
          <p class="text-xs text-slate-400 mt-0.5 font-medium">${esc(col.location)} | ${esc(col.conference || 'Independent')}</p>

          <!-- Key Specs Grid -->
          <div class="grid grid-cols-2 gap-2 my-3 p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <span class="text-slate-500 block">Head Coach</span>
              <span class="font-semibold text-slate-200 truncate block">${esc(col.headCoach || 'Staff')}</span>
            </div>
            <div>
              <span class="text-slate-500 block">Estimated Tuition</span>
              <span class="font-semibold text-emerald-400">${col.annualTuitionUSD ? "$" + col.annualTuitionUSD.toLocaleString() + "/yr" : "要確認"}</span>
            </div>
            <div>
              <span class="text-slate-500 block">Room &amp; Board (寮費・食費)</span>
              <span class="font-semibold text-emerald-400">${col.roomAndBoardUSD ? "$" + col.roomAndBoardUSD.toLocaleString() + "/yr" : "要確認"}</span>
            </div>
            <div>
              <span class="text-slate-500 block">学費＋寮費 合計</span>
              <span class="font-semibold text-emerald-300">${col.annualTuitionUSD ? "$" + (col.annualTuitionUSD + (col.roomAndBoardUSD || 0)).toLocaleString() + "/yr" + (col.roomAndBoardUSD ? "" : " <span class=\"text-slate-500 font-normal\">(寮費除く)</span>") : "要確認"}</span>
            </div>
            <div>
              <span class="text-slate-500 block">Target GPA / TOEFL</span>
              <span class="font-semibold text-slate-200">GPA ${esc(col.targetGPA || '-')} | TOEFL ${esc(col.minTOEFL || '-')}</span>
            </div>
            <div>
              <span class="text-slate-500 block">留学生比率 / 受入度</span>
              <span class="font-semibold text-sky-400">${esc(col.intlFriendlyRating)} (${esc(col.intlRosterPct || '-')})</span>
            </div>
            <div class="col-span-2">
              <span class="text-slate-500 block">強度 (強豪度)</span>
              <span class="font-semibold text-amber-300" ${col.strengthNote ? `title="${esc(col.strengthNote)}"` : ""}>${Number.isFinite(col.strengthLevel)
                ? `${"★".repeat(col.strengthLevel)}${"☆".repeat(Math.max(0, 5 - col.strengthLevel))} <span class="text-slate-400 font-normal">${esc(col.strengthNote || "")}</span>`
                : `<span class="text-slate-500 font-normal">未評価</span>`}</span>
            </div>
            <div class="col-span-2">
              <span class="text-slate-500 block">MF選手数 / 比率 (公式ロスター)</span>
              <span class="font-semibold text-violet-300">${(() => { const mi = mfInfo(col); return mi ? "MF " + mi.mf + "名 / 全" + mi.total + "名 (" + mi.pct + "%)" : "不明"; })()}</span>
            </div>
            ${col.fwStats ? `
            <div>
              <span class="text-slate-500 block">日本人比率</span>
              <span class="font-semibold text-rose-300">${esc(col.japanesePct || '-')}</span>
            </div>
            <div>
              <span class="text-slate-500 block">FW選手数 / 比率</span>
              <span class="font-semibold text-violet-300">${esc(col.fwStats)}</span>
            </div>` : ""}
          </div>

          ${financialRiskDetail(col)}
          <!-- Japanese Players & Alumni Strip -->
          <div class="my-2.5 px-3 py-1.5 ${hasJapanesePlayers(col) ? 'bg-red-950/40 border-red-500/50' : 'bg-amber-950/30 border-amber-600/30'} border rounded-xl flex items-center justify-between text-xs">
            <span class="${hasJapanesePlayers(col) ? 'text-red-400' : 'text-amber-400'} font-bold flex items-center gap-1.5">
              <span>🇯🇵</span> 日本人選手:
            </span>
            <span class="font-bold text-amber-100 truncate max-w-[210px] text-[11px]" title="${esc(col.japanesePlayers || col.japaneseRosterInfo || '')}">
              ${esc(col.japanesePlayers || col.japaneseRosterInfo || '受入実績あり / 門戸開放')}
            </span>
          </div>

          <!-- Notes / Strengths -->
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            ${esc(col.notes || '')}
          </p>

          <!-- Tags -->
          ${col.tags && col.tags.length > 0 ? `
            <div class="flex flex-wrap gap-1 mt-2.5">
              ${col.tags.map(t => `<span class="text-[10px] px-2 py-0.5 bg-slate-700/60 text-slate-300 rounded">${esc(t)}</span>`).join("")}
            </div>
          ` : ''}
        </div>

        <!-- Actions Footer -->
        <div class="pt-3 mt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-1.5">
            <button onclick="openCollegeDetailModal(${jsArg(col.id)})" class="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-700/80 hover:bg-slate-700 rounded-lg transition flex items-center gap-1">
              <i data-lucide="info" class="w-3.5 h-3.5"></i> 詳細
            </button>
            <button onclick="toggleCompare(${jsArg(col.id)})" aria-pressed="${state.compareIds.includes(col.id)}" class="px-2 py-1.5 text-[11px] font-semibold rounded-lg border transition flex items-center gap-1 ${state.compareIds.includes(col.id) ? 'bg-violet-600 text-white border-violet-400' : 'text-violet-300 hover:text-white bg-violet-950/60 hover:bg-violet-800 border-violet-700/60'}" title="比較リストに追加/解除（最大${COMPARE_MAX}校）">
              <i data-lucide="columns" class="w-3 h-3"></i> ${state.compareIds.includes(col.id) ? '比較中' : '比較'}
            </button>
            ${col.questionnaireUrl ? `
              <a href="${esc(col.questionnaireUrl)}" target="_blank" rel="noopener noreferrer" class="px-2 py-1.5 text-[11px] font-semibold text-amber-300 hover:text-white bg-amber-950/60 hover:bg-amber-800 border border-amber-600/50 rounded-lg transition flex items-center gap-1" title="オンライン質問票を開く">
                <i data-lucide="file-text" class="w-3 h-3"></i> 質問票
              </a>
            ` : ''}
            ${col.campUrl ? `
              <a href="${esc(col.campUrl)}" target="_blank" rel="noopener noreferrer" class="px-2 py-1.5 text-[11px] font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-800 border border-emerald-600/50 rounded-lg transition flex items-center gap-1" title="公式IDキャンプHPを開く">
                <i data-lucide="compass" class="w-3 h-3"></i> キャンプ
              </a>
            ` : ''}
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="prepareEmailForCollege(${jsArg(col.id)})" class="px-2.5 py-1.5 text-xs font-medium text-sky-300 hover:text-white bg-sky-950 hover:bg-sky-700 border border-sky-700 rounded-lg transition flex items-center gap-1" title="この大学向けにメールを作成">
              <i data-lucide="mail" class="w-3.5 h-3.5"></i>
            </button>
            ${inPipeline ? `
              <button onclick="switchTab('pipeline')" class="px-2.5 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/80 rounded-lg flex items-center gap-1">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> 管理中
              </button>
            ` : `
              <button onclick="addToPipelinePrompt(${jsArg(col.id)})" class="px-2.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition shadow flex items-center gap-1">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i> 追加
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// ==========================================
// College comparison (up to COMPARE_MAX colleges side by side)
// ==========================================
function toggleCompare(collegeId) {
  const idx = state.compareIds.indexOf(collegeId);
  if (idx >= 0) {
    state.compareIds.splice(idx, 1);
  } else if (state.compareIds.length >= COMPARE_MAX) {
    showToast(`比較できるのは最大${COMPARE_MAX}校までです`, "error");
    return;
  } else {
    state.compareIds.push(collegeId);
  }
  renderExplorer();
}

function clearCompare() {
  state.compareIds = [];
  closeCompareModal();
  renderExplorer();
}

// Floating bar shown while at least one college is selected for comparison
function renderCompareBar() {
  const bar = document.getElementById("compare-bar");
  if (!bar) return;
  // Drop ids of colleges that no longer exist
  state.compareIds = state.compareIds.filter(id => state.colleges.some(c => c.id === id));
  if (state.compareIds.length === 0) {
    bar.classList.add("hidden");
    return;
  }
  bar.classList.remove("hidden");
  const names = state.compareIds.map(id => {
    const c = state.colleges.find(x => x.id === id);
    return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-violet-900/60 border border-violet-700 text-violet-100 text-xs">${esc(c.name)}
      <button onclick="toggleCompare(${jsArg(id)})" aria-label="${esc(c.name)}を比較から外す" class="hover:text-white">×</button></span>`;
  }).join("");
  bar.innerHTML = `
    <div class="flex flex-wrap items-center gap-2 min-w-0">
      <span class="text-xs font-bold text-white">比較 (${state.compareIds.length}/${COMPARE_MAX})</span>${names}
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <button onclick="clearCompare()" class="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg">クリア</button>
      <button onclick="openCompareModal()" ${state.compareIds.length < 2 ? "disabled" : ""} class="px-3 py-1.5 text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed">比較する</button>
    </div>`;
}

function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) modal.classList.add("hidden");
}

function openCompareModal() {
  const cols = state.compareIds.map(id => state.colleges.find(c => c.id === id)).filter(Boolean);
  const modal = document.getElementById("compare-modal");
  const content = document.getElementById("compare-content");
  if (!modal || !content || cols.length < 2) return;

  const num = v => (typeof v === "number" && isFinite(v) ? v : null);
  const totalCost = c => (num(c.annualTuitionUSD) !== null ? c.annualTuitionUSD + (num(c.roomAndBoardUSD) || 0) : null);
  const money = v => (v === null ? "要確認" : "$" + v.toLocaleString());

  // Each row: label, display text per college, optional numeric value per college and which direction is "better"
  const rows = [
    { label: "ディビジョン", text: c => c.division },
    { label: "財務リスク", text: c => (c.financialRisk === 3 ? "⚠ 要注意" : c.financialRisk === 2 ? "⚠ 注意" : c.financialRisk === 1 ? "指標上は問題なし" : "未評価") },
    { label: "カンファレンス", text: c => c.conference || "Independent" },
    { label: "所在地", text: c => `${c.location} (${c.region})` },
    { label: "ヘッドコーチ", text: c => c.headCoach || "-" },
    { label: "強豪度 (★5段階)", text: c => (num(c.strengthLevel) !== null ? "★".repeat(c.strengthLevel) + "☆".repeat(Math.max(0, 5 - c.strengthLevel)) : "-"), val: c => num(c.strengthLevel), best: "max" },
    { label: "年間学費", text: c => money(num(c.annualTuitionUSD)), val: c => num(c.annualTuitionUSD), best: "min" },
    { label: "寮費・食費", text: c => money(num(c.roomAndBoardUSD)), val: c => num(c.roomAndBoardUSD), best: "min" },
    { label: "年間総額 (学費+寮費)", text: c => money(totalCost(c)), val: totalCost, best: "min" },
    { label: "奨学金枠", text: c => c.scholarshipMax || "-" },
    { label: "目安GPA", text: c => (c.targetGPA ?? "-"), val: c => num(c.targetGPA), best: "min" },
    { label: "最低TOEFL", text: c => (c.minTOEFL ?? "-"), val: c => num(c.minTOEFL), best: "min" },
    { label: "留学生受入度", text: c => `${c.intlFriendlyRating || "-"} (${c.intlRosterPct || "-"})` },
    { label: "日本人選手", text: c => c.japanesePlayers || c.japaneseRosterInfo || "-" },
    { label: "MF選手数 / 比率", text: c => { const mi = mfInfo(c); return mi ? `MF ${mi.mf}名 / 全${mi.total}名 (${mi.pct}%)` : "不明"; } },
    { label: "管理ステータス", text: c => (state.pipeline.find(p => p.collegeId === c.id) || {}).status || "未登録" }
  ];

  const bestIdx = row => {
    if (!row.val) return -1;
    const vals = cols.map(row.val);
    const valid = vals.filter(v => v !== null);
    if (valid.length < 2 || new Set(valid).size === 1) return [];
    const target = row.best === "max" ? Math.max(...valid) : Math.min(...valid);
    return vals.map((v, i) => (v === target ? i : -1)).filter(i => i >= 0);
  };

  content.innerHTML = `
    <h3 class="text-lg font-bold text-white mb-1 flex items-center gap-2"><i data-lucide="columns" class="w-5 h-5 text-violet-400"></i> 大学比較</h3>
    <p class="text-xs text-slate-400 mb-3">緑ハイライトは各項目で最も有利な値（学費・GPA・TOEFLは低い方、強豪度は高い方）。</p>
    <div class="overflow-x-auto custom-scrollbar">
      <table class="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th class="text-left p-2 text-slate-400 font-semibold sticky left-0 bg-slate-900"></th>
            ${cols.map(c => `<th class="text-left p-2 text-white font-bold min-w-[160px] align-top">${collegeNameLink(c)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => {
            const best = bestIdx(row);
            return `<tr class="border-t border-slate-800">
              <td class="p-2 text-slate-400 font-semibold sticky left-0 bg-slate-900 whitespace-nowrap">${esc(row.label)}</td>
              ${cols.map((c, i) => `<td class="p-2 ${Array.isArray(best) && best.includes(i) ? "text-emerald-300 font-bold bg-emerald-950/30" : "text-slate-200"}">${esc(row.text(c))}</td>`).join("")}
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>`;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

// College Detail Modal
function openCollegeDetailModal(collegeId) {
  const col = state.colleges.find(c => c.id === collegeId);
  if (!col) return;
  const inPipeline = state.pipeline.find(p => p.collegeId === collegeId);

  const modal = document.getElementById("college-detail-modal");
  const content = document.getElementById("college-detail-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-5" id="modal-view-mode">
      <div class="border-b border-slate-700 pb-3 flex items-start justify-between">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 text-xs font-bold rounded bg-sky-950 text-sky-300 border border-sky-800">${esc(col.division)}</span>
            <span class="text-xs text-slate-400">${esc(col.gender)} Soccer</span>
            ${inPipeline ? `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-950 text-emerald-300 border border-emerald-700">★ パイプライン管理中 (${esc(inPipeline.status)})</span>` : ''}
          </div>
          <h2 class="text-2xl font-bold text-white mt-1">${collegeNameLink(col)}</h2>
          <p class="text-sm text-slate-300">${esc(col.location)} | ${esc(col.conference || 'Independent')}</p>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-400 block">Annual Tuition</span>
          <span class="text-xl font-black text-emerald-400">${col.annualTuitionUSD ? "$" + col.annualTuitionUSD.toLocaleString() : "要確認"}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700 space-y-1.5">
          <span class="text-xs font-bold text-slate-400 uppercase">Coaching Staff (HC & CC)</span>
          <div>
            <span class="text-[10px] text-slate-400 block font-semibold">Head Coach (To):</span>
            <p class="font-semibold text-white text-xs">${esc(col.headCoach || 'Head Coach')}${col.coachVerified ? ' <span class="ml-1 px-1.5 py-0.5 text-[9px] rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold align-middle">公式サイト確認済</span>' : ' <span class="ml-1 px-1.5 py-0.5 text-[9px] rounded bg-amber-950 text-amber-300 border border-amber-700 font-bold align-middle">要確認</span>'}</p>
            <p class="text-xs text-sky-400 break-all"><i data-lucide="mail" class="w-3 h-3 inline mr-1"></i>${esc(col.coachEmail || 'Not Listed')}</p>
          </div>
          <div class="pt-1 border-t border-slate-700/60">
            <span class="text-[10px] text-indigo-300 block font-semibold">Assistant Coach (CC):</span>
            <p class="font-medium text-slate-200 text-xs">${esc(col.assistantCoach || 'Recruiting Coordinator')}</p>
            <p class="text-xs text-indigo-300 break-all"><i data-lucide="mail" class="w-3 h-3 inline mr-1"></i>${esc(col.assistantCoachEmail || 'Not Listed')}</p>
          </div>
        </div>
        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
          <span class="text-xs font-bold text-slate-400 uppercase">Academic & Admission</span>
          <p class="text-xs text-slate-300">• Target GPA: <strong class="text-white">${esc(col.targetGPA || '3.2')}</strong></p>
          <p class="text-xs text-slate-300">• Min TOEFL: <strong class="text-white">${esc(col.minTOEFL || '80')}</strong></p>
          <p class="text-xs text-slate-300">• Room & Board: <strong class="text-white">${col.roomAndBoardUSD ? "$" + col.roomAndBoardUSD.toLocaleString() : "要確認"}</strong></p>
        </div>
      </div>

      <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-sm space-y-1">
        <span class="text-xs font-bold text-amber-400 uppercase">Scholarship Framework & Roster</span>
        <p class="text-xs text-slate-200">${esc(col.scholarshipMax || 'Max 28 (Roster Limit: 28 / 新ルール)')}</p>
        <p class="text-xs text-slate-400 mt-1">留学生比率: <strong class="text-slate-200">${esc(col.intlRosterPct || '35%')}</strong> | <span class="text-sky-300">${esc(col.rosterStats || col.intlFriendlyRating || 'High')}</span></p>
        <p class="text-xs text-slate-400 mt-1">MF比率: <strong class="text-violet-300">${(() => { const mi = mfInfo(col); return mi ? "MF " + mi.mf + "名 / 全" + mi.total + "名 (" + mi.pct + "%)" : "不明"; })()}</strong></p>
        ${col.fwStats ? `<p class="text-xs text-slate-400 mt-1">FW比率: <strong class="text-violet-300">${esc(col.fwStats)}</strong> | 日本人比率: <strong class="text-rose-300">${esc(col.japanesePct || '-')}</strong></p>` : ""}
      </div>

      <!-- Japanese Player History & Recruiting Intel -->
      <div class="p-3.5 bg-gradient-to-r ${hasJapanesePlayers(col) ? 'from-red-950/40 via-amber-950/30 to-slate-900 border-red-500/60' : 'from-amber-950/40 to-slate-900 border-amber-500/50'} rounded-xl border text-xs space-y-1.5 shadow-md">
        <div class="flex items-center justify-between">
          <span class="font-extrabold text-amber-300 flex items-center gap-1.5 uppercase text-xs">
            <span class="text-base">🇯🇵</span> 日本人選手の在籍状況
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">${(col.japanesePlayers || '').includes('未確認') ? '要確認 (公式ロスターで確認)' : '公式ロスター確認データ'}</span>
        </div>
        <p class="text-slate-100 font-medium leading-relaxed pl-1">${esc(col.japanesePlayers || col.japaneseRosterInfo || '日本人選手受入実績あり（留学生枠・一般枠双方でオープン / 英語・学業基準クリアで積極スカウト対象）')}</p>
      </div>

      <!-- Direct Action Links: Questionnaire & Camp -->
      <div class="grid grid-cols-2 gap-2.5 text-xs">
        <a href="${esc(col.questionnaireUrl || '#')}" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/50 rounded-xl text-center text-amber-200 font-bold transition flex items-center justify-center gap-2">
          <i data-lucide="file-text" class="w-4 h-4 text-amber-400"></i>
          <span>📝 公式リクルート質問票</span>
        </a>
        <a href="${esc(col.campUrl || '#')}" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/50 rounded-xl text-center text-emerald-200 font-bold transition flex items-center justify-center gap-2">
          <i data-lucide="compass" class="w-4 h-4 text-emerald-400"></i>
          <span>🏕️ 公式サッカーIDキャンプ</span>
        </a>
      </div>

      <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
        <span class="font-bold text-white block mb-1">プログラム特徴 & メモ:</span>
        <p class="text-slate-200 whitespace-pre-line">${esc(col.notes || 'No specific notes recorded.')}</p>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-700">
        <div class="flex items-center gap-2">
          <button onclick="toggleCollegeEditMode(${jsArg(col.id)}, true)" class="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-amber-300 font-semibold rounded-lg flex items-center gap-1 transition border border-slate-600">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> この大学の情報を修正・編集
          </button>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="prepareEmailForCollege(${jsArg(col.id)}); closeCollegeDetailModal();" class="px-3 py-1.5 text-xs bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg flex items-center gap-1">
            <i data-lucide="send" class="w-3.5 h-3.5"></i> メール作成
          </button>
          ${!inPipeline ? `
            <button onclick="addToPipelinePrompt(${jsArg(col.id)}); closeCollegeDetailModal();" class="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg flex items-center gap-1">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> パイプラインに追加
            </button>
          ` : `
            <button onclick="switchTab('pipeline'); closeCollegeDetailModal();" class="px-3 py-1.5 text-xs bg-emerald-800 hover:bg-emerald-700 text-white font-medium rounded-lg flex items-center gap-1">
              <i data-lucide="list" class="w-3.5 h-3.5"></i> パイプラインで確認
            </button>
          `}
        </div>
      </div>
    </div>

    <!-- Edit Form Mode (Hidden by default) -->
    <div class="space-y-4 hidden" id="modal-edit-mode">
      <div class="border-b border-slate-700 pb-2 flex items-center justify-between">
        <h3 class="text-lg font-bold text-amber-400 flex items-center gap-2">
          <i data-lucide="edit-3" class="w-4 h-4"></i> 大学情報の編集
        </h3>
        <span class="text-xs text-slate-400">変更内容はブラウザとExcel出力に即時保存されます</span>
      </div>

      <div class="grid grid-cols-2 gap-3 text-xs">
        <div>
          <label class="font-bold text-slate-300 block mb-1">大学名</label>
          <input type="text" id="editcol-name" value="${esc(col.name)}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">所在地・都市 (州)</label>
          <input type="text" id="editcol-location" value="${esc(col.location)}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">カンファレンス</label>
          <input type="text" id="editcol-conference" value="${esc(col.conference || '')}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div class="col-span-2">
          <label class="font-bold text-slate-300 block mb-1">サッカー部ホームページURL (大学名クリックで開く)</label>
          <input type="url" id="editcol-siteUrl" value="${esc(col.siteUrl || '')}" placeholder="https://..." class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">ホームスタジアム名</label>
          <input type="text" id="editcol-stadium" value="${esc(col.stadium || '')}" placeholder="例: Laird Q. Cagan Stadium" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">ヘッドコーチ名</label>
          <input type="text" id="editcol-headCoach" value="${esc(col.headCoach || '')}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">コーチ連絡先 Email</label>
          <input type="email" id="editcol-coachEmail" value="${esc(col.coachEmail || '')}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">年間学費 (USD)</label>
          <input type="number" id="editcol-tuition" value="${col.annualTuitionUSD || 0}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">寮費・食費 (USD)</label>
          <input type="number" id="editcol-room" value="${col.roomAndBoardUSD || 0}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">目標GPA基準</label>
          <input type="number" step="0.1" id="editcol-targetGPA" value="${col.targetGPA || 3.0}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">必要TOEFLスコア</label>
          <input type="number" id="editcol-minTOEFL" value="${col.minTOEFL || 75}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">留学生受入度 (Rating)</label>
          <select id="editcol-intlRating" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
            <option value="Extremely High" ${col.intlFriendlyRating === 'Extremely High' ? 'selected' : ''}>Extremely High (極めて高い)</option>
            <option value="Very High" ${col.intlFriendlyRating === 'Very High' ? 'selected' : ''}>Very High (とても高い)</option>
            <option value="High" ${col.intlFriendlyRating === 'High' ? 'selected' : ''}>High (高い)</option>
            <option value="Medium" ${col.intlFriendlyRating === 'Medium' ? 'selected' : ''}>Medium (普通)</option>
          </select>
        </div>
        <div>
          <label class="font-bold text-slate-300 block mb-1">留学生割合 (%)</label>
          <input type="text" id="editcol-intlPct" value="${esc(col.intlRosterPct || '35%')}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
        </div>
      </div>

      <div class="text-xs">
        <label class="font-bold text-slate-300 block mb-1">奨学金制度・特待情報</label>
        <input type="text" id="editcol-scholarshipMax" value="${esc(col.scholarshipMax || 'Max 28 (Roster Limit: 28 / 新ルール)')}" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
      </div>

      <div class="text-xs">
        <label class="font-bold text-amber-300 block mb-1">🇯🇵 日本人選手の在籍数・受入実績</label>
        <input type="text" id="editcol-japaneseRosterInfo" value="${esc(col.japaneseRosterInfo || '')}" placeholder="例: 現在1名在籍 / 歴代複数名輩出" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
      </div>

      <div class="text-xs">
        <label class="font-bold text-slate-300 block mb-1">プログラム特徴・メモ</label>
        <textarea id="editcol-notes" rows="3" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">${esc(col.notes || '')}</textarea>
      </div>

      <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-700">
        <button onclick="toggleCollegeEditMode(${jsArg(col.id)}, false)" class="px-4 py-2 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg">
          キャンセル
        </button>
        <button onclick="saveCollegeEdit(${jsArg(col.id)})" class="px-4 py-2 text-xs bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded-lg shadow flex items-center gap-1">
          <i data-lucide="check" class="w-3.5 h-3.5"></i> 変更を保存
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeCollegeDetailModal() {
  const modal = document.getElementById("college-detail-modal");
  if (modal) modal.classList.add("hidden");
}

function toggleCollegeEditMode(collegeId, isEdit) {
  const viewMode = document.getElementById("modal-view-mode");
  const editMode = document.getElementById("modal-edit-mode");
  if (!viewMode || !editMode) return;

  if (isEdit) {
    viewMode.classList.add("hidden");
    editMode.classList.remove("hidden");
  } else {
    editMode.classList.add("hidden");
    viewMode.classList.remove("hidden");
  }
  lucide.createIcons();
}

function saveCollegeEdit(collegeId) {
  const colIndex = state.colleges.findIndex(c => c.id === collegeId);
  if (colIndex === -1) return;

  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  const name = getVal("editcol-name") || state.colleges[colIndex].name;
  const location = getVal("editcol-location") || state.colleges[colIndex].location;
  const conference = getVal("editcol-conference");
  const stadium = getVal("editcol-stadium");
  const siteUrl = safeUrl(getVal("editcol-siteUrl"));
  const headCoach = getVal("editcol-headCoach");
  const coachEmail = getVal("editcol-coachEmail");
  const annualTuitionUSD = Number(getVal("editcol-tuition")) || state.colleges[colIndex].annualTuitionUSD;
  const roomAndBoardUSD = Number(getVal("editcol-room")) || state.colleges[colIndex].roomAndBoardUSD;
  const targetGPA = Number(getVal("editcol-targetGPA")) || state.colleges[colIndex].targetGPA;
  const minTOEFL = Number(getVal("editcol-minTOEFL")) || state.colleges[colIndex].minTOEFL;
  const intlFriendlyRating = getVal("editcol-intlRating") || state.colleges[colIndex].intlFriendlyRating;
  const intlRosterPct = getVal("editcol-intlPct") || state.colleges[colIndex].intlRosterPct;
  const scholarshipMax = getVal("editcol-scholarshipMax") || state.colleges[colIndex].scholarshipMax;
  const japaneseRosterInfo = getVal("editcol-japaneseRosterInfo") || state.colleges[colIndex].japaneseRosterInfo;
  const notes = getVal("editcol-notes");

  // Update object
  state.colleges[colIndex] = {
    ...state.colleges[colIndex],
    name,
    location,
    conference,
    stadium,
    siteUrl,
    headCoach,
    coachEmail,
    annualTuitionUSD,
    roomAndBoardUSD,
    targetGPA,
    minTOEFL,
    intlFriendlyRating,
    intlRosterPct,
    scholarshipMax,
    japaneseRosterInfo,
    notes
  };

  saveState("colleges");
  renderExplorer();
  openCollegeDetailModal(collegeId);
  showToast(`${name} の情報を更新・保存しました！`);
}

// Add Custom College Modal
function openAddCollegeModal() {
  const modal = document.getElementById("add-college-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeAddCollegeModal() {
  const modal = document.getElementById("add-college-modal");
  if (modal) modal.classList.add("hidden");
}

function saveNewCollege() {
  const name = document.getElementById("newcol-name").value.trim();
  if (!name) {
    alert("大学名を入力してください");
    return;
  }

  const newCol = {
    id: "custom-" + Date.now(),
    name: name,
    location: document.getElementById("newcol-location").value.trim() || "USA",
    state: document.getElementById("newcol-state").value.trim() || "USA",
    region: document.getElementById("newcol-region").value,
    division: document.getElementById("newcol-division").value,
    conference: document.getElementById("newcol-conference").value.trim() || "Conference",
    gender: document.getElementById("newcol-gender").value,
    headCoach: document.getElementById("newcol-coach").value.trim() || "Head Coach",
    coachEmail: document.getElementById("newcol-email").value.trim(),
    annualTuitionUSD: Number(document.getElementById("newcol-tuition").value) || 25000,
    roomAndBoardUSD: 12000,
    targetGPA: 3.0,
    minTOEFL: 70,
    scholarshipMax: "Custom Program",
    intlFriendlyRating: "High",
    intlRosterPct: "30%",
    notes: document.getElementById("newcol-notes").value.trim() || "",
    tags: ["Custom Added"]
  };

  state.colleges.unshift(newCol);
  saveState("colleges");
  renderExplorer();
  closeAddCollegeModal();
  showToast(`${name} をデータベースに登録しました！`);
}

// ==========================================
// 4. RECRUITMENT PIPELINE CRM
// ==========================================
const PIPELINE_STATUSES = [
  { id: "Prospect", label: "1. 候補・リサーチ中", badgeClass: "bg-slate-700 text-slate-200" },
  { id: "Contacted", label: "2. メール送付済", badgeClass: "bg-blue-900 text-blue-200 border border-blue-700" },
  { id: "In Discussion", label: "3. やり取り・Zoom中", badgeClass: "bg-amber-900 text-amber-200 border border-amber-700" },
  { id: "ID Camp / Visit", label: "4. キャンプ・訪問", badgeClass: "bg-purple-900 text-purple-200 border border-purple-700" },
  { id: "Offer Received", label: "5. オファー獲得 🎉", badgeClass: "bg-emerald-900 text-emerald-200 border border-emerald-600 font-bold" },
  { id: "Committed", label: "6. 進学決定 (Commit) ⭐", badgeClass: "bg-yellow-500 text-slate-950 font-black" },
  { id: "Closed", label: "7. 見送り・不合格", badgeClass: "bg-red-950 text-red-300 border border-red-800" }
];

function renderPipeline() {
  const container = document.getElementById("pipeline-kanban-board");
  if (!container) return;

  container.innerHTML = PIPELINE_STATUSES.map(status => {
    const items = state.pipeline.filter(p => p.status === status.id);

    return `
      <div class="bg-slate-900/80 rounded-2xl border border-slate-700/80 p-3 flex flex-col h-[700px] shadow-inner">
        <!-- Column Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/80">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white">${status.label}</span>
          </div>
          <span class="px-2 py-0.5 text-xs font-extrabold rounded-full bg-slate-800 text-sky-400 border border-slate-700">
            ${items.length}
          </span>
        </div>

        <!-- Cards List -->
        <div class="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
          ${items.length === 0 ? `
            <div class="h-28 flex items-center justify-center text-xs text-slate-500 border-2 border-dashed border-slate-800 rounded-xl">
              なし
            </div>
          ` : items.map(p => {
            const college = state.colleges.find(c => c.id === p.collegeId) || { name: "University", division: "", location: "" };
            return `
              <div class="bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-sky-500 rounded-xl p-3.5 shadow transition-all duration-150">
                <div class="flex items-start justify-between gap-1 mb-1.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    ${esc(college.division)}
                  </span>
                  <div class="flex items-center gap-1">
                    <button onclick="prepareEmailForCollege(${jsArg(p.collegeId)})" class="text-slate-400 hover:text-sky-300 p-1" title="メール作成">
                      <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                    </button>
                    <button onclick="openPipelineEditModal(${jsArg(p.id)})" class="text-slate-400 hover:text-white p-1" title="編集">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>

                <h4 class="font-bold text-white text-sm line-clamp-1">${collegeNameLink(college)}</h4>
                <p class="text-[11px] text-slate-400">${esc(college.location)}</p>

                ${p.offerType && p.offerType !== "None" && p.offerType !== "Under Review" ? `
                  <div class="mt-2 p-1.5 bg-emerald-950/60 border border-emerald-700/60 rounded text-[11px] text-emerald-300 font-semibold">
                    🎁 ${esc(p.offerType)} ${p.offerAmountUSD ? `($${Number(p.offerAmountUSD).toLocaleString()})` : ''}
                  </div>
                ` : ''}

                ${p.nextAction ? `
                  <div class="mt-2 text-[11px] text-sky-200 bg-sky-950/40 p-1.5 rounded border border-sky-900/60">
                    <span class="font-bold text-sky-400 block text-[10px]">NEXT ACTION:</span>
                    ${esc(p.nextAction)}
                    ${p.nextActionDate ? `<span class="text-[10px] text-slate-400 block mt-0.5">期日: ${esc(p.nextActionDate)}</span>` : ''}
                  </div>
                ` : ''}

                <!-- Status Mover Dropdown -->
                <div class="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
                  <span class="text-slate-500 text-[10px]">ステータス変更:</span>
                  <select onchange="updatePipelineStatusDirect(${jsArg(p.id)}, this.value)" class="bg-slate-900 text-xs text-slate-300 rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none">
                    ${PIPELINE_STATUSES.map(st => `<option value="${st.id}" ${st.id === p.status ? 'selected' : ''}>${esc(st.id)}</option>`).join("")}
                  </select>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function addToPipelinePrompt(collegeId) {
  const col = state.colleges.find(c => c.id === collegeId);
  if (!col) return;

  const existing = state.pipeline.find(p => p.collegeId === collegeId);
  if (existing) {
    alert("この大学は既にパイプラインに追加されています。");
    return;
  }

  const newPipe = {
    id: "pipe-" + Date.now(),
    collegeId: collegeId,
    status: "Prospect",
    addedDate: new Date().toISOString().split("T")[0],
    lastContactDate: "",
    offerType: "None",
    offerAmountUSD: 0,
    coachContacted: col.headCoach || "",
    notes: "",
    nextAction: "初回アプローチメールを準備して送信する",
    nextActionDate: ""
  };

  state.pipeline.push(newPipe);
  saveState("pipeline");
  renderPipeline();
  renderDashboard();
  renderExplorer();
  showToast(`${col.name} をパイプラインに追加しました！`);
}

function updatePipelineStatusDirect(pipeId, newStatus) {
  const item = state.pipeline.find(p => p.id === pipeId);
  if (item) {
    item.status = newStatus;
    saveState("pipeline");
    renderPipeline();
    renderDashboard();
    showToast(`ステータスを「${newStatus}」に更新しました`);
  }
}

// Edit Pipeline Item Modal
function openPipelineEditModal(pipeId) {
  const p = state.pipeline.find(i => i.id === pipeId);
  if (!p) return;
  const col = state.colleges.find(c => c.id === p.collegeId) || { name: "University" };

  const modal = document.getElementById("pipeline-edit-modal");
  const content = document.getElementById("pipeline-edit-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="border-b border-slate-700 pb-2">
        <h3 class="text-xl font-bold text-white">${esc(col.name)}</h3>
        <p class="text-xs text-slate-400">リクルート進捗・オファー内容の編集</p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">進捗ステータス</label>
          <select id="edit-pipe-status" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
            ${PIPELINE_STATUSES.map(st => `<option value="${st.id}" ${st.id === p.status ? 'selected' : ''}>${esc(st.label)}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">最終連絡日</label>
          <input type="date" id="edit-pipe-lastContact" value="${esc(p.lastContactDate || '')}" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">オファー種類 / 奨学金内容</label>
          <input type="text" id="edit-pipe-offerType" value="${esc(p.offerType || '')}" placeholder="例: 75% Athletic Scholarship" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
        </div>
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">奨学金支給予定額 (USD/年)</label>
          <input type="number" id="edit-pipe-offerAmount" value="${p.offerAmountUSD || 0}" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">次のアクション (ToDo)</label>
          <input type="text" id="edit-pipe-nextAction" value="${esc(p.nextAction || '')}" placeholder="例: 成績証明書をPDFで送付" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
        </div>
        <div>
          <label class="text-xs font-bold text-slate-300 block mb-1">アクション期日</label>
          <input type="date" id="edit-pipe-nextActionDate" value="${esc(p.nextActionDate || '')}" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-white">
        </div>
      </div>

      <div>
        <label class="text-xs font-bold text-slate-300 block mb-1">選考メモ / コーチからのフィードバック</label>
        <textarea id="edit-pipe-notes" rows="3" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white leading-relaxed" placeholder="コーチのコメント、ポジションの空き状況、スカウト評価など">${esc(p.notes || '')}</textarea>
      </div>

      <div class="pt-3 border-t border-slate-700 flex items-center justify-between">
        <button onclick="deletePipelineItem(${jsArg(p.id)})" class="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/60 rounded-lg border border-red-900 transition">
          パイプラインから削除
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closePipelineEditModal()" class="px-4 py-2 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition">
            キャンセル
          </button>
          <button onclick="savePipelineEdit(${jsArg(p.id)})" class="px-4 py-2 text-xs bg-sky-600 hover:bg-sky-500 font-bold text-white rounded-lg transition shadow">
            変更を保存
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function closePipelineEditModal() {
  const modal = document.getElementById("pipeline-edit-modal");
  if (modal) modal.classList.add("hidden");
}

function savePipelineEdit(pipeId) {
  const p = state.pipeline.find(i => i.id === pipeId);
  if (!p) return;

  p.status = document.getElementById("edit-pipe-status").value;
  p.lastContactDate = document.getElementById("edit-pipe-lastContact").value;
  p.offerType = document.getElementById("edit-pipe-offerType").value.trim();
  p.offerAmountUSD = Number(document.getElementById("edit-pipe-offerAmount").value) || 0;
  p.nextAction = document.getElementById("edit-pipe-nextAction").value.trim();
  p.nextActionDate = document.getElementById("edit-pipe-nextActionDate").value;
  p.notes = document.getElementById("edit-pipe-notes").value.trim();

  saveState("pipeline");
  renderPipeline();
  renderDashboard();
  closePipelineEditModal();
  showToast("パイプライン情報を更新しました");
}

function deletePipelineItem(pipeId) {
  if (confirm("この大学をパイプラインから削除しますか？")) {
    state.pipeline = state.pipeline.filter(i => i.id !== pipeId);
    saveState("pipeline");
    renderPipeline();
    renderDashboard();
    renderExplorer();
    closePipelineEditModal();
    showToast("パイプラインから削除しました");
  }
}

// ==========================================
// 5. EMAIL PITCH GENERATOR
// ==========================================
function renderEmailGenerator() {
  const templateSelect = document.getElementById("email-template-select");
  const collegeSelect = document.getElementById("email-target-college");
  if (!templateSelect || !collegeSelect) return;

  // Fill template dropdown
  templateSelect.innerHTML = EMAIL_TEMPLATES.map(t => `
    <option value="${esc(t.id)}" ${t.id === state.selectedTemplateId ? 'selected' : ''}>${esc(t.name)}</option>
  `).join("");

  // Fill college dropdown
  const allCols = [...state.colleges];
  collegeSelect.innerHTML = `
    <option value="">-- 対象の大学を選択 --</option>
    ${allCols.map(c => `
      <option value="${esc(c.id)}" ${state.selectedCollegeForEmail === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.division)} - Coach ${esc(c.headCoach || 'Staff')})</option>
    `).join("")}
  `;

  updateEmailPreview();
}

function prepareEmailForCollege(collegeId) {
  state.selectedCollegeForEmail = collegeId;
  switchTab("email");
  const collegeSelect = document.getElementById("email-target-college");
  if (collegeSelect) collegeSelect.value = collegeId;
  updateEmailPreview();
}

function updateEmailPreview() {
  const templateSelect = document.getElementById("email-template-select");
  const collegeSelect = document.getElementById("email-target-college");
  const previewSubject = document.getElementById("email-preview-subject");
  const previewBody = document.getElementById("email-preview-body");
  const descEl = document.getElementById("email-template-description");
  const coachEmailInput = document.getElementById("email-coach-address");
  const coachCcInput = document.getElementById("email-coach-cc");

  if (!templateSelect || !previewSubject || !previewBody) return;

  state.selectedTemplateId = templateSelect.value;
  const template = EMAIL_TEMPLATES.find(t => t.id === state.selectedTemplateId) || EMAIL_TEMPLATES[0];

  const collegeId = collegeSelect ? collegeSelect.value : state.selectedCollegeForEmail;
  const col = state.colleges.find(c => c.id === collegeId) || {
    name: "[University Name]",
    division: "[Division]",
    conference: "[Conference Name]",
    headCoach: "Head Coach",
    coachEmail: "",
    assistantCoach: "Assistant Coach",
    assistantCoachEmail: "",
    stadium: "[Campus Stadium]",
    mascot: "[Mascot]"
  };

  if (coachEmailInput) {
    coachEmailInput.value = col.coachEmail || "";
  }
  if (coachCcInput) {
    coachCcInput.value = col.assistantCoachEmail || "";
  }

  if (descEl) {
    descEl.textContent = template.description;
  }

  const p = state.profile;
  const coachNameParts = (col.headCoach || "").split(" ");
  const coachLastName = coachNameParts.length > 1 ? coachNameParts[coachNameParts.length - 1] : col.headCoach;

  const replaceTokens = (text) => {
    return text
      .replaceAll("{{fullNameEng}}", p.fullNameEng || "Athlete Name")
      .replaceAll("{{fullNameJp}}", p.fullNameJp || "")
      .replaceAll("{{transferTerm}}", p.transferTerm || "Fall 2027")
      .replaceAll("{{gradYear}}", p.gradYear || "2029")
      .replaceAll("{{currentLevel}}", p.currentLevel || "NJCAA / NAIA / NCAA")
      .replaceAll("{{creditsEarned}}", p.creditsEarned || "[Credits]")
      .replaceAll("{{seasonsRemaining}}", p.seasonsRemaining || "2")
      .replaceAll("{{primaryPosition}}", p.primaryPosition || "Midfielder")
      .replaceAll("{{secondaryPosition}}", p.secondaryPosition || "Winger")
      .replaceAll("{{dominantFoot}}", p.dominantFoot || "Right")
      .replaceAll("{{heightCm}}", p.heightCm || "175")
      .replaceAll("{{weightKg}}", p.weightKg || "70")
      .replaceAll("{{currentTeam}}", p.currentTeam || "Current University")
      .replaceAll("{{jerseyNumber}}", p.jerseyNumber || "10")
      .replaceAll("{{gpa}}", p.gpa || "3.5")
      .replaceAll("{{toeflScore}}", p.toeflScore || "[TOEFL score]")
      .replaceAll("{{ncaaEligibilityId}}", p.ncaaEligibilityId || "[NCAA ID]")
      .replaceAll("{{naiaEligibilityId}}", p.naiaEligibilityId || "[NAIA ID]")
      .replaceAll("{{intendedMajor}}", p.intendedMajor || "Business / Sports")
      .replaceAll("{{highlightVideoUrl}}", p.highlightVideoUrl || "https://youtu.be/sample_highlights")
      .replaceAll("{{fullGameVideoUrl}}", p.fullGameVideoUrl || "[Full match video URL]")
      .replaceAll("{{athleticStats}}", p.athleticStats || "")
      .replaceAll("{{honors}}", p.honors || "")
      .replaceAll("{{referenceCoach}}", p.referenceCoach || "[Coach Name & Contact]")
      .replaceAll("{{collegeName}}", col.name)
      .replaceAll("{{conference}}", col.conference || "Conference")
      .replaceAll("{{stadium}}", col.stadium || "Campus Stadium")
      .replaceAll("{{mascot}}", col.mascot || "Team")
      .replaceAll("{{headCoachLastName}}", coachLastName || "Coach");
  };

  previewSubject.value = replaceTokens(template.subject);
  previewBody.value = replaceTokens(template.body);
}

function copyEmailToClipboard() {
  const to = document.getElementById("email-coach-address") ? document.getElementById("email-coach-address").value.trim() : "";
  const cc = document.getElementById("email-coach-cc") ? document.getElementById("email-coach-cc").value.trim() : "";
  const subject = document.getElementById("email-preview-subject").value;
  const body = document.getElementById("email-preview-body").value;

  let fullText = "";
  if (to) fullText += `To: ${to}\n`;
  if (cc) fullText += `CC: ${cc}\n`;
  fullText += `Subject: ${subject}\n\n${body}`;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast("To・CC・件名・本文をクリップボードにコピーしました！");
  }).catch(() => {
    alert("コピーに失敗しました。手動で選択してコピーしてください。");
  });
}

function openMailClient() {
  const coachEmail = document.getElementById("email-coach-address").value.trim();
  const coachCc = document.getElementById("email-coach-cc") ? document.getElementById("email-coach-cc").value.trim() : "";
  const subject = encodeURIComponent(document.getElementById("email-preview-subject").value);
  const body = encodeURIComponent(document.getElementById("email-preview-body").value);

  let mailtoUrl = `mailto:${coachEmail}?subject=${subject}&body=${body}`;
  if (coachCc) {
    mailtoUrl = `mailto:${coachEmail}?cc=${encodeURIComponent(coachCc)}&subject=${subject}&body=${body}`;
  }
  window.location.href = mailtoUrl;
}

// ==========================================
// 6. RECRUITING ROADMAP & TIMELINE
// ==========================================
function renderRoadmap() {
  const container = document.getElementById("roadmap-container");
  if (!container) return;

  container.innerHTML = state.roadmap.map((stage, sIdx) => {
    const doneCount = stage.tasks.filter(t => t.done).length;
    const totalCount = stage.tasks.length;
    const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

    return `
      <div class="bg-slate-850 border border-slate-700/80 rounded-2xl p-6 shadow-lg mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-sky-950 text-sky-300 border border-sky-800">
                ${esc(stage.badge)}
              </span>
              <h3 class="text-xl font-bold text-white">${esc(stage.grade)}</h3>
            </div>
            <p class="text-xs text-slate-400 mt-1">${esc(stage.period)}</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-black text-sky-400">${pct}% 完了</span>
            <span class="text-xs text-slate-400 block">(${doneCount}/${totalCount} 項目)</span>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-slate-800 h-2 rounded-full my-4 overflow-hidden border border-slate-700">
          <div class="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300" style="width: ${pct}%"></div>
        </div>

        <!-- Task Checklist -->
        <div class="space-y-2.5">
          ${stage.tasks.map((task, tIdx) => `
            <label class="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 cursor-pointer transition">
              <input type="checkbox" onchange="toggleRoadmapTask(${sIdx}, ${tIdx})" ${task.done ? 'checked' : ''} class="mt-1 w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-600 bg-slate-900 cursor-pointer">
              <span class="text-xs text-slate-200 leading-relaxed select-none ${task.done ? 'line-through text-slate-500 font-normal' : 'font-medium'}">
                ${esc(task.text)}
              </span>
            </label>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  // Render Rules Table & Dos and Don'ts
  renderRulesAndAdvice();
  lucide.createIcons();
}

function toggleRoadmapTask(sIdx, tIdx) {
  if (state.roadmap[sIdx] && state.roadmap[sIdx].tasks[tIdx]) {
    state.roadmap[sIdx].tasks[tIdx].done = !state.roadmap[sIdx].tasks[tIdx].done;
    saveState("roadmap");
    renderRoadmap();
    renderDashboard();
  }
}

function renderRulesAndAdvice() {
  const rulesContainer = document.getElementById("rules-divisions-table");
  if (rulesContainer) {
    rulesContainer.innerHTML = RECRUITING_KNOWLEDGE.divisions.map(d => `
      <tr class="border-b border-slate-700/60 hover:bg-slate-800/50 text-xs">
        <td class="p-3 font-bold text-sky-400 whitespace-nowrap">${esc(d.name)}</td>
        <td class="p-3 text-slate-300 font-semibold">${esc(d.scholarshipMen)}</td>
        <td class="p-3 text-slate-300">${esc(d.soccerLevel)}</td>
        <td class="p-3 text-slate-300">${esc(d.academicReq)}</td>
        <td class="p-3 text-slate-400 leading-relaxed">${esc(d.characteristics)}</td>
      </tr>
    `).join("");
  }

  const adviceContainer = document.getElementById("advice-dos-donts");
  if (adviceContainer) {
    adviceContainer.innerHTML = RECRUITING_KNOWLEDGE.dosAndDonts.map(a => `
      <div class="p-4 rounded-xl border ${a.type === 'do' ? 'bg-emerald-950/30 border-emerald-800/60' : 'bg-rose-950/30 border-rose-800/60'}">
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2 py-0.5 text-[10px] font-black rounded uppercase ${a.type === 'do' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">
            ${a.type === 'do' ? 'DO (推奨)' : "DON'T (注意)"}
          </span>
          <h4 class="font-bold text-sm text-white">${esc(a.title)}</h4>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mt-2">${esc(a.desc)}</p>
      </div>
    `).join("");
  }
}

// ==========================================
// 7. SCHOLARSHIP & COST CALCULATOR
// ==========================================
function renderCalculator() {
  const c = state.calculator;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setVal("calc-tuition", c.tuitionUSD);
  setVal("calc-room", c.roomAndBoardUSD);
  setVal("calc-books", c.booksInsuranceUSD);
  setVal("calc-athletic-pct", c.athleticPct);
  setVal("calc-athletic-pct-slider", c.athleticPct);
  setVal("calc-academic", c.academicUSD);
  setVal("calc-exchange-rate", c.exchangeRate);

  updateCalculatorOutputs();
}

function updateCalculatorInputs() {
  state.calculator = {
    tuitionUSD: Number(document.getElementById("calc-tuition").value) || 0,
    roomAndBoardUSD: Number(document.getElementById("calc-room").value) || 0,
    booksInsuranceUSD: Number(document.getElementById("calc-books").value) || 0,
    athleticPct: Number(document.getElementById("calc-athletic-pct").value) || 0,
    academicUSD: Number(document.getElementById("calc-academic").value) || 0,
    exchangeRate: Number(document.getElementById("calc-exchange-rate").value) || 155
  };

  const slider = document.getElementById("calc-athletic-pct-slider");
  if (slider) slider.value = state.calculator.athleticPct;

  saveState("calculator");
  updateCalculatorOutputs();
}

function syncAthleticSlider(val) {
  const numInput = document.getElementById("calc-athletic-pct");
  if (numInput) numInput.value = val;
  updateCalculatorInputs();
}

function updateCalculatorOutputs() {
  const { tuitionUSD, roomAndBoardUSD, booksInsuranceUSD, athleticPct, academicUSD, exchangeRate } = state.calculator;

  const grossTotalUSD = tuitionUSD + roomAndBoardUSD + booksInsuranceUSD;

  // Athletic scholarship usually covers a % of Tuition + Room/Board
  const athleticCoverableBase = tuitionUSD + roomAndBoardUSD;
  const athleticDiscountUSD = Math.round(athleticCoverableBase * (athleticPct / 100));

  const totalAidUSD = athleticDiscountUSD + academicUSD;
  const netOutOfPocketUSD = Math.max(0, grossTotalUSD - totalAidUSD);

  const grossTotalJPY = Math.round(grossTotalUSD * exchangeRate);
  const totalAidJPY = Math.round(totalAidUSD * exchangeRate);
  const netOutOfPocketJPY = Math.round(netOutOfPocketUSD * exchangeRate);

  const aidCoveragePct = grossTotalUSD > 0 ? Math.min(100, Math.round((totalAidUSD / grossTotalUSD) * 100)) : 0;

  // Update DOM Output Fields
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("calc-out-gross-usd", `$${grossTotalUSD.toLocaleString()}`);
  setText("calc-out-gross-jpy", `¥${(grossTotalJPY / 10000).toFixed(1)} 万円`);

  setText("calc-out-aid-usd", `-$${totalAidUSD.toLocaleString()}`);
  setText("calc-out-aid-jpy", `-¥${(totalAidJPY / 10000).toFixed(1)} 万円 (${aidCoveragePct}% カバー)`);

  setText("calc-out-net-usd", `$${netOutOfPocketUSD.toLocaleString()}`);
  setText("calc-out-net-jpy", `¥${(netOutOfPocketJPY / 10000).toFixed(1)} 万円 / 年`);

  setText("calc-out-athletic-val", `$${athleticDiscountUSD.toLocaleString()}`);
  setText("calc-out-academic-val", `$${academicUSD.toLocaleString()}`);

  const barAid = document.getElementById("calc-bar-aid");
  const barNet = document.getElementById("calc-bar-net");
  if (barAid) barAid.style.width = `${aidCoveragePct}%`;
  if (barNet) barNet.style.width = `${100 - aidCoveragePct}%`;
}

// Preset college loader into calculator
function loadCollegeIntoCalculator(collegeId) {
  const col = state.colleges.find(c => c.id === collegeId);
  if (!col) return;

  state.calculator.tuitionUSD = col.annualTuitionUSD || 30000;
  state.calculator.roomAndBoardUSD = col.roomAndBoardUSD || 12000;
  saveState("calculator");
  renderCalculator();
  switchTab("calculator");
  showToast(`${col.name} の学費データを計算機に読み込みました`);
}

// ==========================================
// 8. BACKUP DATA IMPORT & EXPORT (JSON)
// ==========================================
function exportDataJSON() {
  const fullBackup = {
    version: "1.0",
    exportedAt: new Date().toISOString(),
    // No personal profile in the backup while browsing without it (the saved one is not loaded)
    profile: state.profileBypassed ? null : state.profile,
    colleges: state.colleges,
    pipeline: state.pipeline,
    roadmap: state.roadmap,
    calculator: state.calculator
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `US_Soccer_Recruiting_Backup_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("バックアップJSONファイルをダウンロードしました");
}

// Export All Data to Multi-Sheet Excel (.xlsx) using SheetJS
function exportToExcel() {
  if (typeof XLSX === "undefined") {
    alert("Excel出力ライブラリをロード中です。少々お待ちください。");
    return;
  }

  const wb = XLSX.utils.book_new();

  // Sheet 1: 選手プロフィール
  const p = state.profile;
  const profileAOA = [
    ["項目", "登録内容"],
    ["氏名 (英語ローマ字)", p.fullNameEng],
    ["氏名 (漢字/カナ)", p.fullNameJp],
    ["性別", p.gender],
    ["編入希望時期 (Transfer Term)", p.transferTerm],
    ["卒業予定年 (Expected Graduation)", p.gradYear],
    ["現在のカテゴリー (NJCAA/NAIA/NCAA 等)", p.currentLevel],
    ["取得済み単位数 (Credits Earned)", p.creditsEarned],
    ["残り競技年数 (Seasons Remaining)", p.seasonsRemaining],
    ["生年月日", p.dateOfBirth],
    ["国籍", p.nationality],
    ["現在の所属大学 / 経歴", p.currentTeam],
    ["背番号 (#)", p.jerseyNumber],
    ["第1ポジション (Primary)", p.primaryPosition],
    ["第2ポジション (Secondary)", p.secondaryPosition],
    ["利き足 (Dominant Foot)", p.dominantFoot],
    ["身長 (cm)", p.heightCm],
    ["体重 (kg)", p.weightKg],
    ["大学GPA (4.0換算)", p.gpa],
    ["TOEFL iBT スコア", p.toeflScore],
    ["Duolingo スコア", p.duolingoScore],
    ["SAT スコア", p.satScore],
    ["希望専攻 (Major)", p.intendedMajor],
    ["NCAA Eligibility ID", p.ncaaEligibilityId],
    ["NAIA Eligibility ID", p.naiaEligibilityId],
    ["ハイライト動画 URL", p.highlightVideoUrl],
    ["フルマッチ動画 URL", p.fullGameVideoUrl],
    ["フィジカル数値", p.athleticStats],
    ["主な受賞歴・全国実績", p.honors],
    ["自己PR (English Bio)", p.personalBio],
    ["指導者推薦 (References)", p.referenceCoach]
  ];
  const wsProfile = XLSX.utils.aoa_to_sheet(profileAOA);
  XLSX.utils.book_append_sheet(wb, wsProfile, "選手プロフィール");

  // Sheet 2: 大学データベース
  const collegesAOA = [
    ["大学名", "Division", "地域", "州", "性別", "カンファレンス", "ヘッドコーチ", "コーチEmail", "年間学費(USD)", "寮費・食費(USD)", "奨学金枠", "留学生比率/受入度", "特徴・メモ"]
  ];
  state.colleges.forEach(c => {
    collegesAOA.push([
      c.name, c.division, c.region, c.state, c.gender,
      c.conference || "", c.headCoach || "", c.coachEmail || "",
      c.annualTuitionUSD || 0, c.roomAndBoardUSD || 0,
      c.scholarshipMax || "", c.intlFriendlyRating || "", c.notes || ""
    ]);
  });
  const wsColleges = XLSX.utils.aoa_to_sheet(collegesAOA);
  XLSX.utils.book_append_sheet(wb, wsColleges, "大学データベース");

  // Sheet 3: 選考管理パイプライン
  const pipelineAOA = [
    ["大学名", "Division", "選考ステータス", "最終連絡日", "オファー内容", "提示奨学金額(USD/年)", "担当コーチ", "次のアクション", "期日", "選考メモ"]
  ];
  state.pipeline.forEach(item => {
    const col = state.colleges.find(c => c.id === item.collegeId) || { name: "University", division: "" };
    pipelineAOA.push([
      col.name, col.division, item.status, item.lastContactDate || "",
      item.offerType || "", Number(item.offerAmountUSD) || 0,
      item.coachContacted || "", item.nextAction || "",
      item.nextActionDate || "", item.notes || ""
    ]);
  });
  const wsPipeline = XLSX.utils.aoa_to_sheet(pipelineAOA);
  XLSX.utils.book_append_sheet(wb, wsPipeline, "選考管理パイプライン");

  // Sheet 4: 英文メール例文
  const emailAOA = [
    ["タイトル", "件名 (Subject)", "本文 (Body)", "送信ポイント"]
  ];
  EMAIL_TEMPLATES.forEach(t => {
    emailAOA.push([t.name, t.subject, t.body, t.description]);
  });
  const wsEmail = XLSX.utils.aoa_to_sheet(emailAOA);
  XLSX.utils.book_append_sheet(wb, wsEmail, "英文メール例文集");

  // Sheet 5: 学費計算パラメータ
  const calc = state.calculator;
  const gross = calc.tuitionUSD + calc.roomAndBoardUSD + calc.booksInsuranceUSD;
  const athleticDiscount = Math.round((calc.tuitionUSD + calc.roomAndBoardUSD) * (calc.athleticPct / 100));
  const totalAid = athleticDiscount + calc.academicUSD;
  const netUSD = Math.max(0, gross - totalAid);
  const netJPY = Math.round(netUSD * calc.exchangeRate);

  const calcAOA = [
    ["項目", "金額 (USD / 数値)", "備考・円換算"],
    ["年間学費 (Tuition & Fees)", calc.tuitionUSD, ""],
    ["寮費・食費 (Room & Board)", calc.roomAndBoardUSD, ""],
    ["保険・教科書・諸費", calc.booksInsuranceUSD, ""],
    ["定価 合計費用", gross, `¥${Math.round(gross * calc.exchangeRate).toLocaleString()}`],
    ["スポーツ特待 カバー率 (%)", `${calc.athleticPct}%`, ""],
    ["スポーツ特待 支給額", athleticDiscount, ""],
    ["学業特待・その他 (USD/年)", calc.academicUSD, ""],
    ["奨学金 控除総額", totalAid, `¥${Math.round(totalAid * calc.exchangeRate).toLocaleString()}`],
    ["年間 実質自己負担額 (USD)", netUSD, ""],
    ["年間 実質自己負担額 (日本円)", netJPY, `為替レート: 1 USD = ¥${calc.exchangeRate}`],
    ["編入後2年間 概算自己負担額 (日本円)", netJPY * 2, "3〜4年次の2年間通算概算"]
  ];
  const wsCalc = XLSX.utils.aoa_to_sheet(calcAOA);
  XLSX.utils.book_append_sheet(wb, wsCalc, "学費・奨学金試算");

  // Write and trigger download
  const dateStr = new Date().toISOString().split("T")[0];
  XLSX.writeFile(wb, `US_College_Soccer_Recruiting_${dateStr}.xlsx`);
  showToast("最新データをExcelファイル (.xlsx) に出力しました！");
}

function importDataJSON(event) {
  const input = event.target;
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      const isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
      if (!isPlainObject(data)) throw new Error("Invalid backup format");

      const hasValidSection =
        isPlainObject(data.profile) || Array.isArray(data.colleges) || Array.isArray(data.pipeline) ||
        Array.isArray(data.roadmap) || isPlainObject(data.calculator);
      if (!hasValidSection) throw new Error("No recognizable data in backup");

      if (!confirm("現在のデータをバックアップの内容で上書きします。よろしいですか？")) return;

      if (isPlainObject(data.profile)) {
        state.profileBypassed = false;
        state.profile = { ...cloneData(DEFAULT_ATHLETE_PROFILE), ...data.profile };
      }
      if (Array.isArray(data.colleges)) {
        state.colleges = data.colleges;
        migrateCollegeData(state.colleges);
      }
      if (Array.isArray(data.pipeline)) {
        state.pipeline = data.pipeline;
        remapPipelineCollegeIds(state.pipeline);
      }
      if (Array.isArray(data.roadmap)) state.roadmap = data.roadmap;
      if (isPlainObject(data.calculator)) state.calculator = { ...state.calculator, ...data.calculator };

      saveState();
      renderAll();
      showToast("バックアップデータを復元しました！");
    } catch (err) {
      console.error("Import failed:", err);
      showToast("JSONファイルの読み込みに失敗しました。正しいフォーマットのファイルを選択してください。", "error");
    } finally {
      input.value = ""; // allow re-importing the same file
    }
  };
  reader.readAsText(file);
}