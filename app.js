// MCU Tracker - Main Application
// ==============================

// Film Data with real TMDB poster paths and YouTube trailers
const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';

const films = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
    runtime: "2h 6m",
    type: "film",
    poster: `${TMDB_IMG}/78lPtwv72eTNqFW9COBYI0dWDJa.jpg`,
    backdrop: `${TMDB_IMG}/cyecB7godJ6kNHGONFjUyVN9OX5.jpg`,
    trailer: "8ugaeA-nMTc",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    keyPoints: ["Tony Stark becomes Iron Man", "Arc reactor technology introduced", "Nick Fury teases Avengers Initiative", "First MCU film - sets the tone"],
    cast: [
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Gwyneth Paltrow", character: "Pepper Potts", img: `${TMDB_IMG}/slPWN0VvYJtNOEuxlFSsXSNQMaF.jpg` },
      { name: "Jeff Bridges", character: "Obadiah Stane", img: `${TMDB_IMG}/5gXs2bw6MrEG7ByMiheAhISPH5Z.jpg` }
    ],
    watched: true,
    essential: true,
    order: 1
  },
  {
    id: 2,
    title: "Captain America: The First Avenger",
    year: 2011,
    runtime: "2h 4m",
    type: "film",
    poster: `${TMDB_IMG}/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg`,
    backdrop: `${TMDB_IMG}/pm8zLzHYW5mWtV0kLSqLnPgVaaL.jpg`,
    trailer: "JerVrbLldXw",
    description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'.",
    keyPoints: ["Steve Rogers becomes Captain America", "Tesseract (Space Stone) introduced", "Red Skull's first appearance", "Bucky 'dies' - sets up Winter Soldier", "Steve frozen until modern day"],
    cast: [
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Sebastian Stan", character: "Bucky Barnes", img: `${TMDB_IMG}/nKZgixTbHFXpkzzIpMFdLX98GYh.jpg` },
      { name: "Hugo Weaving", character: "Red Skull", img: `${TMDB_IMG}/zLomSqLkGPPMrcIvdXPM68rKSYq.jpg` }
    ],
    watched: true,
    essential: true,
    order: 2
  },
  {
    id: 3,
    title: "The Avengers",
    year: 2012,
    runtime: "2h 23m",
    type: "film",
    poster: `${TMDB_IMG}/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg`,
    backdrop: `${TMDB_IMG}/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg`,
    trailer: "eOrNdBpGMv8",
    description: "Earth's mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army from enslaving humanity.",
    keyPoints: ["Avengers team forms for the first time", "Loki invasion of New York", "Thanos first teased (post-credits)", "Mind Stone in Loki's scepter", "Sets up future team dynamics"],
    cast: [
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Scarlett Johansson", character: "Black Widow", img: `${TMDB_IMG}/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg` },
      { name: "Chris Hemsworth", character: "Thor", img: `${TMDB_IMG}/piQGdoIQOF3cK7WlOKCkHr0Pwqz.jpg` },
      { name: "Tom Hiddleston", character: "Loki", img: `${TMDB_IMG}/mclHxMm8aPlCPKptP67257F5GPo.jpg` }
    ],
    watched: false,
    essential: true,
    order: 3,
    watchLink: "https://moviesgoo.com/movie/the-avengers-2-0969f60231/"
  },
  {
    id: 4,
    title: "Captain America: The Winter Soldier",
    year: 2014,
    runtime: "2h 16m",
    type: "film",
    poster: `${TMDB_IMG}/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg`,
    backdrop: `${TMDB_IMG}/gfMRQIxpacVfXPVyDHnFUfQPaFC.jpg`,
    trailer: "7SlILk2WMTI",
    description: "Steve Rogers struggles to embrace his role in the modern world and battles a new threat from old history: the Soviet agent known as the Winter Soldier.",
    keyPoints: ["S.H.I.E.L.D. revealed to be infiltrated by Hydra", "Bucky revealed as Winter Soldier", "Nick Fury 'dies' and goes underground", "Political thriller tone shift", "Sets up Civil War conflict"],
    cast: [
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Sebastian Stan", character: "Winter Soldier", img: `${TMDB_IMG}/nKZgixTbHFXpkzzIpMFdLX98GYh.jpg` },
      { name: "Scarlett Johansson", character: "Black Widow", img: `${TMDB_IMG}/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg` },
      { name: "Samuel L. Jackson", character: "Nick Fury", img: `${TMDB_IMG}/AiAYAqwpM5xmiFrLIoOsLEwqdJ3.jpg` }
    ],
    watched: false,
    essential: true,
    order: 4,
    watchLink: "https://moviesgoo.com/movie/captain-america-the-winter-soldier-0277971818/"
  },
  {
    id: 5,
    title: "Guardians of the Galaxy",
    year: 2014,
    runtime: "2h 1m",
    type: "film",
    poster: `${TMDB_IMG}/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg`,
    backdrop: `${TMDB_IMG}/mN0kXYqbXzfTxdq0f14NHKHDujh.jpg`,
    trailer: "d96cjJhvlMA",
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    keyPoints: ["Introduces cosmic MCU side", "Power Stone (Orb) introduced", "Thanos appears in person", "Collector explains Infinity Stones", "Sets up cosmic stakes for Infinity War"],
    cast: [
      { name: "Chris Pratt", character: "Peter Quill", img: `${TMDB_IMG}/83o3koL82jt30EJ0rz4Uc7i0unr.jpg` },
      { name: "Zoe Saldaña", character: "Gamora", img: `${TMDB_IMG}/iOVbUH20il632nj2v01rxa0S6id.jpg` },
      { name: "Dave Bautista", character: "Drax", img: `${TMDB_IMG}/hMh6qN6VjR1bYJiDIk6g0rQdVz1.jpg` },
      { name: "Vin Diesel", character: "Groot (voice)", img: `${TMDB_IMG}/7rwSXluNWZAluYMOEWBxkPmckES.jpg` }
    ],
    watched: false,
    essential: true,
    order: 5,
    watchLink: "https://moviesgoo.com/movie/guardians-of-the-galaxy-2248f41471/"
  },
  {
    id: 6,
    title: "Avengers: Age of Ultron",
    year: 2015,
    runtime: "2h 21m",
    type: "film",
    poster: `${TMDB_IMG}/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg`,
    backdrop: `${TMDB_IMG}/67MIEtdzKcRVtVL1J9V6vMXQcBk.jpg`,
    trailer: "tmeOjFno6Do",
    description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong.",
    keyPoints: ["Vision created with Mind Stone", "Wanda & Pietro Maximoff introduced", "Tony's fear of future invasion", "Hulk leaves Earth", "Seeds of Avengers fracture planted"],
    cast: [
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Elizabeth Olsen", character: "Wanda Maximoff", img: `${TMDB_IMG}/wIU675y4dofIDVuhCWbwjKNxXCw.jpg` },
      { name: "Paul Bettany", character: "Vision", img: `${TMDB_IMG}/dpIL20lUrHfSorZxun2RGpC4t58.jpg` }
    ],
    watched: false,
    essential: true,
    order: 6,
    watchLink: "https://moviesgoo.com/movie/the-avengers-age-of-ultron-c03cd2bf74/"
  },
  {
    id: 7,
    title: "Captain America: Civil War",
    year: 2016,
    runtime: "2h 27m",
    type: "film",
    poster: `${TMDB_IMG}/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg`,
    backdrop: `${TMDB_IMG}/wdwcOBMkt3zmPQuEMbZoabFgq4F.jpg`,
    trailer: "dKrVegVI0Us",
    description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    keyPoints: ["Avengers split in two", "Spider-Man (Tom Holland) introduced", "Black Panther introduced", "Sokovia Accords divide heroes", "Bucky's programming revealed", "Sets up Infinity War team dynamics"],
    cast: [
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Chadwick Boseman", character: "Black Panther", img: `${TMDB_IMG}/kPzcvxBwt75BlpieNkPVwopPWkv.jpg` },
      { name: "Tom Holland", character: "Spider-Man", img: `${TMDB_IMG}/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg` }
    ],
    watched: false,
    essential: true,
    order: 7,
    watchLink: "https://moviesgoo.com/movie/captain-america-civil-war-37ae527cab/"
  },
  {
    id: 8,
    title: "Thor: Ragnarok",
    year: 2017,
    runtime: "2h 10m",
    type: "film",
    poster: `${TMDB_IMG}/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg`,
    backdrop: `${TMDB_IMG}/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg`,
    trailer: "ue80QwXMRHg",
    description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök.",
    keyPoints: ["Asgard destroyed (Ragnarok)", "Hela (Odin's firstborn) revealed", "Hulk returns from Sakaar", "Loki redemption arc", "Thanos ship appears (post-credits)", "Fun tonal shift - key for Endgame character arcs"],
    cast: [
      { name: "Chris Hemsworth", character: "Thor", img: `${TMDB_IMG}/piQGdoIQOF3cK7WlOKCkHr0Pwqz.jpg` },
      { name: "Tom Hiddleston", character: "Loki", img: `${TMDB_IMG}/mclHxMm8aPlCPKptP67257F5GPo.jpg` },
      { name: "Cate Blanchett", character: "Hela", img: `${TMDB_IMG}/h1yMc1Iu0O4pwJisuNxZ7j6xbVD.jpg` },
      { name: "Mark Ruffalo", character: "Hulk", img: `${TMDB_IMG}/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg` }
    ],
    watched: false,
    essential: true,
    order: 8,
    watchLink: "https://moviesgoo.com/movie/thor-ragnarok-ce31f6e6d0/"
  },
  {
    id: 9,
    title: "Avengers: Infinity War",
    year: 2018,
    runtime: "2h 29m",
    type: "film",
    poster: `${TMDB_IMG}/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
    backdrop: `${TMDB_IMG}/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg`,
    trailer: "6ZfuNTqbHE8",
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
    keyPoints: ["Thanos collects all Infinity Stones", "The Snap kills half of all life", "Vision dies (Mind Stone taken)", "Gamora dies (Soul Stone)", "Thor gets Stormbreaker", "Devastating cliffhanger ending"],
    cast: [
      { name: "Josh Brolin", character: "Thanos", img: `${TMDB_IMG}/x8KfT1Xrq7BoSKLYHYK8CaFkvOL.jpg` },
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Chris Hemsworth", character: "Thor", img: `${TMDB_IMG}/piQGdoIQOF3cK7WlOKCkHr0Pwqz.jpg` }
    ],
    watched: false,
    essential: true,
    order: 9,
    watchLink: "https://moviesgoo.com/movie/avengers-infinity-war-a34fcab5b8/"
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    year: 2019,
    runtime: "3h 1m",
    type: "film",
    poster: `${TMDB_IMG}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
    backdrop: `${TMDB_IMG}/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg`,
    trailer: "TcMBFSGVi1c",
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
    keyPoints: ["Time heist through MCU history", "The Blip reverses the Snap", "Tony Stark dies saving universe", "Steve Rogers retires (old)", "Thor joins Guardians", "Massive final battle - everyone returns"],
    cast: [
      { name: "Robert Downey Jr.", character: "Tony Stark", img: `${TMDB_IMG}/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg` },
      { name: "Chris Evans", character: "Steve Rogers", img: `${TMDB_IMG}/3bOGNsHlrswhyW79uvIHH1V43JI.jpg` },
      { name: "Scarlett Johansson", character: "Black Widow", img: `${TMDB_IMG}/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg` },
      { name: "Chris Hemsworth", character: "Thor", img: `${TMDB_IMG}/piQGdoIQOF3cK7WlOKCkHr0Pwqz.jpg` }
    ],
    watched: false,
    essential: true,
    order: 10,
    watchLink: "https://moviesgoo.com/movie/avengers-endgame-b83e425609/"
  },
  {
    id: 11,
    title: "Spider-Man: Far From Home",
    year: 2019,
    runtime: "2h 9m",
    type: "film",
    poster: `${TMDB_IMG}/4q2NNj4S5dG2RLF9CpXsT8xjrGK.jpg`,
    backdrop: `${TMDB_IMG}/dqB7k0g2F5zUsadAuyrOrxDyPBD.jpg`,
    trailer: "Nt9L1jCKGnE",
    description: "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    keyPoints: ["Post-Endgame world aftermath", "Peter inherits Tony's tech (EDITH)", "Mysterio deceives everyone", "Spider-Man identity revealed (post-credits)", "Sets up No Way Home directly"],
    cast: [
      { name: "Tom Holland", character: "Peter Parker", img: `${TMDB_IMG}/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg` },
      { name: "Jake Gyllenhaal", character: "Mysterio", img: `${TMDB_IMG}/btCRdCqvG6Q5mrvqwKYhrv0dnEb.jpg` },
      { name: "Zendaya", character: "MJ", img: `${TMDB_IMG}/xkGEXY8NHO6gNk0m4dAw6EGNhMM.jpg` }
    ],
    watched: false,
    essential: true,
    order: 11,
    watchLink: "https://moviesgoo.com/movie/spider-man-far-from-home-3638a57e83/"
  },
  {
    id: 12,
    title: "WandaVision",
    year: 2021,
    runtime: "~6 hours",
    type: "series",
    poster: `${TMDB_IMG}/glKDfE6btIRcVB5zrjspRIs4r52.jpg`,
    backdrop: `${TMDB_IMG}/57vVjteucIF3bGnZj6PmaoJRScw.jpg`,
    trailer: "sj9J2ecsSpo",
    description: "Wanda Maximoff and Vision live their ideal suburban life in Westview, but begin to suspect that everything is not as it seems.",
    keyPoints: ["Wanda's grief creates Hex reality", "Wanda becomes Scarlet Witch", "Darkhold book introduced", "Monica Rambeau gets powers", "CRUCIAL for Multiverse of Madness", "Vision's philosophical copies"],
    cast: [
      { name: "Elizabeth Olsen", character: "Wanda Maximoff", img: `${TMDB_IMG}/wIU675y4dofIDVuhCWbwjKNxXCw.jpg` },
      { name: "Paul Bettany", character: "Vision", img: `${TMDB_IMG}/dpIL20lUrHfSorZxun2RGpC4t58.jpg` },
      { name: "Kathryn Hahn", character: "Agatha", img: `${TMDB_IMG}/bqo0lsXMpPXC5RiGFhvlKJKaMiN.jpg` }
    ],
    episodes: [
      { num: 1, title: "Filmed Before a Live Studio Audience", runtime: "30m" },
      { num: 2, title: "Don't Touch That Dial", runtime: "36m" },
      { num: 3, title: "Now in Color", runtime: "32m" },
      { num: 4, title: "We Interrupt This Program", runtime: "35m" },
      { num: 5, title: "On a Very Special Episode...", runtime: "42m" },
      { num: 6, title: "All-New Halloween Spooktacular!", runtime: "38m" },
      { num: 7, title: "Breaking the Fourth Wall", runtime: "38m" },
      { num: 8, title: "Previously On", runtime: "47m" },
      { num: 9, title: "The Series Finale", runtime: "50m" }
    ],
    watched: false,
    essential: true,
    order: 12,
    watchLink: "https://moviesgoo.com/show/wandavision-5f406b2ffb/"
  },
  {
    id: 13,
    title: "Loki Season 1",
    year: 2021,
    runtime: "~6 hours",
    type: "series",
    poster: `${TMDB_IMG}/voHUmluYmKyleFkTu3lOXQG702u.jpg`,
    backdrop: `${TMDB_IMG}/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg`,
    trailer: "nW948Va-l10",
    description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    keyPoints: ["TVA and Sacred Timeline explained", "Timeline officially branches", "Multiverse OFFICIALLY opens", "He Who Remains / Kang variant intro", "ABSOLUTELY ESSENTIAL for multiverse saga", "Loki stuck at TVA"],
    cast: [
      { name: "Tom Hiddleston", character: "Loki", img: `${TMDB_IMG}/mclHxMm8aPlCPKptP67257F5GPo.jpg` },
      { name: "Owen Wilson", character: "Mobius", img: `${TMDB_IMG}/rLS378g66srPeNvVjvVx00z1FB2.jpg` },
      { name: "Jonathan Majors", character: "He Who Remains", img: `${TMDB_IMG}/jWVn0ZNTXVG4sY6HqQHaQAq7WYw.jpg` }
    ],
    episodes: [
      { num: 1, title: "Glorious Purpose", runtime: "51m" },
      { num: 2, title: "The Variant", runtime: "54m" },
      { num: 3, title: "Lamentis", runtime: "43m" },
      { num: 4, title: "The Nexus Event", runtime: "47m" },
      { num: 5, title: "Journey into Mystery", runtime: "50m" },
      { num: 6, title: "For All Time. Always.", runtime: "49m" }
    ],
    watched: false,
    essential: true,
    order: 13,
    watchLink: "https://moviesgoo.com/show/loki-3de67dcf6a/"
  },
  {
    id: 14,
    title: "Spider-Man: No Way Home",
    year: 2021,
    runtime: "2h 28m",
    type: "film",
    poster: `${TMDB_IMG}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`,
    backdrop: `${TMDB_IMG}/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg`,
    trailer: "JfVOs4VSpmA",
    description: "Peter Parker seeks Doctor Strange's help to make people forget his secret identity, but the spell goes wrong, opening the multiverse.",
    keyPoints: ["Multiverse villains from other Spider-Man films", "Tobey and Andrew Spider-Men return", "Doctor Strange spell goes wrong", "Peter's identity erased from everyone's memory", "Emotional reset for Spider-Man", "Aunt May dies"],
    cast: [
      { name: "Tom Holland", character: "Peter Parker", img: `${TMDB_IMG}/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg` },
      { name: "Benedict Cumberbatch", character: "Doctor Strange", img: `${TMDB_IMG}/fBEucxECxGLKVHBznO0qHtCGiMO.jpg` },
      { name: "Zendaya", character: "MJ", img: `${TMDB_IMG}/xkGEXY8NHO6gNk0m4dAw6EGNhMM.jpg` }
    ],
    watched: false,
    essential: true,
    order: 14,
    watchLink: "https://moviesgoo.com/movie/spider-man-no-way-home-hMJmMy-cc706ab1e2/"
  },
  {
    id: 15,
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    runtime: "2h 6m",
    type: "film",
    poster: `${TMDB_IMG}/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg`,
    backdrop: `${TMDB_IMG}/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg`,
    trailer: "aWzlQ2N6qqg",
    description: "Doctor Strange, with the help of mystical allies, traverses the multiverse to confront a mysterious new adversary.",
    keyPoints: ["Wanda's villainous turn (Darkhold corruption)", "America Chavez introduced (multiverse jumper)", "Incursions explained (universe collisions)", "Illuminati from another universe", "Wanda seemingly dies", "Strange gets third eye"],
    cast: [
      { name: "Benedict Cumberbatch", character: "Doctor Strange", img: `${TMDB_IMG}/fBEucxECxGLKVHBznO0qHtCGiMO.jpg` },
      { name: "Elizabeth Olsen", character: "Scarlet Witch", img: `${TMDB_IMG}/wIU675y4dofIDVuhCWbwjKNxXCw.jpg` },
      { name: "Xochitl Gomez", character: "America Chavez", img: `${TMDB_IMG}/9oGfhvDDdM5NC0xsHZzKjBQ9zQe.jpg` }
    ],
    watched: false,
    essential: true,
    order: 15,
    watchLink: "https://moviesgoo.com/movie/doctor-strange-in-the-multiverse-of-madness-ZTOyqO-6cb119421b/"
  },
  {
    id: 16,
    title: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    runtime: "2h 4m",
    type: "film",
    poster: `${TMDB_IMG}/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg`,
    backdrop: `${TMDB_IMG}/fhquRW28vRZHr26orSaFFnhYIA0.jpg`,
    trailer: "ZlNFpri-Y40",
    description: "The Ant-Man family finds themselves in the Quantum Realm, encountering strange creatures and Kang the Conqueror.",
    keyPoints: ["Kang the Conqueror full introduction", "Quantum Realm explored in depth", "Council of Kangs revealed", "Sets up Kang Dynasty", "Janet's past with Kang revealed"],
    cast: [
      { name: "Paul Rudd", character: "Scott Lang", img: `${TMDB_IMG}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg` },
      { name: "Evangeline Lilly", character: "Hope Van Dyne", img: `${TMDB_IMG}/pJCgeoskqPyvkxNihoDKnKbqmzJ.jpg` },
      { name: "Jonathan Majors", character: "Kang", img: `${TMDB_IMG}/jWVn0ZNTXVG4sY6HqQHaQAq7WYw.jpg` }
    ],
    watched: false,
    essential: true,
    order: 16,
    watchLink: "https://moviesgoo.com/movie/ant-man-and-the-wasp-quantumania-L6UymX-0d7587ffbc/"
  },
  {
    id: 17,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    runtime: "2h 30m",
    type: "film",
    poster: `${TMDB_IMG}/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg`,
    backdrop: `${TMDB_IMG}/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg`,
    trailer: "u3V5KDHRQvk",
    description: "The Guardians embark on a mission to save Rocket and protect the universe, while confronting their pasts.",
    keyPoints: ["Rocket's origin story", "High Evolutionary as villain", "Guardians team disbands", "Emotional closure for cosmic team", "Peter Quill returns to Earth", "New Guardians formed"],
    cast: [
      { name: "Chris Pratt", character: "Peter Quill", img: `${TMDB_IMG}/83o3koL82jt30EJ0rz4Uc7i0unr.jpg` },
      { name: "Zoe Saldaña", character: "Gamora", img: `${TMDB_IMG}/iOVbUH20il632nj2v01rxa0S6id.jpg` },
      { name: "Bradley Cooper", character: "Rocket (voice)", img: `${TMDB_IMG}/rVyVoBJl8HNK0UceWSz4w6blxwB.jpg` }
    ],
    watched: false,
    essential: true,
    order: 17,
    watchLink: "https://moviesgoo.com/movie/guardians-of-the-galaxy-vol-3-NxQOl6-db1a735559/"
  },
  {
    id: 18,
    title: "Deadpool & Wolverine",
    year: 2024,
    runtime: "2h 7m",
    type: "film",
    poster: `${TMDB_IMG}/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`,
    backdrop: `${TMDB_IMG}/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg`,
    trailer: "73_1biulkYk",
    description: "Deadpool recruits a reluctant Wolverine to save his universe from extinction.",
    keyPoints: ["Multiverse shenanigans", "X-Men/Mutants officially in MCU", "TVA and Paradox storyline", "Many variants and cameos", "Fox universe closure", "Sets up mutant integration"],
    cast: [
      { name: "Ryan Reynolds", character: "Deadpool", img: `${TMDB_IMG}/2Orm6l3z3zukF1q0AgIOUqvwLeB.jpg` },
      { name: "Hugh Jackman", character: "Wolverine", img: `${TMDB_IMG}/oSMmv0n0dkqxnrvHNVRNQGmVWeY.jpg` },
      { name: "Emma Corrin", character: "Cassandra Nova", img: `${TMDB_IMG}/wqFyRRj8pxZn2ZKqZBGQ90l1w2M.jpg` }
    ],
    watched: false,
    essential: true,
    order: 18,
    watchLink: "https://moviesgoo.com/movie/deadpool-3-GPeHp6-506975dbc0/"
  },
  {
    id: 19,
    title: "Captain America: Brave New World",
    year: 2025,
    runtime: "2h 10m",
    type: "film",
    poster: `${TMDB_IMG}/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg`,
    backdrop: `${TMDB_IMG}/4AkNKFgB6SjDGLIeGNlCfiZvSjt.jpg`,
    trailer: "MyzrAUMRwp8",
    description: "Sam Wilson embraces his role as Captain America in a world facing new global threats.",
    keyPoints: ["Sam Wilson as Captain America", "Red Hulk introduction", "Global political threats", "New era of heroes", "Thunderbolt Ross storyline"],
    cast: [
      { name: "Anthony Mackie", character: "Sam Wilson", img: `${TMDB_IMG}/eZST7OaMntLqPzF9b9nCEWH9trV.jpg` },
      { name: "Harrison Ford", character: "Thunderbolt Ross", img: `${TMDB_IMG}/5M7oN3sznp99hWYQ9sX0xheswWX.jpg` }
    ],
    watched: false,
    essential: true,
    order: 19,
    watchLink: "https://moviesgoo.com/movie/captain-america-brave-new-world-c6D1xe-4bd86476aa/"
  },
  {
    id: 20,
    title: "Thunderbolts*",
    year: 2025,
    runtime: "2h 15m",
    type: "film",
    poster: `${TMDB_IMG}/jyv2aXqdCGVYbSqq9DkUrZNDbE7.jpg`,
    backdrop: `${TMDB_IMG}/87IVlclAfWL6mdicU1DDuxdwXwe.jpg`,
    trailer: "s3eTU4U1O80",
    description: "A group of anti-heroes are brought together for a mysterious mission.",
    keyPoints: ["Anti-hero team assembled", "'Present day' MCU (2027 in-universe)", "Sets stage for upcoming Avengers", "Various reformed villains", "Government-backed team"],
    cast: [
      { name: "Florence Pugh", character: "Yelena Belova", img: `${TMDB_IMG}/fhEsn35Frwg3rHZC0LLhqGg7H4d.jpg` },
      { name: "Sebastian Stan", character: "Bucky Barnes", img: `${TMDB_IMG}/nKZgixTbHFXpkzzIpMFdLX98GYh.jpg` },
      { name: "David Harbour", character: "Red Guardian", img: `${TMDB_IMG}/chPekukMF5SNnW6b22NbYgyiCXy.jpg` }
    ],
    watched: false,
    essential: true,
    order: 20,
    watchLink: "https://moviesgoo.com/movie/thunderbolts-MxU6lX-62aee8a4b8/"
  }
];

// Additional films for summary section (not essential but provide context)
const summaryFilms = [
  { title: "The Incredible Hulk", year: 2008, summary: "Bruce Banner becomes the Hulk. General Ross introduced (later becomes Red Hulk). Mostly standalone but establishes Hulk's origin." },
  { title: "Iron Man 2", year: 2010, summary: "Black Widow introduced. War Machine gets his suit. Nick Fury expands Avengers recruitment. Tony's arc reactor poisoning." },
  { title: "Thor", year: 2011, summary: "Thor and Loki introduced. Asgard and Nine Realms established. Destroyer armor. Sets up Thor's character arc." },
  { title: "Iron Man 3", year: 2013, summary: "Tony deals with PTSD from NYC attack. Extremis virus. Tony destroys his suits (temporarily). Aldrich Killian as Mandarin fake-out." },
  { title: "Thor: The Dark World", year: 2013, summary: "Reality Stone (Aether) introduced. Dark Elves attack. Loki fakes death. Sets up Infinity War stone hunting." },
  { title: "Guardians of the Galaxy Vol. 2", year: 2017, summary: "Peter's father Ego revealed. Mantis joins team. Yondu's sacrifice. Deeper team dynamics." },
  { title: "Spider-Man: Homecoming", year: 2017, summary: "Peter adjusts to being a hero. Vulture as grounded villain. Tony mentors Peter. High school Spider-Man." },
  { title: "Black Panther", year: 2018, summary: "Wakanda fully explored. Killmonger challenges T'Challa. Vibranium technology. Wakanda opens to world." },
  { title: "Ant-Man", year: 2015, summary: "Scott Lang becomes Ant-Man. Quantum Realm introduced. Heist movie tone. Hank Pym's history." },
  { title: "Ant-Man and the Wasp", year: 2018, summary: "Janet Van Dyne rescued from Quantum Realm. Ghost as sympathetic villain. Post-credits ties to Snap." },
  { title: "Captain Marvel", year: 2019, summary: "Carol Danvers origin (1990s). Skrulls introduced as refugees. Nick Fury loses eye. Power Stone callback." },
  { title: "Black Widow", year: 2021, summary: "Natasha's past explored. Yelena Belova introduced (joins Thunderbolts). Red Guardian and Melina. Set between Civil War and Infinity War." },
  { title: "Shang-Chi", year: 2021, summary: "Martial arts hero introduced. Ten Rings organization history. Ta Lo dimension. Post-credits sets up future." },
  { title: "Eternals", year: 2021, summary: "Ancient cosmic beings on Earth. Celestials explained. Thanos' brother Starfox. Divisive but expands cosmic lore." },
  { title: "The Falcon and the Winter Soldier", year: 2021, summary: "Sam becomes new Captain America. Flag Smashers conflict. John Walker as US Agent. Zemo returns." },
  { title: "Hawkeye", year: 2021, summary: "Clint passes the torch. Kate Bishop introduced. Echo introduced. Kingpin returns to MCU." },
  { title: "Moon Knight", year: 2022, summary: "Marc Spector / Steven Grant introduced. Egyptian mythology. Standalone but expands supernatural MCU." },
  { title: "She-Hulk", year: 2022, summary: "Jennifer Walters becomes She-Hulk. Legal comedy. Daredevil crossover. Fourth-wall breaking." },
  { title: "Thor: Love and Thunder", year: 2022, summary: "Jane Foster becomes Mighty Thor. Gorr the God Butcher. Thor adopts Love. Jane dies from cancer." },
  { title: "Black Panther: Wakanda Forever", year: 2022, summary: "T'Challa's death mourned. Shuri becomes Black Panther. Namor and Talokan introduced. Ironheart debut." },
  { title: "The Marvels", year: 2023, summary: "Captain Marvel, Monica, Kamala team up. Power-swapping mechanic. Kree conflict. Ms. Marvel in action." },
  { title: "Secret Invasion", year: 2023, summary: "Nick Fury vs Skrull infiltration. Gravik as villain. Maria Hill dies. Sets up Fury's Avengers role." },
  { title: "Loki Season 2", year: 2023, summary: "Loki becomes God of Stories. TVA restructured. He Who Remains legacy. Multiverse management." },
  { title: "Echo", year: 2024, summary: "Maya Lopez solo adventure. Kingpin storyline. Indigenous heritage focus. Street-level MCU." },
  { title: "Agatha All Along", year: 2024, summary: "Agatha post-WandaVision. Witches' Road adventure. Billy/Wiccan revealed. Expands magical side." }
];

// State
let currentFilter = 'all';
let currentModalFilm = null;
window.nextUpFilm = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadWatchedState();
  renderUI();
  setupEventListeners();
});

// LocalStorage
function loadWatchedState() {
  const saved = localStorage.getItem('mcuTrackerWatched');
  if (saved) {
    const watchedIds = JSON.parse(saved);
    films.forEach(film => {
      film.watched = watchedIds.includes(film.id);
    });
  }
}

function saveWatchedState() {
  const watchedIds = films.filter(f => f.watched).map(f => f.id);
  localStorage.setItem('mcuTrackerWatched', JSON.stringify(watchedIds));
}

// Episode tracking for series
function getWatchedEpisodes(filmId) {
  const saved = localStorage.getItem(`mcuEpisodes_${filmId}`);
  return saved ? JSON.parse(saved) : [];
}

function saveWatchedEpisodes(filmId, episodes) {
  localStorage.setItem(`mcuEpisodes_${filmId}`, JSON.stringify(episodes));
}

function toggleEpisode(filmId, epNum) {
  const watchedEps = getWatchedEpisodes(filmId);
  const index = watchedEps.indexOf(epNum);

  if (index > -1) {
    watchedEps.splice(index, 1);
  } else {
    watchedEps.push(epNum);
  }

  saveWatchedEpisodes(filmId, watchedEps);

  // Check if all episodes watched - mark series as watched
  const film = films.find(f => f.id === filmId);
  if (film && film.episodes) {
    const allWatched = film.episodes.every(ep => watchedEps.includes(ep.num));
    if (allWatched !== film.watched) {
      film.watched = allWatched;
      saveWatchedState();
      renderUI();
    }
  }

  // Re-render the episodes list
  if (currentModalFilm && currentModalFilm.id === filmId) {
    openModal(currentModalFilm);
  }
}

// Render
function renderUI() {
  updateProgress();
  renderHero();
  renderCards();
  renderSummaryFilms();
}

function updateProgress() {
  const watched = films.filter(f => f.watched).length;
  const total = films.length;
  const pct = Math.round((watched / total) * 100);

  document.getElementById('progressBar').style.width = `${pct}%`;
  document.getElementById('progressText').textContent = `${watched}/${total} Watched`;
}

function renderHero() {
  const nextUp = films.find(f => !f.watched);
  window.nextUpFilm = nextUp;

  if (!nextUp) {
    document.getElementById('hero').innerHTML = `
      <div class="hero-content" style="text-align: center; max-width: 100%;">
        <h1 class="hero-title">🎉 Journey Complete!</h1>
        <p class="hero-description">You've watched all essential MCU films. Ready for whatever comes next!</p>
      </div>
    `;
    return;
  }

  document.getElementById('heroPoster').src = nextUp.backdrop || nextUp.poster;
  document.getElementById('heroTitle').textContent = nextUp.title;
  document.getElementById('heroYear').textContent = nextUp.year;
  document.getElementById('heroRuntime').textContent = nextUp.runtime;
  document.getElementById('heroType').textContent = nextUp.type === 'series' ? '📺 Series' : '🎬 Film';
  document.getElementById('heroDescription').textContent = nextUp.description;
  document.getElementById('heroKeyPointsText').textContent = nextUp.keyPoints.join(' • ');

  // Update hero watch button visibility
  const heroWatchNowBtn = document.getElementById('heroWatchNow');
  if (heroWatchNowBtn) {
    if (nextUp.watchLink) {
      heroWatchNowBtn.style.display = 'inline-flex';
      heroWatchNowBtn.onclick = () => window.open(nextUp.watchLink, '_blank');
    } else {
      heroWatchNowBtn.style.display = 'none';
    }
  }
}

function renderCards() {
  const toWatch = films.filter(f => !f.watched);
  const watched = films.filter(f => f.watched);

  const filtered = currentFilter === 'watched' ? [] : toWatch;
  const filteredWatched = currentFilter === 'unwatched' ? [] : watched;

  document.getElementById('toWatchCards').innerHTML = filtered.map(createCard).join('');
  document.getElementById('watchedCards').innerHTML = filteredWatched.map(createCard).join('');

  document.getElementById('toWatchCount').textContent = `(${toWatch.length} remaining)`;
  document.getElementById('watchedCount').textContent = `(${watched.length} films)`;

  document.getElementById('toWatchSection').style.display = filtered.length ? 'block' : 'none';
  document.getElementById('watchedSection').style.display = filteredWatched.length ? 'block' : 'none';
}

function createCard(film) {
  return `
    <div class="film-card ${film.watched ? 'watched' : ''}" onclick="openModal(films.find(f => f.id === ${film.id}))">
      <div class="order-badge">${film.order}</div>
      ${film.type === 'series' ? '<div class="type-badge">Series</div>' : ''}
      ${film.watched ? `
        <div class="watched-badge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      ` : ''}
      <div class="card-poster">
        <img src="${film.poster}" alt="${film.title}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-title">${film.title}</div>
        <div class="card-meta">
          <span>${film.year}</span>
          <span>${film.runtime}</span>
        </div>
        <div class="card-actions">
          ${film.watchLink ? `
            <a href="${film.watchLink}" target="_blank" class="card-action-btn play-btn" onclick="event.stopPropagation();" title="Watch Now">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </a>
          ` : ''}
          <button class="card-action-btn watched-toggle ${film.watched ? 'is-watched' : ''}" onclick="event.stopPropagation(); toggleWatched(${film.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button class="card-action-btn" onclick="event.stopPropagation(); openModal(films.find(f => f.id === ${film.id}))">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSummaryFilms() {
  document.getElementById('summaryFilmsGrid').innerHTML = summaryFilms.map(film => `
    <div class="summary-film-card">
      <div class="info">
        <div class="title">${film.title}</div>
        <div class="year">${film.year}</div>
        <div class="summary">${film.summary}</div>
      </div>
    </div>
  `).join('');
}

// Modal
function openModal(film) {
  if (!film) return;
  currentModalFilm = film;

  document.getElementById('modalPoster').src = film.backdrop || film.poster;
  document.getElementById('modalTitle').textContent = film.title;
  document.getElementById('modalMeta').innerHTML = `
    <span>📅 ${film.year}</span>
    <span>⏱️ ${film.runtime}</span>
    <span>${film.type === 'series' ? '📺 Series' : '🎬 Film'}</span>
  `;
  document.getElementById('modalDescription').textContent = film.description;
  document.getElementById('modalKeyPoints').innerHTML = film.keyPoints.map(p => `<li>${p}</li>`).join('');

  // Cast
  if (film.cast && film.cast.length) {
    document.getElementById('modalCastSection').style.display = 'block';
    document.getElementById('modalCast').innerHTML = film.cast.map(c => `
      <div class="cast-item">
        <img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/70?text=?'">
        <div class="name">${c.name}</div>
        <div class="character">${c.character}</div>
      </div>
    `).join('');
  } else {
    document.getElementById('modalCastSection').style.display = 'none';
  }

  // Trailer
  if (film.trailer) {
    document.getElementById('modalTrailerSection').style.display = 'block';
    document.getElementById('modalTrailer').innerHTML = `
      <iframe src="https://www.youtube.com/embed/${film.trailer}" allowfullscreen></iframe>
    `;
  } else {
    document.getElementById('modalTrailerSection').style.display = 'none';
  }

  // Watch button
  updateModalWatchButton();

  // Watch Now link
  const watchNowBtn = document.getElementById('modalWatchNow');
  if (watchNowBtn) {
    if (film.watchLink) {
      watchNowBtn.style.display = 'inline-flex';
      watchNowBtn.href = film.watchLink;
    } else {
      watchNowBtn.style.display = 'none';
    }
  }

  // Episodes section for series
  const episodesSection = document.getElementById('modalEpisodesSection');
  const episodesList = document.getElementById('modalEpisodes');
  if (film.episodes && film.episodes.length) {
    episodesSection.style.display = 'block';
    const watchedEps = getWatchedEpisodes(film.id);
    episodesList.innerHTML = film.episodes.map(ep => `
      <div class="episode-item ${watchedEps.includes(ep.num) ? 'watched' : ''}" onclick="toggleEpisode(${film.id}, ${ep.num})">
        <div class="episode-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="episode-info">
          <div class="episode-num">Episode ${ep.num}</div>
          <div class="episode-title">${ep.title}</div>
        </div>
        <div class="episode-runtime">${ep.runtime}</div>
      </div>
    `).join('');
  } else {
    episodesSection.style.display = 'none';
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('modalTrailer').innerHTML = '';
  currentModalFilm = null;
}

function updateModalWatchButton() {
  const btn = document.getElementById('modalWatchToggle');
  const text = document.getElementById('modalWatchToggleText');
  if (currentModalFilm.watched) {
    btn.className = 'watch-toggle-btn mark-unwatched';
    text.textContent = 'Mark as Unwatched';
  } else {
    btn.className = 'watch-toggle-btn mark-watched';
    text.textContent = 'Mark as Watched';
  }
}

// Toggle watched
function toggleWatched(id) {
  const film = films.find(f => f.id === id);
  if (film) {
    film.watched = !film.watched;
    saveWatchedState();
    renderUI();
  }
}

function toggleWatchedModal() {
  if (currentModalFilm) {
    currentModalFilm.watched = !currentModalFilm.watched;
    saveWatchedState();
    updateModalWatchButton();
    renderUI();
  }
}

function toggleWatchedHero() {
  if (window.nextUpFilm) {
    window.nextUpFilm.watched = true;
    saveWatchedState();
    renderUI();
  }
}

// Filters
function setupEventListeners() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCards();
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 100);
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// Row scrolling
function scrollRow(type, direction) {
  const container = document.getElementById(type === 'toWatch' ? 'toWatchCards' : 'watchedCards');
  const scrollAmount = 600 * direction;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Summary toggle
function toggleSummarySection() {
  const grid = document.getElementById('summaryFilmsGrid');
  const btn = document.getElementById('summaryToggle');
  const isHidden = grid.style.display === 'none';
  grid.style.display = isHidden ? 'grid' : 'none';
  btn.textContent = isHidden ? 'Hide Films' : 'Show Films';
}
