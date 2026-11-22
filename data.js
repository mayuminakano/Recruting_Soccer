// ==========================================
// US College Soccer Database & Knowledge Base
// (Complete Dataset: 400 Men's Colleges across NCAA D1, D2, D3, NAIA, NJCAA)
// ==========================================

const INITIAL_COLLEGES = [
  {
    "id": "clemsonuniversity-mens",
    "name": "Clemson University",
    "location": "Clemson, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "Mike Noonan",
    "coachEmail": "mnoonan@clemson.edu",
    "stadium": "Historic Riggs Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 39500,
    "roomAndBoardUSD": 13500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "62% (18/29名)",
    "notes": "2021 & 2023 National Champions. Pro MLS pipeline.",
    "tags": [
      "ACC",
      "South",
      "Tigers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生18名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://clemsontigers.com/sports/mens-soccer/recruits",
    "campUrl": "https://clemsonsoccercamp.com/",
    "assistantCoach": "Phil Jones (Associate HC)",
    "assistantCoachEmail": "philj@clemson.edu",
    "strengthLevel": 5,
    "strengthNote": "平均18位 (2026年 4位 / 2025年 38位 / 2024年 12位)",
    "siteUrl": "https://clemsontigers.com/sports/mens-soccer"
  },
  {
    "id": "wakeforestuniversity-mens",
    "name": "Wake Forest University",
    "location": "Winston-Salem, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Demon Deacons",
    "headCoach": "Bobby Muuss",
    "coachEmail": "muussrp@wfu.edu",
    "stadium": "W. Dennie Spry Soccer Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 64758,
    "roomAndBoardUSD": 17290,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "30% (9/30名)",
    "notes": "Top 5 national rank. High technical possession.",
    "tags": [
      "ACC",
      "South",
      "Demon Deacons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生9名 / MF 13名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://godeacs.com/sports/mens-soccer/recruits",
    "campUrl": "https://wakesoccercamp.com/",
    "assistantCoach": "Dane Brenner",
    "assistantCoachEmail": "brennerd@wfu.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均29位 (2026年 29位 / 2025年 48位 / 2024年 9位)",
    "siteUrl": "https://godeacs.com/sports/mens-soccer"
  },
  {
    "id": "universityofvirginia-mens",
    "name": "University of Virginia",
    "location": "Charlottesville, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Cavaliers",
    "headCoach": "George Gelnovatch",
    "coachEmail": "cavaliersoccer@virginia.edu",
    "stadium": "Klöckner Stadium",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 56837,
    "roomAndBoardUSD": 14750,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "26% (7/27名)",
    "notes": "7x NCAA Champions. Elite historic dynasty.",
    "tags": [
      "ACC",
      "South",
      "Cavaliers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生7名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://virginiasports.com/sports/mens-soccer/recruits",
    "campUrl": "https://virginiasoccercamp.com/",
    "assistantCoach": "Matt Chulis (Associate HC)",
    "assistantCoachEmail": "mchulis@virginia.edu",
    "strengthLevel": 5,
    "strengthNote": "平均23位 (2026年 51位 / 2025年 5位 / 2024年 14位)"
  },
  {
    "id": "stanforduniversity-mens",
    "name": "Stanford University",
    "location": "Stanford, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Cardinal",
    "headCoach": "Jeremy Gunn",
    "coachEmail": "jgunn@stanford.edu",
    "stadium": "Laird Q. Cagan Stadium",
    "targetGPA": 3.85,
    "minTOEFL": 100,
    "annualTuitionUSD": 65127,
    "roomAndBoardUSD": 21315,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/27名)",
    "notes": "全米3連覇王者 (2015-17)。文武両道最高峰。2024年秋よりACC所属。日本人選手(Yujin Kikuchi)在籍。",
    "tags": [
      "ACC",
      "West",
      "Cardinal",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (Yujin Kikuchi / 千葉県出身 Freshman)",
    "rosterStats": "公式ロスター全27名 / 留学生2名 / MF 10名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://gostanford.com/sports/mens-soccer/recruits",
    "campUrl": "https://stanfordmenssoccercamp.com/",
    "assistantCoach": "Ben Newby / Christian Meza",
    "assistantCoachEmail": "bnewby@stanford.edu",
    "strengthLevel": 5,
    "strengthNote": "平均16位 (2026年 20位 / 2025年 17位 / 2024年 11位)",
    "siteUrl": "https://gostanford.com/sports/mens-soccer"
  },
  {
    "id": "syracuseuniversity-mens",
    "name": "Syracuse University",
    "location": "Syracuse, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Orange",
    "headCoach": "Ian McIntyre",
    "coachEmail": "ismcinty@syr.edu",
    "stadium": "SU Soccer Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 61310,
    "roomAndBoardUSD": 18050,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "37% (10/27名)",
    "notes": "2022 National Champions. High intensity pressing.",
    "tags": [
      "ACC",
      "Northeast",
      "Orange",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全27名 / 留学生10名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://cuse.com/sports/mens-soccer/recruits",
    "campUrl": "https://syracusesoccercamp.com/",
    "assistantCoach": "Jukka Masalin",
    "assistantCoachEmail": "jmasalin@syr.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均44位 (2026年 34位 / 2025年 36位 / 2024年 61位)",
    "siteUrl": "https://cuse.com/sports/mens-soccer"
  },
  {
    "id": "southernmethodistuni-mens",
    "name": "Southern Methodist Univ (SMU)",
    "location": "Dallas, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Mustangs",
    "headCoach": "Kevin Hudson",
    "coachEmail": "khudson@smu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 64460,
    "roomAndBoardUSD": 18500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (6/32名)",
    "notes": "Texas powerhouse. Multi-million stadium & pro draft output.",
    "tags": [
      "ACC",
      "South",
      "Mustangs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生6名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Southern+Methodist+Univ+(SMU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Southern+Methodist+Univ+(SMU)+Soccer+ID+Camp",
    "assistantCoach": "Michael King",
    "assistantCoachEmail": "mjking@smu.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均8位 (2026年 3位 / 2025年 7位 / 2024年 15位)",
    "siteUrl": "https://smumustangs.com/sports/mens-soccer"
  },
  {
    "id": "uncchapelhill-mens",
    "name": "UNC Chapel Hill",
    "location": "Chapel Hill, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Tar Heels",
    "headCoach": "Carlos Somoano",
    "coachEmail": "csomoano@uncaa.unc.edu",
    "stadium": "Dorrance Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 39228,
    "roomAndBoardUSD": 13800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "45% (14/31名)",
    "notes": "2x National Champions (2001, 2011). Dorrance Field.",
    "tags": [
      "ACC",
      "South",
      "Tar Heels",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全31名 / 留学生14名 / MF 10名 (Sr・Gr 1名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Chapel+Hill+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Chapel+Hill+Soccer+ID+Camp",
    "assistantCoach": "Michael Callahan",
    "assistantCoachEmail": "mbcallah@unc.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均18位 (2026年 7位 / 2025年 25位 / 2024年 22位)"
  },
  {
    "id": "universityofnotredam-mens",
    "name": "University of Notre Dame",
    "location": "Notre Dame, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Fighting Irish",
    "headCoach": "Chad Riley",
    "coachEmail": "irishsoccer@nd.edu",
    "stadium": "Alumni Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 62693,
    "roomAndBoardUSD": 17320,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/29名)",
    "notes": "2013 Champions & 2023 National Finalists.",
    "tags": [
      "ACC",
      "Midwest",
      "Fighting Irish",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生0名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Notre+Dame+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Notre+Dame+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均41位 (2026年 37位 / 2025年 39位 / 2024年 48位)"
  },
  {
    "id": "universityofpittsbur-mens",
    "name": "University of Pittsburgh (Pitt)",
    "location": "Pittsburgh, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Jay Vidovich",
    "coachEmail": "msoccer@athletics.pitt.edu",
    "stadium": "Ambrose Urbanic Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 39890,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "36% (9/25名)",
    "notes": "College Cup regular. High European style passing.",
    "tags": [
      "ACC",
      "Northeast",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生9名 / MF 11名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Pittsburgh+(Pitt)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Pittsburgh+(Pitt)+Soccer+ID+Camp",
    "assistantCoach": "Bryce Cregan",
    "assistantCoachEmail": "bcregan@athletics.pitt.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均25位 (2026年 9位 / 2025年 63位 / 2024年 4位)",
    "siteUrl": "https://pittsburghpanthers.com/sports/mens-soccer"
  },
  {
    "id": "dukeuniversity-mens",
    "name": "Duke University",
    "location": "Durham, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Blue Devils",
    "headCoach": "John Kerr",
    "coachEmail": "jjk21@duke.edu",
    "stadium": "Koskinen Stadium",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 65805,
    "roomAndBoardUSD": 18484,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "36% (10/28名)",
    "notes": "1986 National Champions. Top academic brand.",
    "tags": [
      "ACC",
      "South",
      "Blue Devils",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生10名 / MF 13名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Duke+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Duke+University+Soccer+ID+Camp",
    "assistantCoach": "Michael Brady",
    "assistantCoachEmail": "michael.brady@duke.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均30位 (2026年 60位 / 2025年 21位 / 2024年 10位)",
    "siteUrl": "https://goduke.com/sports/mens-soccer"
  },
  {
    "id": "ucberkeleycal-mens",
    "name": "UC Berkeley (Cal)",
    "location": "Berkeley, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Golden Bears",
    "headCoach": "Leonard Griffin",
    "coachEmail": "calsoccer@berkeley.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 48465,
    "roomAndBoardUSD": 22500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (5/30名)",
    "notes": "全米屈指の州立名門。2024年秋よりACC所属。サンフランシスコ・ベイエリア。",
    "tags": [
      "ACC",
      "West",
      "Golden Bears",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生5名 / MF 15名 (Sr・Gr 8名)",
    "questionnaireUrl": "https://calbears.com/sports/mens-soccer/recruits",
    "campUrl": "https://calsoccercamps.com/",
    "assistantCoach": "Henry Foulk / Ricardo Gutierrez",
    "assistantCoachEmail": "hfoulk@berkeley.edu",
    "strengthLevel": 4,
    "strengthNote": "平均40位 (2026年 33位 / 2025年 53位 / 2024年 33位)",
    "siteUrl": "https://calbears.com/sports/mens-soccer"
  },
  {
    "id": "universityoflouisvil-mens",
    "name": "University of Louisville",
    "location": "Louisville, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Cardinals",
    "headCoach": "John Michael Hayden",
    "coachEmail": "johnh@GoCards.com",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 29194,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "37% (10/27名)",
    "notes": "Lynn Stadium is one of the premier soccer stadiums in USA.",
    "tags": [
      "ACC",
      "South",
      "Cardinals",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生10名 / MF 9名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Louisville+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Louisville+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Stephen Lunney",
    "assistantCoachEmail": "slunney@GoCards.com",
    "strengthLevel": 4,
    "strengthNote": "平均55位 (2026年 15位 / 2025年 77位 / 2024年 72位)"
  },
  {
    "id": "ncstateuniversity-mens",
    "name": "NC State University",
    "location": "Raleigh, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Wolfpack",
    "headCoach": "Marc Hubbard",
    "coachEmail": "wolfpacksoccer@ncsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 30869,
    "roomAndBoardUSD": 13600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (15/31名)",
    "notes": "New era under national champion coach Marc Hubbard.",
    "tags": [
      "ACC",
      "South",
      "Wolfpack",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Hayato Takayama",
    "rosterStats": "公式ロスター全31名 / 留学生15名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=NC+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=NC+State+University+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均23位 (2026年 30位 / 2025年 3位 / 2024年 36位)",
    "siteUrl": "https://gopack.com/sports/mens-soccer"
  },
  {
    "id": "virginiatech-mens",
    "name": "Virginia Tech",
    "location": "Blacksburg, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Hokies",
    "headCoach": "Mike Brizendine",
    "coachEmail": "hokiesoccer@vt.edu",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 35450,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "45% (13/29名)",
    "notes": "Thompson Field. Regular NCAA tournament contenders.",
    "tags": [
      "ACC",
      "South",
      "Hokies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生13名 / MF 13名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Virginia+Tech+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Virginia+Tech+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均51位 (2026年 53位 / 2025年 56位 / 2024年 44位)"
  },
  {
    "id": "bostoncollege-mens",
    "name": "Boston College",
    "location": "Chestnut Hill, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "ACC",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Francesco D'Agostino",
    "coachEmail": "msoccer@bc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 67450,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "36% (10/28名)",
    "notes": "Boston metro. Strong international recruiting.",
    "tags": [
      "ACC",
      "Northeast",
      "Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生10名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Boston+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Boston+College+Soccer+ID+Camp",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均67位 (2026年 56位 / 2025年 86位 / 2024年 60位)",
    "siteUrl": "https://bceagles.com/sports/mens-soccer"
  },
  {
    "id": "indianauniversityblo-mens",
    "name": "Indiana University Bloomington",
    "location": "Bloomington, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Hoosiers",
    "headCoach": "Todd Yeagley",
    "coachEmail": "tyeagley@indiana.edu",
    "stadium": "Bill Armstrong Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 40480,
    "roomAndBoardUSD": 13200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (5/30名)",
    "notes": "8x NCAA Champions. Iconic soccer tradition.",
    "tags": [
      "Big Ten",
      "Midwest",
      "Hoosiers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生5名 / MF 7名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Indiana+University+Bloomington+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Indiana+University+Bloomington+Soccer+ID+Camp",
    "assistantCoach": "Christian Lomeli",
    "assistantCoachEmail": "clomeli@iu.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均15位 (2026年 5位 / 2025年 18位 / 2024年 21位)"
  },
  {
    "id": "universityofmaryland-mens",
    "name": "University of Maryland",
    "location": "College Park, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Terrapins",
    "headCoach": "Sasho Cirovski",
    "coachEmail": "terpsoccer@umd.edu",
    "stadium": "Ludwig Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 40306,
    "roomAndBoardUSD": 15300,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "61% (17/28名)",
    "notes": "4x National Champions. Ludwig Field The Crew fan section.",
    "tags": [
      "Big Ten",
      "Northeast",
      "Terrapins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生17名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Maryland+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Maryland+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均14位 (2026年 6位 / 2025年 8位 / 2024年 27位)"
  },
  {
    "id": "ucla-mens",
    "name": "UCLA",
    "location": "Los Angeles, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Bruins",
    "headCoach": "Ryan Jorden",
    "coachEmail": "rjorden@athletics.ucla.edu",
    "stadium": "Wallis Annenberg Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 49326,
    "roomAndBoardUSD": 19230,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "53% (16/30名)",
    "notes": "全米王者4回。2024年秋よりBig Ten所属。ロサンゼルス・ウェストウッドの最高峰環境。",
    "tags": [
      "Big Ten",
      "West",
      "Bruins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生16名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://uclabruins.com/sports/mens-soccer/recruiting-questionnaire",
    "campUrl": "https://uclasoccercamps.com/",
    "assistantCoach": "Paul Snape / Nick Howard",
    "assistantCoachEmail": "psnape@athletics.ucla.edu",
    "strengthLevel": 4,
    "strengthNote": "平均30位 (2026年 22位 / 2025年 30位 / 2024年 39位)",
    "siteUrl": "https://uclabruins.com/sports/mens-soccer"
  },
  {
    "id": "universityofwashingt-mens",
    "name": "University of Washington",
    "location": "Seattle, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Huskies",
    "headCoach": "Jamie Clark",
    "coachEmail": "clarkj8@uw.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41997,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/30名)",
    "notes": "2021 National Runner-up. Top West Coast powerhouse.",
    "tags": [
      "Big Ten",
      "West",
      "Huskies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生0名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Washington+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Washington+Soccer+ID+Camp",
    "assistantCoach": "Mark Collings",
    "assistantCoachEmail": "markcoll@uw.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均15位 (2026年 16位 / 2025年 1位 / 2024年 28位)",
    "siteUrl": "https://gohuskies.com/sports/mens-soccer"
  },
  {
    "id": "ohiostateuniversity-mens",
    "name": "Ohio State University",
    "location": "Columbus, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Buckeyes",
    "headCoach": "Brian Maisonneuve",
    "coachEmail": "maisonneuve.2@osu.edu",
    "stadium": "Jesse Owens Memorial Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38365,
    "roomAndBoardUSD": 14350,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "21% (6/29名)",
    "notes": "Jesse Owens Memorial Stadium. Massive Big Ten network.",
    "tags": [
      "Big Ten",
      "Midwest",
      "Buckeyes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生6名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Ohio+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Ohio+State+University+Soccer+ID+Camp",
    "assistantCoach": "Matt Foldesy",
    "assistantCoachEmail": "foldesy.1@osu.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均48位 (2026年 45位 / 2025年 98位 / 2024年 1位)"
  },
  {
    "id": "pennstateuniversity-mens",
    "name": "Penn State University",
    "location": "University Park, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Nittany Lions",
    "headCoach": "Jeff Cook",
    "coachEmail": "nittanysoccer@psu.edu",
    "stadium": "Jeffrey Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 40146,
    "roomAndBoardUSD": 13420,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (9/23名)",
    "notes": "Jeffrey Field. Rich soccer history & passionate fans.",
    "tags": [
      "Big Ten",
      "Northeast",
      "Nittany Lions",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全23名 / 留学生9名 / MF 7名 (Sr・Gr 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=Penn+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Penn+State+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均87位 (2026年 81位 / 2025年 103位 / 2024年 77位)"
  },
  {
    "id": "universityofmichigan-mens",
    "name": "University of Michigan",
    "location": "Ann Arbor, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Wolverines",
    "headCoach": "Chaka Daley",
    "coachEmail": "wolverinesoccer@umich.edu",
    "stadium": "U-M Soccer Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 57273,
    "roomAndBoardUSD": 14450,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "9% (3/32名)",
    "notes": "U-M Soccer Stadium. Elite academic public university.",
    "tags": [
      "Big Ten",
      "Midwest",
      "Wolverines",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生3名 / MF 12名 (Sr・Gr 7名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Michigan+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Michigan+Soccer+ID+Camp",
    "assistantCoach": "Kevin Anderson",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均50位 (2026年 88位 / 2025年 31位 / 2024年 31位)",
    "siteUrl": "https://maizepages.umich.edu/sports/mens-soccer"
  },
  {
    "id": "michiganstateunivers-mens",
    "name": "Michigan State University",
    "location": "East Lansing, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Spartans",
    "headCoach": "Damon Rensing",
    "coachEmail": "rensingd@ath.msu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 43372,
    "roomAndBoardUSD": 11754,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "4% (1/26名)",
    "notes": "DeMartin Stadium. Historic Big Ten pro pipeline.",
    "tags": [
      "Big Ten",
      "Midwest",
      "Spartans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生1名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Michigan+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Michigan+State+University+Soccer+ID+Camp",
    "assistantCoach": "Reid Friedrichs",
    "assistantCoachEmail": "rfriedrichs@ath.msu.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均64位 (2026年 17位 / 2025年 92位 / 2024年 83位)"
  },
  {
    "id": "universityofwisconsi-mens",
    "name": "University of Wisconsin-Madison",
    "location": "Madison, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Badgers",
    "headCoach": "Neil Jones",
    "coachEmail": "wisconsinmsoc@athletics.wisc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 40603,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (5/27名)",
    "notes": "1995 Champions. McClimon Track/Soccer Complex.",
    "tags": [
      "Big Ten",
      "Midwest",
      "Badgers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全27名 / 留学生5名 / MF 7名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Wisconsin-Madison+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Wisconsin-Madison+Soccer+ID+Camp",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均40位 (2026年 18位 / 2025年 57位 / 2024年 46位)"
  },
  {
    "id": "rutgersuniversity-mens",
    "name": "Rutgers University",
    "location": "Piscataway, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big Ten",
    "gender": "Men",
    "mascot": "Scarlet Knights",
    "headCoach": "Jim McElderry",
    "coachEmail": "scarletsoccer@rutgers.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35350,
    "roomAndBoardUSD": 15100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "27% (9/33名)",
    "notes": "2022 Big Ten Tournament Champions. NYC metro area.",
    "tags": [
      "Big Ten",
      "Northeast",
      "Scarlet Knights",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生9名 / MF 10名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Rutgers+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Rutgers+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均46位 (2026年 11位 / 2025年 41位 / 2024年 86位)"
  },
  {
    "id": "georgetownuniversity-mens",
    "name": "Georgetown University",
    "location": "Washington, D.C.",
    "state": "DC",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Hoyas",
    "headCoach": "Brian Wiese",
    "coachEmail": "gumenssoccer@georgetown.edu",
    "stadium": "Shaw Field",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 65088,
    "roomAndBoardUSD": 19478,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "29% (8/28名)",
    "notes": "2019 National Champions. Exceptional possession soccer.",
    "tags": [
      "Big East",
      "Northeast",
      "Hoyas",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生8名 / MF 18名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Georgetown+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Georgetown+University+Soccer+ID+Camp",
    "assistantCoach": "Mike Montross",
    "assistantCoachEmail": "mm5289@georgetown.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均5位 (2026年 1位 / 2025年 11位 / 2024年 3位)",
    "siteUrl": "https://thehoya.com/sports/mens-soccer"
  },
  {
    "id": "universityofakron-mens",
    "name": "University of Akron",
    "location": "Akron, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Zips",
    "headCoach": "Jared Embick",
    "coachEmail": "menssoccer@uakron.edu",
    "stadium": "FirstEnergy Stadium - Cub Cadet Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 17980,
    "roomAndBoardUSD": 12200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "31% (9/29名)",
    "notes": "2010 National Champions. Premier possession & MLS factory.",
    "tags": [
      "Big East",
      "Midwest",
      "Zips",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生9名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Akron+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Akron+Soccer+ID+Camp",
    "assistantCoach": "Ger Coppinger",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均17位 (2026年 2位 / 2025年 16位 / 2024年 34位)",
    "siteUrl": "https://gozips.com/sports/mens-soccer"
  },
  {
    "id": "creightonuniversity-mens",
    "name": "Creighton University",
    "location": "Omaha, Nebraska",
    "state": "NE",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Bluejays",
    "headCoach": "Johnny Torres",
    "coachEmail": "creightonsocceracademy@creighton.edu",
    "stadium": "Michael G. Morrison, S.J., Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 47250,
    "roomAndBoardUSD": 13100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "31% (9/29名)",
    "notes": "Morrison Stadium (Top 5 stadium). 6x College Cup appearances.",
    "tags": [
      "Big East",
      "Midwest",
      "Bluejays",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生9名 / MF 13名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Creighton+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Creighton+University+Soccer+ID+Camp",
    "assistantCoach": "Mitch Kavanagh",
    "assistantCoachEmail": "mitchkavanagh@creighton.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均40位 (2026年 14位 / 2025年 50位 / 2024年 55位)",
    "siteUrl": "https://gocreighton.com/sports/mens-soccer"
  },
  {
    "id": "providencecollege-mens",
    "name": "Providence College",
    "location": "Providence, Rhode Island",
    "state": "RI",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Friars",
    "headCoach": "Craig Stewart",
    "coachEmail": "friarssoccer@providence.edu",
    "stadium": "Chapey Field at Anderson Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 60130,
    "roomAndBoardUSD": 17150,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "26% (7/27名)",
    "notes": "Chapey Field at Anderson Stadium. NCAA sweet 16 regular.",
    "tags": [
      "Big East",
      "Northeast",
      "Friars",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生7名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Providence+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Providence+College+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均54位 (2026年 70位 / 2025年 74位 / 2024年 18位)",
    "siteUrl": "https://friars.com/sports/mens-soccer"
  },
  {
    "id": "stjohnsuniversity-mens",
    "name": "St. John's University",
    "location": "Queens, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Red Storm",
    "headCoach": "Dr. Dave Masur",
    "coachEmail": "redstormsoccer@stjohns.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 49160,
    "roomAndBoardUSD": 19200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "47% (16/34名)",
    "notes": "1996 National Champions. NYC Queens location with global roster.",
    "tags": [
      "Big East",
      "Northeast",
      "Red Storm",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生16名 / MF 15名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=St.+John's+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=St.+John's+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均65位 (2026年 77位 / 2025年 45位 / 2024年 73位)"
  },
  {
    "id": "uconnuniversityofcon-mens",
    "name": "UConn (University of Connecticut)",
    "location": "Storrs, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Huskies",
    "headCoach": "Chris Gbandi",
    "coachEmail": "uconnsoccer@uconn.edu",
    "stadium": "Joseph J. Morrone Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 43444,
    "roomAndBoardUSD": 14750,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "34% (10/29名)",
    "notes": "3x Champions (1948, 1981, 2000). Morrone Stadium.",
    "tags": [
      "Big East",
      "Northeast",
      "Huskies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Yotaro Furutani",
    "rosterStats": "公式ロスター全29名 / 留学生10名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=UConn+(University+of+Connecticut)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UConn+(University+of+Connecticut)+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均49位 (2026年 52位 / 2025年 19位 / 2024年 75位)"
  },
  {
    "id": "butleruniversity-mens",
    "name": "Butler University",
    "location": "Indianapolis, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Paul Snape",
    "coachEmail": "butlersoccer@butler.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 46280,
    "roomAndBoardUSD": 15400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "31% (8/26名)",
    "notes": "Sellick Bowl. Technical program with strong European pipeline.",
    "tags": [
      "Big East",
      "Midwest",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Haato Efune",
    "rosterStats": "公式ロスター全26名 / 留学生8名 / MF 9名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Butler+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Butler+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均138位 (2026年 109位 / 2025年 159位 / 2024年 147位)",
    "siteUrl": "https://butlersports.com/sports/mens-soccer"
  },
  {
    "id": "xavieruniversity-mens",
    "name": "Xavier University",
    "location": "Cincinnati, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Musketeers",
    "headCoach": "John Higgins",
    "coachEmail": "musketeersoccer@xavier.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 46400,
    "roomAndBoardUSD": 14350,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (11/29名)",
    "notes": "Corcoran Field. Midwest Big East competitor.",
    "tags": [
      "Big East",
      "Midwest",
      "Musketeers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生11名 / MF 10名 (Sr・Gr 1名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Xavier+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Xavier+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均83位 (2026年 32位 / 2025年 116位 / 2024年 101位)",
    "siteUrl": "https://goxavier.com/sports/mens-soccer"
  },
  {
    "id": "setonhalluniversity-mens",
    "name": "Seton Hall University",
    "location": "South Orange, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Pirates",
    "headCoach": "Andreas Lindberg",
    "coachEmail": "piratessoccer@shu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 49830,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "46% (13/28名)",
    "notes": "2020 Big East Champions. Heavily European & international roster.",
    "tags": [
      "Big East",
      "Northeast",
      "Pirates",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生13名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Seton+Hall+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Seton+Hall+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jeff Matteo",
    "assistantCoachEmail": "jeffrey.matteo@shu.edu",
    "strengthLevel": 4,
    "strengthNote": "平均58位 (2026年 58位 / 2025年 26位 / 2024年 89位)",
    "siteUrl": "https://shupirates.com/sports/mens-soccer"
  },
  {
    "id": "marquetteuniversity-mens",
    "name": "Marquette University",
    "location": "Milwaukee, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "Louis Bennett",
    "coachEmail": "marquettesoccer@marquette.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 48700,
    "roomAndBoardUSD": 15200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (11/28名)",
    "notes": "Valley Fields in Milwaukee. Technical possession style.",
    "tags": [
      "Big East",
      "Midwest",
      "Golden Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生11名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Marquette+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Marquette+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均102位 (2026年 47位 / 2025年 131位 / 2024年 128位)",
    "siteUrl": "https://gomarquette.com/sports/mens-soccer"
  },
  {
    "id": "villanovauniversity-mens",
    "name": "Villanova University",
    "location": "Villanova, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Mark Fetrow",
    "coachEmail": "villanovasoccer@villanova.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 63585,
    "roomAndBoardUSD": 16400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "8% (2/25名)",
    "notes": "Higgins Soccer Complex. Top Philadelphia Catholic university.",
    "tags": [
      "Big East",
      "Northeast",
      "Wildcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明3名)",
    "rosterStats": "公式ロスター全25名 / 留学生2名 / MF 10名 (Sr・Gr 3名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=Villanova+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Villanova+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Alex Balog",
    "assistantCoachEmail": "abalog@villanova.edu",
    "strengthLevel": 2,
    "strengthNote": "平均126位 (2026年 119位 / 2025年 89位 / 2024年 171位)",
    "siteUrl": "https://villanovan.com/3020/sports/mens-soccer-adds-transfers-and-freshmen-to-roster"
  },
  {
    "id": "depauluniversity-mens",
    "name": "DePaul University",
    "location": "Chicago, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Big East",
    "gender": "Men",
    "mascot": "Blue Demons",
    "headCoach": "Mark Plotkin",
    "coachEmail": "mplotkin@depaul.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 43905,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "3% (1/29名)",
    "notes": "Wish Field in Lincoln Park Chicago.",
    "tags": [
      "Big East",
      "Midwest",
      "Blue Demons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生1名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=DePaul+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=DePaul+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Scott Bratt",
    "assistantCoachEmail": "sbratt@depaul.edu",
    "strengthLevel": 2,
    "strengthNote": "平均126位 (2026年 95位 / 2025年 182位 / 2024年 100位)"
  },
  {
    "id": "marshalluniversity-mens",
    "name": "Marshall University",
    "location": "Huntington, West Virginia",
    "state": "WV",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Thundering Herd",
    "headCoach": "Chris Grassie",
    "coachEmail": "msoccer@marshall.edu",
    "stadium": "Hoops Family Field",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 20264,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "81% (22/27名)",
    "notes": "2020 National Champions. International heavy recruiting.",
    "tags": [
      "Sun Belt",
      "Midwest",
      "Thundering Herd",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生22名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://herdzone.com/sports/mens-soccer/recruits",
    "campUrl": "https://marshallsoccercamps.com/",
    "assistantCoach": "Josh Faga",
    "assistantCoachEmail": "faga@marshall.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均16位 (2026年 19位 / 2025年 22位 / 2024年 8位)",
    "siteUrl": "https://herdzone.com/sports/mens-soccer"
  },
  {
    "id": "westvirginiauniversi-mens",
    "name": "West Virginia University",
    "location": "Morgantown, West Virginia",
    "state": "WV",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Mountaineers",
    "headCoach": "Dan Stratford",
    "coachEmail": "wvusoccer@mail.wvu.edu",
    "stadium": "Dick Dlesk Soccer Stadium",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 28056,
    "roomAndBoardUSD": 12400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (17/31名)",
    "notes": "2023 College Cup Semifinalist. Dick Dlesk Stadium.",
    "tags": [
      "Sun Belt",
      "Midwest",
      "Mountaineers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Kanta Ishii",
    "rosterStats": "公式ロスター全31名 / 留学生17名 / MF 9名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=West+Virginia+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=West+Virginia+University+Soccer+ID+Camp",
    "assistantCoach": "Andy Wright",
    "assistantCoachEmail": "andy.wright@mail.wvu.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均17位 (2026年 10位 / 2025年 24位 / 2024年 16位)"
  },
  {
    "id": "universityofkentucky-mens",
    "name": "University of Kentucky",
    "location": "Lexington, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Johan Cedergren",
    "coachEmail": "uksoccer@uky.edu",
    "stadium": "The Wendell & Vickie Bell Soccer Complex",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 33406,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "72% (18/25名)",
    "notes": "The Bell Soccer Complex. Top 10 national ranking.",
    "tags": [
      "Sun Belt",
      "South",
      "Wildcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生18名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Kentucky+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Kentucky+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均75位 (2026年 115位 / 2025年 40位 / 2024年 69位)"
  },
  {
    "id": "ucfunivofcentralflor-mens",
    "name": "UCF (Univ of Central Florida)",
    "location": "Orlando, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Knights",
    "headCoach": "Scott Calabrese",
    "coachEmail": "ucfsoccer@athletics.ucf.edu",
    "stadium": "UCF Soccer and Track Complex",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 22467,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "71% (17/24名)",
    "notes": "Orlando Florida. Massive campus with top weather & soccer.",
    "tags": [
      "Sun Belt",
      "South",
      "Knights",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "3名 (公式ロスター確認) Seiryu Ono, Sena Yamamoto, Takahiro Fujita",
    "rosterStats": "公式ロスター全24名 / 留学生17名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UCF+(Univ+of+Central+Florida)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UCF+(Univ+of+Central+Florida)+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均45位 (2026年 48位 / 2025年 32位 / 2024年 56位)"
  },
  {
    "id": "jamesmadisonuniversi-mens",
    "name": "James Madison University (JMU)",
    "location": "Harrisonburg, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Dukes",
    "headCoach": "Paul Zazenski",
    "coachEmail": "zazenspm@jmu.edu",
    "stadium": "Sentara Park",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 31050,
    "roomAndBoardUSD": 12600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (17/29名)",
    "notes": "Sentara Park. Regular NCAA sweet 16 participant.",
    "tags": [
      "Sun Belt",
      "South",
      "Dukes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生17名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=James+Madison+University+(JMU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=James+Madison+University+(JMU)+Soccer+ID+Camp",
    "assistantCoach": "Charlie Hubbard",
    "assistantCoachEmail": "hubbarcj@jmu.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均89位 (2026年 73位 / 2025年 124位 / 2024年 71位)"
  },
  {
    "id": "universityofsouthcar-mens",
    "name": "University of South Carolina",
    "location": "Columbia, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Gamecocks",
    "headCoach": "Tony Annan",
    "coachEmail": "gamecocksoccer@sc.edu",
    "stadium": "Stone Stadium (The Graveyard)",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 34978,
    "roomAndBoardUSD": 12300,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "63% (17/27名)",
    "notes": "Stone Stadium (The Graveyard). Top SEC soccer tradition.",
    "tags": [
      "Sun Belt",
      "South",
      "Gamecocks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生17名 / MF 7名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+South+Carolina+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+South+Carolina+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均59位 (2026年 8位 / 2025年 104位 / 2024年 65位)"
  },
  {
    "id": "coastalcarolinaunive-mens",
    "name": "Coastal Carolina University",
    "location": "Conway, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Chanticleers",
    "headCoach": "Shaun Docking",
    "coachEmail": "ccusoccer@coastal.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 29870,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "36% (9/25名)",
    "notes": "CCU Soccer Stadium. Multiple Sun Belt titles.",
    "tags": [
      "Sun Belt",
      "South",
      "Chanticleers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生9名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Coastal+Carolina+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Coastal+Carolina+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均117位 (2026年 66位 / 2025年 153位 / 2024年 133位)",
    "siteUrl": "https://goccusports.com/sports/mens-soccer"
  },
  {
    "id": "olddominionuniversit-mens",
    "name": "Old Dominion University (ODU)",
    "location": "Norfolk, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Monarchs",
    "headCoach": "Tennant McVea",
    "coachEmail": "odusoccer@odu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 32800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (11/28名)",
    "notes": "ODU Soccer Complex in coastal Virginia.",
    "tags": [
      "Sun Belt",
      "South",
      "Monarchs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Old+Dominion+University+(ODU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Old+Dominion+University+(ODU)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均81位 (2026年 55位 / 2025年 97位 / 2024年 92位)",
    "siteUrl": "https://odusports.com/sports/mens-soccer"
  },
  {
    "id": "georgiastateuniversi-mens",
    "name": "Georgia State University",
    "location": "Atlanta, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Brett Surrency",
    "coachEmail": "gsusoccer@gsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 24900,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "36% (10/28名)",
    "notes": "Downtown Atlanta location. Strong Sun Belt competitor.",
    "tags": [
      "Sun Belt",
      "South",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生10名 / MF 14名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Georgia+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Georgia+State+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均153位 (2026年 132位 / 2025年 170位 / 2024年 156位)",
    "siteUrl": "https://georgiastatesports.com/sports/mens-soccer"
  },
  {
    "id": "georgiasouthernunive-mens",
    "name": "Georgia Southern University",
    "location": "Statesboro, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Sun Belt",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Lee Squires",
    "coachEmail": "gsumenssoccer@georgiasouthern.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21500,
    "roomAndBoardUSD": 11200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "61% (17/28名)",
    "notes": "Statesboro Georgia. Great training facilities.",
    "tags": [
      "Sun Belt",
      "South",
      "Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生17名 / MF 10名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Georgia+Southern+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Georgia+Southern+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "James Smith",
    "assistantCoachEmail": "jamessmith@georgiasouthern.edu",
    "strengthLevel": 4,
    "strengthNote": "平均65位 (2026年 68位 / 2025年 34位 / 2024年 94位)"
  },
  {
    "id": "fiufloridainternatio-mens",
    "name": "FIU (Florida International)",
    "location": "Miami, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Kyle Russell",
    "coachEmail": "krussell@fiu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18900,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "71% (20/28名)",
    "notes": "Miami Florida. Top 10 national rank with 75% international roster.",
    "tags": [
      "American Athletic",
      "South",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生20名 / MF 7名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=FIU+(Florida+International)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=FIU+(Florida+International)+Soccer+ID+Camp",
    "assistantCoach": "Dannie Merida",
    "assistantCoachEmail": "dmerida@fiu.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均66位 (2026年 64位 / 2025年 70位 / 2024年 64位)",
    "siteUrl": "https://fiusports.com/sports/mens-soccer"
  },
  {
    "id": "unccharlotte-mens",
    "name": "UNC Charlotte",
    "location": "Charlotte, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "49ers",
    "headCoach": "Kevin Langan",
    "coachEmail": "klangan1@charlotte.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21800,
    "roomAndBoardUSD": 13500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "61% (17/28名)",
    "notes": "Transamerica Field. 2x College Cup Finalists. Top 20.",
    "tags": [
      "American Athletic",
      "South",
      "49ers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Natsuki Ogata",
    "rosterStats": "公式ロスター全28名 / 留学生17名 / MF 9名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Charlotte+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Charlotte+Soccer+ID+Camp",
    "assistantCoach": "Shane Carew",
    "assistantCoachEmail": "scarew1@charlotte.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均32位 (2026年 21位 / 2025年 49位 / 2024年 26位)"
  },
  {
    "id": "universityoftulsa-mens",
    "name": "University of Tulsa",
    "location": "Tulsa, Oklahoma",
    "state": "OK",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Golden Hurricane",
    "headCoach": "Tom McIntosh",
    "coachEmail": "tulsasoccer@utulsa.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 46500,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "32% (9/28名)",
    "notes": "Hurricane Soccer Stadium. Multiple AAC titles & Elite 8 runs.",
    "tags": [
      "American Athletic",
      "Midwest",
      "Golden Hurricane",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生9名 / MF 7名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Tulsa+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Tulsa+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均94位 (2026年 40位 / 2025年 111位 / 2024年 130位)",
    "siteUrl": "https://tulsahurricane.com/sports/mens-soccer"
  },
  {
    "id": "usfunivofsouthflorid-mens",
    "name": "USF (Univ of South Florida)",
    "location": "Tampa, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Bulls",
    "headCoach": "Bob Butehorn",
    "coachEmail": "bullssoccer@usf.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 17300,
    "roomAndBoardUSD": 12500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "Corbett Stadium in Tampa Florida. Elite grass pitch.",
    "tags": [
      "American Athletic",
      "South",
      "Bulls",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 7名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=USF+(Univ+of+South+Florida)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=USF+(Univ+of+South+Florida)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均116位 (2026年 194位 / 2025年 55位 / 2024年 98位)"
  },
  {
    "id": "universityofmemphis-mens",
    "name": "University of Memphis",
    "location": "Memphis, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "Richard Mulrooney",
    "coachEmail": "memphissoccer@memphis.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21500,
    "roomAndBoardUSD": 11200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "46% (13/28名)",
    "notes": "Track & Soccer Complex. Head Coach is 2x MLS champion.",
    "tags": [
      "American Athletic",
      "South",
      "Tigers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Jin Tokishi",
    "rosterStats": "公式ロスター全28名 / 留学生13名 / MF 11名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Memphis+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Memphis+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均107位 (2026年 72位 / 2025年 146位 / 2024年 102位)",
    "siteUrl": "https://gotigersgo.com/sports/mens-soccer"
  },
  {
    "id": "floridaatlanticfau-mens",
    "name": "Florida Atlantic (FAU)",
    "location": "Boca Raton, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Owls",
    "headCoach": "Joey Worthen",
    "coachEmail": "owlssoccer@fau.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18200,
    "roomAndBoardUSD": 12900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "60% (18/30名)",
    "notes": "FAU Soccer Stadium in Boca Raton South Florida.",
    "tags": [
      "American Athletic",
      "South",
      "Owls",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Manato Ogawa",
    "rosterStats": "公式ロスター全30名 / 留学生18名 / MF 5名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Florida+Atlantic+(FAU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Florida+Atlantic+(FAU)+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均69位 (2026年 74位 / 2025年 35位 / 2024年 97位)",
    "siteUrl": "https://fausports.com/sports/mens-soccer"
  },
  {
    "id": "templeuniversity-mens",
    "name": "Temple University",
    "location": "Philadelphia, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Owls",
    "headCoach": "Brian Rowland",
    "coachEmail": "templesoccer@temple.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35800,
    "roomAndBoardUSD": 15400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "40% (12/30名)",
    "notes": "Temple Sports Complex in Philadelphia PA.",
    "tags": [
      "American Athletic",
      "Northeast",
      "Owls",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生12名 / MF 8名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Temple+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Temple+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均161位 (2026年 190位 / 2025年 181位 / 2024年 111位)",
    "siteUrl": "https://owlsports.com/sports/mens-soccer"
  },
  {
    "id": "uabunivofalabamabirm-mens",
    "name": "UAB (Univ of Alabama Birmingham)",
    "location": "Birmingham, Alabama",
    "state": "AL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "American Athletic",
    "gender": "Men",
    "mascot": "Blazers",
    "headCoach": "David Giffard / Staff",
    "coachEmail": "blazerssoccer@uab.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 26800,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "57% (16/28名)",
    "notes": "BBVA Field in downtown Birmingham Alabama.",
    "tags": [
      "American Athletic",
      "South",
      "Blazers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生16名 / MF 7名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UAB+(Univ+of+Alabama+Birmingham)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UAB+(Univ+of+Alabama+Birmingham)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均121位 (2026年 131位 / 2025年 115位 / 2024年 117位)"
  },
  {
    "id": "princetonuniversity-mens",
    "name": "Princeton University",
    "location": "Princeton, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "Jim Barlow",
    "coachEmail": "tigersoccer@princeton.edu",
    "stadium": "Roberts Stadium / Myslik Field",
    "targetGPA": 3.85,
    "minTOEFL": 100,
    "annualTuitionUSD": 59710,
    "roomAndBoardUSD": 19380,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/27名)",
    "notes": "Myslik Field. World top-5 academic institution with 100% need aid.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Tigers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生2名 / MF 14名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Princeton+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Princeton+University+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均18位 (2026年 36位 / 2025年 2位 / 2024年 17位)",
    "siteUrl": "https://goprincetontigers.com/sports/mens-soccer"
  },
  {
    "id": "pennuniversityofpenn-mens",
    "name": "Penn (University of Pennsylvania)",
    "location": "Philadelphia, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Quakers",
    "headCoach": "Brian Gill",
    "coachEmail": "brgill@upenn.edu",
    "stadium": "Rhodes Field",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 63452,
    "roomAndBoardUSD": 18496,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "6% (2/32名)",
    "notes": "Rhodes Field. 2023 Ivy Champions. Top Wharton business.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Quakers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生2名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Penn+(University+of+Pennsylvania)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Penn+(University+of+Pennsylvania)+Soccer+ID+Camp",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均42位 (2026年 43位 / 2025年 75位 / 2024年 7位)"
  },
  {
    "id": "cornelluniversity-mens",
    "name": "Cornell University",
    "location": "Ithaca, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Big Red",
    "headCoach": "John Smith",
    "coachEmail": "cornellsoccer@cornell.edu",
    "stadium": "Charles F. Berman Field",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 65204,
    "roomAndBoardUSD": 17564,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "13% (4/30名)",
    "notes": "Berman Field. Consistent Ivy title contender & NCAA sweet 16.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Big Red",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生4名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Cornell+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cornell+University+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均22位 (2026年 12位 / 2025年 28位 / 2024年 25位)"
  },
  {
    "id": "harvarduniversity-mens",
    "name": "Harvard University",
    "location": "Cambridge, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Crimson",
    "headCoach": "Josh Shapiro",
    "coachEmail": "harvardsoccer@fas.harvard.edu",
    "stadium": "Jordan Field",
    "targetGPA": 3.85,
    "minTOEFL": 100,
    "annualTuitionUSD": 57261,
    "roomAndBoardUSD": 19502,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Jordan Field in Boston. Top academic institution with full need aid.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Crimson",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Harvard+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Harvard+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均109位 (2026年 107位 / 2025年 65位 / 2024年 155位)",
    "siteUrl": "https://news.harvard.edu/gazette/story/2002/09/mens-soccer-dominates-hartford"
  },
  {
    "id": "yaleuniversity-mens",
    "name": "Yale University",
    "location": "New Haven, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Kylie Stannard",
    "coachEmail": "yalesoccer@yale.edu",
    "stadium": "Reese Stadium",
    "targetGPA": 3.85,
    "minTOEFL": 100,
    "annualTuitionUSD": 64700,
    "roomAndBoardUSD": 18450,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "14% (4/28名)",
    "notes": "Reese Stadium in New Haven CT. 2019 Ivy League Champions.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生4名 / MF 10名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Yale+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Yale+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均136位 (2026年 105位 / 2025年 138位 / 2024年 165位)"
  },
  {
    "id": "dartmouthcollege-mens",
    "name": "Dartmouth College",
    "location": "Hanover, New Hampshire",
    "state": "NH",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Big Green",
    "headCoach": "Bo Oshoniyi",
    "coachEmail": "dartmouthsoccer@dartmouth.edu",
    "stadium": "Burnham Field",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 63684,
    "roomAndBoardUSD": 18600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "46% (13/28名)",
    "notes": "Burnham Field. Multiple Ivy titles in last decade.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Big Green",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生13名 / MF 8名 (Sr・Gr 1名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Dartmouth+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Dartmouth+College+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均117位 (2026年 85位 / 2025年 130位 / 2024年 136位)"
  },
  {
    "id": "brownuniversity-mens",
    "name": "Brown University",
    "location": "Providence, Rhode Island",
    "state": "RI",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "Chase Wileman",
    "coachEmail": "brownsoccer@brown.edu",
    "stadium": "Stevenson-Pincince Field",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 65656,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "11% (3/28名)",
    "notes": "Stevenson-Pincince Field. Historic Ivy League soccer tradition.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Bears",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生3名 / MF 9名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Brown+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Brown+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均81位 (2026年 89位 / 2025年 73位 / 2024年 80位)"
  },
  {
    "id": "columbiauniversity-mens",
    "name": "Columbia University",
    "location": "New York, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Ivy League",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "Michael Casper",
    "coachEmail": "columbiasoccer@columbia.edu",
    "stadium": "Rocco B. Commisso Stadium",
    "targetGPA": 3.7,
    "minTOEFL": 100,
    "annualTuitionUSD": 66139,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール) + 100% Need-based Aid",
    "intlFriendlyRating": "High",
    "intlRosterPct": "22% (6/27名)",
    "notes": "Rocco B. Commisso Stadium in Upper Manhattan NYC.",
    "tags": [
      "Ivy League",
      "Northeast",
      "Lions",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生6名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Columbia+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Columbia+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均147位 (2026年 117位 / 2025年 120位 / 2024年 204位)",
    "siteUrl": "https://www.columbiaspectator.com/sports/mens-soccer"
  },
  {
    "id": "ucsantabarbaraucsb-mens",
    "name": "UC Santa Barbara (UCSB)",
    "location": "Santa Barbara, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Gauchos",
    "headCoach": "Tim Vom Steeg",
    "coachEmail": "menssoccer@athletics.ucsb.edu",
    "stadium": "Harder Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44196,
    "roomAndBoardUSD": 18600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "36% (10/28名)",
    "notes": "2006年全米王者。観客動員1万人超のHarder Stadium。欧州留学生を積極採用。",
    "tags": [
      "Big West",
      "West",
      "Gauchos",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生10名 / MF 11名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://ucsbgauchos.com/sports/mens-soccer/recruiting",
    "campUrl": "https://ucsbgauchossoccercamps.com/",
    "assistantCoach": "Greg Wilson",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均52位 (2026年 39位 / 2025年 79位 / 2024年 38位)",
    "siteUrl": "https://ucsbgauchos.com/sports/mens-soccer"
  },
  {
    "id": "calpolysanluisobispo-mens",
    "name": "Cal Poly San Luis Obispo",
    "location": "San Luis Obispo, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Mustangs",
    "headCoach": "Oige Kennedy",
    "coachEmail": "mensoccer@calpoly.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 29800,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "6% (2/31名)",
    "notes": "Spanos Stadium. Famous Blue-Green rivalry draws 11,000+ fans.",
    "tags": [
      "Big West",
      "West",
      "Mustangs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生2名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://gopoly.com/sports/mens-soccer/recruits",
    "campUrl": "https://calpolymenssoccercamps.com/",
    "assistantCoach": "Zach Watson",
    "assistantCoachEmail": "zwatso01@calpoly.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均109位 (2026年 118位 / 2025年 101位 / 2024年 108位)",
    "siteUrl": "https://gopoly.com/sports/mens-soccer"
  },
  {
    "id": "ucirvine-mens",
    "name": "UC Irvine",
    "location": "Irvine, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Anteaters",
    "headCoach": "Yossi Raz",
    "coachEmail": "yraz@uci.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44100,
    "roomAndBoardUSD": 18200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "Anteater Stadium in Orange County California.",
    "tags": [
      "Big West",
      "West",
      "Anteaters",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 10名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://ucirvinesports.com/sports/mens-soccer/recruits",
    "campUrl": "https://ucirvinesoccercamps.com/",
    "assistantCoach": "Matt Grosh",
    "assistantCoachEmail": "mgrosh@uci.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均61位 (2026年 49位 / 2025年 59位 / 2024年 74位)",
    "siteUrl": "https://ucirvinesports.com/sports/mens-soccer"
  },
  {
    "id": "calstatefullerton-mens",
    "name": "Cal State Fullerton",
    "location": "Fullerton, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Titans",
    "headCoach": "George Kuntz",
    "coachEmail": "gkuntz@fullerton.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "26% (9/34名)",
    "notes": "Titan Stadium。伝統の攻撃的サッカー。留学生の登竜門として人気。",
    "tags": [
      "Big West",
      "West",
      "Titans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生9名 / MF 13名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://fullertontitans.com/sports/mens-soccer/recruiting-form",
    "campUrl": "https://fullertonsoccercamps.com/",
    "assistantCoach": "Carlos Aguilar",
    "assistantCoachEmail": "caguilar@fullerton.edu",
    "coachVerified": true,
    "strengthLevel": 2,
    "strengthNote": "平均112位 (2026年 128位 / 2025年 118位 / 2024年 90位)",
    "siteUrl": "https://fullertontitans.com/sports/mens-soccer"
  },
  {
    "id": "ucdavis-mens",
    "name": "UC Davis",
    "location": "Davis, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Aggies",
    "headCoach": "Dwayne Shaffer",
    "coachEmail": "ucdavissoccer@ucdavis.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44900,
    "roomAndBoardUSD": 18400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Medium",
    "intlRosterPct": "4% (1/28名)",
    "notes": "北カリフォルニアの名門州立大学。アカデミック水準が高く国内選手中心の編成。",
    "tags": [
      "Big West",
      "West",
      "Aggies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生1名 / MF 13名 (Sr・Gr 1名) / 出身地不明1名",
    "questionnaireUrl": "https://ucdavisaggies.com/sports/mens-soccer/recruits",
    "campUrl": "https://ucdavissoccercamps.com/",
    "assistantCoach": "Chris Leer (Associate HC)",
    "assistantCoachEmail": "cleer@ucdavis.edu",
    "coachVerified": true,
    "strengthLevel": 2,
    "strengthNote": "平均138位 (2026年 206位 / 2025年 155位 / 2024年 54位)",
    "siteUrl": "https://ucdavisaggies.com/sports/mens-soccer"
  },
  {
    "id": "calstatenorthridgecs-mens",
    "name": "Cal State Northridge (CSUN)",
    "location": "Northridge, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Matadors",
    "headCoach": "Terry Davila",
    "coachEmail": "terry.davila@csun.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 16500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "16% (5/31名)",
    "notes": "Matador Soccer Field in Los Angeles. Technical Latin style.",
    "tags": [
      "Big West",
      "West",
      "Matadors",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全31名 / 留学生5名 / MF 10名 (Sr・Gr 3名) / 出身地不明2名",
    "questionnaireUrl": "https://gomatadors.com/sports/mens-soccer/recruiting",
    "campUrl": "https://csunmatadorsoccercamp.com/",
    "assistantCoach": "Tony Davila (Associate HC)",
    "assistantCoachEmail": "adavila@csun.edu",
    "coachVerified": true,
    "strengthLevel": 1,
    "strengthNote": "平均152位 (2026年 122位 / 2025年 165位 / 2024年 169位)",
    "siteUrl": "https://gomatadors.com/sports/mens-soccer"
  },
  {
    "id": "ucriverside-mens",
    "name": "UC Riverside",
    "location": "Riverside, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Highlanders",
    "headCoach": "Tim Cupello",
    "coachEmail": "tim.cupello@ucr.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44200,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "16% (5/31名)",
    "notes": "2022 Big West Champions. UC Soccer Stadium.",
    "tags": [
      "Big West",
      "West",
      "Highlanders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生5名 / MF 8名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://gohighlanders.com/sports/mens-soccer/recruiting",
    "campUrl": "https://highlandersoccercamps.com/",
    "assistantCoach": "Chris Foster",
    "assistantCoachEmail": "cfoster@ucr.edu",
    "coachVerified": true,
    "strengthLevel": 1,
    "strengthNote": "平均152位 (2026年 133位 / 2025年 179位 / 2024年 143位)",
    "siteUrl": "https://gohighlanders.com/sports/mens-soccer"
  },
  {
    "id": "ucsandiegoucsd-mens",
    "name": "UC San Diego (UCSD)",
    "location": "La Jolla, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Tritons",
    "headCoach": "Jon Pascale",
    "coachEmail": "jpascale@ucsd.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44800,
    "roomAndBoardUSD": 17500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Medium",
    "intlRosterPct": "3% (1/29名)",
    "notes": "サンディエゴ・ラホヤのSTEM最高峰。国内アカデミー出身選手中心。",
    "tags": [
      "Big West",
      "West",
      "Tritons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生1名 / MF 9名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://ucsdtritons.com/sports/mens-soccer/recruits",
    "campUrl": "https://tritonsoccercamps.com/",
    "assistantCoach": "Sean Teepen",
    "assistantCoachEmail": "steepen@ucsd.edu",
    "coachVerified": true,
    "strengthLevel": 1,
    "strengthNote": "平均157位 (2026年 124位 / 2025年 162位 / 2024年 184位)",
    "siteUrl": "https://ucsdtritons.com/sports/mens-soccer"
  },
  {
    "id": "sacramentostate-mens",
    "name": "Sacramento State",
    "location": "Sacramento, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Hornets",
    "headCoach": "Michael Linenberger",
    "coachEmail": "hornetssoccer@csus.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 15900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Medium-High",
    "intlRosterPct": "7% (2/28名)",
    "notes": "州都サクラメント。地元カリフォルニアと一部留学生で構成。",
    "tags": [
      "Big West",
      "West",
      "Hornets",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生2名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://hornetsports.com/sports/mens-soccer/recruits",
    "campUrl": "https://hornetsoccercamps.com/",
    "assistantCoach": "Matt McDougall (Associate HC)",
    "assistantCoachEmail": "mcdougall@csus.edu",
    "strengthLevel": 1,
    "strengthNote": "平均169位 (2026年 175位 / 2025年 195位 / 2024年 138位)",
    "siteUrl": "https://hornetsports.com/sports/mens-soccer"
  },
  {
    "id": "calstatebakersfield-mens",
    "name": "Cal State Bakersfield",
    "location": "Bakersfield, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Big West",
    "gender": "Men",
    "mascot": "Roadrunners",
    "headCoach": "Adam Buseck",
    "coachEmail": "runnersoccer@csub.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 14800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "セントラルバレーの州立校。留学生比率が4割超と非常に高い。",
    "tags": [
      "Big West",
      "West",
      "Roadrunners",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 8名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://gorunners.com/sports/mens-soccer/recruiting",
    "campUrl": "https://csubrunnerssoccercamp.com/",
    "assistantCoach": "Christian De Luna",
    "assistantCoachEmail": "cdeluna@csub.edu",
    "strengthLevel": 2,
    "strengthNote": "平均115位 (2026年 65位 / 2025年 178位 / 2024年 103位)",
    "siteUrl": "https://gorunners.com/sports/mens-soccer"
  },
  {
    "id": "universityofportland-mens",
    "name": "University of Portland",
    "location": "Portland, Oregon",
    "state": "OR",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Pilots",
    "headCoach": "Nick Carlin-Voigt",
    "coachEmail": "portlandsoccer@up.edu",
    "stadium": "Merlo Field (Clive Charles Soccer Complex)",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 53890,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (5/33名)",
    "notes": "Historic Merlo Field. Unrivaled pro output & international recruiting.",
    "tags": [
      "WCC",
      "West",
      "Pilots",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生5名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Portland+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Portland+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均39位 (2026年 26位 / 2025年 10位 / 2024年 81位)"
  },
  {
    "id": "universityofsandiego-mens",
    "name": "University of San Diego (USD)",
    "location": "San Diego, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Toreros",
    "headCoach": "Brian Quinn",
    "coachEmail": "brianq@sandiego.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 54800,
    "roomAndBoardUSD": 17100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "27% (8/30名)",
    "notes": "サンディエゴの美しい私立名門。WCC連覇実績。ブラジルや欧州からの留学生多数。",
    "tags": [
      "WCC",
      "West",
      "Toreros",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生8名 / MF 13名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://usdtoreros.com/sports/mens-soccer/recruiting",
    "campUrl": "https://sandiegosoccercamps.com/",
    "assistantCoach": "Mike Ditta (Associate HC)",
    "assistantCoachEmail": "mditta@sandiego.edu",
    "coachVerified": true,
    "strengthLevel": 5,
    "strengthNote": "平均20位 (2026年 31位 / 2025年 9位 / 2024年 20位)",
    "siteUrl": "https://usdtoreros.com/sports/mens-soccer"
  },
  {
    "id": "oregonstateuniversit-mens",
    "name": "Oregon State University",
    "location": "Corvallis, Oregon",
    "state": "OR",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Beavers",
    "headCoach": "Greg Dalby",
    "coachEmail": "beaverssoccer@oregonstate.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 33900,
    "roomAndBoardUSD": 14600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "Paul Lorenz Field. #1 Overall NCAA Seed in 2021 & elite MLS picks.",
    "tags": [
      "WCC",
      "West",
      "Beavers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 11名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Oregon+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Oregon+State+University+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均30位 (2026年 28位 / 2025年 29位 / 2024年 32位)"
  },
  {
    "id": "santaclarauniversity-mens",
    "name": "Santa Clara University",
    "location": "Santa Clara, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Broncos",
    "headCoach": "Cam Rast",
    "coachEmail": "msoccer@scu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 58580,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "39% (11/28名)",
    "notes": "1989年全米共同王者。シリコンバレー中心部。日本人選手(Yu Yokokawa)がディフェンスで活躍中。",
    "tags": [
      "WCC",
      "West",
      "Broncos",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://santaclarabroncos.com/sports/mens-soccer/recruits",
    "campUrl": "https://santaclarasoccercamp.com/",
    "assistantCoach": "Eric Yamamoto (Associate HC)",
    "assistantCoachEmail": "eyamamoto@scu.edu",
    "coachVerified": true,
    "strengthLevel": 2,
    "strengthNote": "平均131位 (2026年 142位 / 2025年 94位 / 2024年 156位)",
    "siteUrl": "https://santaclarabroncos.com/sports/mens-soccer"
  },
  {
    "id": "saintmaryscollegeca-mens",
    "name": "Saint Mary's College (CA)",
    "location": "Moraga, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Gaels",
    "headCoach": "Adam Cooper",
    "coachEmail": "acooper@stmarys-ca.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 53900,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "36% (12/33名)",
    "notes": "Saint Mary's Stadium. Elite defense & multiple WCC titles.",
    "tags": [
      "WCC",
      "West",
      "Gaels",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全33名 / 留学生12名 / MF 10名 (Sr・Gr 0名) / 出身地不明2名",
    "questionnaireUrl": "https://smcgaels.com/sports/mens-soccer/recruiting",
    "campUrl": "https://smcgaelssoccercamps.com/",
    "assistantCoach": "Shawn Nicklaw",
    "assistantCoachEmail": "srn6@stmarys-ca.edu",
    "coachVerified": true,
    "strengthLevel": 1,
    "strengthNote": "平均159位 (2026年 180位 / 2025年 139位 / 2024年 159位)",
    "siteUrl": "https://smcgaels.com/sports/mens-soccer"
  },
  {
    "id": "sanfranciscousf-mens",
    "name": "San Francisco (USF)",
    "location": "San Francisco, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Dons",
    "headCoach": "Chris Brown",
    "coachEmail": "cbrown14@usfca.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 55800,
    "roomAndBoardUSD": 18200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (5/30名)",
    "notes": "4x National Champions. Negoesco Stadium in heart of San Francisco.",
    "tags": [
      "WCC",
      "West",
      "Dons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全30名 / 留学生5名 / MF 8名 (Sr・Gr 3名) / 出身地不明2名",
    "questionnaireUrl": "https://usfdons.com/sports/mens-soccer/recruiting",
    "campUrl": "https://usfsoccercamps.com/",
    "assistantCoach": "Joe Donoho (Associate HC)",
    "assistantCoachEmail": "jdonoho@usfca.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均70位 (2026年 98位 / 2025年 42位 / 2024年 70位)",
    "siteUrl": "https://usfdons.com/sports/mens-soccer"
  },
  {
    "id": "gonzagauniversity-mens",
    "name": "Gonzaga University",
    "location": "Spokane, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Chris McGaughey",
    "coachEmail": "mcgaughey@gonzaga.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 51200,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "11% (3/28名)",
    "notes": "Luger Field. Gonzaga national athletic brand.",
    "tags": [
      "WCC",
      "West",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生3名 / MF 14名 (Sr・Gr 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=Gonzaga+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Gonzaga+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Christo Michaelson",
    "assistantCoachEmail": "michaelsonc@gonzaga.edu",
    "strengthLevel": 2,
    "strengthNote": "平均139位 (2026年 127位 / 2025年 126位 / 2024年 163位)",
    "siteUrl": "https://gozags.com/sports/mens-soccer"
  },
  {
    "id": "universityofthepacif-mens",
    "name": "University of the Pacific",
    "location": "Stockton, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WCC",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "Andres Ochoa",
    "coachEmail": "pacificmsoccer@pacific.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 53500,
    "roomAndBoardUSD": 15800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (6/32名)",
    "notes": "ストックトンの私立校。近年WCC上位へ急成長中。",
    "tags": [
      "WCC",
      "West",
      "Tigers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生6名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://pacifictigers.com/sports/mens-soccer/recruits",
    "campUrl": "https://pacificsoccercamps.com/",
    "assistantCoach": "Brian Lanoye",
    "assistantCoachEmail": "blanoye@pacific.edu",
    "coachVerified": true,
    "strengthLevel": 1,
    "strengthNote": "平均163位 (2026年 187位 / 2025年 177位 / 2024年 125位)",
    "siteUrl": "https://pacifictigers.com/sports/mens-soccer"
  },
  {
    "id": "saintlouisuniversity-mens",
    "name": "Saint Louis University (SLU)",
    "location": "St. Louis, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Billikens",
    "headCoach": "Kevin Kalish",
    "coachEmail": "kkalish2@slu.edu",
    "stadium": "Robert R. Hermann Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 52260,
    "roomAndBoardUSD": 14400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "10x NCAA National Champions (All-time NCAA D1 record).",
    "tags": [
      "Atlantic 10",
      "Midwest",
      "Billikens",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Louis+University+(SLU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Louis+University+(SLU)+Soccer+ID+Camp",
    "assistantCoach": "Kevin Stoll",
    "assistantCoachEmail": "kevin.stoll@slu.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均31位 (2026年 44位 / 2025年 12位 / 2024年 37位)",
    "siteUrl": "https://slubillikens.com/sports/mens-soccer"
  },
  {
    "id": "universityofdayton-mens",
    "name": "University of Dayton",
    "location": "Dayton, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Flyers",
    "headCoach": "Dennis Currier",
    "coachEmail": "flyerssoccer@udayton.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 47600,
    "roomAndBoardUSD": 15100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "41% (12/29名)",
    "notes": "Baujan Field. High-scoring attacking soccer.",
    "tags": [
      "Atlantic 10",
      "Midwest",
      "Flyers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生12名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Dayton+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Dayton+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均56位 (2026年 79位 / 2025年 82位 / 2024年 6位)"
  },
  {
    "id": "vcu-mens",
    "name": "VCU",
    "location": "Richmond, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Rams",
    "headCoach": "Dave Giffard",
    "coachEmail": "drgiffard@vcu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38100,
    "roomAndBoardUSD": 13500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "42% (11/26名)",
    "notes": "Sports Backers Stadium. Elite pro development & possession.",
    "tags": [
      "Atlantic 10",
      "South",
      "Rams",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生11名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=VCU+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=VCU+Soccer+ID+Camp",
    "assistantCoach": "Lucas Paulini",
    "assistantCoachEmail": "paulinil@vcu.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均79位 (2026年 125位 / 2025年 44位 / 2024年 67位)"
  },
  {
    "id": "fordhamuniversity-mens",
    "name": "Fordham University",
    "location": "Bronx, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Rams",
    "headCoach": "Carlo Acquista",
    "coachEmail": "cacquista@fordham.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 60300,
    "roomAndBoardUSD": 21500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "26% (8/31名)",
    "notes": "Jack Coffey Field. NYC campus with 60% European roster.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Rams",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名) Arata Mizuno",
    "rosterStats": "公式ロスター全31名 / 留学生8名 / MF 12名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Fordham+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Fordham+University+Soccer+ID+Camp",
    "assistantCoach": "Philip Bannister",
    "assistantCoachEmail": "pbannister@fordham.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均72位 (2026年 101位 / 2025年 87位 / 2024年 29位)"
  },
  {
    "id": "umassamherst-mens",
    "name": "UMass Amherst",
    "location": "Amherst, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Minutemen",
    "headCoach": "Fran O'Leary",
    "coachEmail": "umasssoccer@umass.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "22% (5/23名)",
    "notes": "Rudd Field. Consistent A-10 tournament contenders.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Minutemen",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Shun Murasawa",
    "rosterStats": "公式ロスター全23名 / 留学生5名 / MF 7名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UMass+Amherst+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UMass+Amherst+Soccer+ID+Camp",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均62位 (2026年 84位 / 2025年 80位 / 2024年 23位)"
  },
  {
    "id": "davidsoncollege-mens",
    "name": "Davidson College",
    "location": "Davidson, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Mike Babst",
    "coachEmail": "davidsonsoccer@davidson.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 58900,
    "roomAndBoardUSD": 16400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "4% (1/27名)",
    "notes": "Alumni Stadium. Top liberal arts academic institution.",
    "tags": [
      "Atlantic 10",
      "South",
      "Wildcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生1名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Davidson+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Davidson+College+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均74位 (2026年 93位 / 2025年 52位 / 2024年 78位)",
    "siteUrl": "https://davidsonwildcats.com/sports/mens-soccer"
  },
  {
    "id": "duquesneuniversity-mens",
    "name": "Duquesne University",
    "location": "Pittsburgh, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Dukes",
    "headCoach": "Chase Brooks",
    "coachEmail": "duquesnesoccer@duq.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 47100,
    "roomAndBoardUSD": 15200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "20% (6/30名)",
    "notes": "Rooney Field atop campus in downtown Pittsburgh.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Dukes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生6名 / MF 10名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Duquesne+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Duquesne+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均84位 (2026年 76位 / 2025年 122位 / 2024年 53位)",
    "siteUrl": "https://goduquesne.com/sports/mens-soccer"
  },
  {
    "id": "georgemasonuniversit-mens",
    "name": "George Mason University",
    "location": "Fairfax, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Patriots",
    "headCoach": "Rich Costanzo",
    "coachEmail": "masonsoccer@gmu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 37900,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (13/27名)",
    "notes": "George Mason Stadium in Washington DC suburbs.",
    "tags": [
      "Atlantic 10",
      "South",
      "Patriots",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全27名 / 留学生13名 / MF 8名 (Sr・Gr 6名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=George+Mason+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=George+Mason+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均67位 (2026年 83位 / 2025年 78位 / 2024年 41位)",
    "siteUrl": "https://gomason.com/sports/mens-soccer"
  },
  {
    "id": "georgewashingtongw-mens",
    "name": "George Washington (GW)",
    "location": "Washington, D.C.",
    "state": "DC",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Revolutionaries",
    "headCoach": "Matt Watts",
    "coachEmail": "m.watts1@gwu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 63500,
    "roomAndBoardUSD": 16500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "GW Soccer Field at Mount Vernon. Capital city location.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Revolutionaries",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=George+Washington+(GW)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=George+Washington+(GW)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Nick Conklu",
    "assistantCoachEmail": "nicholas.conklu@gwu.edu",
    "strengthLevel": 1,
    "strengthNote": "平均185位 (2026年 166位 / 2025年 205位 / 2024年 183位)"
  },
  {
    "id": "lasalleuniversity-mens",
    "name": "La Salle University",
    "location": "Philadelphia, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Explorers",
    "headCoach": "Taylor Thames",
    "coachEmail": "thames@lasalle.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35200,
    "roomAndBoardUSD": 16100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "41% (13/32名)",
    "notes": "McCarthy Stadium in historic Philadelphia.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Explorers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生13名 / MF 14名 (Sr・Gr 8名)",
    "questionnaireUrl": "https://www.google.com/search?q=La+Salle+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=La+Salle+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ahmed Elgayar",
    "assistantCoachEmail": "elgayar@lasalle.edu",
    "strengthLevel": 2,
    "strengthNote": "平均134位 (2026年 100位 / 2025年 164位 / 2024年 139位)",
    "siteUrl": "https://goexplorers.com/sports/mens-soccer"
  },
  {
    "id": "rhodeislanduri-mens",
    "name": "Rhode Island (URI)",
    "location": "Kingston, Rhode Island",
    "state": "RI",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Rams",
    "headCoach": "Gareth Elliott",
    "coachEmail": "urisoccer@uri.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35100,
    "roomAndBoardUSD": 14600,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (10/26名)",
    "notes": "URI Soccer Complex. Multiple A-10 tournament titles.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Rams",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生10名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Rhode+Island+(URI)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Rhode+Island+(URI)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均124位 (2026年 111位 / 2025年 135位 / 2024年 127位)"
  },
  {
    "id": "saintjosephsuniversi-mens",
    "name": "Saint Joseph's University",
    "location": "Philadelphia, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "Don D'Ambra",
    "coachEmail": "hawkssoccer@sju.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 51200,
    "roomAndBoardUSD": 16400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "16% (6/37名)",
    "notes": "Sweeney Field. Jesuit university in Philadelphia.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Hawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全37名 / 留学生6名 / MF 14名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Joseph's+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Joseph's+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均159位 (2026年 149位 / 2025年 142位 / 2024年 187位)",
    "siteUrl": "https://sjuhawks.com/sports/mens-soccer"
  },
  {
    "id": "stbonaventureunivers-mens",
    "name": "St. Bonaventure University",
    "location": "Olean, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Atlantic 10",
    "gender": "Men",
    "mascot": "Bonnies",
    "headCoach": "Kwame Oduro",
    "coachEmail": "bonniessoccer@sbu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 39500,
    "roomAndBoardUSD": 15100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (16/29名)",
    "notes": "Marra Athletics Complex in Western NY.",
    "tags": [
      "Atlantic 10",
      "Northeast",
      "Bonnies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 13名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=St.+Bonaventure+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=St.+Bonaventure+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均159位 (2026年 150位 / 2025年 192位 / 2024年 135位)",
    "siteUrl": "https://gobonnies.com/sports/mens-soccer"
  },
  {
    "id": "hofstrauniversity-mens",
    "name": "Hofstra University",
    "location": "Hempstead, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Pride",
    "headCoach": "Richard Nuttall",
    "coachEmail": "hofstrasoccer@hofstra.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 54200,
    "roomAndBoardUSD": 18200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (16/27名)",
    "notes": "Hofstra Stadium. 3-peat CAA Champions & NCAA Sweet 16.",
    "tags": [
      "CAA",
      "Northeast",
      "Pride",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生16名 / MF 13名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Hofstra+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Hofstra+University+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均20位 (2026年 42位 / 2025年 13位 / 2024年 5位)",
    "siteUrl": "https://gohofstra.com/sports/mens-soccer"
  },
  {
    "id": "uncwilmingtonuncw-mens",
    "name": "UNC Wilmington (UNCW)",
    "location": "Wilmington, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Seahawks",
    "headCoach": "Aidan Heaney",
    "coachEmail": "uncwsoccer@uncw.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 23400,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "22% (6/27名)",
    "notes": "UNCW Soccer Stadium. Beach town campus & top 25 rank.",
    "tags": [
      "CAA",
      "South",
      "Seahawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生6名 / MF 8名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Wilmington+(UNCW)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Wilmington+(UNCW)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均76位 (2026年 24位 / 2025年 128位 / 2024年 76位)",
    "siteUrl": "https://uncwsports.com/sports/mens-soccer"
  },
  {
    "id": "elonuniversity-mens",
    "name": "Elon University",
    "location": "Elon, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Phoenix",
    "headCoach": "Marc Reeves",
    "coachEmail": "elonsoccer@elon.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 42500,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "45% (13/29名)",
    "notes": "Rudd Field. Beautiful campus with strong European roster.",
    "tags": [
      "CAA",
      "South",
      "Phoenix",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Kosei Sasaki",
    "rosterStats": "公式ロスター全29名 / 留学生13名 / MF 12名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Elon+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Elon+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均58位 (2026年 61位 / 2025年 64位 / 2024年 50位)",
    "siteUrl": "https://elonphoenix.com/sports/mens-soccer"
  },
  {
    "id": "drexeluniversity-mens",
    "name": "Drexel University",
    "location": "Philadelphia, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Dragons",
    "headCoach": "David Castellanos",
    "coachEmail": "dc3369@drexel.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 58900,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "67% (20/30名)",
    "notes": "Vidas Field in Center City Philadelphia.",
    "tags": [
      "CAA",
      "Northeast",
      "Dragons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生20名 / MF 15名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Drexel+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Drexel+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ptah Myers",
    "assistantCoachEmail": "pm958@drexel.edu",
    "strengthLevel": 3,
    "strengthNote": "平均102位 (2026年 104位 / 2025年 119位 / 2024年 84位)"
  },
  {
    "id": "campbelluniversity-mens",
    "name": "Campbell University",
    "location": "Buies Creek, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Fighting Camels",
    "headCoach": "Ricky Davey",
    "coachEmail": "campbellsoccer@campbell.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 39800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "18% (5/28名)",
    "notes": "Eakes Complex. Top winning percentage in US last 5 years.",
    "tags": [
      "CAA",
      "South",
      "Fighting Camels",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生5名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Campbell+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Campbell+University+Soccer+ID+Camp",
    "coachVerified": true,
    "strengthLevel": 2,
    "strengthNote": "平均127位 (2026年 165位 / 2025年 113位 / 2024年 104位)",
    "siteUrl": "https://gocamels.com/sports/mens-soccer"
  },
  {
    "id": "universityofdelaware-mens",
    "name": "University of Delaware",
    "location": "Newark, Delaware",
    "state": "DE",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Blue Hens",
    "headCoach": "Tommy McMenemy",
    "coachEmail": "bluehensoccer@udel.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38600,
    "roomAndBoardUSD": 14800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/27名)",
    "notes": "Grant Stadium. Mid-Atlantic flagship university.",
    "tags": [
      "CAA",
      "Northeast",
      "Blue Hens",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生4名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Delaware+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Delaware+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均79位 (2026年 90位 / 2025年 43位 / 2024年 105位)"
  },
  {
    "id": "william&mary-mens",
    "name": "William & Mary",
    "location": "Williamsburg, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Tribe",
    "headCoach": "Chris Norris",
    "coachEmail": "tribesoccer@wm.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 48900,
    "roomAndBoardUSD": 14500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/29名)",
    "notes": "Albert-Daly Field. Top historic public Ivy academic standard.",
    "tags": [
      "CAA",
      "South",
      "Tribe",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生2名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=William+&+Mary+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=William+&+Mary+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均121位 (2026年 99位 / 2025年 171位 / 2024年 93位)"
  },
  {
    "id": "collegeofcharleston-mens",
    "name": "College of Charleston",
    "location": "Charleston, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "Keith Wiggans",
    "coachEmail": "cougarssoccer@cofc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 36100,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "Patriots Point Complex overlooking Charleston harbor.",
    "tags": [
      "CAA",
      "South",
      "Cougars",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認) Kira Fukuda, Michiharu Takanashi",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=College+of+Charleston+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=College+of+Charleston+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均69位 (2026年 35位 / 2025年 106位 / 2024年 66位)",
    "siteUrl": "https://cofcsports.com/sports/mens-soccer"
  },
  {
    "id": "monmouthuniversity-mens",
    "name": "Monmouth University",
    "location": "West Long Branch, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "Robert McCourt",
    "coachEmail": "hawkssoccer@monmouth.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44100,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "35% (9/26名)",
    "notes": "Hesse Field on Great Lawn. 1 mile from NJ beach.",
    "tags": [
      "CAA",
      "Northeast",
      "Hawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生9名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Monmouth+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Monmouth+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均111位 (2026年 164位 / 2025年 125位 / 2024年 43位)",
    "siteUrl": "https://monmouthhawks.com/sports/mens-soccer"
  },
  {
    "id": "stonybrookuniversity-mens",
    "name": "Stony Brook University",
    "location": "Stony Brook, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Seawolves",
    "headCoach": "Ryan Anatol",
    "coachEmail": "seawolvessoccer@stonybrook.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 29800,
    "roomAndBoardUSD": 16500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "34% (10/29名)",
    "notes": "LaValle Stadium. Top SUNY research university on Long Island.",
    "tags": [
      "CAA",
      "Northeast",
      "Seawolves",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生10名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Stony+Brook+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Stony+Brook+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均95位 (2026年 57位 / 2025年 61位 / 2024年 166位)"
  },
  {
    "id": "northeasternuniversi-mens",
    "name": "Northeastern University",
    "location": "Boston, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "CAA",
    "gender": "Men",
    "mascot": "Huskies",
    "headCoach": "Rich Weinrebe",
    "coachEmail": "northeasternsoccer@northeastern.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 60500,
    "roomAndBoardUSD": 19200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (5/27名)",
    "notes": "Parsons Field. Premier Boston university with top co-op program.",
    "tags": [
      "CAA",
      "Northeast",
      "Huskies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生5名 / MF 14名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Northeastern+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northeastern+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均143位 (2026年 139位 / 2025年 141位 / 2024年 148位)",
    "siteUrl": "https://nuhuskies.com/sports/mens-soccer"
  },
  {
    "id": "newhampshireunh-mens",
    "name": "New Hampshire (UNH)",
    "location": "Durham, New Hampshire",
    "state": "NH",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Rich Weinrebe / Staff",
    "coachEmail": "unhsoccer@unh.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (11/28名)",
    "notes": "Wildcat Stadium. Top 10 national ranking & NCAA Sweet 16.",
    "tags": [
      "America East",
      "Northeast",
      "Wildcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認 / 出身地不明1名) Kohsuke Fukudome, Ryo Miyata",
    "rosterStats": "公式ロスター全28名 / 留学生11名 / MF 12名 (Sr・Gr 7名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=New+Hampshire+(UNH)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=New+Hampshire+(UNH)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均78位 (2026年 80位 / 2025年 112位 / 2024年 42位)"
  },
  {
    "id": "vermontuvm-mens",
    "name": "Vermont (UVM)",
    "location": "Burlington, Vermont",
    "state": "VT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Catamounts",
    "headCoach": "Rob Dow",
    "coachEmail": "catamountsoccer@uvm.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 43800,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "53% (16/30名)",
    "notes": "Virtue Field. 2022 NCAA National Quarterfinalists (Elite 8).",
    "tags": [
      "America East",
      "Northeast",
      "Catamounts",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生16名 / MF 9名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Vermont+(UVM)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Vermont+(UVM)+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均16位 (2026年 25位 / 2025年 4位 / 2024年 19位)"
  },
  {
    "id": "umbc-mens",
    "name": "UMBC",
    "location": "Baltimore, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Retrievers",
    "headCoach": "Anthony Adams",
    "coachEmail": "retrieversoccer@umbc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 30500,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "37% (10/27名)",
    "notes": "Retriever Soccer Park. 2014 College Cup semifinalists.",
    "tags": [
      "America East",
      "Northeast",
      "Retrievers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全27名 / 留学生10名 / MF 7名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=UMBC+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UMBC+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均137位 (2026年 172位 / 2025年 156位 / 2024年 82位)"
  },
  {
    "id": "bryantuniversity-mens",
    "name": "Bryant University",
    "location": "Smithfield, Rhode Island",
    "state": "RI",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Ruben Resendes",
    "coachEmail": "bryantsoccer@bryant.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 51200,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (20/34名)",
    "notes": "Beirne Stadium. Fast-rising D1 power under Ruben Resendes.",
    "tags": [
      "America East",
      "Northeast",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生20名 / MF 12名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bryant+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bryant+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均32位 (2026年 23位 / 2025年 6位 / 2024年 68位)"
  },
  {
    "id": "njit-mens",
    "name": "NJIT",
    "location": "Newark, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Highlanders",
    "headCoach": "Fernando Barboto",
    "coachEmail": "njitsoccer@njit.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35900,
    "roomAndBoardUSD": 15400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "Lubetkin Field. Top STEM university near NYC.",
    "tags": [
      "America East",
      "Northeast",
      "Highlanders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Harusumi Takesada",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 9名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=NJIT+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=NJIT+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均120位 (2026年 59位 / 2025年 176位 / 2024年 126位)"
  },
  {
    "id": "binghamtonuniversity-mens",
    "name": "Binghamton University",
    "location": "Vestal, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Bearcats",
    "headCoach": "Tommy Moon",
    "coachEmail": "tmoon@binghamton.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 28900,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (7/28名)",
    "notes": "Bearcats Sports Complex. Top SUNY academic institution.",
    "tags": [
      "America East",
      "Northeast",
      "Bearcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生7名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Binghamton+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Binghamton+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Habi Darling",
    "assistantCoachEmail": "hdarling@binghamton.edu",
    "strengthLevel": 2,
    "strengthNote": "平均148位 (2026年 177位 / 2025年 180位 / 2024年 88位)",
    "siteUrl": "https://binghamtonbearcats.com/sports/mens-soccer"
  },
  {
    "id": "ualbany-mens",
    "name": "UAlbany",
    "location": "Albany, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "Great Danes",
    "headCoach": "Trevor Gorman",
    "coachEmail": "tgorman@albany.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 28500,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "52% (15/29名)",
    "notes": "Bob Ford Field in New York state capital.",
    "tags": [
      "America East",
      "Northeast",
      "Great Danes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全29名 / 留学生15名 / MF 10名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=UAlbany+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UAlbany+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Elias Ehlin",
    "assistantCoachEmail": "eehlin@albany.edu",
    "strengthLevel": 3,
    "strengthNote": "平均94位 (2026年 41位 / 2025年 100位 / 2024年 142位)"
  },
  {
    "id": "umasslowell-mens",
    "name": "UMass Lowell",
    "location": "Lowell, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "America East",
    "gender": "Men",
    "mascot": "River Hawks",
    "headCoach": "Kyle Zenoni",
    "coachEmail": "Kyle_Zenoni@uml.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 35200,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "61% (19/31名)",
    "notes": "Cushing Field. Greater Boston university.",
    "tags": [
      "America East",
      "Northeast",
      "River Hawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "3名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生19名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=UMass+Lowell+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UMass+Lowell+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jason Stanton",
    "assistantCoachEmail": "Jason_Stanton@uml.edu",
    "strengthLevel": 2,
    "strengthNote": "平均124位 (2026年 143位 / 2025年 108位 / 2024年 122位)",
    "siteUrl": "https://goriverhawks.com/sports/mens-soccer"
  },
  {
    "id": "westernmichigan-mens",
    "name": "Western Michigan",
    "location": "Kalamazoo, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Broncos",
    "headCoach": "Chad Wiseman",
    "coachEmail": "chad.wiseman@wmich.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 19200,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "27% (7/26名)",
    "notes": "WMU Soccer Complex. Multiple NCAA Sweet 16 & Top-15 ranks.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Broncos",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全26名 / 留学生7名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Western+Michigan+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Western+Michigan+Soccer+ID+Camp",
    "assistantCoach": "Shane Lyons",
    "assistantCoachEmail": "shane.e.lyons@wmich.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均80位 (2026年 141位 / 2025年 68位 / 2024年 30位)"
  },
  {
    "id": "missouristate-mens",
    "name": "Missouri State",
    "location": "Springfield, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "Michael Seabolt",
    "coachEmail": "mseabolt@missouristate.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18500,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "96% (25/26名)",
    "notes": "Allison South Stadium. Consistent Top-20 ranking & NCAA team.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Bears",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生25名 / MF 13名 (Sr・Gr 7名)",
    "questionnaireUrl": "https://www.google.com/search?q=Missouri+State+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Missouri+State+Soccer+ID+Camp",
    "assistantCoach": "Andrea Cattaneo",
    "assistantCoachEmail": "ac8954s@missouristate.edu",
    "coachVerified": true,
    "strengthLevel": 4,
    "strengthNote": "平均41位 (2026年 27位 / 2025年 83位 / 2024年 13位)",
    "siteUrl": "https://missouristatebears.com/sports/mens-soccer"
  },
  {
    "id": "uicunivofillinoischi-mens",
    "name": "UIC (Univ of Illinois Chicago)",
    "location": "Chicago, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Flames",
    "headCoach": "Sean Phillips",
    "coachEmail": "sephill@uic.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 30200,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "20% (5/25名)",
    "notes": "Flames Field in downtown Chicago. 55% international roster.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Flames",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生5名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=UIC+(Univ+of+Illinois+Chicago)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UIC+(Univ+of+Illinois+Chicago)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Aleksey Korol",
    "assistantCoachEmail": "korol@uic.edu",
    "strengthLevel": 2,
    "strengthNote": "平均115位 (2026年 157位 / 2025年 88位 / 2024年 99位)"
  },
  {
    "id": "bowlinggreenbgsu-mens",
    "name": "Bowling Green (BGSU)",
    "location": "Bowling Green, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "Eric Nichols",
    "coachEmail": "falconssoccer@bgsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21800,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (5/27名)",
    "notes": "Cochrane Stadium. Strong Midwest soccer tradition.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Falcons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生5名 / MF 5名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bowling+Green+(BGSU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bowling+Green+(BGSU)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均102位 (2026年 112位 / 2025年 137位 / 2024年 58位)"
  },
  {
    "id": "drakeuniversity-mens",
    "name": "Drake University",
    "location": "Des Moines, Iowa",
    "state": "IA",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Pat Flinn / Staff",
    "coachEmail": "drakesoccer@drake.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 49800,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/29名)",
    "notes": "Drake Stadium / Cownie Complex in Des Moines Iowa.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生2名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Drake+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Drake+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均84位 (2026年 136位 / 2025年 72位 / 2024年 45位)",
    "siteUrl": "https://godrakebulldogs.com/sports/mens-soccer"
  },
  {
    "id": "universityofevansvil-mens",
    "name": "University of Evansville",
    "location": "Evansville, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Purple Aces",
    "headCoach": "Robbe Tarver",
    "coachEmail": "rt134@evansville.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (13/39名)",
    "notes": "Arad McCutchan Stadium. Historic NCAA Final Four history.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Purple Aces",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全39名 / 留学生13名 / MF 14名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Evansville+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Evansville+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Matt Melzer",
    "assistantCoachEmail": "mm1059@evansville.edu",
    "strengthLevel": 3,
    "strengthNote": "平均83位 (2026年 110位 / 2025年 90位 / 2024年 49位)",
    "siteUrl": "https://gopurpleaces.com/sports/mens-soccer"
  },
  {
    "id": "belmontuniversity-mens",
    "name": "Belmont University",
    "location": "Nashville, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Bruins",
    "headCoach": "David Costa",
    "coachEmail": "menssoccer@belmont.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41500,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/26名)",
    "notes": "E.S. Rose Park in vibrant Nashville Tennessee.",
    "tags": [
      "Missouri Valley",
      "South",
      "Bruins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生4名 / MF 7名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Belmont+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Belmont+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Cam Olson",
    "assistantCoachEmail": "cam.olson@belmont.edu",
    "strengthLevel": 2,
    "strengthNote": "平均141位 (2026年 163位 / 2025年 93位 / 2024年 167位)"
  },
  {
    "id": "bradleyuniversity-mens",
    "name": "Bradley University",
    "location": "Peoria, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Braves",
    "headCoach": "Jim DeRose",
    "coachEmail": "bravessoccer@bradley.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "22% (6/27名)",
    "notes": "Shea Stadium. Multiple NCAA tournament runs under Jim DeRose.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Braves",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生6名 / MF 13名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bradley+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bradley+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均173位 (2026年 196位 / 2025年 185位 / 2024年 137位)",
    "siteUrl": "https://bradleybraves.com/sports/mens-soccer"
  },
  {
    "id": "northernillinoisniu-mens",
    "name": "Northern Illinois (NIU)",
    "location": "DeKalb, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Missouri Valley",
    "gender": "Men",
    "mascot": "Huskies",
    "headCoach": "Ryan Swan",
    "coachEmail": "niuhuskysoccer@niu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 15800,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (6/25名)",
    "notes": "NIU Soccer Complex. Very affordable D1 tuition.",
    "tags": [
      "Missouri Valley",
      "Midwest",
      "Huskies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生6名 / MF 9名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Northern+Illinois+(NIU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northern+Illinois+(NIU)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均130位 (2026年 126位 / 2025年 85位 / 2024年 179位)"
  },
  {
    "id": "seattleuniversity-mens",
    "name": "Seattle University",
    "location": "Seattle, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Redhawks",
    "headCoach": "Nate Daligcon",
    "coachEmail": "seattlesoccer@seattleu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 52800,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (5/27名)",
    "notes": "Championship Field in downtown Seattle. Multiple WAC titles.",
    "tags": [
      "WAC",
      "West",
      "Redhawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全27名 / 留学生5名 / MF 7名 (Sr・Gr 3名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Seattle+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Seattle+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均99位 (2026年 144位 / 2025年 102位 / 2024年 52位)",
    "siteUrl": "https://goseattleu.com/sports/mens-soccer"
  },
  {
    "id": "grandcanyongcu-mens",
    "name": "Grand Canyon (GCU)",
    "location": "Phoenix, Arizona",
    "state": "AZ",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Antelopes",
    "headCoach": "Mike Kraus",
    "coachEmail": "gcusoccer@gcu.edu",
    "stadium": "GCU Soccer Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 17800,
    "roomAndBoardUSD": 9800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "63% (19/30名)",
    "notes": "GCU Stadium (top soccer stadium in US with 6,000+ fans).",
    "tags": [
      "WAC",
      "West",
      "Antelopes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生19名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Grand+Canyon+(GCU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Grand+Canyon+(GCU)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均89位 (2026年 82位 / 2025年 33位 / 2024年 151位)"
  },
  {
    "id": "californiabaptistcbu-mens",
    "name": "California Baptist (CBU)",
    "location": "Riverside, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Lancers",
    "headCoach": "Coe Michaelson",
    "coachEmail": "msoccer@calbaptist.edu",
    "targetGPA": 3.2,
    "minTOEFL": 85,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (17/29名)",
    "notes": "CBU Soccer Stadium. 2022 WAC Champions in SoCal.",
    "tags": [
      "WAC",
      "West",
      "Lancers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生17名 / MF 9名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://cbulancers.com/sports/mens-soccer/recruits",
    "campUrl": "https://cbulancersoccercamps.com/",
    "assistantCoach": "Josh Greaves",
    "assistantCoachEmail": "jgreaves@calbaptist.edu",
    "coachVerified": true,
    "strengthLevel": 3,
    "strengthNote": "平均76位 (2026年 46位 / 2025年 54位 / 2024年 129位)",
    "siteUrl": "https://cbulancers.com/sports/mens-soccer"
  },
  {
    "id": "sanjosestatesjsu-mens",
    "name": "San Jose State (SJSU)",
    "location": "San Jose, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Spartans",
    "headCoach": "Simon Tobin",
    "coachEmail": "sjsusoccer@sjsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 18200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "10% (3/29名)",
    "notes": "シリコンバレーの州立名門。Simon Tobin名将（通算350勝超）。日本人選手(Kazushi Shimada)在籍。",
    "tags": [
      "WAC",
      "West",
      "Spartans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (Kazushi Shimada / 神奈川県川崎市出身)",
    "rosterStats": "公式ロスター全29名 / 留学生3名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://sjsuspartans.com/sports/mens-soccer/recruiting",
    "campUrl": "https://sjsusoccercamps.com/",
    "assistantCoach": "Jesus Sanchez",
    "assistantCoachEmail": "jesus.sanchez@sjsu.edu",
    "strengthLevel": 2,
    "strengthNote": "平均123位 (2026年 170位 / 2025年 51位 / 2024年 149位)",
    "siteUrl": "https://sjsuspartans.com/sports/mens-soccer"
  },
  {
    "id": "unlv-mens",
    "name": "UNLV",
    "location": "Las Vegas, Nevada",
    "state": "NV",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Rebels",
    "headCoach": "BJ Craig",
    "coachEmail": "unlvsoccer@unlv.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 26800,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "44% (12/27名)",
    "notes": "Peter Johann Memorial Field in Las Vegas Nevada.",
    "tags": [
      "WAC",
      "West",
      "Rebels",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Yuto Oketani",
    "rosterStats": "公式ロスター全27名 / 留学生12名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=UNLV+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNLV+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均116位 (2026年 97位 / 2025年 132位 / 2024年 120位)"
  },
  {
    "id": "airforceacademy-mens",
    "name": "Air Force Academy",
    "location": "Colorado Springs, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "Doug Hill",
    "coachEmail": "airforcesoccer@afacademy.af.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/34名)",
    "notes": "Cadet Soccer Stadium in Colorado Springs at 7,000 ft altitude.",
    "tags": [
      "WAC",
      "West",
      "Falcons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生0名 / MF 13名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Air+Force+Academy+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Air+Force+Academy+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均202位 (2026年 195位 / 2025年 206位 / 2024年 205位)"
  },
  {
    "id": "utahvalleyuvu-mens",
    "name": "Utah Valley (UVU)",
    "location": "Orem, Utah",
    "state": "UT",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Wolverines",
    "headCoach": "Michael Chesler",
    "coachEmail": "michael.chesler@uvu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18200,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "47% (14/30名)",
    "notes": "Clyde Field. Head coach is former World Cup star Kyle Beckerman.",
    "tags": [
      "WAC",
      "West",
      "Wolverines",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生14名 / MF 11名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Utah+Valley+(UVU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Utah+Valley+(UVU)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Brett Jacobs",
    "assistantCoachEmail": "brett.jacobs@uvu.edu",
    "strengthLevel": 3,
    "strengthNote": "平均78位 (2026年 38位 / 2025年 84位 / 2024年 113位)"
  },
  {
    "id": "utrgv-mens",
    "name": "UTRGV",
    "location": "Edinburg, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Vaqueros",
    "headCoach": "Bryheem Hancock",
    "coachEmail": "utrgvsoccer@utrgv.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 19500,
    "roomAndBoardUSD": 9800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "64% (16/25名)",
    "notes": "UTRGV Soccer Complex in South Texas with rich Latin talent.",
    "tags": [
      "WAC",
      "South",
      "Vaqueros",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生16名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UTRGV+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UTRGV+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均192位 (2026年 202位 / 2025年 199位 / 2024年 175位)",
    "siteUrl": "https://goutrgv.com/sports/mens-soccer"
  },
  {
    "id": "incarnateworduiw-mens",
    "name": "Incarnate Word (UIW)",
    "location": "San Antonio, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Cardinals",
    "headCoach": "Kiki Lara",
    "coachEmail": "rlara@uiwtx.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 34800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "Benson Stadium in historic San Antonio Texas.",
    "tags": [
      "WAC",
      "South",
      "Cardinals",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 13名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Incarnate+Word+(UIW)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Incarnate+Word+(UIW)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Marquis Muse",
    "assistantCoachEmail": "muse@uiwtx.edu",
    "strengthLevel": 1,
    "strengthNote": "平均172位 (2026年 174位 / 2025年 173位 / 2024年 168位)"
  },
  {
    "id": "houstonchristian-mens",
    "name": "Houston Christian",
    "location": "Houston, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Huskies",
    "headCoach": "Ryan Pratt",
    "coachEmail": "hcusoccer@hc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 37200,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "52% (15/29名)",
    "notes": "Sorrels Field in major Houston metropolitan area.",
    "tags": [
      "WAC",
      "South",
      "Huskies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生15名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Houston+Christian+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Houston+Christian+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均143位 (2026年 169位 / 2025年 109位 / 2024年 150位)"
  },
  {
    "id": "universityofdenver-mens",
    "name": "University of Denver",
    "location": "Denver, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "Jamie Franks",
    "coachEmail": "denversoccer@du.edu",
    "stadium": "CIBER Field at University of Denver Soccer Stadium",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 56430,
    "roomAndBoardUSD": 16100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "11% (3/28名)",
    "notes": "Consistently Top 10 nationally. Elite tactical defense.",
    "tags": [
      "Summit League",
      "West",
      "Pioneers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生3名 / MF 11名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Denver+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Denver+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均36位 (2026年 86位 / 2025年 20位 / 2024年 2位)"
  },
  {
    "id": "oralrobertsoru-mens",
    "name": "Oral Roberts (ORU)",
    "location": "Tulsa, Oklahoma",
    "state": "OK",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "Ryan Bush",
    "coachEmail": "orusoccer@oru.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 32900,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "50% (13/26名)",
    "notes": "Case Soccer Complex. Multiple Summit League titles & 60% intl roster.",
    "tags": [
      "Summit League",
      "Midwest",
      "Golden Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生13名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Oral+Roberts+(ORU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Oral+Roberts+(ORU)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均117位 (2026年 158位 / 2025年 133位 / 2024年 59位)"
  },
  {
    "id": "omahanebraskaomaha-mens",
    "name": "Omaha (Nebraska Omaha)",
    "location": "Omaha, Nebraska",
    "state": "NE",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Mavericks",
    "headCoach": "Donovan Dowling",
    "coachEmail": "omahasoccer@unomaha.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 22800,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "26% (7/27名)",
    "notes": "Caniglia Field in downtown Omaha with rapid D1 growth.",
    "tags": [
      "Summit League",
      "Midwest",
      "Mavericks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Kamy Ndione",
    "rosterStats": "公式ロスター全27名 / 留学生7名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Omaha+(Nebraska+Omaha)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Omaha+(Nebraska+Omaha)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均94位 (2026年 63位 / 2025年 140位 / 2024年 79位)"
  },
  {
    "id": "kansascityumkc-mens",
    "name": "Kansas City (UMKC)",
    "location": "Kansas City, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Roos",
    "headCoach": "Ryan Pore",
    "coachEmail": "umkcsoccer@umkc.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 27500,
    "roomAndBoardUSD": 12400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (19/32名)",
    "notes": "Durwood Soccer Stadium in heart of Kansas City soccer capital.",
    "tags": [
      "Summit League",
      "Midwest",
      "Roos",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認) Shotaro Kodama, Rihito Kaji",
    "rosterStats": "公式ロスター全32名 / 留学生19名 / MF 12名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Kansas+City+(UMKC)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Kansas+City+(UMKC)+Soccer+ID+Camp",
    "strengthLevel": 5,
    "strengthNote": "平均20位 (2026年 13位 / 2025年 23位 / 2024年 24位)"
  },
  {
    "id": "stthomasminnesota-mens",
    "name": "St. Thomas (Minnesota)",
    "location": "St. Paul, Minnesota",
    "state": "MN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Tommies",
    "headCoach": "Jon Lowery",
    "coachEmail": "tommiessoccer@stthomas.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 49800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "54% (15/28名)",
    "notes": "South Field in Twin Cities Minnesota.",
    "tags": [
      "Summit League",
      "Midwest",
      "Tommies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生15名 / MF 12名 (Sr・Gr 5名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=St.+Thomas+(Minnesota)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=St.+Thomas+(Minnesota)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均144位 (2026年 167位 / 2025年 121位 / 2024年 144位)"
  },
  {
    "id": "westernillinoiswiu-mens",
    "name": "Western Illinois (WIU)",
    "location": "Macomb, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Summit League",
    "gender": "Men",
    "mascot": "Leathernecks",
    "headCoach": "Eric Johnson",
    "coachEmail": "wiusoccer@wiu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 14900,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (11/29名)",
    "notes": "MacKenzie Stadium. Highly affordable D1 program.",
    "tags": [
      "Summit League",
      "Midwest",
      "Leathernecks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生11名 / MF 8名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Western+Illinois+(WIU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Western+Illinois+(WIU)+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均199位 (2026年 207位 / 2025年 189位 / 2024年 200位)"
  },
  {
    "id": "bostonuniversitybu-mens",
    "name": "Boston University (BU)",
    "location": "Boston, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Terriers",
    "headCoach": "Kevin Nylen",
    "coachEmail": "terriersoccer@bu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 63798,
    "roomAndBoardUSD": 18420,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (7/28名)",
    "notes": "Nickerson Field in central Boston. 2023 Patriot League Champions.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Terriers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生7名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Boston+University+(BU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Boston+University+(BU)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均114位 (2026年 102位 / 2025年 67位 / 2024年 172位)"
  },
  {
    "id": "loyolauniversitymary-mens",
    "name": "Loyola University Maryland",
    "location": "Baltimore, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Greyhounds",
    "headCoach": "Steve Nichols",
    "coachEmail": "greyhoundsoccer@loyola.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 54900,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (8/32名)",
    "notes": "Ridley Athletic Complex in Baltimore. Multiple titles.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Greyhounds",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生8名 / MF 10名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Loyola+University+Maryland+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Loyola+University+Maryland+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均165位 (2026年 183位 / 2025年 157位 / 2024年 154位)",
    "siteUrl": "https://loyolagreyhounds.com/sports/mens-soccer"
  },
  {
    "id": "colgateuniversity-mens",
    "name": "Colgate University",
    "location": "Hamilton, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Raiders",
    "headCoach": "Erik Ronning",
    "coachEmail": "colgatemenssoccer@colgate.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 65900,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "9% (3/35名)",
    "notes": "Beyer-Small '76 Field. Elite academic liberal arts college.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Raiders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生3名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Colgate+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Colgate+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ricky Brown",
    "assistantCoachEmail": "colgatemenssoccer@colgate.edu",
    "strengthLevel": 2,
    "strengthNote": "平均138位 (2026年 161位 / 2025年 134位 / 2024年 119位)"
  },
  {
    "id": "americanuniversity-mens",
    "name": "American University",
    "location": "Washington, D.C.",
    "state": "DC",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Zach Samol",
    "coachEmail": "samol@american.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 54800,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/27名)",
    "notes": "Reeves Field in Washington DC. Former national runner-up.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生4名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=American+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=American+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Patrick Mehlert",
    "assistantCoachEmail": "mehlertp@american.edu",
    "strengthLevel": 3,
    "strengthNote": "平均103位 (2026年 120位 / 2025年 69位 / 2024年 121位)"
  },
  {
    "id": "lafayettecollege-mens",
    "name": "Lafayette College",
    "location": "Easton, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Leopards",
    "headCoach": "Dennis Bohn",
    "coachEmail": "leopardssoccer@lafayette.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 59800,
    "roomAndBoardUSD": 17400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "10% (3/30名)",
    "notes": "Oaks Stadium. Prestigious academic institution.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Leopards",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生3名 / MF 14名 (Sr・Gr 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lafayette+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lafayette+College+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均151位 (2026年 192位 / 2025年 107位 / 2024年 153位)",
    "siteUrl": "https://goleopards.com/sports/mens-soccer"
  },
  {
    "id": "lehighuniversity-mens",
    "name": "Lehigh University",
    "location": "Bethlehem, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Mountain Hawks",
    "headCoach": "Dean Koski",
    "coachEmail": "lehighmenssoccer@lehigh.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 61100,
    "roomAndBoardUSD": 16100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "14% (4/28名)",
    "notes": "Ulrich Sports Complex. Top engineering academic brand.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Mountain Hawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生4名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lehigh+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lehigh+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ryan Hess",
    "assistantCoachEmail": "reh311@lehigh.edu",
    "strengthLevel": 2,
    "strengthNote": "平均125位 (2026年 136位 / 2025年 62位 / 2024年 176位)",
    "siteUrl": "https://lehighsports.com/sports/mens-soccer"
  },
  {
    "id": "collegeoftheholycros-mens",
    "name": "College of the Holy Cross",
    "location": "Worcester, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Crusaders",
    "headCoach": "Matt Brown",
    "coachEmail": "crusadersoccer@holycross.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 58900,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "14% (4/28名)",
    "notes": "Smith Soccer Stadium in Worcester MA.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Crusaders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生4名 / MF 13名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=College+of+the+Holy+Cross+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=College+of+the+Holy+Cross+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均182位 (2026年 191位 / 2025年 175位 / 2024年 181位)",
    "siteUrl": "https://goholycross.com/sports/mens-soccer"
  },
  {
    "id": "bucknelluniversity-mens",
    "name": "Bucknell University",
    "location": "Lewisburg, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Bison",
    "headCoach": "Dave Brandt",
    "coachEmail": "bisonsoccer@bucknell.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 63900,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "4% (1/27名)",
    "notes": "Emmitt Athletic Green. Legendary coach Dave Brandt.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Bison",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生1名 / MF 13名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bucknell+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bucknell+University+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均93位 (2026年 108位 / 2025年 60位 / 2024年 112位)",
    "siteUrl": "https://bucknellbison.com/sports/mens-soccer"
  },
  {
    "id": "armywestpoint-mens",
    "name": "Army West Point",
    "location": "West Point, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Black Knights",
    "headCoach": "Brian Plotkin",
    "coachEmail": "armysoccer@westpoint.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/39名)",
    "notes": "Clinton Field along the Hudson River.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Black Knights",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全39名 / 留学生0名 / MF 14名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Army+West+Point+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Army+West+Point+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均168位 (2026年 197位 / 2025年 110位 / 2024年 196位)"
  },
  {
    "id": "navyusnavalacademy-mens",
    "name": "Navy (US Naval Academy)",
    "location": "Annapolis, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Patriot League",
    "gender": "Men",
    "mascot": "Midshipmen",
    "headCoach": "Tim O'Donohue",
    "coachEmail": "navysoccer@usna.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/30名)",
    "notes": "Glenn Warner Soccer Facility in Annapolis Maryland.",
    "tags": [
      "Patriot League",
      "Northeast",
      "Midshipmen",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生0名 / MF 12名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Navy+(US+Naval+Academy)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Navy+(US+Naval+Academy)+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均203位 (2026年 204位 / 2025年 207位 / 2024年 197位)"
  },
  {
    "id": "oaklanduniversity-mens",
    "name": "Oakland University",
    "location": "Rochester, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Golden Grizzlies",
    "headCoach": "Paul Doroh",
    "coachEmail": "doroh@oakland.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 26900,
    "roomAndBoardUSD": 12100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "21% (6/28名)",
    "notes": "Oakland Soccer Field. Multiple Horizon titles & NCAA upsets.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Golden Grizzlies",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明4名)",
    "rosterStats": "公式ロスター全28名 / 留学生6名 / MF 8名 (Sr・Gr 0名) / 出身地不明4名",
    "questionnaireUrl": "https://www.google.com/search?q=Oakland+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Oakland+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Joey Tinnion",
    "assistantCoachEmail": "jtinnion@oakland.edu",
    "strengthLevel": 1,
    "strengthNote": "平均150位 (2026年 162位 / 2025年 194位 / 2024年 95位)",
    "siteUrl": "https://goldengrizzlies.com/sports/mens-soccer"
  },
  {
    "id": "clevelandstate-mens",
    "name": "Cleveland State",
    "location": "Cleveland, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Vikings",
    "headCoach": "Sinisa Ubiparipovic",
    "coachEmail": "s.ubiparipovic81@csuohio.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 17800,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "56% (15/27名)",
    "notes": "Krenzler Field. 2022 Horizon Champions in downtown Cleveland.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Vikings",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生15名 / MF 10名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Cleveland+State+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cleveland+State+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Charlie Krus",
    "assistantCoachEmail": "c.krus@csuohio.edu",
    "strengthLevel": 3,
    "strengthNote": "平均100位 (2026年 114位 / 2025年 96位 / 2024年 91位)",
    "siteUrl": "https://csuvikings.com/sports/mens-soccer"
  },
  {
    "id": "wrightstateuniversit-mens",
    "name": "Wright State University",
    "location": "Dayton, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Raiders",
    "headCoach": "Alex Van der Sluijs",
    "coachEmail": "raiderssoccer@wright.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 20800,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (11/28名)",
    "notes": "Alumni Field at Rinzler Complex. 2019 NCAA second round.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Raiders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明3名)",
    "rosterStats": "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 0名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=Wright+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wright+State+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均160位 (2026年 138位 / 2025年 202位 / 2024年 141位)",
    "siteUrl": "https://wsuraiders.com/sports/mens-soccer"
  },
  {
    "id": "detroitmercy-mens",
    "name": "Detroit Mercy",
    "location": "Detroit, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Titans",
    "headCoach": "Nate Kopunek",
    "coachEmail": "titanssoccer@udmercy.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 32800,
    "roomAndBoardUSD": 11200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/29名)",
    "notes": "Titan Field in Detroit Michigan.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Titans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生2名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Detroit+Mercy+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Detroit+Mercy+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均180位 (2026年 186位 / 2025年 183位 / 2024年 170位)",
    "siteUrl": "https://detroittitans.com/sports/mens-soccer"
  },
  {
    "id": "uw-greenbay-mens",
    "name": "UW-Green Bay",
    "location": "Green Bay, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Phoenix",
    "headCoach": "Jeremy Bonomo",
    "coachEmail": "phoenixsoccer@uwgb.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18200,
    "roomAndBoardUSD": 8900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "21% (6/29名)",
    "notes": "Aldo Santaga Stadium. 2023 Horizon League Champions.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Phoenix",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生6名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UW-Green+Bay+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UW-Green+Bay+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均141位 (2026年 173位 / 2025年 136位 / 2024年 114位)"
  },
  {
    "id": "uw-milwaukee-mens",
    "name": "UW-Milwaukee",
    "location": "Milwaukee, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Kris Kelderman",
    "coachEmail": "panthersoccer@uwm.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21800,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (9/27名)",
    "notes": "Engelmann Stadium on Lake Michigan in Milwaukee.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Roy Nozawa",
    "rosterStats": "公式ロスター全27名 / 留学生9名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=UW-Milwaukee+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UW-Milwaukee+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均152位 (2026年 155位 / 2025年 186位 / 2024年 115位)"
  },
  {
    "id": "northernkentuckynku-mens",
    "name": "Northern Kentucky (NKU)",
    "location": "Highland Heights, Kentucky",
    "state": "KY",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Norse",
    "headCoach": "Tom Poitras",
    "coachEmail": "norsesoccer@nku.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21200,
    "roomAndBoardUSD": 11400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "18% (5/28名)",
    "notes": "NKU Soccer Stadium in Cincinnati metro area.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Norse",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生5名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Northern+Kentucky+(NKU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northern+Kentucky+(NKU)+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均188位 (2026年 203位 / 2025年 187位 / 2024年 173位)"
  },
  {
    "id": "purduefortwaynepfw-mens",
    "name": "Purdue Fort Wayne (PFW)",
    "location": "Fort Wayne, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Mastodons",
    "headCoach": "Stephen Gorton",
    "coachEmail": "mastodonsoccer@pfw.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 22100,
    "roomAndBoardUSD": 10900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "4% (1/27名)",
    "notes": "Hefner Soccer Complex in Fort Wayne Indiana.",
    "tags": [
      "Horizon League",
      "Midwest",
      "Mastodons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生1名 / MF 10名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Purdue+Fort+Wayne+(PFW)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Purdue+Fort+Wayne+(PFW)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均136位 (2026年 121位 / 2025年 143位 / 2024年 145位)",
    "siteUrl": "https://gomastodons.com/sports/mens-soccer"
  },
  {
    "id": "robertmorrisuniversi-mens",
    "name": "Robert Morris University",
    "location": "Moon Township, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "Horizon League",
    "gender": "Men",
    "mascot": "Colonials",
    "headCoach": "Jonathan Potter",
    "coachEmail": "colonialssoccer@rmu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 34900,
    "roomAndBoardUSD": 13800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "North Athletic Complex in Pittsburgh metro area.",
    "tags": [
      "Horizon League",
      "Northeast",
      "Colonials",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 12名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Robert+Morris+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Robert+Morris+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均132位 (2026年 147位 / 2025年 154位 / 2024年 96位)",
    "siteUrl": "https://rmucolonials.com/sports/mens-soccer"
  },
  {
    "id": "uncgreensborouncg-mens",
    "name": "UNC Greensboro (UNCG)",
    "location": "Greensboro, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Spartans",
    "headCoach": "Chris Rich",
    "coachEmail": "uncgsoccer@uncg.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 23500,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "50% (13/26名)",
    "notes": "UNCG Soccer Stadium. 2022 NCAA National Quarterfinalists.",
    "tags": [
      "SoCon",
      "South",
      "Spartans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生13名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Greensboro+(UNCG)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Greensboro+(UNCG)+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均50位 (2026年 87位 / 2025年 27位 / 2024年 35位)"
  },
  {
    "id": "furmanuniversity-mens",
    "name": "Furman University",
    "location": "Greenville, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Paladins",
    "headCoach": "Doug Allison",
    "coachEmail": "paladinsoccer@furman.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 55800,
    "roomAndBoardUSD": 15400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/30名)",
    "notes": "Stone Soccer Stadium. Produced Clint Dempsey and Ricardo Clark.",
    "tags": [
      "SoCon",
      "South",
      "Paladins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生2名 / MF 14名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Furman+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Furman+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均48位 (2026年 67位 / 2025年 14位 / 2024年 63位)",
    "siteUrl": "https://furmanpaladins.com/sports/mens-soccer"
  },
  {
    "id": "merceruniversity-mens",
    "name": "Mercer University",
    "location": "Macon, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "Brad Ruzzo",
    "coachEmail": "mercersoccer@mercer.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 14500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "20% (5/25名)",
    "notes": "Betts Stadium. 5x SoCon Champions in last decade.",
    "tags": [
      "SoCon",
      "South",
      "Bears",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生5名 / MF 14名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Mercer+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Mercer+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均159位 (2026年 200位 / 2025年 169位 / 2024年 109位)"
  },
  {
    "id": "easttennesseestateet-mens",
    "name": "East Tennessee State (ETSU)",
    "location": "Johnson City, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Buccaneers",
    "headCoach": "David Simonsen",
    "coachEmail": "etsusoccer@etsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 28900,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "Summers-Taylor Stadium. Beautiful mountain campus & 50% intl.",
    "tags": [
      "SoCon",
      "South",
      "Buccaneers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 15名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=East+Tennessee+State+(ETSU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=East+Tennessee+State+(ETSU)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均144位 (2026年 123位 / 2025年 203位 / 2024年 106位)",
    "siteUrl": "https://etsubucs.com/sports/mens-soccer"
  },
  {
    "id": "woffordcollege-mens",
    "name": "Wofford College",
    "location": "Spartanburg, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Terriers",
    "headCoach": "Ryan Osborne",
    "coachEmail": "osbornera@wofford.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 51900,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (11/33名)",
    "notes": "Snyder Field. Elite academic private college in SC.",
    "tags": [
      "SoCon",
      "South",
      "Terriers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生11名 / MF 12名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Wofford+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wofford+College+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Mac Thomalla",
    "assistantCoachEmail": "thomallacf@wofford.edu",
    "strengthLevel": 2,
    "strengthNote": "平均120位 (2026年 92位 / 2025年 161位 / 2024年 107位)",
    "siteUrl": "https://woffordterriers.com/sports/mens-soccer"
  },
  {
    "id": "vmi-mens",
    "name": "VMI",
    "location": "Lexington, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "SoCon",
    "gender": "Men",
    "mascot": "Keydets",
    "headCoach": "Nick Regan",
    "coachEmail": "regannj@vmi.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (5/30名)",
    "notes": "Patchin Field in historic Shenandoah Valley Virginia.",
    "tags": [
      "SoCon",
      "South",
      "Keydets",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生5名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=VMI+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=VMI+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jacob Wyrick",
    "assistantCoachEmail": "wyrickjd@vmi.edu",
    "strengthLevel": 1,
    "strengthNote": "平均211位 (2026年 211位 / 2025年 211位 / 2024年 212位)"
  },
  {
    "id": "lipscombuniversity-mens",
    "name": "Lipscomb University",
    "location": "Nashville, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Bisons",
    "headCoach": "Charles Morrow",
    "coachEmail": "charles.morrow@lipscomb.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 14800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "50% (17/34名)",
    "notes": "Lipscomb Complex in Nashville. 3x ASUN Champions & Top 10 rank.",
    "tags": [
      "ASUN",
      "South",
      "Bisons",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生17名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lipscomb+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lipscomb+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Julian Lucumi",
    "assistantCoachEmail": "jmlucumivillegas@lipscomb.edu",
    "strengthLevel": 1,
    "strengthNote": "平均183位 (2026年 189位 / 2025年 174位 / 2024年 186位)",
    "siteUrl": "https://lipscombsports.com/sports/mens-soccer"
  },
  {
    "id": "stetsonuniversity-mens",
    "name": "Stetson University",
    "location": "DeLand, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Hatters",
    "headCoach": "Emmett Rutkowski",
    "coachEmail": "erutkowski@stetson.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 53900,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "44% (12/27名)",
    "notes": "ATC Field in Central Florida with 50% international roster.",
    "tags": [
      "ASUN",
      "South",
      "Hatters",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生12名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Stetson+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Stetson+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Eduardo Jimenez",
    "assistantCoachEmail": "efjimenez@stetson.edu",
    "strengthLevel": 2,
    "strengthNote": "平均145位 (2026年 148位 / 2025年 123位 / 2024年 164位)",
    "siteUrl": "https://gohatters.com/sports/mens-soccer"
  },
  {
    "id": "fgcufloridagulfcoast-mens",
    "name": "FGCU (Florida Gulf Coast)",
    "location": "Fort Myers, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Jesse Cormier",
    "coachEmail": "fgcusoccer@fgcu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 25200,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "43% (12/28名)",
    "notes": "Pickering Field at FGCU Soccer Complex in sunny Fort Myers.",
    "tags": [
      "ASUN",
      "South",
      "Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全28名 / 留学生12名 / MF 11名 (Sr・Gr 3名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=FGCU+(Florida+Gulf+Coast)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=FGCU+(Florida+Gulf+Coast)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均142位 (2026年 140位 / 2025年 95位 / 2024年 192位)",
    "siteUrl": "https://fgcuathletics.com/sports/mens-soccer"
  },
  {
    "id": "bellarmineuniversity-mens",
    "name": "Bellarmine University",
    "location": "Louisville, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Knights",
    "headCoach": "Tim Chastonay",
    "coachEmail": "knightsoccer@bellarmine.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 45800,
    "roomAndBoardUSD": 13500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Frazier Stadium in Louisville Kentucky.",
    "tags": [
      "ASUN",
      "South",
      "Knights",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Bellarmine+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bellarmine+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均151位 (2026年 152位 / 2025年 114位 / 2024年 188位)",
    "siteUrl": "https://athletics.bellarmine.edu/sports/mens-soccer"
  },
  {
    "id": "centralarkansasuca-mens",
    "name": "Central Arkansas (UCA)",
    "location": "Conway, Arkansas",
    "state": "AR",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "Frank Kohlenstein",
    "coachEmail": "ucasoccer@uca.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 16800,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "56% (15/27名)",
    "notes": "Stephens Complex. Highly affordable tuition.",
    "tags": [
      "ASUN",
      "South",
      "Bears",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名) Kaisei Matsudo",
    "rosterStats": "公式ロスター全27名 / 留学生15名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Central+Arkansas+(UCA)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Central+Arkansas+(UCA)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均131位 (2026年 113位 / 2025年 147位 / 2024年 132位)"
  },
  {
    "id": "jacksonvilleuniversi-mens",
    "name": "Jacksonville University",
    "location": "Jacksonville, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Dolphins",
    "headCoach": "Ali Simmons",
    "coachEmail": "dolphinsoccer@ju.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44800,
    "roomAndBoardUSD": 15900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "67% (20/30名)",
    "notes": "Southern Oak Stadium in coastal Florida.",
    "tags": [
      "ASUN",
      "South",
      "Dolphins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生20名 / MF 10名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Jacksonville+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Jacksonville+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均155位 (2026年 159位 / 2025年 127位 / 2024年 178位)"
  },
  {
    "id": "northfloridaunf-mens",
    "name": "North Florida (UNF)",
    "location": "Jacksonville, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Ospreys",
    "headCoach": "Derek Marinatos",
    "coachEmail": "ospreyssoccer@unf.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21800,
    "roomAndBoardUSD": 12100,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "52% (16/31名)",
    "notes": "Hodges Stadium in Jacksonville Florida.",
    "tags": [
      "ASUN",
      "South",
      "Ospreys",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Ryuta Morioka",
    "rosterStats": "公式ロスター全31名 / 留学生16名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=North+Florida+(UNF)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=North+Florida+(UNF)+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均84位 (2026年 54位 / 2025年 46位 / 2024年 152位)"
  },
  {
    "id": "queensuniversityofch-mens",
    "name": "Queens University of Charlotte",
    "location": "Charlotte, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "ASUN",
    "gender": "Men",
    "mascot": "Royals",
    "headCoach": "Oliver Carias",
    "coachEmail": "royalssoccer@queens.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Dickson Field in Charlotte NC.",
    "tags": [
      "ASUN",
      "South",
      "Royals",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Queens+University+of+Charlotte+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Queens+University+of+Charlotte+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均171位 (2026年 160位 / 2025年 163位 / 2024年 189位)",
    "siteUrl": "https://queensathletics.com/sports/mens-soccer"
  },
  {
    "id": "ionauniversity-mens",
    "name": "Iona University",
    "location": "New Rochelle, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Gaels",
    "headCoach": "James Hamilton",
    "coachEmail": "gaelssoccer@iona.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 44200,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "42% (13/31名)",
    "notes": "Mazzella Field. 2019 & 2023 MAAC Champions. NYC suburbs.",
    "tags": [
      "MAAC",
      "Northeast",
      "Gaels",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生13名 / MF 16名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Iona+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Iona+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均123位 (2026年 168位 / 2025年 117位 / 2024年 85位)"
  },
  {
    "id": "quinnipiacuniversity-mens",
    "name": "Quinnipiac University",
    "location": "Hamden, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Bobcats",
    "headCoach": "Eric Da Costa",
    "coachEmail": "bobcatssoccer@qu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 53900,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Quinnipiac Soccer Stadium. 2022 MAAC Champions.",
    "tags": [
      "MAAC",
      "Northeast",
      "Bobcats",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Quinnipiac+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Quinnipiac+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均153位 (2026年 116位 / 2025年 149位 / 2024年 193位)"
  },
  {
    "id": "rideruniversity-mens",
    "name": "Rider University",
    "location": "Lawrenceville, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Broncs",
    "headCoach": "Chad Duernberger",
    "coachEmail": "mduernberger@rider.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "30% (8/27名)",
    "notes": "Ben Cohen Field. 2023 MAAC Champions in NJ.",
    "tags": [
      "MAAC",
      "Northeast",
      "Broncs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生8名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Rider+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Rider+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Reilly Fuller",
    "assistantCoachEmail": "rfuller@rider.edu",
    "strengthLevel": 2,
    "strengthNote": "平均129位 (2026年 103位 / 2025年 197位 / 2024年 87位)",
    "siteUrl": "https://gobroncs.com/sports/mens-soccer"
  },
  {
    "id": "maristcollege-mens",
    "name": "Marist College",
    "location": "Poughkeepsie, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Red Foxes",
    "headCoach": "Matt Viggiano",
    "coachEmail": "redfoxessoccer@marist.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 45800,
    "roomAndBoardUSD": 17500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "44% (12/27名)",
    "notes": "Tenney Stadium along the Hudson River in NY.",
    "tags": [
      "MAAC",
      "Northeast",
      "Red Foxes",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生12名 / MF 19名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Marist+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Marist+College+Soccer+ID+Camp",
    "strengthLevel": 3,
    "strengthNote": "平均110位 (2026年 91位 / 2025年 76位 / 2024年 162位)"
  },
  {
    "id": "sienacollege-mens",
    "name": "Siena College",
    "location": "Loudonville, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Saints",
    "headCoach": "Graciano Brito",
    "coachEmail": "saintssoccer@siena.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 43500,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "62% (16/26名)",
    "notes": "Hickey Field in Capital District New York.",
    "tags": [
      "MAAC",
      "Northeast",
      "Saints",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生16名 / MF 17名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Siena+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Siena+College+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均114位 (2026年 145位 / 2025年 58位 / 2024年 140位)"
  },
  {
    "id": "fairfielduniversity-mens",
    "name": "Fairfield University",
    "location": "Fairfield, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Stags",
    "headCoach": "Carl Rees",
    "coachEmail": "stagssoccer@fairfield.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 55800,
    "roomAndBoardUSD": 17500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "7% (2/30名)",
    "notes": "Lessing Field. Top Jesuit university in coastal Connecticut.",
    "tags": [
      "MAAC",
      "Northeast",
      "Stags",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生2名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Fairfield+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Fairfield+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均117位 (2026年 75位 / 2025年 81位 / 2024年 194位)"
  },
  {
    "id": "manhattanuniversity-mens",
    "name": "Manhattan University",
    "location": "Riverdale, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Jaspers",
    "headCoach": "Jorden Scott",
    "coachEmail": "jaspersoccer@manhattan.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 48900,
    "roomAndBoardUSD": 18900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "42% (14/33名)",
    "notes": "Gaelic Park in New York City. Heavy international roster.",
    "tags": [
      "MAAC",
      "Northeast",
      "Jaspers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生14名 / MF 7名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Manhattan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Manhattan+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均175位 (2026年 193位 / 2025年 172位 / 2024年 160位)",
    "siteUrl": "https://gojaspers.com/sports/mens-soccer"
  },
  {
    "id": "mountstmarys-mens",
    "name": "Mount St. Mary's",
    "location": "Emmitsburg, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Mountaineers",
    "headCoach": "Brett Teach",
    "coachEmail": "mountsoccer@msmary.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 46800,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Waldron Family Stadium in Maryland.",
    "tags": [
      "MAAC",
      "Northeast",
      "Mountaineers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Mount+St.+Mary's+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Mount+St.+Mary's+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均196位 (2026年 198位 / 2025年 191位 / 2024年 198位)"
  },
  {
    "id": "niagarauniversity-mens",
    "name": "Niagara University",
    "location": "Niagara University, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Purple Eagles",
    "headCoach": "Bill Boyle",
    "coachEmail": "wboyle@niagara.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 37900,
    "roomAndBoardUSD": 14500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "56% (15/27名)",
    "notes": "Niagara Field near Niagara Falls and Canadian border.",
    "tags": [
      "MAAC",
      "Northeast",
      "Purple Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "3名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全27名 / 留学生15名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Niagara+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Niagara+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "David Hesch",
    "assistantCoachEmail": "dhesch@niagara.edu",
    "strengthLevel": 1,
    "strengthNote": "平均171位 (2026年 156位 / 2025年 150位 / 2024年 208位)",
    "siteUrl": "https://purpleeagles.com/sports/mens-soccer"
  },
  {
    "id": "canisiusuniversity-mens",
    "name": "Canisius University",
    "location": "Buffalo, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Golden Griffins",
    "headCoach": "Michael Tanke",
    "coachEmail": "griffinssoccer@canisius.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 33900,
    "roomAndBoardUSD": 14800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "21% (6/29名)",
    "notes": "Demske Sports Complex in Buffalo NY.",
    "tags": [
      "MAAC",
      "Northeast",
      "Golden Griffins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生6名 / MF 13名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Canisius+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Canisius+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均201位 (2026年 208位 / 2025年 196位 / 2024年 199位)",
    "siteUrl": "https://gogriffs.com/sports/mens-soccer"
  },
  {
    "id": "saintpetersuniversit-mens",
    "name": "Saint Peter's University",
    "location": "Jersey City, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "MAAC",
    "gender": "Men",
    "mascot": "Peacocks",
    "headCoach": "Julian Richens",
    "coachEmail": "jrichens@saintpeters.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 40500,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "59% (16/27名)",
    "notes": "Jaroschak Field in Jersey City, 5 mins from Manhattan.",
    "tags": [
      "MAAC",
      "Northeast",
      "Peacocks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生16名 / MF 12名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Peter's+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Peter's+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Tom Coulson",
    "assistantCoachEmail": "tcoulson17@saintpeters.edu",
    "strengthLevel": 1,
    "strengthNote": "平均185位 (2026年 154位 / 2025年 193位 / 2024年 209位)",
    "siteUrl": "https://saintpeterspeacocks.com/sports/mens-soccer"
  },
  {
    "id": "saintfrancisuniversi-mens",
    "name": "Saint Francis University (PA)",
    "location": "Loretto, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Red Flash",
    "headCoach": "Shelby Edwards",
    "coachEmail": "sedwards@francis.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (3/16名)",
    "notes": "Stokes Soccerplex. Multiple NEC titles with high European pipeline.",
    "tags": [
      "NEC",
      "Northeast",
      "Red Flash",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全16名 / 留学生3名 / MF 5名 (Sr・Gr 1名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Francis+University+(PA)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Francis+University+(PA)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Connor Oechslin",
    "assistantCoachEmail": "coechslin@francis.edu",
    "strengthLevel": 2,
    "strengthNote": "平均142位 (2025年 160位 / 2024年 123位)",
    "siteUrl": "https://sfuathletics.com/sports/mens-soccer"
  },
  {
    "id": "liulongislandunivers-mens",
    "name": "LIU (Long Island University)",
    "location": "Brooklyn / Brookville, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Sharks",
    "headCoach": "Michael Mordocco",
    "coachEmail": "sharkssoccer@liu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41500,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "44% (11/25名)",
    "notes": "LIU Post Field. 2021 & 2023 NEC Champions in NYC area.",
    "tags": [
      "NEC",
      "Northeast",
      "Sharks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生11名 / MF 7名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=LIU+(Long+Island+University)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=LIU+(Long+Island+University)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均125位 (2026年 135位 / 2025年 129位 / 2024年 110位)"
  },
  {
    "id": "fairleighdickinsonfd-mens",
    "name": "Fairleigh Dickinson (FDU)",
    "location": "Teaneck, New Jersey",
    "state": "NJ",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Knights",
    "headCoach": "Jaymee Highcock",
    "coachEmail": "j.highcock@fdu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 15800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (6/32名)",
    "notes": "University Stadium. 9x NEC Champions under Seth Roland.",
    "tags": [
      "NEC",
      "Northeast",
      "Knights",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生6名 / MF 14名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Fairleigh+Dickinson+(FDU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Fairleigh+Dickinson+(FDU)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Max Aken-Tyers",
    "assistantCoachEmail": "m.akentyers@fdu.edu",
    "strengthLevel": 3,
    "strengthNote": "平均91位 (2026年 71位 / 2025年 71位 / 2024年 131位)"
  },
  {
    "id": "sacredheartuniversit-mens",
    "name": "Sacred Heart University",
    "location": "Fairfield, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "Anthony Anzevui",
    "coachEmail": "msoccer@sacredheart.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 48900,
    "roomAndBoardUSD": 17200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "41% (12/29名)",
    "notes": "Park Avenue Field in coastal Connecticut.",
    "tags": [
      "NEC",
      "Northeast",
      "Pioneers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生12名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Sacred+Heart+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Sacred+Heart+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Oscar Curras",
    "assistantCoachEmail": "msoccer@sacredheart.edu",
    "strengthLevel": 3,
    "strengthNote": "平均100位 (2026年 62位 / 2025年 47位 / 2024年 191位)",
    "siteUrl": "https://sacredheartpioneers.com/sports/mens-soccer"
  },
  {
    "id": "centralconnecticutst-mens",
    "name": "Central Connecticut State (CCSU)",
    "location": "New Britain, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Blue Devils",
    "headCoach": "David Kelly",
    "coachEmail": "ccsusoccer@ccsu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 26800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "CCSU Soccer Field. Affordable Northeast D1 education.",
    "tags": [
      "NEC",
      "Northeast",
      "Blue Devils",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Central+Connecticut+State+(CCSU)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Central+Connecticut+State+(CCSU)+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均199位 (2026年 178位 / 2025年 213位 / 2024年 207位)",
    "siteUrl": "https://www.ccsubluedevils.com/sports/msoc/index"
  },
  {
    "id": "lemoynecollege-mens",
    "name": "Le Moyne College",
    "location": "Syracuse, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Dolphins",
    "headCoach": "Callum Donnelly",
    "coachEmail": "donncal@lemoyne.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 15200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "40% (12/30名)",
    "notes": "Ted Grant Field in Syracuse NY. New D1 transition program.",
    "tags": [
      "NEC",
      "Northeast",
      "Dolphins",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生12名 / MF 8名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Le+Moyne+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Le+Moyne+College+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Casey Murphy",
    "assistantCoachEmail": "murphca@lemoyne.edu",
    "strengthLevel": 1,
    "strengthNote": "平均177位 (2026年 185位 / 2025年 184位 / 2024年 161位)",
    "siteUrl": "https://lemoynedolphins.com/sports/mens-soccer"
  },
  {
    "id": "stonehillcollege-mens",
    "name": "Stonehill College",
    "location": "Easton, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Skyhawks",
    "headCoach": "Jim Reddish",
    "coachEmail": "skyhawkssoccer@stonehill.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 51200,
    "roomAndBoardUSD": 17500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (7/36名)",
    "notes": "W.B. Mason Stadium near Boston.",
    "tags": [
      "NEC",
      "Northeast",
      "Skyhawks",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全36名 / 留学生7名 / MF 14名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Stonehill+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Stonehill+College+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均196位 (2026年 199位 / 2025年 200位 / 2024年 190位)",
    "siteUrl": "https://stonehillskyhawks.com/sports/mens-soccer"
  },
  {
    "id": "howarduniversity-mens",
    "name": "Howard University",
    "location": "Washington, D.C.",
    "state": "DC",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Bison",
    "headCoach": "Phillip Gyau",
    "coachEmail": "phillip.gyau@howard.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 32800,
    "roomAndBoardUSD": 15900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "14% (4/28名)",
    "notes": "Greene Stadium. Historic HBCU with 2x National Championships.",
    "tags": [
      "NEC",
      "Northeast",
      "Bison",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全28名 / 留学生4名 / MF 13名 (Sr・Gr 4名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Howard+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Howard+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jason Gross",
    "assistantCoachEmail": "jason.gross@howard.edu",
    "strengthLevel": 1,
    "strengthNote": "平均207位 (2026年 210位 / 2025年 208位 / 2024年 202位)",
    "siteUrl": "https://hubison.com/sports/mens-soccer"
  },
  {
    "id": "mercyhurstuniversity-mens",
    "name": "Mercyhurst University",
    "location": "Erie, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Lakers",
    "headCoach": "Austin Solomon",
    "coachEmail": "lakerssoccer@mercyhurst.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 42500,
    "roomAndBoardUSD": 14900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "Saxon Stadium in Erie PA.",
    "tags": [
      "NEC",
      "Northeast",
      "Lakers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Mercyhurst+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Mercyhurst+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均167位 (2026年 176位 / 2025年 209位 / 2024年 116位)",
    "siteUrl": "https://hurstathletics.com/sports/mens-soccer"
  },
  {
    "id": "chicagostateuniversi-mens",
    "name": "Chicago State University",
    "location": "Chicago, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "NEC",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "Norris Howze",
    "coachEmail": "cougarssoccer@csu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 18900,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/26名)",
    "notes": "Gwendolyn Brooks Field in Chicago Illinois.",
    "tags": [
      "NEC",
      "Midwest",
      "Cougars",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全26名 / 留学生4名 / MF 9名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Chicago+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Chicago+State+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均208位 (2026年 212位 / 2025年 212位 / 2024年 201位)",
    "siteUrl": "https://www.gocsucougars.com/sports/mens-soccer"
  },
  {
    "id": "siuedwardsvillesiue-mens",
    "name": "SIU Edwardsville (SIUE)",
    "location": "Edwardsville, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "OVC",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "Cale Wassermann",
    "coachEmail": "siuesoccer@siue.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 13900,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "44% (11/25名)",
    "notes": "Korte Stadium. 1979 National Champions. 2023 undefeated OVC.",
    "tags": [
      "OVC",
      "Midwest",
      "Cougars",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全25名 / 留学生11名 / MF 10名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=SIU+Edwardsville+(SIUE)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=SIU+Edwardsville+(SIUE)+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均136位 (2026年 181位 / 2025年 166位 / 2024年 62位)",
    "siteUrl": "https://siuecougars.com/sports/mens-soccer"
  },
  {
    "id": "libertyuniversity-mens",
    "name": "Liberty University",
    "location": "Lynchburg, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "OVC",
    "gender": "Men",
    "mascot": "Flames",
    "headCoach": "Kelly Findley",
    "coachEmail": "flamessoccer@liberty.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 24900,
    "roomAndBoardUSD": 12200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "60% (15/25名)",
    "notes": "Osborne Stadium. Multi-million dollar campus facilities.",
    "tags": [
      "OVC",
      "South",
      "Flames",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Kyohei Eguchi",
    "rosterStats": "公式ロスター全25名 / 留学生15名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Liberty+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Liberty+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均137位 (2026年 94位 / 2025年 144位 / 2024年 174位)"
  },
  {
    "id": "lindenwooduniversity-mens",
    "name": "Lindenwood University",
    "location": "St. Charles, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "OVC",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "Kris Bertsch",
    "coachEmail": "lionssoccer@lindenwood.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 10900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (14/29名)",
    "notes": "Hunter Stadium in St. Louis metropolitan area.",
    "tags": [
      "OVC",
      "Midwest",
      "Lions",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生14名 / MF 8名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lindenwood+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lindenwood+University+Soccer+ID+Camp",
    "strengthLevel": 2,
    "strengthNote": "平均132位 (2026年 171位 / 2025年 91位 / 2024年 134位)",
    "siteUrl": "https://lindenwoodlions.com/sports/mens-soccer"
  },
  {
    "id": "easternillinoisunive-mens",
    "name": "Eastern Illinois University",
    "location": "Charleston, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "OVC",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Josh Oakley",
    "coachEmail": "eiusoccer@eiu.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 15800,
    "roomAndBoardUSD": 10800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "65% (20/31名)",
    "notes": "Lakeside Field. Historic collegiate soccer program.",
    "tags": [
      "OVC",
      "Midwest",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "4名 (公式ロスター確認) Kai Odagiri, Shuto Ishikawa, Sein Hatamoto, Keidin Green",
    "rosterStats": "公式ロスター全31名 / 留学生20名 / MF 8名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Eastern+Illinois+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Eastern+Illinois+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均193位 (2026年 201位 / 2025年 167位 / 2024年 210位)",
    "siteUrl": "https://eiupanthers.com/sports/mens-soccer"
  },
  {
    "id": "southernindianausi-mens",
    "name": "Southern Indiana (USI)",
    "location": "Evansville, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D1",
    "conference": "OVC",
    "gender": "Men",
    "mascot": "Screaming Eagles",
    "headCoach": "Mat Santoro",
    "coachEmail": "usisoccer@usi.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 21500,
    "roomAndBoardUSD": 10900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/26名)",
    "notes": "Strassweg Field in Evansville Indiana.",
    "tags": [
      "OVC",
      "Midwest",
      "Screaming Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Ahiro Nakamae",
    "rosterStats": "公式ロスター全26名 / 留学生4名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Southern+Indiana+(USI)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Southern+Indiana+(USI)+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均203位 (2026年 209位 / 2025年 190位 / 2024年 211位)"
  },
  {
    "id": "highpointuniversity-mens",
    "name": "High Point University",
    "location": "High Point, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Zach Haines",
    "coachEmail": "hpusoccer@highpoint.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 42900,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/26名)",
    "notes": "Vert Stadium. 4x Big South Champions with Top 25 national ranking.",
    "tags": [
      "Big South",
      "South",
      "Panthers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生4名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=High+Point+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=High+Point+University+Soccer+ID+Camp",
    "strengthLevel": 4,
    "strengthNote": "平均41位 (2026年 69位 / 2025年 15位 / 2024年 40位)",
    "siteUrl": "https://highpointpanthers.com/sports/mens-soccer"
  },
  {
    "id": "winthropuniversity-mens",
    "name": "Winthrop University",
    "location": "Rock Hill, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Daniel Ridenhour",
    "coachEmail": "eaglessoccer@winthrop.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 30500,
    "roomAndBoardUSD": 10800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (16/29名)",
    "notes": "Eagle Field in Rock Hill South Carolina.",
    "tags": [
      "Big South",
      "South",
      "Eagles",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認) Shion Hayashi, Shota Kawagoe",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Winthrop+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Winthrop+University+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均181位 (2026年 151位 / 2025年 210位 / 2024年 182位)",
    "siteUrl": "https://winthropeagles.com/sports/mens-soccer"
  },
  {
    "id": "gardner-webbuniversi-mens",
    "name": "Gardner-Webb University",
    "location": "Boiling Springs, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Runnin' Bulldogs",
    "headCoach": "Jonathan Lagos",
    "coachEmail": "msoccer@gardner-webb.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 32800,
    "roomAndBoardUSD": 11400,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "58% (19/33名)",
    "notes": "Greene-Harbison Stadium in North Carolina.",
    "tags": [
      "Big South",
      "South",
      "Runnin' Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生19名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Gardner-Webb+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Gardner-Webb+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Josh Nakayama",
    "assistantCoachEmail": "msoccer@gardner-webb.edu",
    "strengthLevel": 4,
    "strengthNote": "平均55位 (2026年 78位 / 2025年 37位 / 2024年 51位)",
    "siteUrl": "https://gwusports.com/sports/mens-soccer"
  },
  {
    "id": "longwooduniversity-mens",
    "name": "Longwood University",
    "location": "Farmville, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Lancers",
    "headCoach": "Paul Gilbert",
    "coachEmail": "gilbertpe@longwood.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 31200,
    "roomAndBoardUSD": 12500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (16/29名)",
    "notes": "Athletics Complex in Virginia.",
    "tags": [
      "Big South",
      "South",
      "Lancers",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 8名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Longwood+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Longwood+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Yuriy Sadula",
    "assistantCoachEmail": "sadulay@longwood.edu",
    "strengthLevel": 1,
    "strengthNote": "平均155位 (2026年 96位 / 2025年 188位 / 2024年 180位)"
  },
  {
    "id": "presbyteriancollege-mens",
    "name": "Presbyterian College",
    "location": "Clinton, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Blue Hose",
    "headCoach": "Nick Finotti",
    "coachEmail": "nafinotti@presby.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 41500,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (14/37名)",
    "notes": "Martin Stadium in Clinton South Carolina.",
    "tags": [
      "Big South",
      "South",
      "Blue Hose",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全37名 / 留学生14名 / MF 16名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Presbyterian+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Presbyterian+College+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Paul Jones",
    "assistantCoachEmail": "pjones@presby.edu",
    "strengthLevel": 1,
    "strengthNote": "平均181位 (2026年 213位 / 2025年 145位 / 2024年 185位)",
    "siteUrl": "https://gobluehose.com/sports/mens-soccer"
  },
  {
    "id": "uncasheville-mens",
    "name": "UNC Asheville",
    "location": "Asheville, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Danny Frid",
    "coachEmail": "dfrid@unca.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 23900,
    "roomAndBoardUSD": 11200,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (16/29名)",
    "notes": "Greenwood Field in beautiful Asheville NC mountain region.",
    "tags": [
      "Big South",
      "South",
      "Bulldogs",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "2名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 6名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Asheville+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Asheville+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Derek Neidlinger",
    "assistantCoachEmail": "dneidlin@unca.edu",
    "strengthLevel": 2,
    "strengthNote": "平均141位 (2026年 130位 / 2025年 148位 / 2024年 146位)",
    "siteUrl": "https://uncabulldogs.com/sports/mens-soccer"
  },
  {
    "id": "radforduniversity-mens",
    "name": "Radford University",
    "location": "Radford, Virginia",
    "state": "VA",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Highlanders",
    "headCoach": "Andy Cormack",
    "coachEmail": "acormack1@radford.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 25800,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (9/24名)",
    "notes": "Cupp Stadium in southwestern Virginia.",
    "tags": [
      "Big South",
      "South",
      "Highlanders",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全24名 / 留学生9名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Radford+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Radford+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ryan Palmbaum",
    "assistantCoachEmail": "rpalmbaum@radford.edu",
    "strengthLevel": 1,
    "strengthNote": "平均199位 (2026年 188位 / 2025年 204位 / 2024年 206位)",
    "siteUrl": "https://radfordathletics.com/sports/mens-soccer"
  },
  {
    "id": "uscupstate-mens",
    "name": "USC Upstate",
    "location": "Spartanburg, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D1",
    "conference": "Big South",
    "gender": "Men",
    "mascot": "Spartans",
    "headCoach": "Scott Halkett",
    "coachEmail": "spartanssoccer@uscupstate.edu",
    "targetGPA": 3.2,
    "minTOEFL": 75,
    "annualTuitionUSD": 24500,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "52% (15/29名)",
    "notes": "County University Soccer Stadium in Spartanburg SC.",
    "tags": [
      "Big South",
      "South",
      "Spartans",
      "D1 Men's Soccer"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生15名 / MF 14名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=USC+Upstate+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=USC+Upstate+Soccer+ID+Camp",
    "strengthLevel": 1,
    "strengthNote": "平均162位 (2026年 134位 / 2025年 158位 / 2024年 195位)"
  },
  {
    "id": "sdsu-mens",
    "name": "San Diego State University (SDSU)",
    "location": "San Diego, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D1",
    "conference": "WAC",
    "gender": "Men",
    "mascot": "Aztecs",
    "headCoach": "Ryan Hopkins",
    "coachEmail": "aztecssoccer@sdsu.edu",
    "annualTuitionUSD": 20400,
    "roomAndBoardUSD": 18900,
    "scholarshipMax": "Max 28 (Roster Limit: 28 / 新ルール)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (5/26名)",
    "notes": "SDSU Sports Deck overlooking San Diego. Top West Coast recruiting powerhouse.",
    "tags": [
      "WAC",
      "San Diego",
      "Aztecs"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全26名 / 留学生5名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://goaztecs.com/sports/mens-soccer/recruiting",
    "campUrl": "https://aztecsoccercamps.com/",
    "assistantCoach": "Adrian Gomez",
    "assistantCoachEmail": "agomez@sdsu.edu",
    "strengthLevel": 3,
    "strengthNote": "平均95位 (2026年 129位 / 2025年 99位 / 2024年 57位)",
    "siteUrl": "https://goaztecs.com/sports/mens-soccer"
  },
  {
    "id": "franklinpierce-mens",
    "name": "Franklin Pierce University",
    "location": "Rindge, New Hampshire",
    "state": "NH",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE10",
    "gender": "Men",
    "mascot": "Ravens",
    "headCoach": "Diego Thielen",
    "coachEmail": "thielend@franklinpierce.edu",
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 14800,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "40% (20/50名)",
    "notes": "2022・2023 D2全米連覇（無敗優勝）。留学生に手厚い奨学金を支給する全米屈指のD2最強校。",
    "tags": [
      "D2 Champion",
      "NE10",
      "High Scholarships",
      "Japan Pipeline"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全50名 / 留学生20名 / MF 16名 (Sr・Gr 5名) / 出身地不明2名",
    "questionnaireUrl": "https://fpuravens.com/sports/mens-soccer/recruits",
    "campUrl": "https://ravenssoccercamps.com/",
    "assistantCoach": "Scotty Murray",
    "assistantCoachEmail": "murrays@franklinpierce.edu",
    "coachVerified": true,
    "siteUrl": "https://fpuravens.com/sports/mens-soccer"
  },
  {
    "id": "charleston-mens",
    "name": "University of Charleston",
    "location": "Charleston, West Virginia",
    "state": "WV",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "MEC",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "Daniel Smee",
    "coachEmail": "ucmenssoccer@ucwv.edu",
    "annualTuitionUSD": 32500,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "64% (34/53名)",
    "notes": "2回全米制覇（2017, 2019）。MECカンファレンス圧倒的王者。プロ輩出率が極めて高い。",
    "tags": [
      "2x D2 Champion",
      "MEC",
      "High Pro Output",
      "High International"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全53名 / 留学生34名 / MF 14名 (Sr・Gr 5名) / 出身地不明1名",
    "questionnaireUrl": "https://ucgoldeneagles.com/sports/mens-soccer/recruiting",
    "campUrl": "https://charlestonsoccercamps.com/",
    "assistantCoach": "Corbin Bowers",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://ucgoldeneagles.com/sports/mens-soccer"
  },
  {
    "id": "calpolypomona-mens",
    "name": "Cal Poly Pomona",
    "location": "Pomona, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Broncos",
    "headCoach": "Matt O'Sullivan",
    "coachEmail": "mjosullivan@cpp.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 16500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "19% (6/32名)",
    "notes": "西海岸トップD2。2015年全米準優勝。工学・ビジネス専攻に強く奨学金枠あり。",
    "tags": [
      "CCAA",
      "California",
      "West Top 5",
      "Great Academics"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生6名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://broncoathletics.com/sports/mens-soccer/recruiting",
    "campUrl": "https://cppbroncosoccercamp.com/",
    "assistantCoach": "Eddie Hurtado",
    "assistantCoachEmail": "ehurtado@cpp.edu",
    "coachVerified": true,
    "siteUrl": "https://broncoathletics.com/sports/mens-soccer"
  },
  {
    "id": "lynn-mens",
    "name": "Lynn University",
    "location": "Boca Raton, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Fighting Knights",
    "headCoach": "John Rootes",
    "coachEmail": "jrootes@lynn.edu",
    "annualTuitionUSD": 41900,
    "roomAndBoardUSD": 14200,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "67% (20/30名)",
    "notes": "3回全米制覇（2003, 2012, 2014）。最激戦サンシャインステート・カンファレンス(SSC)の象徴。",
    "tags": [
      "3x D2 Champion",
      "SSC",
      "Florida",
      "Sunshine State"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生20名 / MF 11名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://lynnknights.com/sports/mens-soccer/recruiting",
    "campUrl": "https://lynnsoccercamps.com/",
    "assistantCoach": "Anthony Desperito",
    "assistantCoachEmail": "adesperito@lynn.edu",
    "coachVerified": true
  },
  {
    "id": "tampa-mens",
    "name": "University of Tampa",
    "location": "Tampa, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Spartans",
    "headCoach": "Adrian Bush",
    "coachEmail": "spartansoccer@ut.edu",
    "annualTuitionUSD": 32800,
    "roomAndBoardUSD": 12900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "要確認",
    "notes": "3回全米制覇（1981, 1994, 2001）。Pepin Stadiumはプロ級天然芝。フロリダ屈指の環境。",
    "tags": [
      "3x D2 Champion",
      "SSC",
      "Tampa FL",
      "Pepin Stadium"
    ],
    "japanesePlayers": "受入実績あり",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://tampaspartans.com/sports/mens-soccer/recruiting",
    "campUrl": "https://tampaspartansoccercamps.com/",
    "assistantCoach": "Malcolm Stewart",
    "assistantCoachEmail": "mstewart@ut.edu",
    "siteUrl": "https://tampaspartans.com/sports/mens-soccer"
  },
  {
    "id": "wingate-mens",
    "name": "Wingate University",
    "location": "Wingate, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SAC",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Gary Hamill",
    "coachEmail": "hamill@wingate.edu",
    "annualTuitionUSD": 41200,
    "roomAndBoardUSD": 13500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "55% (16/29名)",
    "notes": "2016年 NCAA D2 全米王者。サウス・アトランティック・カンファレンス(SAC)の強豪。",
    "tags": [
      "2016 D2 Champion",
      "SAC",
      "North Carolina",
      "High Scholarships"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 13名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://wingatebulldogs.com/sports/mens-soccer/recruiting",
    "campUrl": "https://wingatesoccercamps.com/",
    "assistantCoach": "Joey Calandra",
    "assistantCoachEmail": "jcalandra@wingate.edu",
    "coachVerified": true,
    "siteUrl": "https://wingatebulldogs.com/sports/mens-soccer"
  },
  {
    "id": "tufts-mens",
    "name": "Tufts University",
    "location": "Medford, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D3",
    "conference": "NESCAC",
    "gender": "Men",
    "mascot": "Jumbos",
    "headCoach": "Kyle Dezotell",
    "coachEmail": "kyle.dezotell@tufts.edu",
    "annualTuitionUSD": 66358,
    "roomAndBoardUSD": 17800,
    "scholarshipMax": "Need-based Financial Aid Only (No Athletic)",
    "intlFriendlyRating": "Medium-High",
    "intlRosterPct": "10% (3/31名)",
    "notes": "4x NCAA D3 Champions (2014, 2016, 2018, 2019). Top Boston academic reputation with pro soccer caliber coaching.",
    "tags": [
      "NESCAC",
      "D3 Powerhouse",
      "Boston",
      "Ivy Caliber"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生3名 / MF 10名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Tufts+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Tufts+University+Soccer+ID+Camp"
  },
  {
    "id": "chicago-mens",
    "name": "University of Chicago",
    "location": "Chicago, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D3",
    "conference": "UAA",
    "gender": "Men",
    "mascot": "Maroons",
    "headCoach": "Pat Flinn",
    "coachEmail": "pflinn@uchicago.edu",
    "annualTuitionUSD": 65619,
    "roomAndBoardUSD": 18700,
    "scholarshipMax": "Need-based Aid Only (100% need met)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (4/27名)",
    "notes": "2022 NCAA D3 National Champions. World top-10 university academically with an elite soccer team.",
    "tags": [
      "World Top 10",
      "D3 Champion",
      "UAA"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生4名 / MF 6名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Chicago+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Chicago+Soccer+ID+Camp",
    "siteUrl": "https://athletics.uchicago.edu/sports/mens-soccer"
  },
  {
    "id": "messiah-mens",
    "name": "Messiah University",
    "location": "Mechanicsburg, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D3",
    "conference": "MAC Commonwealth",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "Brad McCarty",
    "coachEmail": "bmccarty@messiah.edu",
    "annualTuitionUSD": 40500,
    "roomAndBoardUSD": 12400,
    "scholarshipMax": "Academic Merit Scholarships up to $22k/yr",
    "intlFriendlyRating": "Medium",
    "intlRosterPct": "要確認",
    "notes": "11x NCAA D3 National Champions. The most legendary D3 soccer program in history.",
    "tags": [
      "11x Champion",
      "D3 Legend",
      "Great Culture"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Messiah+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Messiah+University+Soccer+ID+Camp",
    "siteUrl": "https://gomessiah.com/sports/mens-soccer"
  },
  {
    "id": "williams-mens",
    "name": "Williams College",
    "location": "Williamstown, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D3",
    "conference": "NESCAC",
    "gender": "Men",
    "mascot": "Ephs",
    "headCoach": "Steffen Siebert",
    "coachEmail": "williamssoccer@williams.edu",
    "annualTuitionUSD": 64800,
    "roomAndBoardUSD": 16900,
    "scholarshipMax": "Need-based Aid (100% Demonstrated Need)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/28名)",
    "notes": "#1 Ranked Liberal Arts College in America. 1995 National Champions.",
    "tags": [
      "NESCAC",
      "US #1 Liberal Arts",
      "Need Aid"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生0名 / MF 10名 (Sr・Gr 5名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Williams+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Williams+College+Soccer+ID+Camp"
  },
  {
    "id": "grandview-mens",
    "name": "Grand View University",
    "location": "Des Moines, Iowa",
    "state": "IA",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Vikings",
    "headCoach": "David Groves",
    "coachEmail": "dgroves@grandview.edu",
    "annualTuitionUSD": 33480,
    "roomAndBoardUSD": 10900,
    "scholarshipMax": "Max 12.0 full athletic scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "62% (21/34名)",
    "notes": "NAIAの強豪。ロスターに日本人選手4名(公式確認)、留学生比率62%。All-American選出実績多数。手厚い奨学金。",
    "tags": [
      "NAIA Powerhouse",
      "Heart Conference",
      "Iowa",
      "High Scholarships",
      "Japan Friendly",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "4名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生21名 / MF 11名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://gvvikings.com/sports/mens-soccer/recruiting",
    "campUrl": "https://gvvikingsoccercamps.com/",
    "assistantCoach": "Jonathan Rivera",
    "assistantCoachEmail": "jrivera@grandview.edu",
    "coachVerified": true,
    "siteUrl": "https://gvvikings.com/sports/mens-soccer"
  },
  {
    "id": "keiser-mens",
    "name": "Keiser University",
    "location": "West Palm Beach, Florida",
    "state": "FL",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Seahawks",
    "headCoach": "Gavin Oldham",
    "coachEmail": "goldham@keiseruniversity.edu",
    "annualTuitionUSD": 24500,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 12.0 full athletic scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "90% (28/31名)",
    "notes": "2021年NAIA全米王者。留学生比率85%のフロリダ強豪。手厚いフルスカラシップ枠。",
    "tags": [
      "NAIA Champion",
      "Florida",
      "High Scholarships",
      "Japanese Friendly",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全31名 / 留学生28名 / MF 15名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://kuseahawks.com/sports/mens-soccer/recruits",
    "campUrl": "https://keisersoccercamps.com/",
    "assistantCoach": "Sam McNutt",
    "assistantCoachEmail": "smcnutt@keiseruniversity.edu",
    "coachVerified": true,
    "siteUrl": "https://kuseahawks.com/sports/mens-soccer"
  },
  {
    "id": "lindseywilson-mens",
    "name": "Lindsey Wilson College",
    "location": "Columbia, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Blue Raiders",
    "headCoach": "Sicelo Buthelezi",
    "coachEmail": "buthelezis@lindsey.edu",
    "annualTuitionUSD": 26800,
    "roomAndBoardUSD": 9900,
    "scholarshipMax": "Max 12.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "84% (21/25名)",
    "notes": "9x NAIA National Champions. Renowned for developing international student-athletes into professionals.",
    "tags": [
      "9x NAIA Champion",
      "Pro Development",
      "High International",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全25名 / 留学生21名 / MF 7名 (Sr・Gr 1名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Lindsey+Wilson+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lindsey+Wilson+College+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jack Cousin",
    "assistantCoachEmail": "cousinj@lindsey.edu",
    "siteUrl": "https://lindseyathletics.com/sports/mens-soccer"
  },
  {
    "id": "midamerica-mens",
    "name": "MidAmerica Nazarene (MNU)",
    "location": "Olathe, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "Kevin Wardlaw",
    "coachEmail": "kpwardlaw@mnu.edu",
    "annualTuitionUSD": 25900,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 12.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "35% (18/52名)",
    "notes": "2023年NAIA全米王者！日本人選手が主力として全米制覇を牽引。",
    "tags": [
      "2023 NAIA Champion",
      "Kansas City Area",
      "Japanese Roster",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全52名 / 留学生18名 / MF 20名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://mnusports.com/sports/mens-soccer/recruits",
    "campUrl": "https://mnusoccercamps.com/",
    "assistantCoach": "Atanas Karagyaurov",
    "assistantCoachEmail": "apkaragyaurov@mnu.edu",
    "coachVerified": true,
    "siteUrl": "https://mnusports.com/sports/mens-soccer"
  },
  {
    "id": "oklahomawesleyan-mens",
    "name": "Oklahoma Wesleyan University",
    "location": "Bartlesville, Oklahoma",
    "state": "OK",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "KCAC",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Jamie Peterson",
    "coachEmail": "okwusoccer@okwu.edu",
    "annualTuitionUSD": 29800,
    "roomAndBoardUSD": 9800,
    "scholarshipMax": "Max 12.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "要確認",
    "notes": "Perennial NAIA Top 5 team with multiple National Final Four appearances.",
    "tags": [
      "NAIA Elite",
      "Oklahoma",
      "High Scholarships",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Oklahoma+Wesleyan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Oklahoma+Wesleyan+University+Soccer+ID+Camp",
    "siteUrl": "https://okwueagles.com/sports/mens-soccer"
  },
  {
    "id": "riogrande-mens",
    "name": "University of Rio Grande",
    "location": "Rio Grande, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "RSC",
    "gender": "Men",
    "mascot": "RedStorm",
    "headCoach": "Scott Morrissey",
    "coachEmail": "riogrande@rio.edu",
    "annualTuitionUSD": 21500,
    "roomAndBoardUSD": 9200,
    "scholarshipMax": "Max 12.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "要確認",
    "notes": "2x NAIA National Champions. Famous soccer powerhouse under Scott Morrissey.",
    "tags": [
      "2x NAIA Champion",
      "Ohio",
      "High International",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Rio+Grande+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Rio+Grande+Soccer+ID+Camp"
  },
  {
    "id": "iowawestern-mens",
    "name": "Iowa Western Community College",
    "location": "Council Bluffs, Iowa",
    "state": "IA",
    "region": "Midwest",
    "division": "NJCAA D1",
    "conference": "ICCAC",
    "gender": "Men",
    "mascot": "Reivers",
    "headCoach": "Mike Brown",
    "coachEmail": "mbrown@iwcc.edu",
    "annualTuitionUSD": 9200,
    "roomAndBoardUSD": 8400,
    "scholarshipMax": "Max 18.0 full scholarships (NJCAA D1 Full Ride possible)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "77% (33/43名)",
    "notes": "Multiple NJCAA National Champions (2013, 2021, 2022). #1 junior college transfer pipeline to NCAA D1 universities. 2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA D1 Powerhouse",
      "Full Scholarships",
      "Top D1 Transfer Route"
    ],
    "japanesePlayers": "13名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全43名 / 留学生33名 / MF 16名 (2年生以上 4名) / 出身地不明2名",
    "questionnaireUrl": "https://goreivers.com/sports/mens-soccer/recruiting",
    "campUrl": "https://reiversoccercamp.com/",
    "assistantCoach": "Juan Garcia",
    "assistantCoachEmail": "jgarcia@iwcc.edu",
    "japanesePct": "30% (13/43名)",
    "fwStats": "FW 8名 / 全43名 (19%)",
    "siteUrl": "https://goreivers.com/sports/msoc"
  },
  {
    "id": "tylerjc-mens",
    "name": "Tyler Junior College",
    "location": "Tyler, Texas",
    "state": "TX",
    "region": "South",
    "division": "NJCAA D1",
    "conference": "Region 14",
    "gender": "Men",
    "mascot": "Apaches",
    "headCoach": "Steve Clements",
    "coachEmail": "sclements@tjc.edu",
    "annualTuitionUSD": 6800,
    "roomAndBoardUSD": 7800,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "要確認",
    "notes": "6x NJCAA National Champions. Unbelievable coaching legacy and direct springboard to NCAA D1 & MLS draft.",
    "tags": [
      "6x National Champion",
      "Texas",
      "Low Cost",
      "Elite Gateway",
      "NJCAA全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Tyler+Junior+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Tyler+Junior+College+Soccer+ID+Camp",
    "japanesePct": "要確認 (公式ロスター取得不可)",
    "fwStats": "要確認 (公式ロスター取得不可)",
    "siteUrl": "https://www.apacheathletics.com/sports/mens-soccer"
  },
  {
    "id": "monroe-mens",
    "name": "Monroe University (New York)",
    "location": "New Rochelle, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "要確認 (2026-27〜 NCAA D2 移行)",
    "gender": "Men",
    "mascot": "Mustangs",
    "headCoach": "Marcus DiBernardo",
    "coachEmail": "mdibernardo@monroeu.edu",
    "annualTuitionUSD": 16500,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "65% (39/60名)",
    "notes": "2026-27シーズンからNJCAA D1よりNCAA Division IIへ移行（旧称 Monroe College → 現 Monroe University）。NJCAA D1 全米王者2回(2019, 2022)の実績。NYC近郊。D2のため奨学金枠・編入規定は要確認。",
    "tags": [
      "NYC Metro",
      "NJCAA Champion",
      "High Pro Output",
      "D2移行(2026-27)"
    ],
    "japanesePlayers": "3名 (公式ロスター確認 / 出身地不明5名)",
    "rosterStats": "公式ロスター全60名 / 留学生39名 / MF 23名 (Sr・Gr 2名) / 出身地不明5名",
    "questionnaireUrl": "https://www.google.com/search?q=Monroe+University+(New+York)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Monroe+University+(New+York)+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Jay Myers",
    "assistantCoachEmail": "jmyers@monroeu.edu",
    "siteUrl": "https://www.monroeumustangs.com/sports/mens-soccer",
    "japanesePct": "5% (3/60名)",
    "fwStats": "FW 15名 / 全60名 (25%) ※位置未掲載4名"
  },
  {
    "id": "saltlake-mens",
    "name": "Salt Lake Community College",
    "location": "Salt Lake City, Utah",
    "state": "UT",
    "region": "West",
    "division": "NJCAA D1",
    "conference": "SWAC",
    "gender": "Men",
    "mascot": "Bruins",
    "headCoach": "Mark Davis",
    "coachEmail": "mark.davis@slcc.edu",
    "annualTuitionUSD": 10400,
    "roomAndBoardUSD": 8500,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "52% (15/29名)",
    "notes": "2026 NJCAA D1 全米準優勝。2020 NJCAA D1 National Champions. High performance training facilities partnering with Real Salt Lake (MLS).",
    "tags": [
      "NJCAA 2026 全米準優勝",
      "Utah",
      "MLS Partnership",
      "NJCAA Champion",
      "NJCAA全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生15名 / MF 8名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Salt+Lake+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Salt+Lake+Community+College+Soccer+ID+Camp",
    "siteUrl": "https://slccbruins.com/sports/mens-soccer",
    "japanesePct": "0% (0/29名)",
    "fwStats": "FW 9名 / 全29名 (31%)"
  },
  {
    "id": "barton-mens",
    "name": "Barton Community College",
    "location": "Great Bend, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NJCAA D1",
    "conference": "Jayhawk Conference (KJCCC)",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "Rafael Simmons",
    "coachEmail": "bartonsoccer@bartonccc.edu",
    "annualTuitionUSD": 5800,
    "roomAndBoardUSD": 6900,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "82% (32/39名)",
    "notes": "2023 NJCAA D1 National Runner-up. Jayhawk Conference powerhouse with heavy international recruitment. 2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA Elite",
      "Kansas",
      "Low Cost",
      "High Scholarships",
      "NJCAA全米大会出場"
    ],
    "japanesePlayers": "10名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全39名 / 留学生32名 / MF 14名 (2年生以上 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Barton+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Barton+Community+College+Soccer+ID+Camp",
    "japanesePct": "26% (10/39名)",
    "fwStats": "FW 11名 / 全39名 (28%)",
    "siteUrl": "https://www.bartonsports.com/sports/msoc"
  },
  {
    "id": "calstatela-mens",
    "name": "Cal State Los Angeles (CSULA)",
    "location": "Los Angeles, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "Michael Erush",
    "coachEmail": "merush@calstatela.edu",
    "assistantCoach": "Dallas Jaussi",
    "assistantCoachEmail": "djaussi@calstatela.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 16800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "32% (12/38名)",
    "japanesePlayers": "2名 (公式ロスター確認) Sho Toda, Taito Yoshihara",
    "rosterStats": "公式ロスター全38名 / 留学生12名 / MF 8名 (Sr・Gr 4名)",
    "notes": "2021年 NCAA D2 全米王者！CCAA連覇。ロサンゼルス中心部に位置しプロスカウト注目度抜群。",
    "tags": [
      "2021 D2 Champion",
      "CCAA",
      "Los Angeles",
      "California D2"
    ],
    "questionnaireUrl": "https://lagoldeneagles.com/sports/mens-soccer/recruiting",
    "campUrl": "https://calstatelasoccercamp.com/",
    "coachVerified": true,
    "siteUrl": "https://lagoldeneagles.com/sports/mens-soccer"
  },
  {
    "id": "barry-mens",
    "name": "Barry University",
    "location": "Miami Shores, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Buccaneers",
    "headCoach": "Petsa Ivanovic",
    "coachEmail": "pivanovic@barry.edu",
    "assistantCoach": "David Viana",
    "assistantCoachEmail": "dviana@barry.edu",
    "annualTuitionUSD": 33900,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "58% (19/33名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生19名 / MF 12名 (Sr・Gr 2名)",
    "notes": "2018年 NCAA D2 全米王者！マイアミ近郊の私立名門。テクニカルなポゼッションサッカー。",
    "tags": [
      "2018 D2 Champion",
      "SSC",
      "Miami",
      "Technical Style"
    ],
    "questionnaireUrl": "https://gobarrybucs.com/sports/mens-soccer/recruiting",
    "campUrl": "https://barrysoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://gobarrybucs.com/sports/mens-soccer"
  },
  {
    "id": "midwesternstate-mens",
    "name": "Midwestern State University",
    "location": "Wichita Falls, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Mustangs",
    "headCoach": "Michael Meachum",
    "coachEmail": "michael.meachum@msutexas.edu",
    "assistantCoach": "Patrick Fitzgerald",
    "assistantCoachEmail": "patrick.fitzgerald@msutexas.edu",
    "annualTuitionUSD": 11800,
    "roomAndBoardUSD": 9800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "11% (4/35名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生4名 / MF 12名 (Sr・Gr 0名)",
    "notes": "テキサスNo.1 D2プログラム。テキサス州立で学費が非常に安価。全米Elite Eight常連。",
    "tags": [
      "Lone Star",
      "Texas D2",
      "Low Tuition",
      "Elite Eight"
    ],
    "questionnaireUrl": "https://msumustangs.com/sports/mens-soccer/recruiting",
    "campUrl": "https://midwesternstatesoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://msumustangs.com/sports/mens-soccer"
  },
  {
    "id": "csupueblo-mens",
    "name": "Colorado State University Pueblo",
    "location": "Pueblo, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "ThunderWolves",
    "headCoach": "Thomás Pazo Tourinho",
    "coachEmail": "t.pazotourinho@csupueblo.edu",
    "assistantCoach": "Nick Haas",
    "assistantCoachEmail": "nick.haas@csupueblo.edu",
    "annualTuitionUSD": 17800,
    "roomAndBoardUSD": 11900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "50% (19/38名)",
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全38名 / 留学生19名 / MF 6名 (Sr・Gr 2名)",
    "notes": "2022年 NCAA D2 全米準優勝！日本人選手がレギュラーとして全米ファイナルで活躍。",
    "tags": [
      "2022 Runner-up",
      "RMAC",
      "Colorado",
      "Japan Strong"
    ],
    "questionnaireUrl": "https://gothunderwolves.com/sports/mens-soccer/recruiting",
    "campUrl": "https://csupueblosoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://gothunderwolves.com/sports/mens-soccer"
  },
  {
    "id": "limestone-mens",
    "name": "Limestone University",
    "location": "Gaffney, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SAC",
    "gender": "Men",
    "mascot": "Saints",
    "headCoach": "Ali Pardakhti",
    "coachEmail": "apardakhti@limestone.edu",
    "assistantCoach": "Mark McKeever Staff",
    "assistantCoachEmail": "soccer@limestone.edu",
    "annualTuitionUSD": 27200,
    "roomAndBoardUSD": 11200,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "要確認",
    "japanesePlayers": "受入実績あり",
    "rosterStats": "要確認",
    "notes": "SACカンファレンス強豪。常に全米Top 15にランクイン。留学生主体の攻撃的サッカー。",
    "tags": [
      "SAC",
      "South Carolina",
      "High International",
      "Top 15"
    ],
    "questionnaireUrl": "https://golimestonesaints.com/sports/mens-soccer/recruiting",
    "campUrl": "https://limestonesoccercamps.com/"
  },
  {
    "id": "gannon-mens",
    "name": "Gannon University",
    "location": "Erie, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Golden Knights",
    "headCoach": "Billy Colton",
    "coachEmail": "colton002@gannon.edu",
    "assistantCoach": "Stuart Simons",
    "assistantCoachEmail": "simons002@gannon.edu",
    "annualTuitionUSD": 37200,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "47% (23/49名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明4名)",
    "rosterStats": "公式ロスター全49名 / 留学生23名 / MF 12名 (Sr・Gr 1名) / 出身地不明4名",
    "notes": "2023年 NCAA D2 全米Elite Eight進出！PSACカンファレンス屈指の強豪。",
    "tags": [
      "PSAC",
      "Pennsylvania",
      "Elite Eight",
      "Billy Colton"
    ],
    "questionnaireUrl": "https://gannonsports.com/sports/mens-soccer/recruiting",
    "campUrl": "https://gannonsoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://gannonsports.com/sports/mens-soccer"
  },
  {
    "id": "simonfraser-mens",
    "name": "Simon Fraser University (SFU)",
    "location": "Burnaby, British Columbia / Bellingham WA",
    "state": "WA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "GNAC",
    "gender": "Men",
    "mascot": "Red Leafs",
    "headCoach": "Kevin Harmse",
    "coachEmail": "kharmse@sfu.ca",
    "assistantCoach": "Calahan Hunter",
    "assistantCoachEmail": "soccer@sfu.ca",
    "annualTuitionUSD": 23500,
    "roomAndBoardUSD": 12500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "100% (24/24名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全24名 / 留学生24名 / MF 6名 (Sr・Gr 0名)",
    "notes": "NCAA唯一のカナダ加盟校。全米Final Four進出2回。バンクーバー近郊の最高峰環境。",
    "tags": [
      "GNAC",
      "NCAA Canada",
      "Final Four",
      "Vancouver WA"
    ],
    "questionnaireUrl": "https://athletics.sfu.ca/sports/mens-soccer/recruits",
    "campUrl": "https://sfusoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://athletics.sfu.ca/sports/mens-soccer"
  },
  {
    "id": "lenoirrhyne-mens",
    "name": "Lenoir-Rhyne University",
    "location": "Hickory, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SAC",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "Carlos Rubio",
    "coachEmail": "carlos.rubio@lr.edu",
    "assistantCoach": "Albi Ndrenika",
    "assistantCoachEmail": "soccer@lr.edu",
    "annualTuitionUSD": 42500,
    "roomAndBoardUSD": 13800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "34% (13/38名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全38名 / 留学生13名 / MF 16名 (Sr・Gr 6名)",
    "notes": "2023年 SAC王者 & 全米ランキングTop 10。スペイン・欧州のテクニカルな選手が多数集結。",
    "tags": [
      "SAC",
      "North Carolina",
      "Top 10",
      "Spanish Pipeline"
    ],
    "questionnaireUrl": "https://lrbears.com/sports/mens-soccer/recruiting",
    "campUrl": "https://lrbearssoccercamps.com/",
    "siteUrl": "https://lrbears.com/sports/mens-soccer"
  },
  {
    "id": "rollins-mens",
    "name": "Rollins College",
    "location": "Winter Park, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Tars",
    "headCoach": "Keith Buckley",
    "coachEmail": "kbuckley@rollins.edu",
    "assistantCoach": "Luke Boden",
    "assistantCoachEmail": "lboden@rollins.edu",
    "annualTuitionUSD": 58300,
    "roomAndBoardUSD": 16400,
    "scholarshipMax": "Max 9.0 scholarships + 学業特待",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "47% (16/34名)",
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生16名 / MF 11名 (Sr・Gr 3名)",
    "notes": "2010年 全米準優勝。フロリダ最高峰の学術水準を誇る名門私立リベラルアーツ。",
    "tags": [
      "SSC",
      "Rollins FL",
      "Top Academic D2",
      "Finalist"
    ],
    "questionnaireUrl": "https://rollinssports.com/sports/mens-soccer/recruiting",
    "campUrl": "https://rollinssoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://rollinssports.com/sports/mens-soccer"
  },
  {
    "id": "fortlewis-mens",
    "name": "Fort Lewis College",
    "location": "Durango, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "Skyhawks",
    "headCoach": "David Oberholtzer",
    "coachEmail": "dwoberholtzer@fortlewis.edu",
    "assistantCoach": "Keane Ellis",
    "assistantCoachEmail": "soccer@fortlewis.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "55% (16/29名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 1名)",
    "notes": "3回全米制覇（2005, 2009, 2011）。コロラドの歴史的D2強豪プログラム。",
    "tags": [
      "3x D2 Champion",
      "RMAC",
      "Colorado",
      "Skyhawks"
    ],
    "questionnaireUrl": "https://goskyhawks.com/sports/mens-soccer/recruiting",
    "campUrl": "https://fortlewissoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://goskyhawks.com/sports/mens-soccer"
  },
  {
    "id": "csumontereybay-mens",
    "name": "Cal State Monterey Bay (CSUMB)",
    "location": "Seaside, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Otters",
    "headCoach": "Graeme Jaap",
    "coachEmail": "gjaap@csumb.edu",
    "assistantCoach": "Jack Clink",
    "assistantCoachEmail": "jclink@csumb.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 16200,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "10% (3/29名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明3名)",
    "rosterStats": "公式ロスター全29名 / 留学生3名 / MF 10名 (Sr・Gr 3名) / 出身地不明3名",
    "notes": "2023年 CCAAトーナメント王者！西海岸で急成長を遂げるカリフォルニア州立大学。",
    "tags": [
      "2023 CCAA Champion",
      "California D2",
      "Monterey Bay",
      "Rising Power"
    ],
    "questionnaireUrl": "https://otterathletics.com/sports/mens-soccer/recruiting",
    "campUrl": "https://csumbsoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://otterathletics.com/sports/mens-soccer"
  },
  {
    "id": "chicostate-mens",
    "name": "Chico State (Cal State Chico)",
    "location": "Chico, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Felipe Restrepo",
    "coachEmail": "lrestrepo@csuchico.edu",
    "assistantCoach": "Ross Vartughian",
    "assistantCoachEmail": "rvartughian@csuchico.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 15400,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/31名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生0名 / MF 12名 (Sr・Gr 1名)",
    "notes": "CCAAの伝統校。2003年全米準優勝。熱狂的な地元ファンとハイプレッシングスタイル。",
    "tags": [
      "CCAA",
      "Chico CA",
      "Wildcats",
      "Tradition"
    ],
    "questionnaireUrl": "https://chicowildcats.com/sports/mens-soccer/recruiting",
    "campUrl": "https://chicostatesoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://chicowildcats.com/sports/mens-soccer"
  },
  {
    "id": "csusb-mens",
    "name": "Cal State San Bernardino (CSUSB)",
    "location": "San Bernardino, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Coyotes",
    "headCoach": "Josh Hill",
    "coachEmail": "joshua.hill@csusb.edu",
    "assistantCoach": "Mark Platter",
    "assistantCoachEmail": "soccer@csusb.edu",
    "annualTuitionUSD": 19800,
    "roomAndBoardUSD": 15200,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/33名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生0名 / MF 9名 (Sr・Gr 5名)",
    "notes": "2019年 NCAA D2 全米ベスト4（Final Four）。南カリフォルニアの強豪校。",
    "tags": [
      "CCAA",
      "Final Four 2019",
      "California",
      "Coyotes"
    ],
    "questionnaireUrl": "https://csusbathletics.com/sports/mens-soccer/recruiting",
    "campUrl": "https://csusbsoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://csusbathletics.com/sports/mens-soccer"
  },
  {
    "id": "pba-mens",
    "name": "Palm Beach Atlantic University (PBA)",
    "location": "West Palm Beach, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Sailfish",
    "headCoach": "Lucas Martorana",
    "coachEmail": "lucas_martorana@pba.edu",
    "assistantCoach": "Neal Rudge",
    "assistantCoachEmail": "neal_rudge@pba.edu",
    "annualTuitionUSD": 36800,
    "roomAndBoardUSD": 12900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "67% (20/30名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生20名 / MF 12名 (Sr・Gr 7名)",
    "notes": "全米ランキングTop 5常連。Rinker Athletic Campusの最高級スタジアム。",
    "tags": [
      "SSC",
      "West Palm Beach",
      "Top 5 Rank",
      "High International"
    ],
    "questionnaireUrl": "https://pbasailfish.com/sports/mens-soccer/recruiting",
    "campUrl": "https://pbasocceracademy.com/",
    "coachVerified": true,
    "siteUrl": "https://pbasailfish.com/sports/mens-soccer"
  },
  {
    "id": "floridatech-mens",
    "name": "Florida Tech (FIT)",
    "location": "Melbourne, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "SSC",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "Nick Robinson",
    "coachEmail": "nrobinson@fit.edu",
    "assistantCoach": "Nick Robinson",
    "assistantCoachEmail": "nrobinson@fit.edu",
    "annualTuitionUSD": 44800,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "62% (20/32名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全32名 / 留学生20名 / MF 12名 (Sr・Gr 6名) / 出身地不明1名",
    "notes": "2回全米制覇（1988, 1991）、2023年全米ベスト4。宇宙・航空工学とサッカーの融合。",
    "tags": [
      "2x D2 Champion",
      "2023 Final Four",
      "SSC",
      "STEM & Soccer"
    ],
    "questionnaireUrl": "https://floridatechsports.com/sports/mens-soccer/recruiting",
    "campUrl": "https://floridatechsoccercamp.com/",
    "coachVerified": true,
    "siteUrl": "https://floridatechsports.com/sports/mens-soccer"
  },
  {
    "id": "pointloma-mens",
    "name": "Point Loma Nazarene University (PLNU)",
    "location": "San Diego, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Sea Lions",
    "headCoach": "Phil Wolf",
    "coachEmail": "philwolf@pointloma.edu",
    "assistantCoach": "Gage Rogers",
    "assistantCoachEmail": "gagerogers@pointloma.edu",
    "annualTuitionUSD": 42800,
    "roomAndBoardUSD": 13800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "japanesePlayers": "受入実績あり (太平洋を一望する絶景キャンパス)",
    "rosterStats": "要確認",
    "notes": "2023年 NCAA D2 西部地区王者！全米一美しいと言われるサンディエゴの海岸沿いキャンパス。",
    "tags": [
      "PacWest",
      "2023 West Champ",
      "San Diego",
      "America Most Beautiful Campus"
    ],
    "questionnaireUrl": "https://plnusealions.com/sports/mens-soccer/recruiting",
    "campUrl": "https://pointlomasoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://plnusealions.com/sports/mens-soccer"
  },
  {
    "id": "saginawvalley-mens",
    "name": "Saginaw Valley State University (SVSU)",
    "location": "University Center, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLIAC",
    "gender": "Men",
    "mascot": "Cardinals",
    "headCoach": "Louis Barrow",
    "coachEmail": "lpbarrow@svsu.edu",
    "assistantCoach": "Tyler Channell",
    "assistantCoachEmail": "soccer@svsu.edu",
    "annualTuitionUSD": 27800,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "45% (13/29名)",
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生13名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名",
    "notes": "GLIACカンファレンス絶対王者。2012年全米準優勝。中西部のD2強豪。",
    "tags": [
      "GLIAC",
      "Michigan",
      "2012 Finalist",
      "Midwest Power"
    ],
    "questionnaireUrl": "https://svsucardinals.com/sports/mens-soccer/recruiting",
    "campUrl": "https://svsusoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://svsucardinals.com/sports/mens-soccer"
  },
  {
    "id": "uindy-mens",
    "name": "University of Indianapolis (UIndy)",
    "location": "Indianapolis, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Greyhounds",
    "headCoach": "Gabe Hall",
    "coachEmail": "hallgm@uindy.edu",
    "assistantCoach": "Rob Simpson",
    "assistantCoachEmail": "simpsonr@uindy.edu",
    "annualTuitionUSD": 34800,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "25% (16/63名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全63名 / 留学生16名 / MF 24名 (Sr・Gr 8名) / 出身地不明2名",
    "notes": "2回全米ベスト4（2019, 2021）。GLVCカンファレンス最強クラスのプログラム。",
    "tags": [
      "GLVC",
      "2x Final Four",
      "Indianapolis",
      "High Scholarships"
    ],
    "questionnaireUrl": "https://athletics.uindy.edu/sports/mens-soccer/recruiting",
    "campUrl": "https://uindysoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://athletics.uindy.edu/sports/mens-soccer"
  },
  {
    "id": "lander-mens",
    "name": "Lander University",
    "location": "Greenwood, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Peach Belt",
    "gender": "Men",
    "mascot": "Bearcats",
    "headCoach": "Paul Leese",
    "coachEmail": "pleese@lander.edu",
    "assistantCoach": "Tom Briers",
    "assistantCoachEmail": "tbriers@lander.edu",
    "annualTuitionUSD": 21800,
    "roomAndBoardUSD": 10900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "49% (17/35名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明3名)",
    "rosterStats": "公式ロスター全35名 / 留学生17名 / MF 7名 (Sr・Gr 1名) / 出身地不明3名",
    "notes": "ピーチベルト・カンファレンス(PBC)の名門。全米Elite Eight常連。",
    "tags": [
      "Peach Belt",
      "South Carolina",
      "High International",
      "Elite Eight"
    ],
    "questionnaireUrl": "https://landerbearcats.com/sports/mens-soccer/recruiting",
    "campUrl": "https://landersoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://landerbearcats.com/sports/mens-soccer"
  },
  {
    "id": "youngharris-mens",
    "name": "Young Harris College",
    "location": "Young Harris, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Conference Carolinas",
    "gender": "Men",
    "mascot": "Mountain Lions",
    "headCoach": "Dean Grey",
    "coachEmail": "dcgrey@yhc.edu",
    "assistantCoach": "Maciej Sliwinski",
    "assistantCoachEmail": "soccer@yhc.edu",
    "annualTuitionUSD": 31200,
    "roomAndBoardUSD": 11800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "55% (24/44名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全44名 / 留学生24名 / MF 23名 (Sr・Gr 2名)",
    "notes": "留学生比率約8割の超国際派チーム。高いテクニックと戦術的規律。",
    "tags": [
      "Conf Carolinas",
      "Georgia",
      "80% International",
      "Scholarships"
    ],
    "questionnaireUrl": "https://yhcathletics.com/sports/mens-soccer/recruiting",
    "campUrl": "https://yhcsoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://yhcathletics.com/sports/mens-soccer"
  },
  {
    "id": "snhu-mens",
    "name": "Southern New Hampshire University (SNHU)",
    "location": "Manchester, New Hampshire",
    "state": "NH",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE10",
    "gender": "Men",
    "mascot": "Penmen",
    "headCoach": "Josh Taylor",
    "coachEmail": "joshua.taylor@snhu.edu",
    "assistantCoach": "Keegan Campbell",
    "assistantCoachEmail": "k.campbell2@snhu.edu",
    "annualTuitionUSD": 15800,
    "roomAndBoardUSD": 12800,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "46% (16/35名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生16名 / MF 17名 (Sr・Gr 9名)",
    "notes": "2013年 NCAA D2 全米王者！学費が非常に手頃で充実の設備を持つ北東部名門。",
    "tags": [
      "2013 D2 Champion",
      "NE10",
      "Low Tuition",
      "New Hampshire"
    ],
    "questionnaireUrl": "https://snhupenmen.com/sports/mens-soccer/recruiting",
    "campUrl": "https://snhusoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://snhupenmen.com/sports/mens-soccer"
  },
  {
    "id": "maryville-mens",
    "name": "Maryville University (St. Louis)",
    "location": "St. Louis, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Saints",
    "headCoach": "Adam Hall",
    "coachEmail": "ahall26@maryville.edu",
    "assistantCoach": "Derek Zuniga",
    "assistantCoachEmail": "dzuniga@maryville.edu",
    "annualTuitionUSD": 27800,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "69% (20/29名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全29名 / 留学生20名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名",
    "notes": "GLVCカンファレンス新興強豪。サッカー熱の高いセントルイスに位置する。",
    "tags": [
      "GLVC",
      "St Louis",
      "Rising Power",
      "Midwest"
    ],
    "questionnaireUrl": "https://maryvillesaints.com/sports/mens-soccer/recruiting",
    "campUrl": "https://maryvillesoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://maryvillesaints.com/sports/mens-soccer"
  },
  {
    "id": "tiffin-mens",
    "name": "Tiffin University",
    "location": "Tiffin, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "G-MAC",
    "gender": "Men",
    "mascot": "Dragons",
    "headCoach": "Rudy Brownell",
    "coachEmail": "rbrownel@tiffin.edu",
    "assistantCoach": "Declan McGivern",
    "assistantCoachEmail": "soccer@tiffin.edu",
    "annualTuitionUSD": 30500,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "45% (24/53名)",
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全53名 / 留学生24名 / MF 18名 (Sr・Gr 5名) / 出身地不明1名",
    "notes": "G-MACカンファレンス複数回優勝。留学生主体の攻撃的サッカースタイル。",
    "tags": [
      "G-MAC",
      "Ohio",
      "High International",
      "Japan Pipeline"
    ],
    "questionnaireUrl": "https://gotiffindragons.com/sports/mens-soccer/recruiting",
    "campUrl": "https://tiffinsoccercamps.com/",
    "siteUrl": "https://gotiffindragons.com/sports/mens-soccer"
  },
  {
    "id": "seattlepacific-mens",
    "name": "Seattle Pacific University",
    "location": "Seattle, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "GNAC",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "Kevin Sakuda",
    "coachEmail": "sakudak1@spu.edu",
    "assistantCoach": "Erik Holland",
    "assistantCoachEmail": "soccer@spu.edu",
    "annualTuitionUSD": 38900,
    "roomAndBoardUSD": 13900,
    "scholarshipMax": "Max 9.0 scholarships",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/34名)",
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生0名 / MF 13名 (Sr・Gr 3名)",
    "notes": "5回全米制覇（1978, 83, 85, 86, 93）の超名門！シアトルの洗練された環境。",
    "tags": [
      "5x D2 Champion",
      "GNAC",
      "Seattle WA",
      "Historic Giant"
    ],
    "questionnaireUrl": "https://spufalcons.com/sports/mens-soccer/recruiting",
    "campUrl": "https://spusoccercamps.com/",
    "coachVerified": true,
    "siteUrl": "https://spufalcons.com/sports/mens-soccer"
  },
  {
    "id": "southeastern-mens",
    "name": "Southeastern University",
    "location": "Lakeland, Florida",
    "state": "FL",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Fire",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 28000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Southeastern+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Southeastern+University+Soccer+ID+Camp",
    "siteUrl": "https://fire.seu.edu/sports/mens-soccer"
  },
  {
    "id": "warner-mens",
    "name": "Warner University",
    "location": "Lake Wales, Florida",
    "state": "FL",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Royals",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 24000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "27% (7/26名)",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生7名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Warner+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Warner+University+Soccer+ID+Camp",
    "siteUrl": "https://warnerroyals.com/sports/mens-soccer"
  },
  {
    "id": "avemaria-mens",
    "name": "Ave Maria University",
    "location": "Ave Maria, Florida",
    "state": "FL",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Gyrenes",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 26000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (8/33名)",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生8名 / MF 14名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Ave+Maria+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Ave+Maria+University+Soccer+ID+Camp"
  },
  {
    "id": "floridamemorial-mens",
    "name": "Florida Memorial University",
    "location": "Miami Gardens, Florida",
    "state": "FL",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Florida+Memorial+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Florida+Memorial+University+Soccer+ID+Camp",
    "siteUrl": "https://athletics.fmu.edu/sports/mens-soccer"
  },
  {
    "id": "georgiagwinnett-mens",
    "name": "Georgia Gwinnett College",
    "location": "Lawrenceville, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Grizzlies",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 10000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Georgia",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Georgia+Gwinnett+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Georgia+Gwinnett+College+Soccer+ID+Camp",
    "siteUrl": "https://ggcathletics.com/sports/mens-soccer"
  },
  {
    "id": "thomasuniversity-mens",
    "name": "Thomas University",
    "location": "Thomasville, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Night Hawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 21000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Thomas+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Thomas+University+Soccer+ID+Camp",
    "siteUrl": "https://tunighthawks.com/sports/mens-soccer"
  },
  {
    "id": "pointuniversity-mens",
    "name": "Point University",
    "location": "West Point, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "The Sun",
    "gender": "Men",
    "mascot": "Skyhawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / The Sun。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "The Sun",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Point+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Point+University+Soccer+ID+Camp"
  },
  {
    "id": "cumberlands-mens",
    "name": "University of the Cumberlands",
    "location": "Williamsburg, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Patriots",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 12500,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Mid-South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Mid-South",
      "Kentucky",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+the+Cumberlands+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+the+Cumberlands+Soccer+ID+Camp",
    "siteUrl": "https://cumberlandspatriots.com/sports/mens-soccer"
  },
  {
    "id": "cumberlanduniversity-mens",
    "name": "Cumberland University",
    "location": "Lebanon, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Phoenix",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 28000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Mid-South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Mid-South",
      "Tennessee",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Cumberland+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cumberland+University+Soccer+ID+Camp",
    "siteUrl": "https://gocumberlandathletics.com/sports/mens-soccer"
  },
  {
    "id": "campbellsville-mens",
    "name": "Campbellsville University",
    "location": "Campbellsville, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 27000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "100% (28/28名)",
    "notes": "NAIA / Mid-South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Mid-South",
      "Kentucky",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生28名 / MF 12名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Campbellsville+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Campbellsville+University+Soccer+ID+Camp",
    "siteUrl": "https://campbellsvilletigers.com/sports/mens-soccer"
  },
  {
    "id": "georgetowncollege-mens",
    "name": "Georgetown College",
    "location": "Georgetown, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Mid-South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Mid-South",
      "Kentucky",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Georgetown+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Georgetown+College+Soccer+ID+Camp",
    "siteUrl": "https://www.georgetowncollegeathletics.com/sports/msoc/index"
  },
  {
    "id": "faulkner-mens",
    "name": "Faulkner University",
    "location": "Montgomery, Alabama",
    "state": "AL",
    "region": "South",
    "division": "NAIA",
    "conference": "SSAC",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "Gabriel De Queiroz",
    "coachEmail": "gqueiroz@faulkner.edu",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "92% (33/36名)",
    "notes": "NAIA / SSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "SSAC",
      "Alabama",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全36名 / 留学生33名 / MF 9名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Faulkner+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Faulkner+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Fahel Matos",
    "assistantCoachEmail": "fmatos@faulkner.edu",
    "siteUrl": "https://faulknereagles.com/sports/mens-soccer"
  },
  {
    "id": "williamcarey-mens",
    "name": "William Carey University",
    "location": "Hattiesburg, Mississippi",
    "state": "MS",
    "region": "South",
    "division": "NAIA",
    "conference": "SSAC",
    "gender": "Men",
    "mascot": "Crusaders",
    "headCoach": "Barry Farrell",
    "coachEmail": "bfarrell@wmcarey.edu",
    "annualTuitionUSD": 17000,
    "roomAndBoardUSD": 7500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "87% (27/31名)",
    "notes": "NAIA / SSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "SSAC",
      "Mississippi",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生27名 / MF 12名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=William+Carey+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=William+Carey+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://careyathletics.com/sports/mens-soccer"
  },
  {
    "id": "tennesseewesleyan-mens",
    "name": "Tennessee Wesleyan University",
    "location": "Athens, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NAIA",
    "conference": "Appalachian Athletic",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 27000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Appalachian Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Appalachian Athletic",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Tennessee+Wesleyan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Tennessee+Wesleyan+University+Soccer+ID+Camp",
    "siteUrl": "https://www.twbulldogs.com/sports/msoc/index"
  },
  {
    "id": "reinhardt-mens",
    "name": "Reinhardt University",
    "location": "Waleska, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "Appalachian Athletic",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 25000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Appalachian Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Appalachian Athletic",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Reinhardt+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Reinhardt+University+Soccer+ID+Camp"
  },
  {
    "id": "texaswesleyan-mens",
    "name": "Texas Wesleyan University",
    "location": "Fort Worth, Texas",
    "state": "TX",
    "region": "South",
    "division": "NAIA",
    "conference": "Sooner Athletic",
    "gender": "Men",
    "mascot": "Rams",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Sooner Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Sooner Athletic",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Texas+Wesleyan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Texas+Wesleyan+University+Soccer+ID+Camp",
    "siteUrl": "https://ramsports.net/sports/mens-soccer"
  },
  {
    "id": "oklahomacity-mens",
    "name": "Oklahoma City University",
    "location": "Oklahoma City, Oklahoma",
    "state": "OK",
    "region": "South",
    "division": "NAIA",
    "conference": "Sooner Athletic",
    "gender": "Men",
    "mascot": "Stars",
    "headCoach": "Billy Martin",
    "coachEmail": "wjmartin@okcu.edu",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "56% (14/25名)",
    "notes": "NAIA / Sooner Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Sooner Athletic",
      "Oklahoma",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全25名 / 留学生14名 / MF 6名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Oklahoma+City+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Oklahoma+City+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Gui Grave",
    "assistantCoachEmail": "gfgrave@okcu.edu",
    "siteUrl": "https://www.ocusports.com/sports/mens-soccer"
  },
  {
    "id": "bellevue-mens",
    "name": "Bellevue University",
    "location": "Bellevue, Nebraska",
    "state": "NE",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Great Plains Athletic",
    "gender": "Men",
    "mascot": "Bruins",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 10000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Great Plains Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Great Plains Athletic",
      "Nebraska",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Bellevue+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bellevue+University+Soccer+ID+Camp"
  },
  {
    "id": "benedictine-mens",
    "name": "Benedictine College",
    "location": "Atchison, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Ravens",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Heart of America。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Heart of America",
      "Kansas",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Benedictine+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Benedictine+College+Soccer+ID+Camp",
    "siteUrl": "https://ravenathletics.com/sports/mens-soccer"
  },
  {
    "id": "baker-mens",
    "name": "Baker University",
    "location": "Baldwin City, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Heart of America。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Heart of America",
      "Kansas",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Baker+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Baker+University+Soccer+ID+Camp",
    "siteUrl": "https://www.bakerwildcats.com/sports/msoc/index"
  },
  {
    "id": "avila-mens",
    "name": "Avila University",
    "location": "Kansas City, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 29000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Heart of America。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Heart of America",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Avila+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Avila+University+Soccer+ID+Camp",
    "siteUrl": "https://www.avila.edu/calendar_event/mens-soccer-avila-at-bethany-ks"
  },
  {
    "id": "columbiacollegemo-mens",
    "name": "Columbia College (Missouri)",
    "location": "Columbia, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "American Midwest",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 15000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / American Midwest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "American Midwest",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Columbia+College+(Missouri)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Columbia+College+(Missouri)+Soccer+ID+Camp"
  },
  {
    "id": "indianawesleyan-mens",
    "name": "Indiana Wesleyan University",
    "location": "Marion, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Crossroads League",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "41% (12/29名)",
    "notes": "NAIA / Crossroads League。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Crossroads League",
      "Indiana",
      "Needs Verification",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生12名 / MF 10名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Indiana+Wesleyan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Indiana+Wesleyan+University+Soccer+ID+Camp",
    "siteUrl": "https://iwuwildcats.com/sports/mens-soccer"
  },
  {
    "id": "pikeville-mens",
    "name": "University of Pikeville",
    "location": "Pikeville, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "River States",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "68% (28/41名)",
    "notes": "NAIA / River States。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "River States",
      "Kentucky",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全41名 / 留学生28名 / MF 9名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Pikeville+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Pikeville+Soccer+ID+Camp"
  },
  {
    "id": "shawneestate-mens",
    "name": "Shawnee State University",
    "location": "Portsmouth, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "要確認 (旧NAIA River States → NCAA D2 移行)",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 10000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA(River States)からNCAA D2へ移行。移行時期・所属カンファレンス・D2加盟状況(暫定会員の期間など)は公式サイトで要確認。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)も要確認。",
    "tags": [
      "NCAA D2",
      "D2移行",
      "Ohio",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Shawnee+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Shawnee+State+University+Soccer+ID+Camp",
    "siteUrl": "https://ssubears.com/sports/mens-soccer"
  },
  {
    "id": "westmont-mens",
    "name": "Westmont College",
    "location": "Santa Barbara, California",
    "state": "CA",
    "region": "West",
    "division": "NAIA",
    "conference": "Golden State Athletic",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 55000,
    "roomAndBoardUSD": 16000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NAIA / Golden State Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Golden State Athletic",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Westmont+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Westmont+College+Soccer+ID+Camp"
  },
  {
    "id": "vanguard-mens",
    "name": "Vanguard University",
    "location": "Costa Mesa, California",
    "state": "CA",
    "region": "West",
    "division": "NAIA",
    "conference": "Golden State Athletic",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "Jesus (Chuy) Miramontes",
    "coachEmail": "msoccer@vanguard.edu",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/34名)",
    "notes": "NAIA / Golden State Athletic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Golden State Athletic",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生0名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Vanguard+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Vanguard+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://vanguardlions.com/sports/mens-soccer"
  },
  {
    "id": "corban-mens",
    "name": "Corban University",
    "location": "Salem, Oregon",
    "state": "OR",
    "region": "West",
    "division": "NAIA",
    "conference": "Cascade Collegiate",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "Jordan Keegan",
    "coachEmail": "jkeegan@corban.edu",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "21% (7/34名)",
    "notes": "NAIA / Cascade Collegiate。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NAIA",
      "Cascade Collegiate",
      "Oregon",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生7名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Corban+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Corban+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://corbanwarriors.com/sports/mens-soccer"
  },
  {
    "id": "saintleo-mens",
    "name": "Saint Leo University",
    "location": "Saint Leo, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Sunshine State",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "Brett Parker",
    "coachEmail": "brett.parker@saintleo.edu",
    "annualTuitionUSD": 26000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "57% (17/30名)",
    "notes": "NCAA D2 / Sunshine State。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Sunshine State",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全30名 / 留学生17名 / MF 9名 (Sr・Gr 1名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Leo+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Leo+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Graham Brown",
    "assistantCoachEmail": "graham.brown@saintleo.edu",
    "siteUrl": "https://saintleolions.com/sports/mens-soccer"
  },
  {
    "id": "novasoutheastern-mens",
    "name": "Nova Southeastern University",
    "location": "Davie, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Sunshine State",
    "gender": "Men",
    "mascot": "Sharks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 15000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "55% (12/22名)",
    "notes": "NCAA D2 / Sunshine State。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Sunshine State",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Toga Katsuma",
    "rosterStats": "公式ロスター全22名 / 留学生12名 / MF 11名 (Sr・Gr 7名)",
    "questionnaireUrl": "https://www.google.com/search?q=Nova+Southeastern+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Nova+Southeastern+University+Soccer+ID+Camp",
    "siteUrl": "https://nsusharks.com/sports/mens-soccer"
  },
  {
    "id": "floridasouthern-mens",
    "name": "Florida Southern College",
    "location": "Lakeland, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Sunshine State",
    "gender": "Men",
    "mascot": "Moccasins",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 40000,
    "roomAndBoardUSD": 14000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (15/31名)",
    "notes": "NCAA D2 / Sunshine State。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Sunshine State",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生15名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Florida+Southern+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Florida+Southern+College+Soccer+ID+Camp",
    "siteUrl": "https://fscmocs.com/sports/mens-soccer"
  },
  {
    "id": "eckerd-mens",
    "name": "Eckerd College",
    "location": "St. Petersburg, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Sunshine State",
    "gender": "Men",
    "mascot": "Tritons",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 55000,
    "roomAndBoardUSD": 16000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "38% (15/40名)",
    "notes": "NCAA D2 / Sunshine State。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Sunshine State",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全40名 / 留学生15名 / MF 14名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Eckerd+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Eckerd+College+Soccer+ID+Camp"
  },
  {
    "id": "flagler-mens",
    "name": "Flagler College",
    "location": "St. Augustine, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Sunshine State",
    "gender": "Men",
    "mascot": "Saints",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (15/31名)",
    "notes": "NCAA D2 / Sunshine State。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Sunshine State",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全31名 / 留学生15名 / MF 9名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Flagler+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Flagler+College+Soccer+ID+Camp",
    "siteUrl": "https://flaglerathletics.com/sports/mens-soccer"
  },
  {
    "id": "westflorida-mens",
    "name": "University of West Florida",
    "location": "Pensacola, Florida",
    "state": "FL",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Gulf South",
    "gender": "Men",
    "mascot": "Argonauts",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "30% (9/30名)",
    "notes": "NCAA D2 / Gulf South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Gulf South",
      "Florida",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全30名 / 留学生9名 / MF 6名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+West+Florida+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+West+Florida+Soccer+ID+Camp",
    "siteUrl": "https://goargos.com/sports/mens-soccer"
  },
  {
    "id": "leeuniversity-mens",
    "name": "Lee University",
    "location": "Cleveland, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Gulf South",
    "gender": "Men",
    "mascot": "Flames",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 25000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Gulf South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Gulf South",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Lee+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lee+University+Soccer+ID+Camp"
  },
  {
    "id": "unionuniversity-mens",
    "name": "Union University",
    "location": "Jackson, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Gulf South",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Gulf South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Gulf South",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Union+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Union+University+Soccer+ID+Camp",
    "siteUrl": "https://uuathletics.com/sports/mens-soccer"
  },
  {
    "id": "valdostastate-mens",
    "name": "Valdosta State University",
    "location": "Valdosta, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Gulf South",
    "gender": "Men",
    "mascot": "Blazers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 15000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Gulf South。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Gulf South",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Valdosta+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Valdosta+State+University+Soccer+ID+Camp",
    "siteUrl": "https://vstateblazers.com/sports/mens-soccer"
  },
  {
    "id": "columbusstate-mens",
    "name": "Columbus State University",
    "location": "Columbus, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Peach Belt",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 15000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Peach Belt。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Peach Belt",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Columbus+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Columbus+State+University+Soccer+ID+Camp"
  },
  {
    "id": "northgeorgia-mens",
    "name": "University of North Georgia",
    "location": "Dahlonega, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Peach Belt",
    "gender": "Men",
    "mascot": "Nighthawks",
    "headCoach": "Anel Lilic",
    "coachEmail": "anel.lilic@ung.edu",
    "annualTuitionUSD": 17000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (10/30名)",
    "notes": "NCAA D2 / Peach Belt。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Peach Belt",
      "Georgia",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生10名 / MF 10名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+North+Georgia+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+North+Georgia+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Joel Mcilroy",
    "assistantCoachEmail": "alexander.mcilroy@ung.edu",
    "siteUrl": "https://ungathletics.com/sports/mens-soccer"
  },
  {
    "id": "uscaiken-mens",
    "name": "USC Aiken",
    "location": "Aiken, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Peach Belt",
    "gender": "Men",
    "mascot": "Pacers",
    "headCoach": "Nick Sakiewicz",
    "coachEmail": "nicolaus.sakiewicz@usca.edu",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "58% (18/31名)",
    "notes": "NCAA D2 / Peach Belt。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Peach Belt",
      "South Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明4名)",
    "rosterStats": "公式ロスター全31名 / 留学生18名 / MF 16名 (Sr・Gr 3名) / 出身地不明4名",
    "questionnaireUrl": "https://www.google.com/search?q=USC+Aiken+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=USC+Aiken+Soccer+ID+Camp",
    "coachVerified": true
  },
  {
    "id": "francismarion-mens",
    "name": "Francis Marion University",
    "location": "Florence, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Peach Belt",
    "gender": "Men",
    "mascot": "Patriots",
    "headCoach": "Luis Rincon",
    "coachEmail": "Luis.Rincon@fmarion.edu",
    "annualTuitionUSD": 21000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "64% (28/44名)",
    "notes": "NCAA D2 / Peach Belt。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Peach Belt",
      "South Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全44名 / 留学生28名 / MF 21名 (Sr・Gr 12名)",
    "questionnaireUrl": "https://www.google.com/search?q=Francis+Marion+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Francis+Marion+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Nicolas Rodriguez",
    "assistantCoachEmail": "nicolas.rodriguez@fmarion.edu",
    "siteUrl": "https://fmupatriots.com/sports/mens-soccer"
  },
  {
    "id": "uncpembroke-mens",
    "name": "UNC Pembroke",
    "location": "Pembroke, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Conference Carolinas",
    "gender": "Men",
    "mascot": "Braves",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 18000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "32% (6/19名)",
    "notes": "NCAA D2 / Conference Carolinas。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Conference Carolinas",
      "North Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全19名 / 留学生6名 / MF 6名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=UNC+Pembroke+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UNC+Pembroke+Soccer+ID+Camp"
  },
  {
    "id": "belmontabbey-mens",
    "name": "Belmont Abbey College",
    "location": "Belmont, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Conference Carolinas",
    "gender": "Men",
    "mascot": "Crusaders",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Conference Carolinas。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Conference Carolinas",
      "North Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Belmont+Abbey+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Belmont+Abbey+College+Soccer+ID+Camp",
    "siteUrl": "https://abbeyathletics.com/sports/mens-soccer"
  },
  {
    "id": "mountolive-mens",
    "name": "University of Mount Olive",
    "location": "Mount Olive, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Conference Carolinas",
    "gender": "Men",
    "mascot": "Trojans",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "20% (8/41名)",
    "notes": "NCAA D2 / Conference Carolinas。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Conference Carolinas",
      "North Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全41名 / 留学生8名 / MF 15名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Mount+Olive+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Mount+Olive+Soccer+ID+Camp",
    "siteUrl": "https://umotrojans.com/sports/mens-soccer"
  },
  {
    "id": "catawba-mens",
    "name": "Catawba College",
    "location": "Salisbury, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Indians",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "North Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Catawba+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Catawba+College+Soccer+ID+Camp",
    "siteUrl": "https://catawbaathletics.com/sports/mens-soccer"
  },
  {
    "id": "carsonnewman-mens",
    "name": "Carson-Newman University",
    "location": "Jefferson City, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Eagles",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 36000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Carson-Newman+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Carson-Newman+University+Soccer+ID+Camp",
    "siteUrl": "https://www.cn.edu/event/mens-soccer-at-anderson-s-c"
  },
  {
    "id": "marshill-mens",
    "name": "Mars Hill University",
    "location": "Mars Hill, North Carolina",
    "state": "NC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "North Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Mars+Hill+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Mars+Hill+University+Soccer+ID+Camp",
    "siteUrl": "https://www.mhu.edu/event/mens-soccer-alumni-weekend"
  },
  {
    "id": "newberry-mens",
    "name": "Newberry College",
    "location": "Newberry, South Carolina",
    "state": "SC",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Wolves",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 36000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (13/39名)",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "South Carolina",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名) Shotaro Sekinada",
    "rosterStats": "公式ロスター全39名 / 留学生13名 / MF 15名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Newberry+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Newberry+College+Soccer+ID+Camp",
    "siteUrl": "https://newberrywolves.com/sports/mens-soccer"
  },
  {
    "id": "tusculum-mens",
    "name": "Tusculum University",
    "location": "Greeneville, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Tusculum+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Tusculum+University+Soccer+ID+Camp"
  },
  {
    "id": "lincolnmemorial-mens",
    "name": "Lincoln Memorial University",
    "location": "Harrogate, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NCAA D2",
    "conference": "South Atlantic",
    "gender": "Men",
    "mascot": "Railsplitters",
    "headCoach": "Tom Gillette",
    "coachEmail": "thomas.gillette@lmunet.edu",
    "annualTuitionUSD": 28000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "40% (21/52名)",
    "notes": "NCAA D2 / South Atlantic。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "South Atlantic",
      "Tennessee",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全52名 / 留学生21名 / MF 16名 (Sr・Gr 0名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Lincoln+Memorial+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lincoln+Memorial+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "August Harp",
    "assistantCoachEmail": "august.harp@lmunet.edu",
    "siteUrl": "https://lmurailsplitters.com/sports/mens-soccer"
  },
  {
    "id": "lewisuniversity-mens",
    "name": "Lewis University",
    "location": "Romeoville, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Flyers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (11/44名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Illinois",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全44名 / 留学生11名 / MF 17名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lewis+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lewis+University+Soccer+ID+Camp",
    "siteUrl": "https://lewisflyers.com/sports/mens-soccer"
  },
  {
    "id": "drury-mens",
    "name": "Drury University",
    "location": "Springfield, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "35% (17/48名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全48名 / 留学生17名 / MF 17名 (Sr・Gr 1名) / 出身地不明1名 / 掲載情報欠落2名(MFは最小値)",
    "questionnaireUrl": "https://www.google.com/search?q=Drury+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Drury+University+Soccer+ID+Camp",
    "siteUrl": "https://drurypanthers.com/sports/mens-soccer"
  },
  {
    "id": "rockhurst-mens",
    "name": "Rockhurst University",
    "location": "Kansas City, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 40000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "12% (4/33名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生4名 / MF 9名 (Sr・Gr 4名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Rockhurst+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Rockhurst+University+Soccer+ID+Camp",
    "siteUrl": "https://rockhursthawks.com/sports/mens-soccer"
  },
  {
    "id": "quincy-mens",
    "name": "Quincy University",
    "location": "Quincy, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Illinois",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Quincy+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Quincy+University+Soccer+ID+Camp",
    "siteUrl": "https://quhawks.com/sports/mens-soccer"
  },
  {
    "id": "trumanstate-mens",
    "name": "Truman State University",
    "location": "Kirksville, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/38名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全38名 / 留学生0名 / MF 16名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Truman+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Truman+State+University+Soccer+ID+Camp",
    "siteUrl": "https://trumanbulldogs.com/sports/mens-soccer"
  },
  {
    "id": "missouriST-mens",
    "name": "Missouri S&T",
    "location": "Rolla, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Miners",
    "headCoach": "Robert Cummings",
    "coachEmail": "cummingsrc@mst.edu",
    "annualTuitionUSD": 28000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "32% (13/41名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Missouri",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全41名 / 留学生13名 / MF 16名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Missouri+S%26T+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Missouri+S%26T+Soccer+ID+Camp",
    "coachVerified": true
  },
  {
    "id": "kentuckywesleyan-mens",
    "name": "Kentucky Wesleyan College",
    "location": "Owensboro, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 28000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "57% (20/35名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Kentucky",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生20名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Kentucky+Wesleyan+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Kentucky+Wesleyan+College+Soccer+ID+Camp",
    "siteUrl": "https://kwcpanthers.com/sports/mens-soccer"
  },
  {
    "id": "uwparkside-mens",
    "name": "UW-Parkside",
    "location": "Kenosha, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Rangers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 15000,
    "roomAndBoardUSD": 9500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "29% (10/34名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Wisconsin",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全34名 / 留学生10名 / MF 14名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=UW-Parkside+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UW-Parkside+Soccer+ID+Camp"
  },
  {
    "id": "illinoisspringfield-mens",
    "name": "University of Illinois Springfield",
    "location": "Springfield, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLVC",
    "gender": "Men",
    "mascot": "Prairie Stars",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 17000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "37% (11/30名)",
    "notes": "NCAA D2 / GLVC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLVC",
      "Illinois",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生11名 / MF 9名 (Sr・Gr 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Illinois+Springfield+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Illinois+Springfield+Soccer+ID+Camp"
  },
  {
    "id": "walsh-mens",
    "name": "Walsh University",
    "location": "North Canton, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "G-MAC",
    "gender": "Men",
    "mascot": "Cavaliers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / G-MAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "G-MAC",
      "Ohio",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Walsh+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Walsh+University+Soccer+ID+Camp",
    "siteUrl": "https://athletics.walsh.edu/sports/mens-soccer"
  },
  {
    "id": "findlay-mens",
    "name": "University of Findlay",
    "location": "Findlay, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "G-MAC",
    "gender": "Men",
    "mascot": "Oilers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "20% (9/45名)",
    "notes": "NCAA D2 / G-MAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "G-MAC",
      "Ohio",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全45名 / 留学生9名 / MF 14名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+Findlay+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+Findlay+Soccer+ID+Camp",
    "siteUrl": "https://findlayoilers.com/sports/mens-soccer"
  },
  {
    "id": "malone-mens",
    "name": "Malone University",
    "location": "Canton, Ohio",
    "state": "OH",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "G-MAC",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 35000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (6/41名)",
    "notes": "NCAA D2 / G-MAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "G-MAC",
      "Ohio",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全41名 / 留学生6名 / MF 14名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=Malone+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Malone+University+Soccer+ID+Camp",
    "siteUrl": "https://malonepioneers.com/sports/mens-soccer"
  },
  {
    "id": "waynestate-mens",
    "name": "Wayne State University (Michigan)",
    "location": "Detroit, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLIAC",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 23000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / GLIAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLIAC",
      "Michigan",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Wayne+State+University+(Michigan)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wayne+State+University+(Michigan)+Soccer+ID+Camp",
    "siteUrl": "https://wsuathletics.com/sports/mens-soccer"
  },
  {
    "id": "northwood-mens",
    "name": "Northwood University",
    "location": "Midland, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NCAA D2",
    "conference": "GLIAC",
    "gender": "Men",
    "mascot": "Timberwolves",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / GLIAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GLIAC",
      "Michigan",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Northwood+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northwood+University+Soccer+ID+Camp"
  },
  {
    "id": "adelphi-mens",
    "name": "Adelphi University",
    "location": "Garden City, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 48000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "58% (18/31名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "New York",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全31名 / 留学生18名 / MF 12名 (Sr・Gr 2名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Adelphi+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Adelphi+University+Soccer+ID+Camp",
    "siteUrl": "https://aupanthers.com/sports/mens-soccer"
  },
  {
    "id": "bentley-mens",
    "name": "Bentley University",
    "location": "Waltham, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 58000,
    "roomAndBoardUSD": 18000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (5/33名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "Massachusetts",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生5名 / MF 13名 (Sr・Gr 8名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Bentley+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bentley+University+Soccer+ID+Camp",
    "siteUrl": "https://bentleyvanguard.com/sports/mens-soccer"
  },
  {
    "id": "saintanselm-mens",
    "name": "Saint Anselm College",
    "location": "Goffstown, New Hampshire",
    "state": "NH",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 48000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "New Hampshire",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Anselm+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Anselm+College+Soccer+ID+Camp"
  },
  {
    "id": "southernct-mens",
    "name": "Southern Connecticut State University",
    "location": "New Haven, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Owls",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 25000,
    "roomAndBoardUSD": 13000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "48% (13/27名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "Connecticut",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全27名 / 留学生13名 / MF 9名 (Sr・Gr 3名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Southern+Connecticut+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Southern+Connecticut+State+University+Soccer+ID+Camp",
    "siteUrl": "https://scsuowls.com/sports/mens-soccer"
  },
  {
    "id": "newhaven-mens",
    "name": "University of New Haven",
    "location": "West Haven, Connecticut",
    "state": "CT",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Chargers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 46000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "33% (14/43名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "Connecticut",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全43名 / 留学生14名 / MF 13名 (Sr・Gr 3名) / 出身地不明2名 / 掲載情報欠落4名(MFは最小値)",
    "questionnaireUrl": "https://www.google.com/search?q=University+of+New+Haven+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=University+of+New+Haven+Soccer+ID+Camp",
    "siteUrl": "https://newhavenchargers.com/sports/mens-soccer"
  },
  {
    "id": "assumption-mens",
    "name": "Assumption University",
    "location": "Worcester, Massachusetts",
    "state": "MA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Greyhounds",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 45000,
    "roomAndBoardUSD": 15000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "16% (7/44名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "Massachusetts",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全44名 / 留学生7名 / MF 13名 (Sr・Gr 2名) / 掲載情報欠落2名(MFは最小値)",
    "questionnaireUrl": "https://www.google.com/search?q=Assumption+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Assumption+University+Soccer+ID+Camp"
  },
  {
    "id": "pace-mens",
    "name": "Pace University",
    "location": "New York, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Setters",
    "headCoach": "Edward Evans",
    "coachEmail": "eevans@pace.edu",
    "annualTuitionUSD": 52000,
    "roomAndBoardUSD": 20000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "15% (11/71名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "New York",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全71名 / 留学生11名 / MF 25名 (Sr・Gr 2名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Pace+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Pace+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://paceuathletics.com/sports/mens-soccer"
  },
  {
    "id": "saintmichaels-mens",
    "name": "Saint Michael's College",
    "location": "Colchester, Vermont",
    "state": "VT",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "NE-10",
    "gender": "Men",
    "mascot": "Purple Knights",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 52000,
    "roomAndBoardUSD": 16000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "3% (1/35名)",
    "notes": "NCAA D2 / NE-10。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "NE-10",
      "Vermont",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生1名 / MF 14名 (Sr・Gr 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Michael's+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Michael's+College+Soccer+ID+Camp",
    "siteUrl": "https://smcathletics.com/sports/mens-soccer"
  },
  {
    "id": "nyit-mens",
    "name": "New York Institute of Technology (NYIT)",
    "location": "Old Westbury, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "East Coast Conference",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 45000,
    "roomAndBoardUSD": 18000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / East Coast Conference。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "East Coast Conference",
      "New York",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=New+York+Institute+of+Technology+(NYIT)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=New+York+Institute+of+Technology+(NYIT)+Soccer+ID+Camp"
  },
  {
    "id": "molloy-mens",
    "name": "Molloy University",
    "location": "Rockville Centre, New York",
    "state": "NY",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "East Coast Conference",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "24% (7/29名)",
    "notes": "NCAA D2 / East Coast Conference。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "East Coast Conference",
      "New York",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生7名 / MF 13名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Molloy+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Molloy+University+Soccer+ID+Camp",
    "siteUrl": "https://molloylions.com/sports/mens-soccer"
  },
  {
    "id": "westchester-mens",
    "name": "West Chester University",
    "location": "West Chester, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Golden Rams",
    "headCoach": "Michael Benn",
    "coachEmail": "mbenn@wcupa.edu",
    "annualTuitionUSD": 25000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/28名)",
    "notes": "NCAA D2 / PSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PSAC",
      "Pennsylvania",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生0名 / MF 7名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=West+Chester+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=West+Chester+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://wcupagoldenrams.com/sports/mens-soccer"
  },
  {
    "id": "iup-mens",
    "name": "Indiana University of Pennsylvania (IUP)",
    "location": "Indiana, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Crimson Hawks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / PSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PSAC",
      "Pennsylvania",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Indiana+University+of+Pennsylvania+(IUP)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Indiana+University+of+Pennsylvania+(IUP)+Soccer+ID+Camp",
    "siteUrl": "https://iupathletics.com/sports/mens-soccer"
  },
  {
    "id": "eaststroudsburg-mens",
    "name": "East Stroudsburg University",
    "location": "East Stroudsburg, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "31% (12/39名)",
    "notes": "NCAA D2 / PSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PSAC",
      "Pennsylvania",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全39名 / 留学生12名 / MF 10名 (Sr・Gr 0名)",
    "questionnaireUrl": "https://www.google.com/search?q=East+Stroudsburg+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=East+Stroudsburg+University+Soccer+ID+Camp",
    "siteUrl": "https://esuwarriors.com/sports/mens-soccer"
  },
  {
    "id": "millersville-mens",
    "name": "Millersville University",
    "location": "Millersville, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Marauders",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 11500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (4/24名)",
    "notes": "NCAA D2 / PSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PSAC",
      "Pennsylvania",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全24名 / 留学生4名 / MF 7名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Millersville+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Millersville+University+Soccer+ID+Camp",
    "siteUrl": "https://millersvilleathletics.com/sports/mens-soccer"
  },
  {
    "id": "setonhill-mens",
    "name": "Seton Hill University",
    "location": "Greensburg, Pennsylvania",
    "state": "PA",
    "region": "Northeast",
    "division": "NCAA D2",
    "conference": "PSAC",
    "gender": "Men",
    "mascot": "Griffins",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 13000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / PSAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PSAC",
      "Pennsylvania",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Seton+Hill+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Seton+Hill+University+Soccer+ID+Camp",
    "siteUrl": "https://athletics.setonhill.edu/sports/mens-soccer"
  },
  {
    "id": "wvwesleyan-mens",
    "name": "West Virginia Wesleyan College",
    "location": "Buckhannon, West Virginia",
    "state": "WV",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Mountain East",
    "gender": "Men",
    "mascot": "Bobcats",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Mountain East。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Mountain East",
      "West Virginia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=West+Virginia+Wesleyan+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=West+Virginia+Wesleyan+College+Soccer+ID+Camp",
    "siteUrl": "https://wesleyanbobcats.com/sports/mens-soccer"
  },
  {
    "id": "wheeling-mens",
    "name": "Wheeling University",
    "location": "Wheeling, West Virginia",
    "state": "WV",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Mountain East",
    "gender": "Men",
    "mascot": "Cardinals",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 10500,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Mountain East。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Mountain East",
      "West Virginia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Wheeling+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wheeling+University+Soccer+ID+Camp"
  },
  {
    "id": "concordwv-mens",
    "name": "Concord University",
    "location": "Athens, West Virginia",
    "state": "WV",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Mountain East",
    "gender": "Men",
    "mascot": "Mountain Lions",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 18000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Mountain East。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Mountain East",
      "West Virginia",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Concord+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Concord+University+Soccer+ID+Camp",
    "siteUrl": "https://cumountainlions.com/sports/mens-soccer"
  },
  {
    "id": "byuhawaii-mens",
    "name": "BYU-Hawaii",
    "location": "Laie, Hawaii",
    "state": "HI",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Seasiders",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 11000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / PacWest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PacWest",
      "Hawaii",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=BYU-Hawaii+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=BYU-Hawaii+Soccer+ID+Camp"
  },
  {
    "id": "hawaiipacific-mens",
    "name": "Hawaii Pacific University",
    "location": "Honolulu, Hawaii",
    "state": "HI",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Sharks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / PacWest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PacWest",
      "Hawaii",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Hawaii+Pacific+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Hawaii+Pacific+University+Soccer+ID+Camp",
    "siteUrl": "https://hpusharks.com/sports/mens-soccer"
  },
  {
    "id": "chaminade-mens",
    "name": "Chaminade University of Honolulu",
    "location": "Honolulu, Hawaii",
    "state": "HI",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Silverswords",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 32000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / PacWest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PacWest",
      "Hawaii",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Chaminade+University+of+Honolulu+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Chaminade+University+of+Honolulu+Soccer+ID+Camp"
  },
  {
    "id": "fresnopacific-mens",
    "name": "Fresno Pacific University",
    "location": "Fresno, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Sunbirds",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "8% (3/38名)",
    "notes": "NCAA D2 / PacWest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PacWest",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全38名 / 留学生3名 / MF 13名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Fresno+Pacific+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Fresno+Pacific+University+Soccer+ID+Camp",
    "siteUrl": "https://www.fpusunbirds.com/sports/mens-soccer"
  },
  {
    "id": "dominicanca-mens",
    "name": "Dominican University of California",
    "location": "San Rafael, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "PacWest",
    "gender": "Men",
    "mascot": "Penguins",
    "headCoach": "David Frank",
    "coachEmail": "david.frank@dominican.edu",
    "annualTuitionUSD": 48000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "6% (2/36名)",
    "notes": "NCAA D2 / PacWest。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "PacWest",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明4名)",
    "rosterStats": "公式ロスター全36名 / 留学生2名 / MF 15名 (Sr・Gr 2名) / 出身地不明4名",
    "questionnaireUrl": "https://www.google.com/search?q=Dominican+University+of+California+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Dominican+University+of+California+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Ricardo Martin",
    "assistantCoachEmail": "ricardo.martin@dominican.edu",
    "siteUrl": "https://dominicanathletics.com/sports/mens-soccer"
  },
  {
    "id": "csudh-mens",
    "name": "Cal State Dominguez Hills",
    "location": "Carson, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Toros",
    "headCoach": "Eddie Soto",
    "coachEmail": "esoto@csudh.edu",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 14000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / CCAA。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "CCAA",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Cal+State+Dominguez+Hills+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cal+State+Dominguez+Hills+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Patryk Tenorio",
    "assistantCoachEmail": "ptenorio@csudh.edu",
    "siteUrl": "https://gotoros.com/sports/mens-soccer"
  },
  {
    "id": "csueastbay-mens",
    "name": "Cal State East Bay",
    "location": "Hayward, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Pioneers",
    "headCoach": "Michael Haswell",
    "coachEmail": "michael.haswell@csueastbay.edu",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 14000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "4% (1/27名)",
    "notes": "NCAA D2 / CCAA。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "CCAA",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生1名 / MF 8名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Cal+State+East+Bay+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cal+State+East+Bay+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Dannylo Ayllon",
    "assistantCoachEmail": "dannylo.ayllon@csueastbay.edu"
  },
  {
    "id": "csusanmarcos-mens",
    "name": "Cal State San Marcos",
    "location": "San Marcos, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "Ron Pulvers",
    "coachEmail": "rpulvers@csusm.edu",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 13000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "3% (1/31名)",
    "notes": "NCAA D2 / CCAA。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "CCAA",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全31名 / 留学生1名 / MF 15名 (Sr・Gr 5名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Cal+State+San+Marcos+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cal+State+San+Marcos+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Matt Aldama",
    "assistantCoachEmail": "maldama@csusm.edu",
    "siteUrl": "https://csusmcougars.com/sports/mens-soccer"
  },
  {
    "id": "sfstate-mens",
    "name": "San Francisco State University",
    "location": "San Francisco, California",
    "state": "CA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "CCAA",
    "gender": "Men",
    "mascot": "Gators",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 17000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / CCAA。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "CCAA",
      "California",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=San+Francisco+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=San+Francisco+State+University+Soccer+ID+Camp"
  },
  {
    "id": "westernwashington-mens",
    "name": "Western Washington University",
    "location": "Bellingham, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "GNAC",
    "gender": "Men",
    "mascot": "Vikings",
    "headCoach": "Greg Brisbon",
    "coachEmail": "wwumsoccer@wwu.edu",
    "annualTuitionUSD": 25000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "9% (2/23名)",
    "notes": "NCAA D2 / GNAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GNAC",
      "Washington",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全23名 / 留学生2名 / MF 10名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Western+Washington+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Western+Washington+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Chuck Pitts",
    "assistantCoachEmail": "wwumsoccer@wwu.edu"
  },
  {
    "id": "saintmartins-mens",
    "name": "Saint Martin's University",
    "location": "Lacey, Washington",
    "state": "WA",
    "region": "West",
    "division": "NCAA D2",
    "conference": "GNAC",
    "gender": "Men",
    "mascot": "Saints",
    "headCoach": "Rob Walker",
    "coachEmail": "rwalker@stmartin.edu",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/35名)",
    "notes": "NCAA D2 / GNAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "GNAC",
      "Washington",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全35名 / 留学生0名 / MF 15名 (Sr・Gr 4名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Saint+Martin's+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Saint+Martin's+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://smusaints.com/sports/mens-soccer"
  },
  {
    "id": "coloradomesa-mens",
    "name": "Colorado Mesa University",
    "location": "Grand Junction, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "Mavericks",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "34% (12/35名)",
    "notes": "NCAA D2 / RMAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "RMAC",
      "Colorado",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生12名 / MF 15名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Colorado+Mesa+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Colorado+Mesa+University+Soccer+ID+Camp",
    "siteUrl": "https://cmumavericks.com/sports/mens-soccer"
  },
  {
    "id": "regis-mens",
    "name": "Regis University",
    "location": "Denver, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "Rangers",
    "headCoach": "Taylor Diem",
    "coachEmail": "tdiem@regis.edu",
    "annualTuitionUSD": 45000,
    "roomAndBoardUSD": 14000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "39% (12/31名)",
    "notes": "NCAA D2 / RMAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "RMAC",
      "Colorado",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生12名 / MF 9名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Regis+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Regis+University+Soccer+ID+Camp",
    "coachVerified": true,
    "assistantCoach": "Steven Cahill",
    "assistantCoachEmail": "msoccer@regis.edu",
    "siteUrl": "https://regisrangers.com/sports/mens-soccer"
  },
  {
    "id": "metrostatedenver-mens",
    "name": "Metropolitan State University of Denver",
    "location": "Denver, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "Roadrunners",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 12000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / RMAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "RMAC",
      "Colorado",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Metropolitan+State+University+of+Denver+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Metropolitan+State+University+of+Denver+Soccer+ID+Camp"
  },
  {
    "id": "coloradochristian-mens",
    "name": "Colorado Christian University",
    "location": "Lakewood, Colorado",
    "state": "CO",
    "region": "West",
    "division": "NCAA D2",
    "conference": "RMAC",
    "gender": "Men",
    "mascot": "Cougars",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 33000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "16% (5/32名)",
    "notes": "NCAA D2 / RMAC。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "RMAC",
      "Colorado",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生5名 / MF 13名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Colorado+Christian+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Colorado+Christian+University+Soccer+ID+Camp"
  },
  {
    "id": "stedwards-mens",
    "name": "St. Edward's University",
    "location": "Austin, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Hilltoppers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 47000,
    "roomAndBoardUSD": 14000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "18% (7/38名)",
    "notes": "NCAA D2 / Lone Star。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Lone Star",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "1名 (公式ロスター確認) Shunji Watanabe",
    "rosterStats": "公式ロスター全38名 / 留学生7名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=St.+Edward's+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=St.+Edward's+University+Soccer+ID+Camp",
    "siteUrl": "https://gohilltoppers.com/sports/mens-soccer"
  },
  {
    "id": "stmarystx-mens",
    "name": "St. Mary's University (Texas)",
    "location": "San Antonio, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Rattlers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 38000,
    "roomAndBoardUSD": 11000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Lone Star。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Lone Star",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=St.+Mary's+University+(Texas)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=St.+Mary's+University+(Texas)+Soccer+ID+Camp"
  },
  {
    "id": "uttyler-mens",
    "name": "UT Tyler",
    "location": "Tyler, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Patriots",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 22000,
    "roomAndBoardUSD": 10000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "37% (13/35名)",
    "notes": "NCAA D2 / Lone Star。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Lone Star",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明3名)",
    "rosterStats": "公式ロスター全35名 / 留学生13名 / MF 10名 (Sr・Gr 1名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=UT+Tyler+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UT+Tyler+Soccer+ID+Camp"
  },
  {
    "id": "utpb-mens",
    "name": "UT Permian Basin",
    "location": "Odessa, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 20000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "要確認",
    "notes": "NCAA D2 / Lone Star。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Lone Star",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=UT+Permian+Basin+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=UT+Permian+Basin+Soccer+ID+Camp",
    "siteUrl": "https://www.utpb.edu/sports/mens-soccer"
  },
  {
    "id": "lubbockchristian-mens",
    "name": "Lubbock Christian University",
    "location": "Lubbock, Texas",
    "state": "TX",
    "region": "South",
    "division": "NCAA D2",
    "conference": "Lone Star",
    "gender": "Men",
    "mascot": "Chaparrals",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 30000,
    "roomAndBoardUSD": 9000,
    "scholarshipMax": "Max 9.0 scholarships (D2)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "49% (17/35名)",
    "notes": "NCAA D2 / Lone Star。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
    "tags": [
      "NCAA D2",
      "Lone Star",
      "Texas",
      "Needs Verification"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生17名 / MF 12名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lubbock+Christian+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lubbock+Christian+University+Soccer+ID+Camp",
    "siteUrl": "https://lcuchaps.com/sports/mens-soccer"
  },
  {
    "id": "daytonastate-mens",
    "name": "Daytona State College",
    "location": "Daytona Beach, Florida",
    "state": "FL",
    "region": "South",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Falcons",
    "headCoach": "Joe Avallone",
    "coachEmail": "Joe.Avallone@DaytonaState.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "50% (14/28名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "FL"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生14名 / MF 7名 (2年生以上 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Daytona+State+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Daytona+State+College+Soccer+ID+Camp",
    "assistantCoach": "Jonathan Lopez",
    "assistantCoachEmail": "Jonathan.Lopez@DaytonaState.edu",
    "coachVerified": true,
    "siteUrl": "https://dscfalcons.com/sports/msoc",
    "japanesePct": "4% (1/28名)",
    "fwStats": "FW 7名 / 全28名 (25%)"
  },
  {
    "id": "easternflorida-mens",
    "name": "Eastern Florida State College",
    "location": "Cocoa, Florida",
    "state": "FL",
    "region": "South",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Titans",
    "headCoach": "Bart Sasnett",
    "coachEmail": "sasnettb@easternflorida.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "72% (23/32名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "FL"
    ],
    "japanesePlayers": "4名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生23名 / MF 8名 (2年生以上 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Eastern+Florida+State+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Eastern+Florida+State+College+Soccer+ID+Camp",
    "assistantCoach": "Adrian Moreno",
    "assistantCoachEmail": "morenoa@easternflorida.edu",
    "coachVerified": true,
    "siteUrl": "https://www.efsctitans.com/sports/msoc",
    "japanesePct": "12% (4/32名)",
    "fwStats": "FW 8名 / 全32名 (25%)"
  },
  {
    "id": "arizonawestern-mens",
    "name": "Arizona Western College",
    "location": "Yuma, Arizona",
    "state": "AZ",
    "region": "West",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Matadors",
    "headCoach": "Kenny Dale",
    "coachEmail": "kenny.dale@azwestern.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "82% (27/33名)",
    "notes": "2026 NJCAA D1 全米優勝 (校史上初・延長戦の末)。NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA 2026 全米優勝",
      "NJCAA全米大会出場",
      "AZ"
    ],
    "japanesePlayers": "9名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全33名 / 留学生27名 / MF 13名 (2年生以上 8名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Arizona+Western+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Arizona+Western+College+Soccer+ID+Camp",
    "assistantCoach": "Admir Balicevac",
    "assistantCoachEmail": "admir.balicevac@azwestern.edu",
    "coachVerified": true,
    "siteUrl": "https://awcmatadors.com/sports/msoc",
    "japanesePct": "27% (9/33名)",
    "fwStats": "FW 9名 / 全33名 (27%)"
  },
  {
    "id": "lewisandclark-mens",
    "name": "Lewis and Clark Community College",
    "location": "Godfrey, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Trailblazers",
    "headCoach": "John Dunn",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "83% (24/29名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "IL"
    ],
    "japanesePlayers": "3名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全29名 / 留学生24名 / MF 7名 (2年生以上 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Lewis+and+Clark+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Lewis+and+Clark+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Parker Medina",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://www.trailblazers.lc.edu/sports/msoc",
    "japanesePct": "10% (3/29名)",
    "fwStats": "FW 9名 / 全29名 (31%)"
  },
  {
    "id": "cowley-mens",
    "name": "Cowley College",
    "location": "Arkansas City, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "Marcos Vinicius Longo Ribeiro",
    "coachEmail": "marcos.ribeiro@cowley.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "70% (19/27名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "KS"
    ],
    "japanesePlayers": "9名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生19名 / MF 7名 (2年生以上 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Cowley+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Cowley+College+Soccer+ID+Camp",
    "assistantCoach": "Eusebio \"Chevi\" Plaza",
    "assistantCoachEmail": "eusebio.plaza@cowley.edu",
    "coachVerified": true,
    "siteUrl": "https://cowleytigers.com/sports/msoc",
    "japanesePct": "33% (9/27名)",
    "fwStats": "FW 8名 / 全27名 (30%)"
  },
  {
    "id": "northidaho-mens",
    "name": "North Idaho College",
    "location": "Coeur d'Alene, Idaho",
    "state": "ID",
    "region": "West",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Cardinals",
    "headCoach": "Brad Williams",
    "coachEmail": "brad.williams@nic.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "50% (16/32名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "ID"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生16名 / MF 11名 (2年生以上 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=North+Idaho+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=North+Idaho+College+Soccer+ID+Camp",
    "assistantCoach": "Gunnar Skindlov",
    "assistantCoachEmail": "gunnar.skindlov@nic.edu",
    "coachVerified": true,
    "siteUrl": "https://nicathletics.com/sports/msoc",
    "japanesePct": "3% (1/32名)",
    "fwStats": "FW 6名 / 全32名 (19%)"
  },
  {
    "id": "gardencity-mens",
    "name": "Garden City Community College",
    "location": "Garden City, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Broncbusters",
    "headCoach": "Oscar Zelaya",
    "coachEmail": "oscar.zelaya@gcccks.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "80% (32/40名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "KS"
    ],
    "japanesePlayers": "1名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全40名 / 留学生32名 / MF 23名 (2年生以上 9名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Garden+City+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Garden+City+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Yahir Camacho",
    "assistantCoachEmail": "yahir.camacho@gcccks.edu",
    "coachVerified": true,
    "siteUrl": "https://gobroncbusters.com/sports/msoc",
    "japanesePct": "2% (1/40名)",
    "fwStats": "FW表記なし (公式ロスターはMF/DF/GKのみ)"
  },
  {
    "id": "northwest-mens",
    "name": "Northwest College",
    "location": "Powell, Wyoming",
    "state": "WY",
    "region": "West",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Trappers",
    "headCoach": "Rob Hill",
    "coachEmail": "rob.hill@nwc.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "94% (31/33名)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "WY"
    ],
    "japanesePlayers": "7名 (公式ロスター確認 / 出身地不明2名)",
    "rosterStats": "公式ロスター全33名 / 留学生31名 / MF 14名 (2年生以上 3名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Northwest+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northwest+College+Soccer+ID+Camp",
    "assistantCoach": "David Gilliatt",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://nwctrappers.com/sports/msoc",
    "japanesePct": "21% (7/33名)",
    "fwStats": "FW 8名 / 全33名 (24%)"
  },
  {
    "id": "hill-mens",
    "name": "Hill College",
    "location": "Hillsboro, Texas",
    "state": "TX",
    "region": "South",
    "division": "NJCAA D1",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Rebels",
    "headCoach": "Ivan Franco",
    "coachEmail": "ifranco@hillcollege.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 18.0 scholarships",
    "intlFriendlyRating": "要確認",
    "intlRosterPct": "要確認 (ホームタウン非公開)",
    "notes": "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "TX"
    ],
    "japanesePlayers": "要確認 (ホームタウン非公開)",
    "rosterStats": "公式ロスター全28名 / MF 9名 (2年生以上 7名) / 出身地は非公開",
    "questionnaireUrl": "https://www.google.com/search?q=Hill+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Hill+College+Soccer+ID+Camp",
    "assistantCoach": "Derick Gonzalez",
    "assistantCoachEmail": "dgonzalez@hillcollege.edu",
    "coachVerified": true,
    "siteUrl": "https://hillcollegeathletics.com/sports/msoc",
    "japanesePct": "要確認 (ホームタウン非公開)",
    "fwStats": "FW 8名 / 全28名 (29%)"
  },
  {
    "id": "ccbcessex-mens",
    "name": "CCBC Essex",
    "location": "Essex, Maryland",
    "state": "MD",
    "region": "Northeast",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Knights",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "27% (8/30名)",
    "notes": "NJCAA D2 全米大会出場校 (シード1 / Pool A)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "MD"
    ],
    "japanesePlayers": "5名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生8名 / MF 12名 (2年生以上 6名)",
    "questionnaireUrl": "https://www.google.com/search?q=CCBC+Essex+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=CCBC+Essex+Soccer+ID+Camp",
    "japanesePct": "17% (5/30名)",
    "fwStats": "FW 10名 / 全30名 (33%)",
    "siteUrl": "https://ccbcessexknights.com/sports/msoc"
  },
  {
    "id": "phoenixcollege-mens",
    "name": "Phoenix College",
    "location": "Phoenix, Arizona",
    "state": "AZ",
    "region": "West",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Bears",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "要確認",
    "intlRosterPct": "要確認 (ホームタウン非公開)",
    "notes": "2025 NJCAA D2 全米優勝校 (公式サイト記載)。NJCAA D2 全米大会出場校 (シード2 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "AZ"
    ],
    "japanesePlayers": "要確認 (ホームタウン非公開)",
    "rosterStats": "公式ロスター全33名 / MF 12名 (2年生以上 2名) / 出身地は非公開",
    "questionnaireUrl": "https://www.google.com/search?q=Phoenix+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Phoenix+College+Soccer+ID+Camp",
    "siteUrl": "https://pcbearsathletics.com/sports/msoc",
    "japanesePct": "要確認 (ホームタウン非公開)",
    "fwStats": "FW 9名 / 全33名 (27%) ※位置未掲載1名"
  },
  {
    "id": "northeastcc-mens",
    "name": "Northeast Community College",
    "location": "Norfolk, Nebraska",
    "state": "NE",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Hornets",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "89% (32/36名)",
    "notes": "2026 NJCAA D2 全米優勝 (決勝でMadison Collegeに2-1)。NJCAA D2 全米大会出場校 (シード3 / Pool C)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA 2026 全米優勝",
      "NJCAA全米大会出場",
      "NE"
    ],
    "japanesePlayers": "2名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全36名 / 留学生32名 / MF 13名 (2年生以上 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Northeast+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Northeast+Community+College+Soccer+ID+Camp",
    "siteUrl": "https://northeasthawks.com/sports/msoc",
    "japanesePct": "6% (2/36名)",
    "fwStats": "FW 10名 / 全36名 (28%)"
  },
  {
    "id": "iowalakes-mens",
    "name": "Iowa Lakes Community College",
    "location": "Estherville, Iowa",
    "state": "IA",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Lakers",
    "headCoach": "Ben MacRae",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "55% (26/47名)",
    "notes": "NJCAA D2 全米大会出場校 (シード4 / Pool D)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "IA"
    ],
    "japanesePlayers": "3名 (公式ロスター確認 / 出身地不明11名)",
    "rosterStats": "公式ロスター全47名 / 留学生26名 / MF 14名 (2年生以上 3名) / 出身地不明11名",
    "questionnaireUrl": "https://www.google.com/search?q=Iowa+Lakes+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Iowa+Lakes+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Bryan Marshall",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://iowalakesathletics.com/sports/msoc",
    "japanesePct": "6% (3/47名)",
    "fwStats": "FW 16名 / 全47名 (34%)"
  },
  {
    "id": "madisoncollege-mens",
    "name": "Madison College",
    "location": "Madison, Wisconsin",
    "state": "WI",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Wolfpack",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "31% (8/26名)",
    "notes": "2026 NJCAA D2 全米準優勝 (決勝でNortheast CCに1-2)。NJCAA D2 全米大会出場校 (シード5 / Pool D)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA 2026 全米準優勝",
      "NJCAA全米大会出場",
      "WI"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生8名 / MF 14名 (2年生以上 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Madison+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Madison+College+Soccer+ID+Camp",
    "siteUrl": "https://madisoncollegeathletics.com/sports/msoc",
    "japanesePct": "0% (0/26名)",
    "fwStats": "FW 5名 / 全26名 (19%)"
  },
  {
    "id": "pearlriver-mens",
    "name": "Pearl River Community College",
    "location": "Poplarville, Mississippi",
    "state": "MS",
    "region": "South",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Drew Gallant",
    "coachEmail": "dgallant@prcc.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (6/24名)",
    "notes": "NJCAA D2 全米大会出場校 (シード6 / Pool C)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "MS"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全24名 / 留学生6名 / MF 7名 (2年生以上 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Pearl+River+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Pearl+River+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Joe Guinchard",
    "assistantCoachEmail": "jguinchard@prcc.edu",
    "coachVerified": true,
    "siteUrl": "https://prccathletics.com/sports/msoc",
    "japanesePct": "0% (0/24名)",
    "fwStats": "FW 8名 / 全24名 (33%)"
  },
  {
    "id": "neosho-mens",
    "name": "Neosho County Community College",
    "location": "Chanute, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Panthers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "78% (25/32名)",
    "notes": "NJCAA D2 全米大会出場校 (シード7 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "KS"
    ],
    "japanesePlayers": "5名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生25名 / MF 14名 (2年生以上 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Neosho+County+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Neosho+County+Community+College+Soccer+ID+Camp",
    "siteUrl": "https://goneosho.com/sports/mens-soccer",
    "japanesePct": "16% (5/32名)",
    "fwStats": "FW 6名 / 全32名 (19%) ※位置未掲載1名"
  },
  {
    "id": "glendaleaz-mens",
    "name": "Glendale Community College",
    "location": "Glendale, Arizona",
    "state": "AZ",
    "region": "West",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Gauchos",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "要確認",
    "intlRosterPct": "要確認",
    "notes": "NJCAA D2 全米大会出場校 (シード8 / Pool A)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
    "tags": [
      "NJCAA全米大会出場",
      "AZ"
    ],
    "japanesePlayers": "未確認 (要問合せ)",
    "rosterStats": "要確認",
    "questionnaireUrl": "https://www.google.com/search?q=Glendale+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Glendale+Community+College+Soccer+ID+Camp",
    "japanesePct": "要確認 (公式ロスター取得不可)",
    "fwStats": "要確認 (公式ロスター取得不可)"
  },
  {
    "id": "pima-mens",
    "name": "Pima Community College",
    "location": "Tucson, Arizona",
    "state": "AZ",
    "region": "West",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Aztecs",
    "headCoach": "David Cosgrove",
    "coachEmail": "dcosgrove@pima.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "25% (7/28名)",
    "notes": "NJCAA D2 全米大会出場校 (シード9 / Pool D)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "AZ"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明1名)",
    "rosterStats": "公式ロスター全28名 / 留学生7名 / MF 12名 (2年生以上 6名) / 出身地不明1名",
    "questionnaireUrl": "https://www.google.com/search?q=Pima+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Pima+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Armand Bram",
    "assistantCoachEmail": "abrambayze@pima.edu",
    "coachVerified": true,
    "siteUrl": "https://pimaaztecs.com/sports/msoc",
    "japanesePct": "0% (0/28名)",
    "fwStats": "FW 2名 / 全28名 (7%)"
  },
  {
    "id": "wallacestate-mens",
    "name": "Wallace State Community College",
    "location": "Hanceville, Alabama",
    "state": "AL",
    "region": "South",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Lions",
    "headCoach": "James Fee",
    "coachEmail": "james.fee@wallacestate.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "要確認",
    "intlRosterPct": "要確認 (ホームタウン一部非公開)",
    "notes": "NJCAA D2 全米大会出場校 (シード10 / Pool C)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "AL"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 非公開19名)",
    "rosterStats": "公式ロスター全31名 (詳細公開12名) / 留学生4名 / MF 5名 (2年生以上 5名) / 非公開19名",
    "questionnaireUrl": "https://www.google.com/search?q=Wallace+State+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wallace+State+Community+College+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://wallacestate.edu/athletics/sports/msoc",
    "japanesePct": "0% (0/12名・公開分のみ)",
    "fwStats": "FW 3名 / 公開12名 (25%・公開分のみ)"
  },
  {
    "id": "schoolcraft-mens",
    "name": "Schoolcraft College",
    "location": "Livonia, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Ocelots",
    "headCoach": "Rick Larson",
    "coachEmail": "rlarson@schoolcraft.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "17% (5/30名)",
    "notes": "NJCAA D2 全米大会出場校 (シード11 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "MI"
    ],
    "japanesePlayers": "0名 (公式ロスター確認 / 出身地不明5名)",
    "rosterStats": "公式ロスター全30名 / 留学生5名 / MF 13名 (2年生以上 6名) / 出身地不明5名",
    "questionnaireUrl": "https://www.google.com/search?q=Schoolcraft+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Schoolcraft+College+Soccer+ID+Camp",
    "assistantCoach": "Ben Davis",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://schoolcraftocelots.com/sports/msoc",
    "japanesePct": "0% (0/30名)",
    "fwStats": "FW 8名 / 全30名 (27%)"
  },
  {
    "id": "heartland-mens",
    "name": "Heartland Community College",
    "location": "Normal, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NJCAA D2",
    "conference": "要確認",
    "gender": "Men",
    "mascot": "Hawks",
    "headCoach": "Norman Ramos",
    "coachEmail": "Norman.Ramos@heartland.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "要確認 (NJCAA D2: 学費・諸費用・教科書まで。寮費・食費は対象外)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "50% (11/22名)",
    "notes": "NJCAA D2 全米大会出場校 (シード12 / Pool A)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
    "tags": [
      "NJCAA全米大会出場",
      "IL"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全22名 / 留学生11名 / MF 11名 (2年生以上 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Heartland+Community+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Heartland+Community+College+Soccer+ID+Camp",
    "assistantCoach": "Marco Iniguez",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://heartlandhawks.com/sports/mens-soccer",
    "japanesePct": "0% (0/22名)",
    "fwStats": "FW 2名 / 全22名 (9%)"
  },
  {
    "id": "bethelind-mens",
    "name": "Bethel University (Indiana)",
    "location": "Mishawaka, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Crossroads League",
    "gender": "Men",
    "mascot": "Pilots",
    "headCoach": "Thiago Pinto",
    "coachEmail": "Thiago.Pinto@BethelUniversity.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "80% (24/30名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Crossroads League / Tournament Champion)。ポジション表記「MD」を中盤として集計(要確認)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Crossroads League",
      "Indiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生24名 / MF 13名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bethel+University+(Indiana)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bethel+University+(Indiana)+Soccer+ID+Camp",
    "assistantCoach": "Raymundo Gonzalez",
    "assistantCoachEmail": "raymundo.gonzalez@betheluniversity.edu",
    "coachVerified": true,
    "siteUrl": "https://bupilots.com/sports/mens-soccer"
  },
  {
    "id": "bethelten-mens",
    "name": "Bethel University (Tennessee)",
    "location": "McKenzie, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NAIA",
    "conference": "Mid-South",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "Malang Jarju",
    "coachEmail": "jarjum@bethelu.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "91% (30/33名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Mid-South Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Mid-South",
      "Tennessee",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生30名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Bethel+University+(Tennessee)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Bethel+University+(Tennessee)+Soccer+ID+Camp",
    "assistantCoach": "Avery Flener",
    "assistantCoachEmail": "flenera@bethelu.edu",
    "coachVerified": true,
    "siteUrl": "https://bethelathletics.com/sports/mens-soccer"
  },
  {
    "id": "carrollmt-mens",
    "name": "Carroll College (Montana)",
    "location": "Helena, Montana",
    "state": "MT",
    "region": "West",
    "division": "NAIA",
    "conference": "Cascade Collegiate",
    "gender": "Men",
    "mascot": "Fighting Saints",
    "headCoach": "Austin Shick",
    "coachEmail": "ashick@carroll.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "50% (13/26名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Cascade Collegiate Conference / At Large)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Cascade Collegiate",
      "Montana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生13名 / MF 7名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Carroll+College+(Montana)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Carroll+College+(Montana)+Soccer+ID+Camp",
    "assistantCoach": "Wayne Gardella",
    "assistantCoachEmail": "wgardella@carroll.edu",
    "coachVerified": true,
    "siteUrl": "https://carrollathletics.com/sports/mens-soccer"
  },
  {
    "id": "concordianeb-mens",
    "name": "Concordia University (Nebraska)",
    "location": "Seward, Nebraska",
    "state": "NE",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Great Plains Athletic",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "Bernie Ochoa",
    "coachEmail": "Bernie.Ochoa@cune.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "52% (14/27名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Great Plains Athletic Conference / Tournament Champion)。2025年は全米大会2回戦進出。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Great Plains Athletic",
      "Nebraska",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生14名 / MF 3名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Concordia+University+(Nebraska)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Concordia+University+(Nebraska)+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://www.cune.edu/athletics/teams/soccer"
  },
  {
    "id": "daltonstate-mens",
    "name": "Dalton State College",
    "location": "Dalton, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "SSAC",
    "gender": "Men",
    "mascot": "Roadrunners",
    "headCoach": "Douglas Oliveira",
    "coachEmail": "doliveira@daltonstate.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "66% (21/32名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Southern States Athletic Conference / At-Large)。2024年NAIA全米王者。ポジション表記W/Sは中盤として集計せず(MF表記のみ)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "SSAC",
      "Georgia",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全32名 / 留学生21名 / MF 11名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Dalton+State+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Dalton+State+College+Soccer+ID+Camp",
    "assistantCoach": "Rury Alvarez",
    "assistantCoachEmail": "ralvarez2@daltonstate.edu",
    "coachVerified": true,
    "siteUrl": "https://dsroadrunners.com/sports/mens-soccer"
  },
  {
    "id": "easternoregon-mens",
    "name": "Eastern Oregon University",
    "location": "La Grande, Oregon",
    "state": "OR",
    "region": "West",
    "division": "NAIA",
    "conference": "Cascade Collegiate",
    "gender": "Men",
    "mascot": "Mountaineers",
    "headCoach": "Jessy Watson",
    "coachEmail": "watsonja@eou.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "6% (2/31名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Cascade Collegiate Conference / Regular-Season Champion)。ポジション表記C/W/Sは中盤として集計せず(MF表記のみ)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Cascade Collegiate",
      "Oregon",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生2名 / MF 10名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Eastern+Oregon+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Eastern+Oregon+University+Soccer+ID+Camp",
    "assistantCoach": "Oscar Alegria",
    "assistantCoachEmail": "oalegria@eou.edu",
    "coachVerified": true,
    "siteUrl": "https://eousports.com/sports/mens-soccer"
  },
  {
    "id": "grace-mens",
    "name": "Grace College",
    "location": "Winona Lake, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Crossroads League",
    "gender": "Men",
    "mascot": "Lancers",
    "headCoach": "Arron Patrick",
    "coachEmail": "patricaf@grace.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "65% (17/26名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Crossroads League / At-Large)。ロスターにポジション記載なし。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Crossroads League",
      "Indiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全26名 / 留学生17名 / MF 不明(ポジション記載なし)",
    "questionnaireUrl": "https://www.google.com/search?q=Grace+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Grace+College+Soccer+ID+Camp",
    "assistantCoach": "Austin Altimus",
    "assistantCoachEmail": "altimua@grace.edu",
    "coachVerified": true,
    "siteUrl": "https://gclancers.com/sports/mens-soccer"
  },
  {
    "id": "harrisstowe-mens",
    "name": "Harris-Stowe State University",
    "location": "St. Louis, Missouri",
    "state": "MO",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "American Midwest",
    "gender": "Men",
    "mascot": "Hornets",
    "headCoach": "Nenad Todorovic",
    "coachEmail": "todorovicn@hssu.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "93% (28/30名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (American Midwest Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "American Midwest",
      "Missouri",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全30名 / 留学生28名 / MF 11名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Harris-Stowe+State+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Harris-Stowe+State+University+Soccer+ID+Camp",
    "assistantCoach": "Bojan Andric",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://hornetsathletics.com/sports/mens-soccer"
  },
  {
    "id": "indianatech-mens",
    "name": "Indiana Institute of Technology (Indiana Tech)",
    "location": "Fort Wayne, Indiana",
    "state": "IN",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Wolverine-Hoosier Athletic",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "Jack Rose",
    "coachEmail": "jsrose@indianatech.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "97% (34/35名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Wolverine-Hoosier Athletic Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Wolverine-Hoosier Athletic",
      "Indiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生34名 / MF 12名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Indiana+Institute+of+Technology+(Indiana+Tech)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Indiana+Institute+of+Technology+(Indiana+Tech)+Soccer+ID+Camp",
    "assistantCoach": "Ethan Vigario",
    "assistantCoachEmail": "ElVigario@indianatech.net",
    "coachVerified": true,
    "siteUrl": "https://indianatechwarriors.com/sports/mens-soccer"
  },
  {
    "id": "johnbrown-mens",
    "name": "John Brown University",
    "location": "Siloam Springs, Arkansas",
    "state": "AR",
    "region": "South",
    "division": "NAIA",
    "conference": "Sooner Athletic",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "Ryan Williams",
    "coachEmail": "rjwilliams@jbu.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "74% (20/27名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Sooner Athletic Conference / At-Large)。ロスターにポジション記載なし。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Sooner Athletic",
      "Arkansas",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生20名 / MF 不明(ポジション記載なし)",
    "questionnaireUrl": "https://www.google.com/search?q=John+Brown+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=John+Brown+University+Soccer+ID+Camp",
    "coachVerified": true,
    "siteUrl": "https://jbuathletics.com/sports/mens-soccer"
  },
  {
    "id": "lasierra-mens",
    "name": "La Sierra University",
    "location": "Riverside, California",
    "state": "CA",
    "region": "West",
    "division": "NAIA",
    "conference": "Great Southwest Athletic",
    "gender": "Men",
    "mascot": "Golden Eagles",
    "headCoach": "David Trevino",
    "coachEmail": "dtrevino@lasierra.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "5% (1/21名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Great Southwest Athletic Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Great Southwest Athletic",
      "California",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全21名 / 留学生1名 / MF 6名 (Sr・Gr 3名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=La+Sierra+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=La+Sierra+University+Soccer+ID+Camp",
    "assistantCoach": "Francisco Pons",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://lsugoldeneagles.com/sports/mens-soccer"
  },
  {
    "id": "life-mens",
    "name": "Life University",
    "location": "Marietta, Georgia",
    "state": "GA",
    "region": "South",
    "division": "NAIA",
    "conference": "SSAC",
    "gender": "Men",
    "mascot": "Running Eagles",
    "headCoach": "Alex Pama",
    "coachEmail": "Alex.Pama@LIFE.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "88% (45/51名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Southern States Athletic Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "SSAC",
      "Georgia",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "2名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全51名 / 留学生45名 / MF 18名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Life+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Life+University+Soccer+ID+Camp",
    "assistantCoach": "Juan Cruz",
    "assistantCoachEmail": "Juancruz.parisisitja@student.life.edu",
    "coachVerified": true,
    "siteUrl": "https://liferunningeagles.com/sports/mens-soccer"
  },
  {
    "id": "lsualexandria-mens",
    "name": "Louisiana State University at Alexandria",
    "location": "Alexandria, Louisiana",
    "state": "LA",
    "region": "South",
    "division": "NAIA",
    "conference": "Red River Athletic",
    "gender": "Men",
    "mascot": "Generals",
    "headCoach": "Mackenzie Young",
    "coachEmail": "mackenziey@lsua.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "90% (28/31名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Red River Athletic Conference / At-Large)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Red River Athletic",
      "Louisiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全31名 / 留学生28名 / MF 10名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=Louisiana+State+University+at+Alexandria+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Louisiana+State+University+at+Alexandria+Soccer+ID+Camp",
    "assistantCoach": "Martin Carter Torres",
    "assistantCoachEmail": "mtorres@lsua.edu",
    "coachVerified": true,
    "siteUrl": "https://lsuagenerals.com/sports/mens-soccer"
  },
  {
    "id": "lsushreveport-mens",
    "name": "Louisiana State University Shreveport",
    "location": "Shreveport, Louisiana",
    "state": "LA",
    "region": "South",
    "division": "NAIA",
    "conference": "Red River Athletic",
    "gender": "Men",
    "mascot": "Pilots",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "92% (23/25名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Red River Athletic Conference / At-Large)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。ヘッドコーチ情報は公式サイトから取得できず未確認。",
    "tags": [
      "NAIA",
      "Red River Athletic",
      "Louisiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "1名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全25名 / 留学生23名 / MF 9名 (Sr・Gr 2名)",
    "questionnaireUrl": "https://www.google.com/search?q=Louisiana+State+University+Shreveport+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Louisiana+State+University+Shreveport+Soccer+ID+Camp",
    "siteUrl": "https://lsusathletics.com/sports/msoc/2026-27"
  },
  {
    "id": "madonna-mens",
    "name": "Madonna University",
    "location": "Livonia, Michigan",
    "state": "MI",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Wolverine-Hoosier Athletic",
    "gender": "Men",
    "mascot": "Crusaders",
    "headCoach": "Mark Zathey",
    "coachEmail": "mzathey@madonna.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "67% (40/60名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Wolverine-Hoosier Athletic Conference / Regular-Season Champion)。60名の大所帯ロスター(JV含む可能性)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Wolverine-Hoosier Athletic",
      "Michigan",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "7名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全60名 / 留学生40名 / MF 26名 (Sr・Gr 4名) / 出身地不明2名",
    "questionnaireUrl": "https://www.google.com/search?q=Madonna+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Madonna+University+Soccer+ID+Camp",
    "assistantCoach": "Dan Diac",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://madonnacrusaders.com/sports/mens-soccer"
  },
  {
    "id": "milligan-mens",
    "name": "Milligan University",
    "location": "Milligan, Tennessee",
    "state": "TN",
    "region": "South",
    "division": "NAIA",
    "conference": "Appalachian Athletic",
    "gender": "Men",
    "mascot": "Buffaloes",
    "headCoach": "Brad Camp",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "48% (24/50名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Appalachian Athletic Conference / Tournament Runner-Up)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Appalachian Athletic",
      "Tennessee",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全50名 / 留学生24名 / MF 21名 (Sr・Gr 8名)",
    "questionnaireUrl": "https://www.google.com/search?q=Milligan+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Milligan+University+Soccer+ID+Camp",
    "assistantCoach": "Tim Kolb",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://milliganbuffs.com/sports/mens-soccer"
  },
  {
    "id": "olivetnazarene-mens",
    "name": "Olivet Nazarene University",
    "location": "Bourbonnais, Illinois",
    "state": "IL",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Chicagoland Collegiate Athletic",
    "gender": "Men",
    "mascot": "Tigers",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "81% (22/27名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Chicagoland Collegiate Athletic Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。ヘッドコーチ情報は公式サイトから取得できず未確認。",
    "tags": [
      "NAIA",
      "Chicagoland Collegiate Athletic",
      "Illinois",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全27名 / 留学生22名 / MF 8名 (Sr・Gr 7名)",
    "questionnaireUrl": "https://www.google.com/search?q=Olivet+Nazarene+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Olivet+Nazarene+University+Soccer+ID+Camp",
    "siteUrl": "https://onutigers.com/sports/msoc/2026-27"
  },
  {
    "id": "ottawa-mens",
    "name": "Ottawa University (Kansas)",
    "location": "Ottawa, Kansas",
    "state": "KS",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "KCAC",
    "gender": "Men",
    "mascot": "Braves",
    "headCoach": "James Cottage",
    "coachEmail": "james.cottage@ottawa.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "42% (27/64名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Kansas Collegiate Athletic Conference / Regular Season Runner-Up)。64名の大所帯ロスター(JV含む可能性)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "KCAC",
      "Kansas",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全64名 / 留学生27名 / MF 25名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Ottawa+University+(Kansas)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Ottawa+University+(Kansas)+Soccer+ID+Camp",
    "assistantCoach": "Cain Scott",
    "assistantCoachEmail": "cain.scott@ottawa.edu",
    "coachVerified": true,
    "siteUrl": "https://ottawabraves.com/sports/mens-soccer"
  },
  {
    "id": "rockymountain-mens",
    "name": "Rocky Mountain College",
    "location": "Billings, Montana",
    "state": "MT",
    "region": "West",
    "division": "NAIA",
    "conference": "Cascade Collegiate",
    "gender": "Men",
    "mascot": "Battlin' Bears",
    "headCoach": "Milo Downey",
    "coachEmail": "milo.downey@rocky.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "55% (18/33名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Cascade Collegiate Conference / At-Large)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Cascade Collegiate",
      "Montana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全33名 / 留学生18名 / MF 9名 (Sr・Gr 1名)",
    "questionnaireUrl": "https://www.google.com/search?q=Rocky+Mountain+College+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Rocky+Mountain+College+Soccer+ID+Camp",
    "assistantCoach": "Jared Dickerson",
    "assistantCoachEmail": "jared.dickerson@rocky.edu",
    "coachVerified": true,
    "siteUrl": "https://gobattlinbears.com/sports/mens-soccer"
  },
  {
    "id": "unioncommonwealth-mens",
    "name": "Union Commonwealth University",
    "location": "Barbourville, Kentucky",
    "state": "KY",
    "region": "South",
    "division": "NAIA",
    "conference": "Appalachian Athletic",
    "gender": "Men",
    "mascot": "Bulldogs",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "95% (42/44名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Appalachian Athletic Conference / Regular-Season Champion)。ロスターにポジション記載なし。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。ヘッドコーチ情報は公式サイトから取得できず未確認。",
    "tags": [
      "NAIA",
      "Appalachian Athletic",
      "Kentucky",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全44名 / 留学生42名 / MF 不明(ポジション記載なし)",
    "questionnaireUrl": "https://www.google.com/search?q=Union+Commonwealth+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Union+Commonwealth+University+Soccer+ID+Camp",
    "siteUrl": "https://gounionbulldogs.com/sports/msoc/2026-27"
  },
  {
    "id": "warnerpacific-mens",
    "name": "Warner Pacific University",
    "location": "Portland, Oregon",
    "state": "OR",
    "region": "West",
    "division": "NAIA",
    "conference": "Cascade Collegiate",
    "gender": "Men",
    "mascot": "Knights",
    "headCoach": "Troy Ready",
    "coachEmail": "tready@warnerpacific.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "High",
    "intlRosterPct": "0% (0/53名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Cascade Collegiate Conference / Tournament Champion)。53名の大所帯ロスター(JV含む可能性)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Cascade Collegiate",
      "Oregon",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全53名 / 留学生0名 / MF 16名 (Sr・Gr 1名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=Warner+Pacific+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Warner+Pacific+University+Soccer+ID+Camp",
    "assistantCoach": "Cameron Marvin",
    "assistantCoachEmail": "cmarvin@warnerpacific.edu",
    "coachVerified": true,
    "siteUrl": "https://wpuknights.com/sports/mens-soccer"
  },
  {
    "id": "westcliff-mens",
    "name": "Westcliff University",
    "location": "Irvine, California",
    "state": "CA",
    "region": "West",
    "division": "NAIA",
    "conference": "California Pacific",
    "gender": "Men",
    "mascot": "Warriors",
    "headCoach": "Randy Dodge",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "77% (27/35名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (California Pacific Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "California Pacific",
      "California",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全35名 / 留学生27名 / MF 13名 (Sr・Gr 4名) / 出身地不明3名",
    "questionnaireUrl": "https://www.google.com/search?q=Westcliff+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Westcliff+University+Soccer+ID+Camp",
    "assistantCoach": "Tom Lancaster",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://westcliffathletics.com/sports/msoc/2026-27"
  },
  {
    "id": "wiley-mens",
    "name": "Wiley University",
    "location": "Marshall, Texas",
    "state": "TX",
    "region": "South",
    "division": "NAIA",
    "conference": "HBCU Athletic",
    "gender": "Men",
    "mascot": "Wildcats",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Very High",
    "intlRosterPct": "48% (20/42名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (HBCU Athletic Conference / Tournament Champion)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。ヘッドコーチ情報は公式サイトから取得できず未確認。",
    "tags": [
      "NAIA",
      "HBCU Athletic",
      "Texas",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "3名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全42名 / 留学生20名 / MF 14名 (Sr・Gr 3名)",
    "questionnaireUrl": "https://www.google.com/search?q=Wiley+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Wiley+University+Soccer+ID+Camp",
    "siteUrl": "https://wileyathletics.com/sports/msoc/2026-27"
  },
  {
    "id": "williampenn-mens",
    "name": "William Penn University",
    "location": "Oskaloosa, Iowa",
    "state": "IA",
    "region": "Midwest",
    "division": "NAIA",
    "conference": "Heart of America",
    "gender": "Men",
    "mascot": "Statesmen",
    "headCoach": "",
    "coachEmail": "",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "94% (34/36名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Heart of America Athletic Conference / At-Large)。学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。ヘッドコーチ情報は公式サイトから取得できず未確認。",
    "tags": [
      "NAIA",
      "Heart of America",
      "Iowa",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "3名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全36名 / 留学生34名 / MF 13名 (Sr・Gr 4名)",
    "questionnaireUrl": "https://www.google.com/search?q=William+Penn+University+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=William+Penn+University+Soccer+ID+Camp",
    "siteUrl": "https://statesmenathletics.com/sports/msoc/2026-27"
  },
  {
    "id": "wvutech-mens",
    "name": "West Virginia University Institute of Technology (WVU Tech)",
    "location": "Beckley, West Virginia",
    "state": "WV",
    "region": "South",
    "division": "NAIA",
    "conference": "River States",
    "gender": "Men",
    "mascot": "Golden Bears",
    "headCoach": "Nick Semnani",
    "coachEmail": "nick.semnani@mail.wvu.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "88% (51/58名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (River States Conference / Tournament Champion)。2025年は全米準優勝。ロスターに学年記載なし。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "River States",
      "West Virginia",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全58名 / 留学生51名 / MF 22名 (学年記載なしのためSr/Gr不明)",
    "questionnaireUrl": "https://www.google.com/search?q=West+Virginia+University+Institute+of+Technology+(WVU+Tech)+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=West+Virginia+University+Institute+of+Technology+(WVU+Tech)+Soccer+ID+Camp",
    "assistantCoach": "Alejandro Jaramillo",
    "assistantCoachEmail": "diego.jaramillovilla@wvu.edu",
    "coachVerified": true,
    "siteUrl": "https://goldenbearathletics.com/sports/mens-soccer"
  },
  {
    "id": "xavierla-mens",
    "name": "Xavier University of Louisiana",
    "location": "New Orleans, Louisiana",
    "state": "LA",
    "region": "South",
    "division": "NAIA",
    "conference": "Red River Athletic",
    "gender": "Men",
    "mascot": "Gold Rush",
    "headCoach": "Lucas Cordeiro",
    "coachEmail": "lcordeir@xula.edu",
    "annualTuitionUSD": 0,
    "roomAndBoardUSD": 0,
    "scholarshipMax": "Max 12.0 scholarships (NAIA)",
    "intlFriendlyRating": "Extremely High",
    "intlRosterPct": "64% (18/28名)",
    "notes": "NAIA 2025全米大会(男子サッカー)出場校 (Red River Athletic Conference / Regular-Season Champion)。ポジション表記Wは中盤として集計せず(MF表記のみ)。 学費・寮費は未確認 (公式サイトで要確認)。ロスターは公式サイトの現行(2026シーズン)ロスターから集計。",
    "tags": [
      "NAIA",
      "Red River Athletic",
      "Louisiana",
      "NAIA 2025 全米大会出場"
    ],
    "japanesePlayers": "0名 (公式ロスター確認)",
    "rosterStats": "公式ロスター全28名 / 留学生18名 / MF 11名 (Sr・Gr 5名)",
    "questionnaireUrl": "https://www.google.com/search?q=Xavier+University+of+Louisiana+Men's+Soccer+Recruiting+Questionnaire",
    "campUrl": "https://www.google.com/search?q=Xavier+University+of+Louisiana+Soccer+ID+Camp",
    "assistantCoach": "Will Rodrigues",
    "assistantCoachEmail": "",
    "coachVerified": true,
    "siteUrl": "https://xulagold.com/sports/mens-soccer"
  }
];

// Corrections applied to colleges already saved in a user's browser (localStorage).
// A field is only updated when the saved value still equals the old default ("from"), so user edits are never overwritten.
const COLLEGE_DATA_FIXES = {
  "clemsonuniversity-mens": {
    "intlRosterPct": [
      "35%",
      "62% (18/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生18名 / MF 10名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "wakeforestuniversity-mens": {
    "coachEmail": [
      "muussb@wfu.edu",
      "muussrp@wfu.edu"
    ],
    "assistantCoach": [
      "Dane Brenner (Associate HC)",
      "Dane Brenner"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "30% (9/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生9名 / MF 13名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofvirginia-mens": {
    "intlRosterPct": [
      "35%",
      "26% (7/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生7名 / MF 10名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "syracuseuniversity-mens": {
    "coachEmail": [
      "suathletics@syr.edu",
      "ismcinty@syr.edu"
    ],
    "assistantCoach": [
      "Jukka Masalin (Associate HC)",
      "Jukka Masalin"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "37% (10/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生10名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "southernmethodistuni-mens": {
    "coachEmail": [
      "smusoccer@smu.edu",
      "khudson@smu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Michael King"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@smu.edu",
      "mjking@smu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Mustangs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (6/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生6名 / MF 9名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uncchapelhill-mens": {
    "coachEmail": [
      "msoccer@unc.edu",
      "csomoano@uncaa.unc.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Michael Callahan"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unc.edu",
      "mbcallah@unc.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "45% (14/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生14名 / MF 10名 (Sr・Gr 1名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "universityofnotredam-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@nd.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "0% (0/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生0名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofpittsbur-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Bryce Cregan"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@athletics.pitt.edu",
      "bcregan@athletics.pitt.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "65%",
      "36% (9/25名)"
    ],
    "rosterStats": [
      "留学生比率 約65%",
      "公式ロスター全25名 / 留学生9名 / MF 11名 (Sr・Gr 5名)"
    ],
    "coachEmail": [
      "pittmsoccer@athletics.pitt.edu",
      "msoccer@athletics.pitt.edu"
    ]
  },
  "dukeuniversity-mens": {
    "coachEmail": [
      "dukesoccer@duke.edu",
      "jjk21@duke.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Michael Brady"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@duke.edu",
      "michael.brady@duke.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "36% (10/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生10名 / MF 13名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認)"
    ]
  },
  "ucberkeleycal-mens": {
    "stadium": [
      "Golden Bears Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "30%",
      "17% (5/30名)"
    ],
    "rosterStats": [
      "部員32名中 留学生約10名 (約30%) / 欧州, 中南米",
      "公式ロスター全30名 / 留学生5名 / MF 15名 (Sr・Gr 8名)"
    ],
    "japanesePlayers": [
      "0名 (過去受け入れ実績あり)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityoflouisvil-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Stephen Lunney"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@louisville.edu",
      "slunney@GoCards.com"
    ],
    "stadium": [
      "Cardinals Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "37% (10/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生10名 / MF 9名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "cardsoccer@louisville.edu",
      "johnh@GoCards.com"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "ncstateuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@ncsu.edu",
      null
    ],
    "stadium": [
      "Wolfpack Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "48% (15/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生15名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Hayato Takayama"
    ]
  },
  "virginiatech-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@vt.edu",
      null
    ],
    "stadium": [
      "Hokies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "45% (13/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生13名 / MF 13名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "bostoncollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bc.edu",
      null
    ],
    "stadium": [
      "Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "36% (10/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生10名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Bob Thompson",
      "Francesco D'Agostino"
    ],
    "coachEmail": [
      "eaglessoccer@bc.edu",
      "msoccer@bc.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "indianauniversityblo-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Christian Lomeli"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@indiana.edu",
      "clomeli@iu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "17% (5/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生5名 / MF 7名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofmaryland-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@umd.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "61% (17/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生17名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofwashingt-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Mark Collings"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uw.edu",
      "markcoll@uw.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Huskies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "0% (0/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生0名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "ohiostateuniversity-mens": {
    "coachEmail": [
      "buckeyesoccer@osu.edu",
      "maisonneuve.2@osu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Matt Foldesy"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@osu.edu",
      "foldesy.1@osu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "21% (6/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生6名 / MF 9名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "pennstateuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@psu.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "39% (9/23名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全23名 / 留学生9名 / MF 7名 (Sr・Gr 6名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofmichigan-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Kevin Anderson"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@umich.edu",
      ""
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "9% (3/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生3名 / MF 12名 (Sr・Gr 7名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "michiganstateunivers-mens": {
    "coachEmail": [
      "spartansoccer@msu.edu",
      "rensingd@ath.msu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Reid Friedrichs"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@msu.edu",
      "rfriedrichs@ath.msu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Spartans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "4% (1/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生1名 / MF 9名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofwisconsi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uwbadgers.com",
      null
    ],
    "stadium": [
      "Badgers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (5/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生5名 / MF 7名 (Sr・Gr 2名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "badgersoccer@uwbadgers.com",
      "wisconsinmsoc@athletics.wisc.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "rutgersuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@rutgers.edu",
      null
    ],
    "stadium": [
      "Scarlet Knights Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "27% (9/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生9名 / MF 10名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "georgetownuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Mike Montross"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@georgetown.edu",
      "mm5289@georgetown.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "29% (8/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生8名 / MF 18名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "bwiese@georgetown.edu",
      "gumenssoccer@georgetown.edu"
    ]
  },
  "universityofakron-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ger Coppinger"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uakron.edu",
      ""
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "31% (9/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生9名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "jembick@uakron.edu",
      "menssoccer@uakron.edu"
    ]
  },
  "creightonuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Mitch Kavanagh"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@creighton.edu",
      "mitchkavanagh@creighton.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "31% (9/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生9名 / MF 13名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "bluejaysoccer@creighton.edu",
      "creightonsocceracademy@creighton.edu"
    ]
  },
  "providencecollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@providence.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "26% (7/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生7名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "stjohnsuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@stjohns.edu",
      null
    ],
    "stadium": [
      "Red Storm Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "47% (16/34名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全34名 / 留学生16名 / MF 15名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uconnuniversityofcon-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uconn.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "34% (10/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生10名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Yotaro Furutani"
    ]
  },
  "butleruniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@butler.edu",
      null
    ],
    "stadium": [
      "Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "31% (8/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生8名 / MF 9名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Haato Efune"
    ]
  },
  "xavieruniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@xavier.edu",
      null
    ],
    "stadium": [
      "Musketeers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "38% (11/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生11名 / MF 10名 (Sr・Gr 1名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "setonhalluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jeff Matteo"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@shu.edu",
      "jeffrey.matteo@shu.edu"
    ],
    "stadium": [
      "Pirates Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "46% (13/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生13名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "marquetteuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@marquette.edu",
      null
    ],
    "stadium": [
      "Golden Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "39% (11/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生11名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "villanovauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Alex Balog"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@villanova.edu",
      "abalog@villanova.edu"
    ],
    "stadium": [
      "Wildcats Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "8% (2/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生2名 / MF 10名 (Sr・Gr 3名) / 出身地不明3名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明3名)"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "depauluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Scott Bratt"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@depaul.edu",
      "sbratt@depaul.edu"
    ],
    "stadium": [
      "Blue Demons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "3% (1/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生1名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "depaulsoccer@depaul.edu",
      "mplotkin@depaul.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "marshalluniversity-mens": {
    "assistantCoach": [
      "Petsa Radivojevic",
      "Josh Faga"
    ],
    "assistantCoachEmail": [
      "radivojevic@marshall.edu",
      "faga@marshall.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "65%",
      "81% (22/27名)"
    ],
    "rosterStats": [
      "留学生比率 約65%",
      "公式ロスター全27名 / 留学生22名 / MF 8名 (Sr・Gr 3名)"
    ],
    "coachEmail": [
      "grassie@marshall.edu",
      "msoccer@marshall.edu"
    ]
  },
  "westvirginiauniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Andy Wright"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@mail.wvu.edu",
      "andy.wright@mail.wvu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "55% (17/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生17名 / MF 9名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Kanta Ishii"
    ]
  },
  "universityofkentucky-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uky.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "72% (18/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生18名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "ucfunivofcentralflor-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@athletics.ucf.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "71% (17/24名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全24名 / 留学生17名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "3名 (公式ロスター確認) Seiryu Ono, Sena Yamamoto, Takahiro Fujita"
    ]
  },
  "jamesmadisonuniversi-mens": {
    "coachEmail": [
      "jmusoccer@jmu.edu",
      "zazenspm@jmu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Charlie Hubbard"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@jmu.edu",
      "hubbarcj@jmu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "59% (17/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生17名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofsouthcar-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@sc.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "63% (17/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生17名 / MF 7名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "coastalcarolinaunive-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@coastal.edu",
      null
    ],
    "stadium": [
      "Chanticleers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "36% (9/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生9名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "olddominionuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@odu.edu",
      null
    ],
    "stadium": [
      "Monarchs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "39% (11/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "georgiastateuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gsu.edu",
      null
    ],
    "stadium": [
      "Panthers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "36% (10/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生10名 / MF 14名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "georgiasouthernunive-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "James Smith"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@georgiasouthern.edu",
      "jamessmith@georgiasouthern.edu"
    ],
    "stadium": [
      "Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "61% (17/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生17名 / MF 10名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "gseaglesoccer@georgiasouthern.edu",
      "gsumenssoccer@georgiasouthern.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "fiufloridainternatio-mens": {
    "coachEmail": [
      "fiusoccer@fiu.edu",
      "krussell@fiu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Dannie Merida"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fiu.edu",
      "dmerida@fiu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Panthers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "65%",
      "71% (20/28名)"
    ],
    "rosterStats": [
      "留学生比率 約65%",
      "公式ロスター全28名 / 留学生20名 / MF 7名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "unccharlotte-mens": {
    "coachEmail": [
      "49erssoccer@charlotte.edu",
      "klangan1@charlotte.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Shane Carew"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@charlotte.edu",
      "scarew1@charlotte.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "49ers Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Very High"
    ],
    "intlRosterPct": [
      "35%",
      "61% (17/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生17名 / MF 9名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Natsuki Ogata"
    ]
  },
  "universityoftulsa-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@utulsa.edu",
      null
    ],
    "stadium": [
      "Golden Hurricane Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Very High"
    ],
    "intlRosterPct": [
      "35%",
      "32% (9/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生9名 / MF 7名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "usfunivofsouthflorid-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@usf.edu",
      null
    ],
    "stadium": [
      "Bulls Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Extremely High"
    ],
    "intlRosterPct": [
      "35%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生12名 / MF 7名 (Sr・Gr 2名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "universityofmemphis-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@memphis.edu",
      null
    ],
    "stadium": [
      "Tigers Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Very High"
    ],
    "intlRosterPct": [
      "35%",
      "46% (13/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生13名 / MF 11名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Jin Tokishi"
    ]
  },
  "floridaatlanticfau-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fau.edu",
      null
    ],
    "stadium": [
      "Owls Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Extremely High"
    ],
    "intlRosterPct": [
      "35%",
      "60% (18/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生18名 / MF 5名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Manato Ogawa"
    ]
  },
  "templeuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@temple.edu",
      null
    ],
    "stadium": [
      "Owls Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "40% (12/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生12名 / MF 8名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ]
  },
  "uabunivofalabamabirm-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uab.edu",
      null
    ],
    "stadium": [
      "Blazers Stadium / Field",
      null
    ],
    "intlFriendlyRating": [
      "High",
      "Very High"
    ],
    "intlRosterPct": [
      "35%",
      "57% (16/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生16名 / MF 7名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "princetonuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@princeton.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生2名 / MF 14名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "pennuniversityofpenn-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@upenn.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "6% (2/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生2名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "pennsoccer@upenn.edu",
      "brgill@upenn.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "cornelluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@cornell.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "13% (4/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生4名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "harvarduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fas.harvard.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "yaleuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@yale.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "14% (4/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生4名 / MF 10名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "dartmouthcollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@dartmouth.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "46% (13/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生13名 / MF 8名 (Sr・Gr 1名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "brownuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@brown.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "11% (3/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生3名 / MF 9名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "columbiauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@columbia.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "22% (6/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生6名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "ucsantabarbaraucsb-mens": {
    "assistantCoach": [
      "Greg Wilson (Associate HC)",
      "Greg Wilson"
    ],
    "assistantCoachEmail": [
      "gregwilson@ucsb.edu",
      ""
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "42.9%",
      "36% (10/28名)"
    ],
    "rosterStats": [
      "部員28名中 留学生12名 (42.9%) / スウェーデン, デンマーク, イスラエル, カナダ",
      "公式ロスター全28名 / 留学生10名 / MF 11名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "gauchossoccer@ucsb.edu",
      "menssoccer@athletics.ucsb.edu"
    ]
  },
  "calpolysanluisobispo-mens": {
    "assistantCoach": [
      "Milan Radovic",
      "Zach Watson"
    ],
    "assistantCoachEmail": [
      "mradovic@calpoly.edu",
      "zwatso01@calpoly.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Mustangs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "6% (2/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生2名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "mustangssoccer@calpoly.edu",
      "mensoccer@calpoly.edu"
    ]
  },
  "ucirvine-mens": {
    "stadium": [
      "Anteaters Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 10名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "anteatersoccer@uci.edu",
      "yraz@uci.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "calstatefullerton-mens": {
    "stadium": [
      "Titans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "38.2%",
      "26% (9/34名)"
    ],
    "rosterStats": [
      "部員34名中 留学生13名 (38.2%) / デンマーク, スペイン, スウェーデン",
      "公式ロスター全34名 / 留学生9名 / MF 13名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "titansoccer@fullerton.edu",
      "gkuntz@fullerton.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "ucdavis-mens": {
    "stadium": [
      "Aggies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "7.1%",
      "4% (1/28名)"
    ],
    "rosterStats": [
      "部員28名中 留学生2名 (7.1%) / ブラジル",
      "公式ロスター全28名 / 留学生1名 / MF 13名 (Sr・Gr 1名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "aggiessoccer@ucdavis.edu",
      "ucdavissoccer@ucdavis.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "calstatenorthridgecs-mens": {
    "stadium": [
      "Matadors Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "16% (5/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生5名 / MF 10名 (Sr・Gr 3名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "matadorsoccer@csun.edu",
      "terry.davila@csun.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "ucriverside-mens": {
    "stadium": [
      "Highlanders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "16% (5/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生5名 / MF 8名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "highlandersoccer@ucr.edu",
      "tim.cupello@ucr.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "ucsandiegoucsd-mens": {
    "stadium": [
      "Tritons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "3.4%",
      "3% (1/29名)"
    ],
    "rosterStats": [
      "部員29名中 留学生1名 (3.4%)",
      "公式ロスター全29名 / 留学生1名 / MF 9名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "tritonssoccer@ucsd.edu",
      "jpascale@ucsd.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "sacramentostate-mens": {
    "stadium": [
      "Hornets Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "10.7%",
      "7% (2/28名)"
    ],
    "rosterStats": [
      "部員28名中 留学生3名 (10.7%)",
      "公式ロスター全28名 / 留学生2名 / MF 11名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ]
  },
  "calstatebakersfield-mens": {
    "stadium": [
      "Roadrunners Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "42.9%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "部員28名中 留学生12名 (42.9%) / オーストラリア, カナダ, 欧州",
      "公式ロスター全28名 / 留学生12名 / MF 8名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofportland-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@up.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (5/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生5名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "universityofsandiego-mens": {
    "stadium": [
      "Toreros Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "26.7%",
      "27% (8/30名)"
    ],
    "rosterStats": [
      "部員30名中 留学生8名 (26.7%) / ブラジル, 豪州, 欧州",
      "公式ロスター全30名 / 留学生8名 / MF 13名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "torerosoccer@sandiego.edu",
      "brianq@sandiego.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "oregonstateuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@oregonstate.edu",
      null
    ],
    "stadium": [
      "Beavers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 11名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "santaclarauniversity-mens": {
    "stadium": [
      "Broncos Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "44.4%",
      "39% (11/28名)"
    ],
    "rosterStats": [
      "部員27名中 留学生12名 (44.4%) / 日本, コスタリカ, NZ, イスラエル",
      "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 2名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "1名 (Yu Yokokawa / 東京都 ASIJ出身 DF)",
      "1名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "broncosoccer@scu.edu",
      "msoccer@scu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saintmaryscollegeca-mens": {
    "coachEmail": [
      "gaelssoccer@stmarys-ca.edu",
      "acooper@stmarys-ca.edu"
    ],
    "assistantCoach": [
      "Charlie Campbell (Associate HC)",
      "Shawn Nicklaw"
    ],
    "assistantCoachEmail": [
      "ccampbell@stmarys-ca.edu",
      "srn6@stmarys-ca.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Gaels Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "36% (12/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生12名 / MF 10名 (Sr・Gr 0名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "sanfranciscousf-mens": {
    "coachEmail": [
      "donssoccer@usfca.edu",
      "cbrown14@usfca.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Dons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "17% (5/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生5名 / MF 8名 (Sr・Gr 3名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "gonzagauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Christo Michaelson"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gonzaga.edu",
      "michaelsonc@gonzaga.edu"
    ],
    "stadium": [
      "Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "11% (3/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生3名 / MF 14名 (Sr・Gr 6名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Aaron Lewis",
      "Chris McGaughey"
    ],
    "coachEmail": [
      "zagsoccer@gonzaga.edu",
      "mcgaughey@gonzaga.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "universityofthepacif-mens": {
    "stadium": [
      "Tigers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "21.9%",
      "19% (6/32名)"
    ],
    "rosterStats": [
      "部員32名中 留学生7名 (21.9%) / 中南米, 欧州",
      "公式ロスター全32名 / 留学生6名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Adam Reeves",
      "Andres Ochoa"
    ],
    "coachEmail": [
      "tigerssoccer@pacific.edu",
      "pacificmsoccer@pacific.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saintlouisuniversity-mens": {
    "coachEmail": [
      "slusoccer@slu.edu",
      "kkalish2@slu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Kevin Stoll"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@slu.edu",
      "kevin.stoll@slu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofdayton-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@udayton.edu",
      null
    ],
    "stadium": [
      "Flyers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "41% (12/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生12名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "vcu-mens": {
    "coachEmail": [
      "vcusoccer@vcu.edu",
      "drgiffard@vcu.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Lucas Paulini"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@vcu.edu",
      "paulinil@vcu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Rams Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "42% (11/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生11名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "fordhamuniversity-mens": {
    "coachEmail": [
      "fordhamsoccer@fordham.edu",
      "cacquista@fordham.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Philip Bannister"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fordham.edu",
      "pbannister@fordham.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Rams Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "26% (8/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生8名 / MF 12名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明1名) Arata Mizuno"
    ]
  },
  "umassamherst-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@umass.edu",
      null
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Minutemen Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "22% (5/23名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全23名 / 留学生5名 / MF 7名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Shun Murasawa"
    ]
  },
  "davidsoncollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@davidson.edu",
      null
    ],
    "stadium": [
      "Wildcats Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "4% (1/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生1名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "duquesneuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@duq.edu",
      null
    ],
    "stadium": [
      "Dukes Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "20% (6/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生6名 / MF 10名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "georgemasonuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gmu.edu",
      null
    ],
    "stadium": [
      "Patriots Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "48% (13/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生13名 / MF 8名 (Sr・Gr 6名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "georgewashingtongw-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Nick Conklu"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gwu.edu",
      "nicholas.conklu@gwu.edu"
    ],
    "stadium": [
      "Revolutionaries Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Craig Jones",
      "Matt Watts"
    ],
    "coachEmail": [
      "gwsoccer@gwu.edu",
      "m.watts1@gwu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "lasalleuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ahmed Elgayar"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lasalle.edu",
      "elgayar@lasalle.edu"
    ],
    "stadium": [
      "Explorers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "41% (13/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生13名 / MF 14名 (Sr・Gr 8名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "lasallesoccer@lasalle.edu",
      "thames@lasalle.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "rhodeislanduri-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uri.edu",
      null
    ],
    "stadium": [
      "Rams Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "38% (10/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生10名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "saintjosephsuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@sju.edu",
      null
    ],
    "stadium": [
      "Hawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "16% (6/37名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全37名 / 留学生6名 / MF 14名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "stbonaventureunivers-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@sbu.edu",
      null
    ],
    "stadium": [
      "Bonnies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生16名 / MF 13名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "hofstrauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@hofstra.edu",
      null
    ],
    "stadium": [
      "Pride Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "59% (16/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生16名 / MF 13名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uncwilmingtonuncw-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uncw.edu",
      null
    ],
    "stadium": [
      "Seahawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "22% (6/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生6名 / MF 8名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "elonuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@elon.edu",
      null
    ],
    "stadium": [
      "Phoenix Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "45% (13/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生13名 / MF 12名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Kosei Sasaki"
    ]
  },
  "drexeluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ptah Myers"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@drexel.edu",
      "pm958@drexel.edu"
    ],
    "stadium": [
      "Dragons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "67% (20/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生20名 / MF 15名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Mark Heider",
      "David Castellanos"
    ],
    "coachEmail": [
      "drexelsoccer@drexel.edu",
      "dc3369@drexel.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "campbelluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@campbell.edu",
      null
    ],
    "stadium": [
      "Fighting Camels Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "18% (5/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生5名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Dustin Fonder",
      "Ricky Davey"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "universityofdelaware-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@udel.edu",
      null
    ],
    "stadium": [
      "Blue Hens Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生4名 / MF 9名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "william&mary-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@wm.edu",
      null
    ],
    "stadium": [
      "Tribe Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生2名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "collegeofcharleston-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@cofc.edu",
      null
    ],
    "stadium": [
      "Cougars Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生12名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認) Kira Fukuda, Michiharu Takanashi"
    ]
  },
  "monmouthuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@monmouth.edu",
      null
    ],
    "stadium": [
      "Hawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "35% (9/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生9名 / MF 9名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "stonybrookuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@stonybrook.edu",
      null
    ],
    "stadium": [
      "Seawolves Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "34% (10/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生10名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "northeasternuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@northeastern.edu",
      null
    ],
    "stadium": [
      "Huskies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (5/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生5名 / MF 14名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "newhampshireunh-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unh.edu",
      null
    ],
    "stadium": [
      "Wildcats Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "39% (11/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生11名 / MF 12名 (Sr・Gr 7名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認 / 出身地不明1名) Kohsuke Fukudome, Ryo Miyata"
    ]
  },
  "vermontuvm-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uvm.edu",
      null
    ],
    "stadium": [
      "Catamounts Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "53% (16/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生16名 / MF 9名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "umbc-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@umbc.edu",
      null
    ],
    "stadium": [
      "Retrievers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "37% (10/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生10名 / MF 7名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "bryantuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bryant.edu",
      null
    ],
    "stadium": [
      "Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "59% (20/34名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全34名 / 留学生20名 / MF 12名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "njit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@njit.edu",
      null
    ],
    "stadium": [
      "Highlanders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生12名 / MF 9名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Harusumi Takesada"
    ]
  },
  "binghamtonuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Habi Darling"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@binghamton.edu",
      "hdarling@binghamton.edu"
    ],
    "stadium": [
      "Bearcats Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "25% (7/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生7名 / MF 9名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Paul Marco",
      "Tommy Moon"
    ],
    "coachEmail": [
      "bearcatsoccer@binghamton.edu",
      "tmoon@binghamton.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "ualbany-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Elias Ehlin"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@albany.edu",
      "eehlin@albany.edu"
    ],
    "stadium": [
      "Great Danes Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "52% (15/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生15名 / MF 10名 (Sr・Gr 2名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "greatdanesoccer@albany.edu",
      "tgorman@albany.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "umasslowell-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jason Stanton"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uml.edu",
      "Jason_Stanton@uml.edu"
    ],
    "stadium": [
      "River Hawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "61% (19/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生19名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "3名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "riverhawksoccer@uml.edu",
      "Kyle_Zenoni@uml.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "westernmichigan-mens": {
    "coachEmail": [
      "wmusoccer@wmich.edu",
      "chad.wiseman@wmich.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Shane Lyons"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@wmich.edu",
      "shane.e.lyons@wmich.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Broncos Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "27% (7/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生7名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "missouristate-mens": {
    "coachEmail": [
      "bearssoccer@missouristate.edu",
      "mseabolt@missouristate.edu"
    ],
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Andrea Cattaneo"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@missouristate.edu",
      "ac8954s@missouristate.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "stadium": [
      "Bears Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "96% (25/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生25名 / MF 13名 (Sr・Gr 7名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ]
  },
  "uicunivofillinoischi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Aleksey Korol"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uic.edu",
      "korol@uic.edu"
    ],
    "stadium": [
      "Flames Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "20% (5/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生5名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "flamessoccer@uic.edu",
      "sephill@uic.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "bowlinggreenbgsu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bgsu.edu",
      null
    ],
    "stadium": [
      "Falcons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (5/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生5名 / MF 5名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "drakeuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@drake.edu",
      null
    ],
    "stadium": [
      "Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生2名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofevansvil-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Matt Melzer"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@evansville.edu",
      "mm1059@evansville.edu"
    ],
    "stadium": [
      "Purple Aces Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "33% (13/39名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全39名 / 留学生13名 / MF 14名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "acessoccer@evansville.edu",
      "rt134@evansville.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "belmontuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Cam Olson"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@belmont.edu",
      "cam.olson@belmont.edu"
    ],
    "stadium": [
      "Bruins Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生4名 / MF 7名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "belmontsoccer@belmont.edu",
      "menssoccer@belmont.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "bradleyuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bradley.edu",
      null
    ],
    "stadium": [
      "Braves Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "22% (6/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生6名 / MF 13名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "northernillinoisniu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@niu.edu",
      null
    ],
    "stadium": [
      "Huskies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (6/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生6名 / MF 9名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "seattleuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@seattleu.edu",
      null
    ],
    "stadium": [
      "Redhawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (5/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生5名 / MF 7名 (Sr・Gr 3名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "grandcanyongcu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gcu.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "63% (19/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生19名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "californiabaptistcbu-mens": {
    "stadium": [
      "Lancers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "59% (17/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生17名 / MF 9名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "cbusoccer@calbaptist.edu",
      "msoccer@calbaptist.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "sanjosestatesjsu-mens": {
    "stadium": [
      "Spartans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "10.3%",
      "10% (3/29名)"
    ],
    "rosterStats": [
      "部員29名中 留学生3名 (10.3%) / 日本, イギリス, メキシコ",
      "公式ロスター全29名 / 留学生3名 / MF 10名 (Sr・Gr 2名)"
    ]
  },
  "unlv-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unlv.edu",
      null
    ],
    "stadium": [
      "Rebels Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "44% (12/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生12名 / MF 9名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Yuto Oketani"
    ]
  },
  "airforceacademy-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@afacademy.af.edu",
      null
    ],
    "stadium": [
      "Falcons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "0% (0/34名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全34名 / 留学生0名 / MF 13名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "utahvalleyuvu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Brett Jacobs"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uvu.edu",
      "brett.jacobs@uvu.edu"
    ],
    "stadium": [
      "Wolverines Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "47% (14/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生14名 / MF 11名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Kyle Beckerman",
      "Michael Chesler"
    ],
    "coachEmail": [
      "uvusoccer@uvu.edu",
      "michael.chesler@uvu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "utrgv-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@utrgv.edu",
      null
    ],
    "stadium": [
      "Vaqueros Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "64% (16/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生16名 / MF 9名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "incarnateworduiw-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Marquis Muse"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uiwtx.edu",
      "muse@uiwtx.edu"
    ],
    "stadium": [
      "Cardinals Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 13名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "uiwsoccer@uiwtx.edu",
      "rlara@uiwtx.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "houstonchristian-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@hc.edu",
      null
    ],
    "stadium": [
      "Huskies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "52% (15/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生15名 / MF 10名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "universityofdenver-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@du.edu",
      null
    ],
    "intlRosterPct": [
      "35%",
      "11% (3/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生3名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "oralrobertsoru-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@oru.edu",
      null
    ],
    "stadium": [
      "Golden Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "50% (13/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生13名 / MF 10名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "omahanebraskaomaha-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unomaha.edu",
      null
    ],
    "stadium": [
      "Mavericks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "26% (7/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生7名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Kamy Ndione"
    ]
  },
  "kansascityumkc-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@umkc.edu",
      null
    ],
    "stadium": [
      "Roos Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "59% (19/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生19名 / MF 12名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認) Shotaro Kodama, Rihito Kaji"
    ]
  },
  "stthomasminnesota-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@stthomas.edu",
      null
    ],
    "stadium": [
      "Tommies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "54% (15/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生15名 / MF 12名 (Sr・Gr 5名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "westernillinoiswiu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@wiu.edu",
      null
    ],
    "stadium": [
      "Leathernecks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "38% (11/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生11名 / MF 8名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "bostonuniversitybu-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bu.edu",
      null
    ],
    "stadium": [
      "Terriers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "25% (7/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生7名 / MF 11名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "loyolauniversitymary-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@loyola.edu",
      null
    ],
    "stadium": [
      "Greyhounds Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "25% (8/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生8名 / MF 10名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "colgateuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ricky Brown"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@colgate.edu",
      "colgatemenssoccer@colgate.edu"
    ],
    "stadium": [
      "Raiders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "9% (3/35名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全35名 / 留学生3名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "raidersoccer@colgate.edu",
      "colgatemenssoccer@colgate.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "americanuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Patrick Mehlert"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@american.edu",
      "mehlertp@american.edu"
    ],
    "stadium": [
      "Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生4名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "eaglessoccer@american.edu",
      "samol@american.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "lafayettecollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lafayette.edu",
      null
    ],
    "stadium": [
      "Leopards Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "10% (3/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生3名 / MF 14名 (Sr・Gr 6名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "lehighuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ryan Hess"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lehigh.edu",
      "reh311@lehigh.edu"
    ],
    "stadium": [
      "Mountain Hawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "14% (4/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生4名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "mountainhawks@lehigh.edu",
      "lehighmenssoccer@lehigh.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "collegeoftheholycros-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@holycross.edu",
      null
    ],
    "stadium": [
      "Crusaders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "14% (4/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生4名 / MF 13名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "bucknelluniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bucknell.edu",
      null
    ],
    "stadium": [
      "Bison Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "4% (1/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生1名 / MF 13名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "armywestpoint-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@westpoint.edu",
      null
    ],
    "stadium": [
      "Black Knights Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "0% (0/39名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全39名 / 留学生0名 / MF 14名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "navyusnavalacademy-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@usna.edu",
      null
    ],
    "stadium": [
      "Midshipmen Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "0% (0/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生0名 / MF 12名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "oaklanduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Joey Tinnion"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@oakland.edu",
      "jtinnion@oakland.edu"
    ],
    "stadium": [
      "Golden Grizzlies Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "21% (6/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生6名 / MF 8名 (Sr・Gr 0名) / 出身地不明4名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明4名)"
    ],
    "headCoach": [
      "Eric Pogue",
      "Paul Doroh"
    ],
    "coachEmail": [
      "grizzliessoccer@oakland.edu",
      "doroh@oakland.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "clevelandstate-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Charlie Krus"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@csuohio.edu",
      "c.krus@csuohio.edu"
    ],
    "stadium": [
      "Vikings Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "56% (15/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生15名 / MF 10名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Siniša Ubiparipović",
      "Sinisa Ubiparipovic"
    ],
    "coachEmail": [
      "csusoccer@csuohio.edu",
      "s.ubiparipovic81@csuohio.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "wrightstateuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@wright.edu",
      null
    ],
    "stadium": [
      "Raiders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "39% (11/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生11名 / MF 10名 (Sr・Gr 0名) / 出身地不明3名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明3名)"
    ]
  },
  "detroitmercy-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@udmercy.edu",
      null
    ],
    "stadium": [
      "Titans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生2名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uw-greenbay-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uwgb.edu",
      null
    ],
    "stadium": [
      "Phoenix Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "21% (6/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生6名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uw-milwaukee-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uwm.edu",
      null
    ],
    "stadium": [
      "Panthers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "33% (9/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生9名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Roy Nozawa"
    ]
  },
  "northernkentuckynku-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@nku.edu",
      null
    ],
    "stadium": [
      "Norse Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "18% (5/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生5名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "purduefortwaynepfw-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@pfw.edu",
      null
    ],
    "stadium": [
      "Mastodons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "4% (1/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生1名 / MF 10名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "robertmorrisuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@rmu.edu",
      null
    ],
    "stadium": [
      "Colonials Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生12名 / MF 12名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "uncgreensborouncg-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uncg.edu",
      null
    ],
    "stadium": [
      "Spartans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "50% (13/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生13名 / MF 9名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "furmanuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@furman.edu",
      null
    ],
    "stadium": [
      "Paladins Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生2名 / MF 14名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "merceruniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@mercer.edu",
      null
    ],
    "stadium": [
      "Bears Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "20% (5/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生5名 / MF 14名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "easttennesseestateet-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@etsu.edu",
      null
    ],
    "stadium": [
      "Buccaneers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生7名 / MF 15名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "woffordcollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Mac Thomalla"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@wofford.edu",
      "thomallacf@wofford.edu"
    ],
    "stadium": [
      "Terriers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "33% (11/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生11名 / MF 12名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Joel Tyson",
      "Ryan Osborne"
    ],
    "coachEmail": [
      "woffordsoccer@wofford.edu",
      "osbornera@wofford.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "vmi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jacob Wyrick"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@vmi.edu",
      "wyrickjd@vmi.edu"
    ],
    "stadium": [
      "Keydets Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "17% (5/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生5名 / MF 13名 (Sr・Gr 3名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "vmisoccer@vmi.edu",
      "regannj@vmi.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "lipscombuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Julian Lucumi"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lipscomb.edu",
      "jmlucumivillegas@lipscomb.edu"
    ],
    "stadium": [
      "Bisons Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "50% (17/34名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全34名 / 留学生17名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "bisonsoccer@lipscomb.edu",
      "charles.morrow@lipscomb.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "stetsonuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Eduardo Jimenez"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@stetson.edu",
      "efjimenez@stetson.edu"
    ],
    "stadium": [
      "Hatters Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "44% (12/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生12名 / MF 10名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "hatterssoccer@stetson.edu",
      "erutkowski@stetson.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "fgcufloridagulfcoast-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fgcu.edu",
      null
    ],
    "stadium": [
      "Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "43% (12/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生12名 / MF 11名 (Sr・Gr 3名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "bellarmineuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bellarmine.edu",
      null
    ],
    "stadium": [
      "Knights Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "centralarkansasuca-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uca.edu",
      null
    ],
    "stadium": [
      "Bears Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "56% (15/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生15名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明1名) Kaisei Matsudo"
    ]
  },
  "jacksonvilleuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@ju.edu",
      null
    ],
    "stadium": [
      "Dolphins Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "67% (20/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生20名 / MF 10名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "northfloridaunf-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unf.edu",
      null
    ],
    "stadium": [
      "Ospreys Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "52% (16/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生16名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Ryuta Morioka"
    ]
  },
  "queensuniversityofch-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@queens.edu",
      null
    ],
    "stadium": [
      "Royals Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "ionauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@iona.edu",
      null
    ],
    "stadium": [
      "Gaels Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "42% (13/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生13名 / MF 16名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "quinnipiacuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@qu.edu",
      null
    ],
    "stadium": [
      "Bobcats Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "rideruniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Reilly Fuller"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@rider.edu",
      "rfuller@rider.edu"
    ],
    "stadium": [
      "Broncs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "30% (8/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生8名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Charlie Inverso",
      "Chad Duernberger"
    ],
    "coachEmail": [
      "broncssoccer@rider.edu",
      "mduernberger@rider.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "maristcollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@marist.edu",
      null
    ],
    "stadium": [
      "Red Foxes Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "44% (12/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生12名 / MF 19名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "sienacollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@siena.edu",
      null
    ],
    "stadium": [
      "Saints Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "62% (16/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生16名 / MF 17名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "fairfielduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fairfield.edu",
      null
    ],
    "stadium": [
      "Stags Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "7% (2/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生2名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "manhattanuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@manhattan.edu",
      null
    ],
    "stadium": [
      "Jaspers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "42% (14/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生14名 / MF 7名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "mountstmarys-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@msmary.edu",
      null
    ],
    "stadium": [
      "Mountaineers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "niagarauniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "David Hesch"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@niagara.edu",
      "dhesch@niagara.edu"
    ],
    "stadium": [
      "Purple Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "56% (15/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生15名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "3名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "eaglessoccer@niagara.edu",
      "wboyle@niagara.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "canisiusuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@canisius.edu",
      null
    ],
    "stadium": [
      "Golden Griffins Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "21% (6/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生6名 / MF 13名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "saintpetersuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Tom Coulson"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@saintpeters.edu",
      "tcoulson17@saintpeters.edu"
    ],
    "stadium": [
      "Peacocks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "59% (16/27名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全27名 / 留学生16名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "peacockssoccer@saintpeters.edu",
      "jrichens@saintpeters.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saintfrancisuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Connor Oechslin"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@francis.edu",
      "coechslin@francis.edu"
    ],
    "stadium": [
      "Red Flash Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (3/16名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全16名 / 留学生3名 / MF 5名 (Sr・Gr 1名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Mads Kaiser",
      "Shelby Edwards"
    ],
    "coachEmail": [
      "redflashsoccer@francis.edu",
      "sedwards@francis.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "liulongislandunivers-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@liu.edu",
      null
    ],
    "stadium": [
      "Sharks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "44% (11/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生11名 / MF 7名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "fairleighdickinsonfd-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Max Aken-Tyers"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@fdu.edu",
      "m.akentyers@fdu.edu"
    ],
    "stadium": [
      "Knights Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (6/32名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全32名 / 留学生6名 / MF 14名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Seth Roland",
      "Jaymee Highcock"
    ],
    "coachEmail": [
      "knightssoccer@fdu.edu",
      "j.highcock@fdu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "sacredheartuniversit-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Oscar Curras"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@sacredheart.edu",
      "msoccer@sacredheart.edu"
    ],
    "stadium": [
      "Pioneers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "41% (12/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生12名 / MF 9名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Paul Gilbert",
      "Anthony Anzevui"
    ],
    "coachEmail": [
      "pioneerssoccer@sacredheart.edu",
      "msoccer@sacredheart.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "centralconnecticutst-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@ccsu.edu",
      null
    ],
    "stadium": [
      "Blue Devils Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "lemoynecollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Casey Murphy"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lemoyne.edu",
      "murphca@lemoyne.edu"
    ],
    "stadium": [
      "Dolphins Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "40% (12/30名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全30名 / 留学生12名 / MF 8名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "dolphinssoccer@lemoyne.edu",
      "donncal@lemoyne.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "stonehillcollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@stonehill.edu",
      null
    ],
    "stadium": [
      "Skyhawks Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "19% (7/36名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全36名 / 留学生7名 / MF 14名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "howarduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jason Gross"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@howard.edu",
      "jason.gross@howard.edu"
    ],
    "stadium": [
      "Bison Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "14% (4/28名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全28名 / 留学生4名 / MF 13名 (Sr・Gr 4名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "bisonsoccer@howard.edu",
      "phillip.gyau@howard.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "mercyhurstuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@mercyhurst.edu",
      null
    ],
    "stadium": [
      "Lakers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "要確認"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "chicagostateuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@csu.edu",
      null
    ],
    "stadium": [
      "Cougars Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生4名 / MF 9名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "siuedwardsvillesiue-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@siue.edu",
      null
    ],
    "stadium": [
      "Cougars Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "44% (11/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生11名 / MF 10名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "libertyuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@liberty.edu",
      null
    ],
    "stadium": [
      "Flames Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "60% (15/25名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全25名 / 留学生15名 / MF 10名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Kyohei Eguchi"
    ]
  },
  "lindenwooduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lindenwood.edu",
      null
    ],
    "stadium": [
      "Lions Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "48% (14/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生14名 / MF 8名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "easternillinoisunive-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@eiu.edu",
      null
    ],
    "stadium": [
      "Panthers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "65% (20/31名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全31名 / 留学生20名 / MF 8名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "4名 (公式ロスター確認) Kai Odagiri, Shuto Ishikawa, Sein Hatamoto, Keidin Green"
    ]
  },
  "southernindianausi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@usi.edu",
      null
    ],
    "stadium": [
      "Screaming Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生4名 / MF 11名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Ahiro Nakamae"
    ]
  },
  "highpointuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@highpoint.edu",
      null
    ],
    "stadium": [
      "Panthers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "15% (4/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生4名 / MF 10名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "winthropuniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@winthrop.edu",
      null
    ],
    "stadium": [
      "Eagles Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認) Shion Hayashi, Shota Kawagoe"
    ]
  },
  "gardner-webbuniversi-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Josh Nakayama"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@gardner-webb.edu",
      "msoccer@gardner-webb.edu"
    ],
    "stadium": [
      "Runnin' Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "58% (19/33名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全33名 / 留学生19名 / MF 10名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Scott Wells",
      "Jonathan Lagos"
    ],
    "coachEmail": [
      "bulldogssoccer@gardner-webb.edu",
      "msoccer@gardner-webb.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "longwooduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Yuriy Sadula"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@longwood.edu",
      "sadulay@longwood.edu"
    ],
    "stadium": [
      "Lancers Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生16名 / MF 8名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "lancersoccer@longwood.edu",
      "gilbertpe@longwood.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "presbyteriancollege-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Paul Jones"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@presby.edu",
      "pjones@presby.edu"
    ],
    "stadium": [
      "Blue Hose Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "38% (14/37名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全37名 / 留学生14名 / MF 16名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "bluehosesoccer@presby.edu",
      "nafinotti@presby.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "uncasheville-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Derek Neidlinger"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@unca.edu",
      "dneidlin@unca.edu"
    ],
    "stadium": [
      "Bulldogs Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 6名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "2名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Mick Giordano",
      "Danny Frid"
    ],
    "coachEmail": [
      "bulldogssoccer@unca.edu",
      "dfrid@unca.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "radforduniversity-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Ryan Palmbaum"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@radford.edu",
      "rpalmbaum@radford.edu"
    ],
    "stadium": [
      "Highlanders Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "38% (9/24名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全24名 / 留学生9名 / MF 8名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Chris Barrett",
      "Andy Cormack"
    ],
    "coachEmail": [
      "highlandersoccer@radford.edu",
      "acormack1@radford.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "uscupstate-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uscupstate.edu",
      null
    ],
    "stadium": [
      "Spartans Stadium / Field",
      null
    ],
    "intlRosterPct": [
      "35%",
      "52% (15/29名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全29名 / 留学生15名 / MF 14名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ]
  },
  "sdsu-mens": {
    "intlRosterPct": [
      "35%",
      "19% (5/26名)"
    ],
    "rosterStats": [
      "留学生比率 約35%",
      "公式ロスター全26名 / 留学生5名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "franklinpierce-mens": {
    "headCoach": [
      "Travis Brent",
      "Diego Thielen"
    ],
    "coachEmail": [
      "brentt@franklinpierce.edu",
      "thielend@franklinpierce.edu"
    ],
    "assistantCoach": [
      "Liam O'Brien",
      "Scotty Murray"
    ],
    "assistantCoachEmail": [
      "msoccer@franklinpierce.edu",
      "murrays@franklinpierce.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "75%",
      "40% (20/50名)"
    ],
    "rosterStats": [
      "部員32名中 留学生24名 (75%) / 欧州, 日本, 南米",
      "公式ロスター全50名 / 留学生20名 / MF 16名 (Sr・Gr 5名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "1〜2名在籍 (全国大会優勝・プロ輩出)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ]
  },
  "charleston-mens": {
    "headCoach": [
      "Dan Stratford",
      "Daniel Smee"
    ],
    "coachEmail": [
      "msoccer@ucwv.edu",
      "ucmenssoccer@ucwv.edu"
    ],
    "assistantCoach": [
      "Nick West",
      "Corbin Bowers"
    ],
    "assistantCoachEmail": [
      "nickwest@ucwv.edu",
      ""
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "80%",
      "64% (34/53名)"
    ],
    "rosterStats": [
      "部員30名中 留学生24名 (80%) / 欧州, 日本",
      "公式ロスター全53名 / 留学生34名 / MF 14名 (Sr・Gr 5名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "1〜2名在籍 (日本人主力選手活躍)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "lynn-mens": {
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "70%",
      "67% (20/30名)"
    ],
    "rosterStats": [
      "部員30名中 留学生21名 (70%) / ドイツ, イギリス, ブラジル等",
      "公式ロスター全30名 / 留学生20名 / MF 11名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "受入実績あり (南フロリダ国際派)",
      "0名 (公式ロスター確認)"
    ]
  },
  "tufts-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@tufts.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "20%",
      "10% (3/31名)"
    ],
    "rosterStats": [
      "留学生比率 約20%",
      "公式ロスター全31名 / 留学生3名 / MF 10名 (Sr・Gr 3名)"
    ]
  },
  "chicago-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@uchicago.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "25%",
      "15% (4/27名)"
    ],
    "rosterStats": [
      "留学生比率 約25%",
      "公式ロスター全27名 / 留学生4名 / MF 6名 (Sr・Gr 1名)"
    ]
  },
  "messiah-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@messiah.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "intlRosterPct": [
      "15%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約15%",
      "要確認"
    ]
  },
  "williams-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@williams.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "20%",
      "0% (0/28名)"
    ],
    "rosterStats": [
      "留学生比率 約20%",
      "公式ロスター全28名 / 留学生0名 / MF 10名 (Sr・Gr 5名) / 出身地不明1名"
    ]
  },
  "grandview-mens": {
    "assistantCoach": [
      "Daniel Rutter",
      "Jonathan Rivera"
    ],
    "assistantCoachEmail": [
      "drutter@grandview.edu",
      "jrivera@grandview.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "75%",
      "62% (21/34名)"
    ],
    "rosterStats": [
      "部員約35名中 留学生約26名 (75%) / 日本, 欧州, 南米",
      "公式ロスター全34名 / 留学生21名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "3〜5名在籍 (帝京長岡, 星稜, Jユース出身等)",
      "4名 (公式ロスター確認)"
    ],
    "notes": [
      "全米最大の日本人拠点。All-American選出実績多数。手厚い奨学金。",
      "NAIAの強豪。ロスターに日本人選手4名(公式確認)、留学生比率62%。All-American選出実績多数。手厚い奨学金。"
    ]
  },
  "keiser-mens": {
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "85%",
      "90% (28/31名)"
    ],
    "rosterStats": [
      "部員約30名中 留学生約25名 (85%) / 日本, ドイツ, ブラジル等",
      "公式ロスター全31名 / 留学生28名 / MF 15名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "2〜3名在籍",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "lindseywilson-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jack Cousin"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@lindsey.edu",
      "cousinj@lindsey.edu"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "80%",
      "84% (21/25名)"
    ],
    "rosterStats": [
      "留学生比率 約80%",
      "公式ロスター全25名 / 留学生21名 / MF 7名 (Sr・Gr 1名) / 出身地不明2名"
    ],
    "headCoach": [
      "Ray Wells",
      "Sicelo Buthelezi"
    ],
    "coachEmail": [
      "wellsr@lindsey.edu",
      "buthelezis@lindsey.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "midamerica-mens": {
    "coachEmail": [
      "kwardlaw@mnu.edu",
      "kpwardlaw@mnu.edu"
    ],
    "assistantCoach": [
      "Bryan Perez",
      "Atanas Karagyaurov"
    ],
    "assistantCoachEmail": [
      "bperez@mnu.edu",
      "apkaragyaurov@mnu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "70%",
      "35% (18/52名)"
    ],
    "rosterStats": [
      "部員約32名中 留学生約22名 (70%) / 日本, 欧州",
      "公式ロスター全52名 / 留学生18名 / MF 20名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "4〜6名在籍 (全米制覇メンバー)",
      "0名 (公式ロスター確認)"
    ]
  },
  "oklahomawesleyan-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@okwu.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "intlRosterPct": [
      "80%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約80%",
      "要確認"
    ]
  },
  "riogrande-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@rio.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "intlRosterPct": [
      "85%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約85%",
      "要確認"
    ]
  },
  "iowawestern-mens": {
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "13名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "77% (33/43名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全43名 / 留学生33名 / MF 16名 (2年生以上 4名) / 出身地不明2名"
    ],
    "japanesePct": [
      null,
      "30% (13/43名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全43名 (19%)"
    ],
    "notes": [
      "Multiple NJCAA National Champions (2013, 2021, 2022). #1 junior college transfer pipeline to NCAA D1 universities.",
      "Multiple NJCAA National Champions (2013, 2021, 2022). #1 junior college transfer pipeline to NCAA D1 universities. 2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      null,
      "https://goreivers.com/sports/msoc"
    ]
  },
  "tylerjc-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@tjc.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "intlRosterPct": [
      "75%",
      "要確認"
    ],
    "rosterStats": [
      "留学生比率 約75%",
      "要確認"
    ],
    "japanesePct": [
      null,
      "要確認 (公式ロスター取得不可)"
    ],
    "fwStats": [
      null,
      "要確認 (公式ロスター取得不可)"
    ],
    "siteUrl": [
      null,
      "https://www.apacheathletics.com/sports/mens-soccer"
    ]
  },
  "monroe-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      "Jay Myers"
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@monroecollege.edu",
      "jmyers@monroeu.edu"
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "3名 (公式ロスター確認 / 出身地不明5名)"
    ],
    "intlRosterPct": [
      "85%",
      "65% (39/60名)"
    ],
    "rosterStats": [
      "留学生比率 約85%",
      "公式ロスター全60名 / 留学生39名 / MF 23名 (Sr・Gr 2名) / 出身地不明5名"
    ],
    "coachEmail": [
      "mdibernardo@monroecollege.edu",
      "mdibernardo@monroeu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "japanesePct": [
      null,
      "5% (3/60名)"
    ],
    "fwStats": [
      null,
      "FW 15名 / 全60名 (25%) ※位置未掲載4名"
    ],
    "name": [
      "Monroe College (New York)",
      "Monroe University (New York)"
    ],
    "division": [
      "NJCAA D1",
      "NCAA D2"
    ],
    "conference": [
      "Region 15",
      "要確認 (2026-27〜 NCAA D2 移行)"
    ],
    "scholarshipMax": [
      "Max 18.0 scholarships",
      "Max 9.0 scholarships (D2)"
    ],
    "notes": [
      "2x NJCAA D1 National Champions (2019, 2022). Located just outside Manhattan NYC with world-renowned tactical coaching.",
      "2026-27シーズンからNJCAA D1よりNCAA Division IIへ移行（旧称 Monroe College → 現 Monroe University）。NJCAA D1 全米王者2回(2019, 2022)の実績。NYC近郊。D2のため奨学金枠・編入規定は要確認。"
    ],
    "questionnaireUrl": [
      "https://www.google.com/search?q=Monroe+College+(New+York)+Men's+Soccer+Recruiting+Questionnaire",
      "https://www.google.com/search?q=Monroe+University+(New+York)+Men's+Soccer+Recruiting+Questionnaire"
    ],
    "campUrl": [
      "https://www.google.com/search?q=Monroe+College+(New+York)+Soccer+ID+Camp",
      "https://www.google.com/search?q=Monroe+University+(New+York)+Soccer+ID+Camp"
    ]
  },
  "saltlake-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@slcc.edu",
      null
    ],
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "70%",
      "52% (15/29名)"
    ],
    "rosterStats": [
      "留学生比率 約70%",
      "公式ロスター全29名 / 留学生15名 / MF 8名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePct": [
      null,
      "0% (0/29名)"
    ],
    "fwStats": [
      null,
      "FW 9名 / 全29名 (31%)"
    ],
    "tags": [
      [
        "Utah",
        "MLS Partnership",
        "NJCAA Champion",
        "NJCAA全米大会出場"
      ],
      [
        "NJCAA 2026 全米準優勝",
        "Utah",
        "MLS Partnership",
        "NJCAA Champion",
        "NJCAA全米大会出場"
      ]
    ],
    "notes": [
      "2020 NJCAA D1 National Champions. High performance training facilities partnering with Real Salt Lake (MLS).",
      "2026 NJCAA D1 全米準優勝。2020 NJCAA D1 National Champions. High performance training facilities partnering with Real Salt Lake (MLS)."
    ]
  },
  "barton-mens": {
    "assistantCoach": [
      "Scotty Murray (Assistant Coach)",
      null
    ],
    "assistantCoachEmail": [
      "soccer-recruiting@bartonccc.edu",
      null
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "10名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "82% (32/39名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全39名 / 留学生32名 / MF 14名 (2年生以上 0名)"
    ],
    "japanesePct": [
      null,
      "26% (10/39名)"
    ],
    "fwStats": [
      null,
      "FW 11名 / 全39名 (28%)"
    ],
    "notes": [
      "2023 NJCAA D1 National Runner-up. Jayhawk Conference powerhouse with heavy international recruitment.",
      "2023 NJCAA D1 National Runner-up. Jayhawk Conference powerhouse with heavy international recruitment. 2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      null,
      "https://www.bartonsports.com/sports/msoc"
    ]
  },
  "southeastern-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "warner-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "27% (7/26名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全26名 / 留学生7名 / MF 9名 (Sr・Gr 2名)"
    ]
  },
  "avemaria-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "24% (8/33名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全33名 / 留学生8名 / MF 14名 (Sr・Gr 0名) / 出身地不明1名"
    ]
  },
  "floridamemorial-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "georgiagwinnett-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "thomasuniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "pointuniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "cumberlands-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "cumberlanduniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "campbellsville-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "100% (28/28名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全28名 / 留学生28名 / MF 12名 (Sr・Gr 3名)"
    ]
  },
  "georgetowncollege-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "faulkner-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "92% (33/36名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全36名 / 留学生33名 / MF 9名 (Sr・Gr 4名)"
    ],
    "headCoach": [
      "",
      "Gabriel De Queiroz"
    ],
    "coachEmail": [
      "",
      "gqueiroz@faulkner.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Fahel Matos"
    ],
    "assistantCoachEmail": [
      null,
      "fmatos@faulkner.edu"
    ]
  },
  "williamcarey-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "87% (27/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生27名 / MF 12名 (Sr・Gr 4名)"
    ],
    "headCoach": [
      "",
      "Barry Farrell"
    ],
    "coachEmail": [
      "",
      "bfarrell@wmcarey.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "tennesseewesleyan-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "reinhardt-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "texaswesleyan-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "oklahomacity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "56% (14/25名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全25名 / 留学生14名 / MF 6名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "headCoach": [
      "",
      "Billy Martin"
    ],
    "coachEmail": [
      "",
      "wjmartin@okcu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Gui Grave"
    ],
    "assistantCoachEmail": [
      null,
      "gfgrave@okcu.edu"
    ]
  },
  "bellevue-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "benedictine-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "baker-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "avila-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "columbiacollegemo-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "indianawesleyan-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "41% (12/29名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全29名 / 留学生12名 / MF 10名 (Sr・Gr 5名)"
    ]
  },
  "pikeville-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "68% (28/41名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全41名 / 留学生28名 / MF 9名 (Sr・Gr 3名) / 出身地不明1名"
    ]
  },
  "shawneestate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "division": [
      "NAIA",
      "NCAA D2"
    ],
    "conference": [
      "River States",
      "要確認 (旧NAIA River States → NCAA D2 移行)"
    ],
    "scholarshipMax": [
      "Max 12.0 scholarships (NAIA)",
      "Max 9.0 scholarships (D2)"
    ],
    "notes": [
      "NAIA / River States。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)は公式サイトで要確認。",
      "NAIA(River States)からNCAA D2へ移行。移行時期・所属カンファレンス・D2加盟状況(暫定会員の期間など)は公式サイトで要確認。学費・寮費は概算。ヘッドコーチ・コーチ連絡先・ロースター(日本人在籍)も要確認。"
    ],
    "tags": [
      [
        "NAIA",
        "River States",
        "Ohio",
        "Needs Verification"
      ],
      [
        "NCAA D2",
        "D2移行",
        "Ohio",
        "Needs Verification"
      ]
    ]
  },
  "westmont-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "vanguard-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "0% (0/34名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全34名 / 留学生0名 / MF 9名 (Sr・Gr 2名)"
    ],
    "headCoach": [
      "",
      "Jesus (Chuy) Miramontes"
    ],
    "coachEmail": [
      "",
      "msoccer@vanguard.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "corban-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "21% (7/34名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全34名 / 留学生7名 / MF 11名 (Sr・Gr 1名)"
    ],
    "headCoach": [
      "",
      "Jordan Keegan"
    ],
    "coachEmail": [
      "",
      "jkeegan@corban.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saintleo-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "57% (17/30名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全30名 / 留学生17名 / MF 9名 (Sr・Gr 1名) / 出身地不明1名"
    ],
    "headCoach": [
      "",
      "Brett Parker"
    ],
    "coachEmail": [
      "",
      "brett.parker@saintleo.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Graham Brown"
    ],
    "assistantCoachEmail": [
      null,
      "graham.brown@saintleo.edu"
    ]
  },
  "novasoutheastern-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Toga Katsuma"
    ],
    "intlRosterPct": [
      "要確認",
      "55% (12/22名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全22名 / 留学生12名 / MF 11名 (Sr・Gr 7名)"
    ]
  },
  "floridasouthern-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "48% (15/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生15名 / MF 11名 (Sr・Gr 1名)"
    ]
  },
  "eckerd-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "38% (15/40名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全40名 / 留学生15名 / MF 14名 (Sr・Gr 1名)"
    ]
  },
  "flagler-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "48% (15/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生15名 / MF 9名 (Sr・Gr 2名) / 出身地不明1名"
    ]
  },
  "westflorida-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "30% (9/30名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全30名 / 留学生9名 / MF 6名 (Sr・Gr 2名) / 出身地不明2名"
    ]
  },
  "leeuniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "unionuniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "valdostastate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "columbusstate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "northgeorgia-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "33% (10/30名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全30名 / 留学生10名 / MF 10名 (Sr・Gr 3名)"
    ],
    "headCoach": [
      "",
      "Anel Lilic"
    ],
    "coachEmail": [
      "",
      "anel.lilic@ung.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Joel Mcilroy"
    ],
    "assistantCoachEmail": [
      null,
      "alexander.mcilroy@ung.edu"
    ]
  },
  "uscaiken-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明4名)"
    ],
    "intlRosterPct": [
      "要確認",
      "58% (18/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生18名 / MF 16名 (Sr・Gr 3名) / 出身地不明4名"
    ],
    "headCoach": [
      "",
      "Nick Sakiewicz"
    ],
    "coachEmail": [
      "",
      "nicolaus.sakiewicz@usca.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "francismarion-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "64% (28/44名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全44名 / 留学生28名 / MF 21名 (Sr・Gr 12名)"
    ],
    "headCoach": [
      "",
      "Luis Rincon"
    ],
    "coachEmail": [
      "",
      "Luis.Rincon@fmarion.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Nicolas Rodriguez"
    ],
    "assistantCoachEmail": [
      null,
      "nicolas.rodriguez@fmarion.edu"
    ]
  },
  "uncpembroke-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "32% (6/19名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全19名 / 留学生6名 / MF 6名 (Sr・Gr 1名)"
    ]
  },
  "belmontabbey-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "mountolive-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "20% (8/41名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全41名 / 留学生8名 / MF 15名 (Sr・Gr 2名) / 出身地不明2名"
    ]
  },
  "catawba-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "carsonnewman-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "marshill-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "newberry-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認 / 出身地不明1名) Shotaro Sekinada"
    ],
    "intlRosterPct": [
      "要確認",
      "33% (13/39名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全39名 / 留学生13名 / MF 15名 (Sr・Gr 4名) / 出身地不明1名"
    ]
  },
  "tusculum-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "lincolnmemorial-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "40% (21/52名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全52名 / 留学生21名 / MF 16名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "headCoach": [
      "",
      "Tom Gillette"
    ],
    "coachEmail": [
      "",
      "thomas.gillette@lmunet.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "August Harp"
    ],
    "assistantCoachEmail": [
      null,
      "august.harp@lmunet.edu"
    ]
  },
  "lewisuniversity-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "25% (11/44名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全44名 / 留学生11名 / MF 17名 (Sr・Gr 1名)"
    ]
  },
  "drury-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "35% (17/48名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全48名 / 留学生17名 / MF 17名 (Sr・Gr 1名) / 出身地不明1名 / 掲載情報欠落2名(MFは最小値)"
    ]
  },
  "rockhurst-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "12% (4/33名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全33名 / 留学生4名 / MF 9名 (Sr・Gr 4名) / 出身地不明1名"
    ]
  },
  "quincy-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "trumanstate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "0% (0/38名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全38名 / 留学生0名 / MF 16名 (Sr・Gr 3名) / 出身地不明1名"
    ]
  },
  "missouriST-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "32% (13/41名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全41名 / 留学生13名 / MF 16名 (Sr・Gr 3名)"
    ],
    "headCoach": [
      "",
      "Robert Cummings"
    ],
    "coachEmail": [
      "",
      "cummingsrc@mst.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "kentuckywesleyan-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "57% (20/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生20名 / MF 10名 (Sr・Gr 1名)"
    ]
  },
  "uwparkside-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "29% (10/34名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全34名 / 留学生10名 / MF 14名 (Sr・Gr 4名)"
    ]
  },
  "illinoisspringfield-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "37% (11/30名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全30名 / 留学生11名 / MF 9名 (Sr・Gr 6名)"
    ]
  },
  "walsh-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "findlay-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "20% (9/45名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全45名 / 留学生9名 / MF 14名 (Sr・Gr 3名)"
    ]
  },
  "malone-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "15% (6/41名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全41名 / 留学生6名 / MF 14名 (Sr・Gr 0名)"
    ]
  },
  "waynestate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "northwood-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "adelphi-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "58% (18/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生18名 / MF 12名 (Sr・Gr 2名) / 出身地不明1名"
    ]
  },
  "bentley-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "15% (5/33名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全33名 / 留学生5名 / MF 13名 (Sr・Gr 8名) / 出身地不明1名"
    ]
  },
  "saintanselm-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "southernct-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "48% (13/27名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全27名 / 留学生13名 / MF 9名 (Sr・Gr 3名) / 出身地不明1名"
    ]
  },
  "newhaven-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "33% (14/43名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全43名 / 留学生14名 / MF 13名 (Sr・Gr 3名) / 出身地不明2名 / 掲載情報欠落4名(MFは最小値)"
    ]
  },
  "assumption-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "16% (7/44名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全44名 / 留学生7名 / MF 13名 (Sr・Gr 2名) / 掲載情報欠落2名(MFは最小値)"
    ]
  },
  "pace-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "15% (11/71名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全71名 / 留学生11名 / MF 25名 (Sr・Gr 2名) / 出身地不明2名"
    ],
    "headCoach": [
      "",
      "Edward Evans"
    ],
    "coachEmail": [
      "",
      "eevans@pace.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saintmichaels-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "3% (1/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生1名 / MF 14名 (Sr・Gr 6名)"
    ]
  },
  "nyit-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "molloy-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "24% (7/29名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全29名 / 留学生7名 / MF 13名 (Sr・Gr 3名)"
    ]
  },
  "westchester-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "0% (0/28名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全28名 / 留学生0名 / MF 7名 (Sr・Gr 2名)"
    ],
    "headCoach": [
      "",
      "Michael Benn"
    ],
    "coachEmail": [
      "",
      "mbenn@wcupa.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "iup-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "eaststroudsburg-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "31% (12/39名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全39名 / 留学生12名 / MF 10名 (Sr・Gr 0名)"
    ]
  },
  "millersville-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "17% (4/24名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全24名 / 留学生4名 / MF 7名 (Sr・Gr 3名)"
    ]
  },
  "setonhill-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "wvwesleyan-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "wheeling-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "concordwv-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "byuhawaii-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "hawaiipacific-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "chaminade-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "fresnopacific-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "8% (3/38名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全38名 / 留学生3名 / MF 13名 (Sr・Gr 4名)"
    ]
  },
  "dominicanca-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明4名)"
    ],
    "intlRosterPct": [
      "要確認",
      "6% (2/36名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全36名 / 留学生2名 / MF 15名 (Sr・Gr 2名) / 出身地不明4名"
    ],
    "headCoach": [
      "",
      "David Frank"
    ],
    "coachEmail": [
      "",
      "david.frank@dominican.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Ricardo Martin"
    ],
    "assistantCoachEmail": [
      null,
      "ricardo.martin@dominican.edu"
    ]
  },
  "csudh-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ],
    "headCoach": [
      "",
      "Eddie Soto"
    ],
    "coachEmail": [
      "",
      "esoto@csudh.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Patryk Tenorio"
    ],
    "assistantCoachEmail": [
      null,
      "ptenorio@csudh.edu"
    ]
  },
  "csueastbay-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "4% (1/27名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全27名 / 留学生1名 / MF 8名 (Sr・Gr 2名)"
    ],
    "headCoach": [
      "",
      "Michael Haswell"
    ],
    "coachEmail": [
      "",
      "michael.haswell@csueastbay.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Dannylo Ayllon"
    ],
    "assistantCoachEmail": [
      null,
      "dannylo.ayllon@csueastbay.edu"
    ]
  },
  "csusanmarcos-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "intlRosterPct": [
      "要確認",
      "3% (1/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生1名 / MF 15名 (Sr・Gr 5名) / 出身地不明1名"
    ],
    "headCoach": [
      "",
      "Ron Pulvers"
    ],
    "coachEmail": [
      "",
      "rpulvers@csusm.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Matt Aldama"
    ],
    "assistantCoachEmail": [
      null,
      "maldama@csusm.edu"
    ]
  },
  "sfstate-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "westernwashington-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "9% (2/23名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全23名 / 留学生2名 / MF 10名 (Sr・Gr 1名)"
    ],
    "headCoach": [
      "",
      "Greg Brisbon"
    ],
    "coachEmail": [
      "",
      "wwumsoccer@wwu.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Chuck Pitts"
    ],
    "assistantCoachEmail": [
      null,
      "wwumsoccer@wwu.edu"
    ]
  },
  "saintmartins-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "intlRosterPct": [
      "要確認",
      "0% (0/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生0名 / MF 15名 (Sr・Gr 4名) / 出身地不明2名"
    ],
    "headCoach": [
      "",
      "Rob Walker"
    ],
    "coachEmail": [
      "",
      "rwalker@stmartin.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "coloradomesa-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "34% (12/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生12名 / MF 15名 (Sr・Gr 5名)"
    ]
  },
  "regis-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "39% (12/31名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全31名 / 留学生12名 / MF 9名 (Sr・Gr 3名)"
    ],
    "headCoach": [
      "",
      "Taylor Diem"
    ],
    "coachEmail": [
      "",
      "tdiem@regis.edu"
    ],
    "coachVerified": [
      null,
      true
    ],
    "assistantCoach": [
      null,
      "Steven Cahill"
    ],
    "assistantCoachEmail": [
      null,
      "msoccer@regis.edu"
    ]
  },
  "metrostatedenver-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "coloradochristian-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "16% (5/32名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全32名 / 留学生5名 / MF 13名 (Sr・Gr 1名)"
    ]
  },
  "stedwards-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "1名 (公式ロスター確認) Shunji Watanabe"
    ],
    "intlRosterPct": [
      "要確認",
      "18% (7/38名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全38名 / 留学生7名 / MF 10名 (Sr・Gr 4名)"
    ]
  },
  "stmarystx-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "uttyler-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認 / 出身地不明3名)"
    ],
    "intlRosterPct": [
      "要確認",
      "37% (13/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生13名 / MF 10名 (Sr・Gr 1名) / 出身地不明3名"
    ]
  },
  "utpb-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "未確認 (要問合せ)"
    ]
  },
  "lubbockchristian-mens": {
    "japanesePlayers": [
      "0名 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "intlRosterPct": [
      "要確認",
      "49% (17/35名)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全35名 / 留学生17名 / MF 12名 (Sr・Gr 1名)"
    ]
  },
  "barry-mens": {
    "intlRosterPct": [
      "70%",
      "58% (19/33名)"
    ],
    "rosterStats": [
      "部員28名中 留学生20名 (70%) / 欧州, 中南米",
      "公式ロスター全33名 / 留学生19名 / MF 12名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Steve McCrath",
      "Petsa Ivanovic"
    ],
    "coachEmail": [
      "smccrath@barry.edu",
      "pivanovic@barry.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "calpolypomona-mens": {
    "intlRosterPct": [
      "20%",
      "19% (6/32名)"
    ],
    "rosterStats": [
      "部員32名中 留学生6名 (18.8%) / 欧州, メキシコ",
      "公式ロスター全32名 / 留学生6名 / MF 10名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "過去受け入れ実績あり",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "mosullivan@cpp.edu",
      "mjosullivan@cpp.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "chicostate-mens": {
    "intlRosterPct": [
      "20%",
      "0% (0/31名)"
    ],
    "rosterStats": [
      "部員28名中 留学生6名 (21%)",
      "公式ロスター全31名 / 留学生0名 / MF 12名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "frestrepo@csuchico.edu",
      "lrestrepo@csuchico.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "csumontereybay-mens": {
    "intlRosterPct": [
      "25%",
      "10% (3/29名)"
    ],
    "rosterStats": [
      "部員28名中 留学生7名 (25%) / 欧州, アジア",
      "公式ロスター全29名 / 留学生3名 / MF 10名 (Sr・Gr 3名) / 出身地不明3名"
    ],
    "japanesePlayers": [
      "受入実績あり (美しいモントレーベイ海岸)",
      "0名 (公式ロスター確認 / 出身地不明3名)"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "csupueblo-mens": {
    "intlRosterPct": [
      "65%",
      "50% (19/38名)"
    ],
    "rosterStats": [
      "部員30名中 留学生20名 (67%) / イギリス, 日本, ドイツ等",
      "公式ロスター全38名 / 留学生19名 / MF 6名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "1〜2名在籍 (日本人主力DF/MF活躍)",
      "1名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Oliver Twelvetrees",
      "Thomás Pazo Tourinho"
    ],
    "coachEmail": [
      "oliver.twelvetrees@csupueblo.edu",
      "t.pazotourinho@csupueblo.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "csusb-mens": {
    "intlRosterPct": [
      "25%",
      "0% (0/33名)"
    ],
    "rosterStats": [
      "部員28名中 留学生7名 (25%)",
      "公式ロスター全33名 / 留学生0名 / MF 9名 (Sr・Gr 5名)"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "josh.hill@csusb.edu",
      "joshua.hill@csusb.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "floridatech-mens": {
    "intlRosterPct": [
      "70%",
      "62% (20/32名)"
    ],
    "rosterStats": [
      "部員29名中 留学生20名 (69%) / 欧州, アジア",
      "公式ロスター全32名 / 留学生20名 / MF 12名 (Sr・Gr 6名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "受入実績あり (2023 全米Final Four)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "Robin Chan",
      "Nick Robinson"
    ],
    "coachEmail": [
      "rchan@fit.edu",
      "nrobinson@fit.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "fortlewis-mens": {
    "intlRosterPct": [
      "45%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "部員29名中 留学生13名 (45%) / 欧州, 中南米",
      "公式ロスター全29名 / 留学生16名 / MF 11名 (Sr・Gr 1名)"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "oberholtzer_d@fortlewis.edu",
      "dwoberholtzer@fortlewis.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "gannon-mens": {
    "intlRosterPct": [
      "70%",
      "47% (23/49名)"
    ],
    "rosterStats": [
      "部員29名中 留学生20名 (69%) / 欧州, 日本, 南米",
      "公式ロスター全49名 / 留学生23名 / MF 12名 (Sr・Gr 1名) / 出身地不明4名"
    ],
    "japanesePlayers": [
      "受入実績あり (2023 全米Elite Eight)",
      "0名 (公式ロスター確認 / 出身地不明4名)"
    ],
    "coachEmail": [
      "colton001@gannon.edu",
      "colton002@gannon.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "lander-mens": {
    "intlRosterPct": [
      "75%",
      "49% (17/35名)"
    ],
    "rosterStats": [
      "部員30名中 留学生23名 (77%) / イギリス, 欧州, 南米",
      "公式ロスター全35名 / 留学生17名 / MF 7名 (Sr・Gr 1名) / 出身地不明3名"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認 / 出身地不明3名)"
    ],
    "headCoach": [
      "Dale White",
      "Paul Leese"
    ],
    "coachEmail": [
      "dwhite@lander.edu",
      "pleese@lander.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "lenoirrhyne-mens": {
    "intlRosterPct": [
      "75%",
      "34% (13/38名)"
    ],
    "rosterStats": [
      "部員31名中 留学生23名 (74%) / スペイン, ドイツ, 南米",
      "公式ロスター全38名 / 留学生13名 / MF 16名 (Sr・Gr 6名)"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認)"
    ]
  },
  "maryville-mens": {
    "intlRosterPct": [
      "55%",
      "69% (20/29名)"
    ],
    "rosterStats": [
      "部員29名中 留学生16名 (55%) / 欧州, 南米",
      "公式ロスター全29名 / 留学生20名 / MF 11名 (Sr・Gr 4名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "受入実績あり (サッカーの街セントルイス)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "headCoach": [
      "David Korn",
      "Adam Hall"
    ],
    "coachEmail": [
      "dkorn@maryville.edu",
      "ahall26@maryville.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "pba-mens": {
    "intlRosterPct": [
      "65%",
      "67% (20/30名)"
    ],
    "rosterStats": [
      "部員30名中 留学生20名 (67%) / 欧州, 南米",
      "公式ロスター全30名 / 留学生20名 / MF 12名 (Sr・Gr 7名)"
    ],
    "japanesePlayers": [
      "受入実績あり (パームビーチ高級リゾート立地)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Brian McMahon",
      "Lucas Martorana"
    ],
    "coachEmail": [
      "brian_mcmahon@pba.edu",
      "lucas_martorana@pba.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "rollins-mens": {
    "intlRosterPct": [
      "40%",
      "47% (16/34名)"
    ],
    "rosterStats": [
      "部員28名中 留学生11名 (39%) / イギリス, 欧州",
      "公式ロスター全34名 / 留学生16名 / MF 11名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "受入実績あり (フロリダ屈指のリベラルアーツ)",
      "1名 (公式ロスター確認)"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "saginawvalley-mens": {
    "intlRosterPct": [
      "40%",
      "45% (13/29名)"
    ],
    "rosterStats": [
      "部員30名中 留学生12名 (40%) / イギリス, カナダ等",
      "公式ロスター全29名 / 留学生13名 / MF 9名 (Sr・Gr 0名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "受入実績あり (2012 全米準優勝)",
      "1名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "ldbarrow@svsu.edu",
      "lpbarrow@svsu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "simonfraser-mens": {
    "intlRosterPct": [
      "50%",
      "100% (24/24名)"
    ],
    "rosterStats": [
      "部員28名中 留学生14名 (50%) / カナダ, 米国, 日本等",
      "公式ロスター全24名 / 留学生24名 / MF 6名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "受入実績あり (バンクーバー近郊)",
      "0名 (公式ロスター確認)"
    ],
    "headCoach": [
      "Clint Schneider",
      "Kevin Harmse"
    ],
    "coachEmail": [
      "clint_schneider@sfu.ca",
      "kharmse@sfu.ca"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "snhu-mens": {
    "intlRosterPct": [
      "60%",
      "46% (16/35名)"
    ],
    "rosterStats": [
      "部員31名中 留学生19名 (61%) / 欧州, 南米",
      "公式ロスター全35名 / 留学生16名 / MF 17名 (Sr・Gr 9名)"
    ],
    "japanesePlayers": [
      "受入実績あり (2013 全米王者)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "j.taylor3@snhu.edu",
      "joshua.taylor@snhu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "tiffin-mens": {
    "intlRosterPct": [
      "75%",
      "45% (24/53名)"
    ],
    "rosterStats": [
      "部員32名中 留学生24名 (75%) / 欧州, 日本, 南米",
      "公式ロスター全53名 / 留学生24名 / MF 18名 (Sr・Gr 5名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "1〜2名在籍 (日本人選手受入に好意的)",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ]
  },
  "uindy-mens": {
    "intlRosterPct": [
      "60%",
      "25% (16/63名)"
    ],
    "rosterStats": [
      "部員30名中 留学生18名 (60%) / 欧州, 日本, 南米",
      "公式ロスター全63名 / 留学生16名 / MF 24名 (Sr・Gr 8名) / 出身地不明2名"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認 / 出身地不明2名)"
    ],
    "coachEmail": [
      "ghall@uindy.edu",
      "hallgm@uindy.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "wingate-mens": {
    "intlRosterPct": [
      "75%",
      "55% (16/29名)"
    ],
    "rosterStats": [
      "部員30名中 留学生22名 (75%) / 欧州, アジア",
      "公式ロスター全29名 / 留学生16名 / MF 13名 (Sr・Gr 2名) / 出身地不明1名"
    ],
    "japanesePlayers": [
      "受入実績あり",
      "0名 (公式ロスター確認 / 出身地不明1名)"
    ],
    "coachEmail": [
      "bulldogssoccer@wingate.edu",
      "hamill@wingate.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "youngharris-mens": {
    "intlRosterPct": [
      "80%",
      "55% (24/44名)"
    ],
    "rosterStats": [
      "部員29名中 留学生23名 (79%) / 欧州, 南米",
      "公式ロスター全44名 / 留学生24名 / MF 23名 (Sr・Gr 2名)"
    ],
    "japanesePlayers": [
      "受入実績あり (国際派)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "dgrey@yhc.edu",
      "dcgrey@yhc.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "midwesternstate-mens": {
    "intlRosterPct": [
      "50%",
      "11% (4/35名)"
    ],
    "rosterStats": [
      "部員30名中 留学生15名 (50%) / 欧州, 南米",
      "公式ロスター全35名 / 留学生4名 / MF 12名 (Sr・Gr 0名)"
    ],
    "japanesePlayers": [
      "受入実績あり (手頃な学費)",
      "0名 (公式ロスター確認)"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "seattlepacific-mens": {
    "intlRosterPct": [
      "30%",
      "0% (0/34名)"
    ],
    "rosterStats": [
      "部員28名中 留学生8名 (29%) / イギリス, 欧州",
      "公式ロスター全34名 / 留学生0名 / MF 13名 (Sr・Gr 3名)"
    ],
    "japanesePlayers": [
      "受入実績あり (シアトル中心部好立地)",
      "0名 (公式ロスター確認)"
    ],
    "coachEmail": [
      "sakudak@spu.edu",
      "sakudak1@spu.edu"
    ],
    "coachVerified": [
      null,
      true
    ]
  },
  "calstatela-mens": {
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "45%",
      "32% (12/38名)"
    ],
    "rosterStats": [
      "部員28名中 留学生12名 (43%) / 欧州, 中南米, アジア",
      "公式ロスター全38名 / 留学生12名 / MF 8名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "受入実績あり (ロサンゼルス好立地)",
      "2名 (公式ロスター確認) Sho Toda, Taito Yoshihara"
    ]
  },
  "pointloma-mens": {
    "coachVerified": [
      null,
      true
    ],
    "intlRosterPct": [
      "25%",
      "要確認"
    ],
    "rosterStats": [
      "部員28名中 留学生7名 (25%)",
      "要確認"
    ]
  },
  "ucla-mens": {
    "intlRosterPct": [
      "30%",
      "53% (16/30名)"
    ],
    "rosterStats": [
      "部員29名中 留学生約9名 (約30%) / 欧州, 南米",
      "公式ロスター全30名 / 留学生16名 / MF 11名 (Sr・Gr 4名)"
    ],
    "japanesePlayers": [
      "0名 (過去受け入れ実績あり)",
      "0名 (公式ロスター確認)"
    ]
  },
  "stanforduniversity-mens": {
    "intlRosterPct": [
      "11.1%",
      "7% (2/27名)"
    ],
    "rosterStats": [
      "部員27名中 留学生3名 (11.1%) / カナダ, 日本",
      "公式ロスター全27名 / 留学生2名 / MF 10名 (Sr・Gr 0名)"
    ]
  },
  "tampa-mens": {
    "intlRosterPct": [
      "60%",
      "要確認"
    ],
    "rosterStats": [
      "部員32名中 留学生19名 (60%) / 欧州, 南米",
      "要確認"
    ]
  },
  "limestone-mens": {
    "intlRosterPct": [
      "80%",
      "要確認"
    ],
    "rosterStats": [
      "部員32名中 留学生25名 (78%) / 欧州, 南米",
      "要確認"
    ]
  },
  "madisoncollege-mens": {
    "intlRosterPct": [
      "要確認",
      "31% (8/26名)"
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "0名 (公式ロスター確認)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全26名 / 留学生8名 / MF 14名 (2年生以上 4名)"
    ],
    "intlFriendlyRating": [
      "要確認",
      "Very High"
    ],
    "japanesePct": [
      null,
      "0% (0/26名)"
    ],
    "fwStats": [
      null,
      "FW 5名 / 全26名 (19%)"
    ],
    "tags": [
      [
        "NJCAA全米大会出場",
        "WI"
      ],
      [
        "NJCAA 2026 全米準優勝",
        "NJCAA全米大会出場",
        "WI"
      ]
    ],
    "notes": [
      "2026 NJCAA D2 全米準優勝 (決勝でNortheast CCに1-2)。NJCAA D2 全米大会出場校 (シード5 / Pool D)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
      "2026 NJCAA D2 全米準優勝 (決勝でNortheast CCに1-2)。NJCAA D2 全米大会出場校 (シード5 / Pool D)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ]
  },
  "neosho-mens": {
    "intlRosterPct": [
      "要確認",
      "78% (25/32名)"
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "5名 (公式ロスター確認)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全32名 / 留学生25名 / MF 14名 (2年生以上 4名)"
    ],
    "intlFriendlyRating": [
      "要確認",
      "Extremely High"
    ],
    "japanesePct": [
      null,
      "16% (5/32名)"
    ],
    "fwStats": [
      null,
      "FW 6名 / 全32名 (19%) ※位置未掲載1名"
    ],
    "notes": [
      "NJCAA D2 全米大会出場校 (シード7 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
      "NJCAA D2 全米大会出場校 (シード7 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      "https://neosho.edu/athletics/sports/mens-soccer",
      "https://goneosho.com/sports/mens-soccer"
    ]
  },
  "northeastcc-mens": {
    "intlRosterPct": [
      "要確認",
      "89% (32/36名)"
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "2名 (公式ロスター確認)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全36名 / 留学生32名 / MF 13名 (2年生以上 5名)"
    ],
    "intlFriendlyRating": [
      "要確認",
      "Extremely High"
    ],
    "japanesePct": [
      null,
      "6% (2/36名)"
    ],
    "fwStats": [
      null,
      "FW 10名 / 全36名 (28%)"
    ],
    "tags": [
      [
        "NJCAA全米大会出場",
        "NE"
      ],
      [
        "NJCAA 2026 全米優勝",
        "NJCAA全米大会出場",
        "NE"
      ]
    ],
    "notes": [
      "2026 NJCAA D2 全米優勝 (決勝でMadison Collegeに2-1)。NJCAA D2 全米大会出場校 (シード3 / Pool C)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
      "2026 NJCAA D2 全米優勝 (決勝でMadison Collegeに2-1)。NJCAA D2 全米大会出場校 (シード3 / Pool C)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      "https://northeast.edu",
      "https://northeasthawks.com/sports/msoc"
    ]
  },
  "phoenixcollege-mens": {
    "intlRosterPct": [
      "要確認",
      "要確認 (ホームタウン非公開)"
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "要確認 (ホームタウン非公開)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全33名 / MF 12名 (2年生以上 2名) / 出身地は非公開"
    ],
    "japanesePct": [
      null,
      "要確認 (ホームタウン非公開)"
    ],
    "fwStats": [
      null,
      "FW 9名 / 全33名 (27%) ※位置未掲載1名"
    ],
    "notes": [
      "2025 NJCAA D2 全米優勝校 (公式サイト記載)。NJCAA D2 全米大会出場校 (シード2 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
      "2025 NJCAA D2 全米優勝校 (公式サイト記載)。NJCAA D2 全米大会出場校 (シード2 / Pool B)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      "https://athletics.phoenixcollege.edu/sports/msoc",
      "https://pcbearsathletics.com/sports/msoc"
    ]
  },
  "ccbcessex-mens": {
    "intlRosterPct": [
      "要確認",
      "27% (8/30名)"
    ],
    "japanesePlayers": [
      "未確認 (要問合せ)",
      "5名 (公式ロスター確認)"
    ],
    "rosterStats": [
      "要確認",
      "公式ロスター全30名 / 留学生8名 / MF 12名 (2年生以上 6名)"
    ],
    "intlFriendlyRating": [
      "要確認",
      "High"
    ],
    "japanesePct": [
      null,
      "17% (5/30名)"
    ],
    "fwStats": [
      null,
      "FW 10名 / 全30名 (33%)"
    ],
    "notes": [
      "NJCAA D2 全米大会出場校 (シード1 / Pool A)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。ロスター・コーチ情報は公式サイトから取得できず未確認 (要確認)。",
      "NJCAA D2 全米大会出場校 (シード1 / Pool A)。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。コーチ情報は未確認 (要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ],
    "siteUrl": [
      null,
      "https://ccbcessexknights.com/sports/msoc"
    ]
  },
  "cowley-mens": {
    "intlRosterPct": [
      "68% (19/28名)",
      "70% (19/27名)"
    ],
    "japanesePlayers": [
      "9名 (公式ロスター確認 / 出身地不明1名)",
      "9名 (公式ロスター確認)"
    ],
    "rosterStats": [
      "公式ロスター全28名 / 留学生19名 / MF 7名 (2年生以上 3名) / 出身地不明1名",
      "公式ロスター全27名 / 留学生19名 / MF 7名 (2年生以上 3名)"
    ],
    "japanesePct": [
      null,
      "33% (9/27名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全27名 (30%)"
    ]
  },
  "daytonastate-mens": {
    "japanesePct": [
      null,
      "4% (1/28名)"
    ],
    "fwStats": [
      null,
      "FW 7名 / 全28名 (25%)"
    ]
  },
  "easternflorida-mens": {
    "japanesePct": [
      null,
      "12% (4/32名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全32名 (25%)"
    ]
  },
  "arizonawestern-mens": {
    "japanesePct": [
      null,
      "27% (9/33名)"
    ],
    "fwStats": [
      null,
      "FW 9名 / 全33名 (27%)"
    ],
    "tags": [
      [
        "NJCAA全米大会出場",
        "AZ"
      ],
      [
        "NJCAA 2026 全米優勝",
        "NJCAA全米大会出場",
        "AZ"
      ]
    ],
    "notes": [
      "NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。",
      "2026 NJCAA D1 全米優勝 (校史上初・延長戦の末)。NJCAA D1 全米大会出場校。学費・寮費・カンファレンスは未確認 (公式サイトで要確認)。2年制のため「2年生以上」を卒業見込みとして集計。"
    ]
  },
  "lewisandclark-mens": {
    "japanesePct": [
      null,
      "10% (3/29名)"
    ],
    "fwStats": [
      null,
      "FW 9名 / 全29名 (31%)"
    ]
  },
  "northidaho-mens": {
    "japanesePct": [
      null,
      "3% (1/32名)"
    ],
    "fwStats": [
      null,
      "FW 6名 / 全32名 (19%)"
    ]
  },
  "gardencity-mens": {
    "japanesePct": [
      null,
      "2% (1/40名)"
    ],
    "fwStats": [
      null,
      "FW表記なし (公式ロスターはMF/DF/GKのみ)"
    ]
  },
  "northwest-mens": {
    "japanesePct": [
      null,
      "21% (7/33名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全33名 (24%)"
    ]
  },
  "hill-mens": {
    "japanesePct": [
      null,
      "要確認 (ホームタウン非公開)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全28名 (29%)"
    ]
  },
  "iowalakes-mens": {
    "japanesePct": [
      null,
      "6% (3/47名)"
    ],
    "fwStats": [
      null,
      "FW 16名 / 全47名 (34%)"
    ]
  },
  "pearlriver-mens": {
    "japanesePct": [
      null,
      "0% (0/24名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全24名 (33%)"
    ]
  },
  "glendaleaz-mens": {
    "japanesePct": [
      null,
      "要確認 (公式ロスター取得不可)"
    ],
    "fwStats": [
      null,
      "要確認 (公式ロスター取得不可)"
    ]
  },
  "pima-mens": {
    "japanesePct": [
      null,
      "0% (0/28名)"
    ],
    "fwStats": [
      null,
      "FW 2名 / 全28名 (7%)"
    ]
  },
  "wallacestate-mens": {
    "japanesePct": [
      null,
      "0% (0/12名・公開分のみ)"
    ],
    "fwStats": [
      null,
      "FW 3名 / 公開12名 (25%・公開分のみ)"
    ]
  },
  "schoolcraft-mens": {
    "japanesePct": [
      null,
      "0% (0/30名)"
    ],
    "fwStats": [
      null,
      "FW 8名 / 全30名 (27%)"
    ]
  },
  "heartland-mens": {
    "japanesePct": [
      null,
      "0% (0/22名)"
    ],
    "fwStats": [
      null,
      "FW 2名 / 全22名 (9%)"
    ]
  }
};

// Duplicate college entries that were merged: removedId -> keptId
const DUPLICATE_COLLEGE_ID_MAP = {
  "fiu-mens": "fiufloridainternatio-mens",
  "charlotte-mens": "unccharlotte-mens",
  "tulsa-mens": "universityoftulsa-mens",
  "usf-fl-mens": "usfunivofsouthflorid-mens",
  "memphis-mens": "universityofmemphis-mens",
  "fau-mens": "floridaatlanticfau-mens",
  "temple-mens": "templeuniversity-mens",
  "uab-mens": "uabunivofalabamabirm-mens",
  "stonehill-mens": "stonehillcollege-mens",
  "mercyhurst-mens": "mercyhurstuniversity-mens"
};

// Default Athlete Profile for Demo / Initial State
// (Transfer track: 大学2年次終了後 -> 3年次編入)
const DEFAULT_ATHLETE_PROFILE = {
  fullNameEng: "Taro Yamada",
  fullNameJp: "山田 太郎",
  gender: "Men",
  transferTerm: "Fall 2027",
  gradYear: "2029",
  currentLevel: "",
  creditsEarned: "",
  seasonsRemaining: "2",
  dateOfBirth: "",
  nationality: "Japan",
  currentTeam: "",
  jerseyNumber: "",
  primaryPosition: "CM / CDM (Central Midfielder)",
  secondaryPosition: "",
  dominantFoot: "",
  heightCm: "",
  weightKg: "",
  gpa: "",
  toeflScore: "",
  satScore: "",
  duolingoScore: "",
  ncaaEligibilityId: "",
  naiaEligibilityId: "",
  intendedMajor: "",
  highlightVideoUrl: "",
  fullGameVideoUrl: "",
  athleticStats: "",
  honors: "",
  personalBio: "",
  referenceCoach: ""
};

// Initial Pipeline: intentionally empty. Personal pipeline data (selected colleges, notes) lives only in the
// user's browser (localStorage) / private JSON backup, never in this shared file.
const INITIAL_PIPELINE = [];

// Email Pitch Templates (Transfer / Rising Junior)
const EMAIL_TEMPLATES = [
  {
    id: "intro-video",
    name: "1. 編入希望の初回連絡＆ハイライト映像送付 (Transfer Inquiry & Highlights)",
    description: "最も重要なファーストコンタクト。編入時期・残り競技年数・取得単位・大学GPA・映像リンクを簡潔に伝える。NCAA D1はTransfer Portal登録後に接触可のため、登録状況(または現コーチへの相談状況)を必ず確認してから送信。",
    subject: "Transfer Inquiry ({{transferTerm}}) - {{primaryPosition}} - {{fullNameEng}} (Japan) - Highlights & Academic Profile",
    body: `Dear Coach {{headCoachLastName}} and Coaching Staff,

I hope this email finds you well.

My name is {{fullNameEng}}, a {{primaryPosition}} from Japan, and I am completing my sophomore year at {{currentTeam}} ({{currentLevel}}). I plan to transfer as a rising junior for {{transferTerm}}, and I am very interested in {{collegeName}} and your men's soccer program. I have been following your team's style of play and results in the {{conference}}, and I believe my passing range, press-resistance, and work-rate would be a great fit for your team.

Here is a quick overview of my athletic and academic profile:
• Name: {{fullNameEng}}
• Position: {{primaryPosition}} (Secondary: {{secondaryPosition}})
• Transfer Term: {{transferTerm}} (Rising Junior) | Seasons of Eligibility Remaining: {{seasonsRemaining}}
• Current School: {{currentTeam}} ({{currentLevel}})
• Credits Earned: {{creditsEarned}} | College GPA: {{gpa}} / 4.0 | TOEFL: {{toeflScore}}
• Height / Weight: {{heightCm}} cm / {{weightKg}} kg (Dominant Foot: {{dominantFoot}})
• NCAA Eligibility ID: {{ncaaEligibilityId}} | NAIA ID: {{naiaEligibilityId}}
• Intended Major: {{intendedMajor}}
• Status: International student (F-1) - SEVIS transfer required

🎥 Highlight Reel (YouTube): {{highlightVideoUrl}}
📹 Full Match Footage: {{fullGameVideoUrl}}

Recent Honors & Key Stats:
{{honors}}
{{athleticStats}}

I would love to learn more about your roster needs for {{transferTerm}} and how I could contribute to {{collegeName}}. I am happy to share my official transcripts and my current coach's contact information, and I will follow the required transfer and permission-to-contact process.

Thank you very much for your time and consideration. I look forward to hearing from you.

Respectfully,

{{fullNameEng}}
Email: [Your Email Address]
Phone / WhatsApp: [Your Phone Number]
Coach Reference: {{referenceCoach}}`
  },
  {
    id: "tournament-invite",
    name: "2. 現シーズンの試合日程・映像更新の案内 (Current Season Schedule & Film Update)",
    description: "現所属チームの公式戦日程・ライブ配信URL・最新映像をコーチに案内するメール。試合後はフルマッチ映像のURLを必ずフォロー。",
    subject: "Current Season Update & Match Film - {{fullNameEng}} - {{transferTerm}} Transfer {{primaryPosition}}",
    body: `Dear Coach {{headCoachLastName}},

I hope you are having a great season.

I am writing to share my upcoming match schedule with {{currentTeam}}. The matches below will also be streamed online:

📅 Upcoming Match Schedule:
• Match 1: [Date, Time JST / US EST] vs. [Opponent Team] - Jersey #{{jerseyNumber}}
• Match 2: [Date, Time JST / US EST] vs. [Opponent Team] - Jersey #{{jerseyNumber}}
• Live Stream Link / Broadcast: [Insert Stream Link or Platform]

I will be wearing jersey #{{jerseyNumber}} and starting as {{primaryPosition}}.

In case you missed my latest video:
🎥 Latest Highlights: {{highlightVideoUrl}}
📊 College GPA: {{gpa}} | Credits Earned: {{creditsEarned}} | NCAA ID: {{ncaaEligibilityId}}

I would be honored if you or your staff have a chance to watch the live broadcast or review the match footage afterward. I will follow up with the full game recording and my updated season statistics.

Best regards,

{{fullNameEng}}
Transfer Candidate ({{transferTerm}}) | {{primaryPosition}}
{{currentTeam}}`
  },
  {
    id: "id-camp-followup",
    name: "3. Zoom面談・キャンパス訪問後の御礼とフォロー (Post-Meeting / Visit Follow-up)",
    description: "Zoom面談やキャンパス訪問の後24〜48時間以内に送信。ロースター枠・奨学金・単位認定の見通しと次のステップを確認する。",
    subject: "Thank You for Your Time - {{fullNameEng}} - {{transferTerm}} Transfer Candidate",
    body: `Dear Coach {{headCoachLastName}},

Thank you very much for taking the time to speak with me about the men's soccer program at {{collegeName}}. I truly enjoyed learning about your tactical philosophy, the team culture, and the role you see for me in the squad.

Our conversation confirmed that {{collegeName}} is one of my top choices as I transfer for {{transferTerm}}. I especially appreciated your feedback about my passing range, defensive recoveries, and distribution as a #6/#8 midfielder.

As a reminder, here are my current details:
• Position: {{primaryPosition}} | Transfer Term: {{transferTerm}} (Rising Junior)
• Credits Earned: {{creditsEarned}} | College GPA: {{gpa}} | TOEFL: {{toeflScore}}
• NCAA Eligibility ID: {{ncaaEligibilityId}}
• Video Profile: {{highlightVideoUrl}}

Could you let me know the next steps on your side, including the roster outlook for {{transferTerm}}, potential scholarship support, and the timeline for the transfer credit evaluation?

Thank you once again for your guidance and time.

Sincerely,

{{fullNameEng}}`
  },
  {
    id: "academic-update",
    name: "4. 成績・単位・英語スコア更新の連絡 (Academic & Transfer Credit Update)",
    description: "学期末の大学GPA・取得単位・TOEFL/Duolingoスコアが更新された際に送付。公式成績証明書(Official Transcript)の送付可否も伝える。",
    subject: "Academic Update: College GPA {{gpa}} & TOEFL {{toeflScore}} - {{fullNameEng}} ({{transferTerm}} Transfer)",
    body: `Dear Coach {{headCoachLastName}},

I hope everything is going well with you and the team at {{collegeName}}.

I am writing to share an academic update for my transfer profile:
• Current Cumulative College GPA: {{gpa}} / 4.0
• Credits Earned: {{creditsEarned}} (at {{currentTeam}})
• TOEFL Score: {{toeflScore}} (meets international admission thresholds)
• NCAA Eligibility Center ID: {{ncaaEligibilityId}}

I understand that academic standards and transfer credit evaluation are key parts of the process, and I am dedicated to performing in the classroom as well as on the pitch.

🎥 Updated Season Highlights: {{highlightVideoUrl}}

Please let me know if you need my official transcripts sent directly from my current school. I look forward to your feedback.

Warm regards,

{{fullNameEng}}
Transfer Candidate ({{transferTerm}}) | {{primaryPosition}}`
  },
  {
    id: "offer-response",
    name: "5. オファーへの感謝と検討回答 (Offer Gratitude & Discussion)",
    description: "奨学金オファーやロスター枠の提示を受けた際の返信。単位認定・SEVIS Transfer・決定期日を明確に伝える。",
    subject: "Sincere Gratitude for the Offer & Continued Excitement - {{fullNameEng}}",
    body: `Dear Coach {{headCoachLastName}},

Thank you so much for extending an offer to join the {{collegeName}} Men's Soccer family as a transfer student for {{transferTerm}}. It is a tremendous honor to be recognized by you and your coaching staff.

My family and I are currently reviewing the financial package, the transfer credit evaluation, and the admission and SEVIS transfer timeline in detail. We are extremely excited about the vision you presented for my role on the pitch as {{primaryPosition}} and within the team culture.

I will finalize my discussion with my current coaches and family over the next few days and reach back out to you by [Date] to confirm my decision.

Thank you once again for believing in my potential and giving me this opportunity.

Go {{mascot}}!

Warmest regards,

{{fullNameEng}}`
  }
];

// Recruiting Roadmap Milestones (Transfer: 2年次終了後 -> 3年次編入)
const RECRUITING_ROADMAP = [
  {
    grade: "Sophomore 前期 (2年生 秋学期・現在)",
    period: "現状把握・編入候補リサーチ・映像更新",
    badge: "Prep Phase",
    tasks: [
      { text: "現在の大学の公式戦フルマッチ映像を保存し、今シーズンのハイライト(3〜5分)を更新する", done: false },
      { text: "大学GPA・取得単位数を確認し、編入先で認定される見込みの単位をアカデミックアドバイザーに相談する", done: false },
      { text: "残り競技年数(Seasons of Competition Remaining)とNCAA/NAIAの編入・Eligibility規定を確認する", done: false },
      { text: "編入候補校20〜30校(D1/D2/D3/NAIA)をリスト化し、専攻・学費・ロースターの空き枠(卒業予定の上級生数)を比較する", done: false },
      { text: "TOEFL iBTまたはDuolingoのスコアを更新する(目標80+。編入先の英語基準を確認)", done: false },
      { text: "NCAA Eligibility Center / NAIA Eligibility Center の登録状況と必要書類を確認する", done: false }
    ]
  },
  {
    grade: "Sophomore 後期 (2年生 春学期)",
    period: "現コーチへの相談・Transfer Portal・コーチへの直接アプローチ",
    badge: "Outreach Phase",
    tasks: [
      { text: "現在のヘッドコーチに編入の意向を相談する(NCAA D1はTransfer Portal登録後に他校コーチと接触可。登録時期・方法はNCAA公式で確認)", done: false },
      { text: "候補校のヘッドコーチ・アシスタントコーチへ編入向け自己紹介メール＆映像リンクを送付する(30校以上)", done: false },
      { text: "各大学公式サイトのオンライン・リクルート質問票(Recruiting Questionnaire)を記入・送信する", done: false },
      { text: "返信があったコーチとZoom面談を行い、ロースター枠・ポジション・奨学金・単位認定の見通しを質問する", done: false },
      { text: "現在の大学から公式成績証明書(Official Transcript)の発行を依頼する(高校の成績証明書も準備)", done: false },
      { text: "春シーズンの試合映像を追加し、ハイライトを最新版に差し替える", done: false }
    ]
  },
  {
    grade: "Summer (2年次修了〜夏)",
    period: "オファー比較・進学先決定・編入出願・単位認定",
    badge: "Offer & Admission",
    tasks: [
      { text: "オファー(奨学金額・単位認定・専攻・ロースター上の役割)を比較し、編入先を1校に決定(Commitment)する", done: false },
      { text: "編入出願(Transfer Application)を提出し、財力証明書などの必要書類を揃える", done: false },
      { text: "編入先大学からTransfer Credit Evaluation(単位認定結果)を受け取り、卒業までの残り単位を確認する", done: false },
      { text: "奨学金契約書(Athletics Aid Agreement。必要に応じてNLI)の内容を確認しサインする", done: false },
      { text: "NCAA/NAIAの編入Eligibility(出場資格)を編入先大学のコンプライアンス担当に確認する", done: false }
    ]
  },
  {
    grade: "Junior 入学前 (3年生 入学準備・SEVIS Transfer)",
    period: "SEVIS Transfer・I-20・渡米・プレシーズン合流",
    badge: "Transfer & Move",
    tasks: [
      { text: "現在の大学のDSO(留学生担当)にSEVIS Transferを依頼し、編入先大学から新しいI-20を受け取る(有効なF-1ビザがあれば通常は再取得不要。要確認)", done: false },
      { text: "現在の大学の最終学期の成績を確定させ、最終成績証明書を編入先へ送付する", done: false },
      { text: "編入先の入学手続き・健康診断書・保険・寮の手配を完了する", done: false },
      { text: "プレシーズン(8月上旬)合流に向けて渡米航空券の手配と夏期フィジカルトレーニングを実施する", done: false }
    ]
  }
];

// Recruitment Rules & Knowledge Base (Transfer edition)
const RECRUITING_KNOWLEDGE = {
  divisions: [
    {
      name: "NCAA Division 1",
      soccerLevel: "最高峰（MLSドラフト・プロ輩出多数、各国のU代表・ユース出身が多数）",
      scholarshipMen: "【2025/2026年〜新ルール】最大28枠（旧9.9枠から拡大 / ロスター上限28名全員に支給可能）",
      scholarshipWomen: "【2025/2026年〜新ルール】最大28枠（旧14.0枠から拡大 / ロスター上限28名全員に支給可能）",
      academicReq: "【編入】前大学で学業適格(Academic Eligibility)を満たすこと＋編入先の入学基準。目安は大学GPA 2.5〜3.0以上（学業重視校は3.0+）。取得単位が編入先で認定されることが重要（※最新規定はNCAA公式で要確認）",
      characteristics: "【2025-2026新制度 (House v. NCAA 和解)】競技別奨学金上限（旧9.9枠）が撤廃され、ロスター上限28名に対し大学予算に応じて最大28名全員へ奨学金支給可能に拡大。一方でチーム全体のロスターが厳格に28名上限となり、編入生が入れる空き枠自体は限られる。他校コーチとの接触はTransfer Portal登録後が原則（※登録ウィンドウは年度ごとにNCAA公式で確認）。"
    },
    {
      name: "NCAA Division 2",
      soccerLevel: "極めて高い（欧州・南米・日本のトップ選手が集まり、D1上位を倒すことも多い）",
      scholarshipMen: "最大9.0枠 / チーム（分割支給）",
      scholarshipWomen: "最大9.9枠 / チーム（分割支給）",
      academicReq: "【編入】前大学での学業適格＋編入先の入学基準。目安は大学GPA 2.0〜2.5以上。単位認定の可否をコーチ経由で早めに確認（※最新規定はNCAA公式で要確認）",
      characteristics: "留学生比率が非常に高く、日本人選手にも手厚い奨学金を出す強豪校多数。編入生(JUCO・他大学からの移籍)の受入実績も豊富で、文武両道のバランスが良い。"
    },
    {
      name: "NCAA Division 3",
      soccerLevel: "高い（名門私立・リベラルアーツが中心。トップ校はD1中位並み）",
      scholarshipMen: "スポーツ特待奨学金なし（※成績優秀者向け学業奨学金・ニード型返済不要給付金が充実）",
      scholarshipWomen: "スポーツ特待奨学金なし（同上）",
      academicReq: "【編入】各大学の編入出願基準（多くは大学GPA 3.0〜3.5以上、高い英語力）。前大学の成績・単位が審査の中心",
      characteristics: "アイビーリーグ並みの超名門大学多数（Tufts, Chicago, Amherstなど）。学業最優先でオフシーズンも学業に集中可能。留学生向けの給付金の条件は大学ごとに要確認。"
    },
    {
      name: "NAIA",
      soccerLevel: "高い（留学生がロスターの8割を占めるチームも多数、フィジカル・技術ともにハイレベル）",
      scholarshipMen: "最大12.0枠 / チーム（フルスカラシップ支給も多い）",
      scholarshipWomen: "最大12.0枠 / チーム",
      academicReq: "【編入】NAIA Eligibility Centerの編入ルール（前大学の単位・GPAなど）を満たすこと。最新規定はNAIA公式で要確認",
      characteristics: "NCAAよりも留学生・編入生の受け入れルールが柔軟。奨学金額も手厚く、日本人留学生の成功実績多数。2年次修了後の編入先として現実的な選択肢。"
    },
    {
      name: "NJCAA / JUCO (2年制公立短大)",
      soccerLevel: "高レベル（D1へのステップアップを目指す世界各国のタレントが集結）",
      scholarshipMen: "最大18.0枠（NJCAA D1：学費・寮費・食事・教科書含むフルスカラシップ可能）",
      scholarshipWomen: "最大18.0枠",
      academicReq: "（2年次修了後の編入先としては通常対象外）",
      characteristics: "3年次編入では、現在JUCOに在籍している場合の「編入元」。編入先は原則4年制大学（NCAA D1/D2/D3、NAIA）。2年間の実績・GPA・取得単位が編入先で評価される。"
    }
  ],
  dosAndDonts: [
    {
      type: "do",
      title: "動画の最初の30秒に最高のプレーを凝縮する（現所属チームの最新シーズン映像を使う）",
      desc: "米国の大学コーチは1日に数十通のメールを受け取ります。最初の30秒でスピード、判断力、テクニックが伝わらなければ最後まで見てもらえません。編入選手は『現在の大学レベルでの実戦映像』が最も評価されるため、直近シーズンのプレーで構成しましょう。"
    },
    {
      type: "do",
      title: "必ずフルマッチ（公式戦90分）の映像も用意する",
      desc: "ハイライトだけでなく、ボールのないところでのポジショニング、運動量、プレッシングの献身性、トランジションのスピードを見るために、コーチはフルゲームの録画を必ず要求します。"
    },
    {
      type: "do",
      title: "メールは大学名とコーチ名をカスタマイズする（一斉送信はNG）",
      desc: "『Coach』だけの宛名や他大学のカンファレンス名が入ったコピペメールは即座に削除されます。『御校の昨シーズンのACCでの戦いぶりを見て…』など具体的に言及しましょう。編入では『ロースターのどのポジションの枠が空くか』にも触れると効果的です。"
    },
    {
      type: "dont",
      title: "動画に派手なBGMや無駄な自己紹介スライドを長く入れない",
      desc: "大音量のEDMや30秒続く自己紹介スライドはコーチに嫌われます。冒頭は3秒で選手情報（背番号・ポジション・黄色い矢印）を表示し、すぐにプレーシーンを開始してください。"
    },
    {
      type: "dont",
      title: "大学の成績（GPA）と単位認定を軽視しない",
      desc: "いくらサッカーが上手くても、編入先の入学基準やNCAA/NAIAの編入Eligibility基準（前大学の成績・単位）を満たせなければプレーできません。2年間の成績がすべて審査対象で、認定されない単位が多いと卒業が遅れます。"
    },
    {
      type: "dont",
      title: "現在のコーチに相談せず、他校のコーチへ接触しない",
      desc: "NCAA D1ではTransfer Portal登録後に他校コーチと接触するのが原則です。無断の接触はルール違反となり、出場資格や奨学金に影響するおそれがあります。登録の時期・手順は必ず現在の大学のコンプライアンス担当に確認してください。"
    }
  ]
};
