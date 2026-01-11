// MCU Complete Timeline Data - FIXED IMAGE URLS
const timelineData = [
    {
        id: 1, title: "Iron Man", year: 2008, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        summary: "Billionaire Tony Stark is captured in Afghanistan and builds a powered suit to escape. Upon returning home, he refines the technology and becomes Iron Man, taking on weapons dealers and his treacherous business partner Obadiah Stane.",
        takeaways: ["Tony Stark becomes Iron Man using arc reactor technology", "Establishes the grounded, tech-based hero template for MCU", "Post-credits: Nick Fury appears, mentions 'Avengers Initiative'", "Sets the tone for interconnected Marvel universe"]
    },

    {
        id: 2, title: "The Incredible Hulk", year: 2008, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/dLxJFpJVL1G3HpAd8z2gUyBFqch.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/9i1YyN1UpFmIiBAJXc86fQK3A4.jpg",
        summary: "Bruce Banner, on the run from the military, seeks a cure for his Hulk transformations. General Thaddeus 'Thunderbolt' Ross pursues him relentlessly, leading to the creation of the Abomination.",
        takeaways: ["Establishes Bruce Banner/Hulk's origin and fugitive status", "Introduces General Ross (later becomes Red Hulk in Phase 5)", "Tony Stark cameo hints at team-building", "Mostly standalone but Ross returns in later films"]
    },

    {
        id: 3, title: "Iron Man 2", year: 2010, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
        summary: "Tony Stark faces government pressure to share his technology while battling Ivan Vanko and his own arc reactor poisoning. He's also evaluated by S.H.I.E.L.D. for the Avengers Initiative.",
        takeaways: ["Black Widow (Natasha Romanoff) introduced undercover", "War Machine (Rhodey) gets his own suit", "Nick Fury expands S.H.I.E.L.D. presence", "Howard Stark's legacy and hidden element discovery"]
    },

    {
        id: 4, title: "Thor", year: 2011, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        summary: "The arrogant god Thor is banished from Asgard to Earth by his father Odin after reigniting an ancient war. Stripped of his powers, he learns humility while his brother Loki schemes for the throne.",
        takeaways: ["Introduces Thor, Loki, Odin, and Asgard", "Establishes Nine Realms cosmic mythology", "Mjolnir's worthiness enchantment explained", "Hawkeye brief appearance", "Bifrost bridge destroyed"]
    },

    {
        id: 5, title: "Captain America: The First Avenger", year: 2011, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
        summary: "During WWII, scrawny Steve Rogers undergoes an experimental super-soldier program and becomes Captain America. He battles Red Skull and Hydra, ultimately crashing a plane into the Arctic to save millions.",
        takeaways: ["Steve Rogers becomes Captain America via super-soldier serum", "Tesseract (Space Stone) first major appearance", "Red Skull vanishes touching the Tesseract", "Bucky Barnes 'dies' falling from train - sets up Winter Soldier", "Steve frozen in ice until modern day"]
    },

    {
        id: 6, title: "The Avengers", year: 2012, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        summary: "Loki arrives on Earth with an alien army to conquer humanity. Nick Fury assembles Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye to stop the invasion of New York City.",
        takeaways: ["The Avengers team forms for the first time", "Battle of New York - aliens invade through portal", "Mind Stone revealed to be in Loki's scepter", "Post-credits: Thanos first teased", "Establishes team dynamics and conflicts"]
    },

    {
        id: 7, title: "Iron Man 3", year: 2013, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        summary: "Tony Stark suffers PTSD after the Battle of New York and faces the Mandarin terrorist. He discovers the real threat is Aldrich Killian and his Extremis super-soldiers.",
        takeaways: ["Tony deals with anxiety/PTSD from alien invasion", "Extremis virus creates super-powered soldiers", "Tony destroys all his suits (temporarily)", "Mandarin revealed as actor - real threat is Killian"]
    },

    {
        id: 8, title: "Thor: The Dark World", year: 2013, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
        summary: "Dark Elves led by Malekith awaken and seek the Aether (Reality Stone) to plunge the universe into darkness. Thor must ally with Loki to stop them.",
        takeaways: ["Reality Stone (Aether) introduced", "Loki fakes his death, secretly takes Odin's throne", "Thor's mother Frigga dies", "Reality Stone given to the Collector for safekeeping"]
    },

    {
        id: 9, title: "Captain America: The Winter Soldier", year: 2014, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
        summary: "Steve Rogers discovers S.H.I.E.L.D. has been infiltrated by Hydra. He goes on the run with Black Widow and new ally Falcon while facing a deadly assassin - his old friend Bucky Barnes.",
        takeaways: ["S.H.I.E.L.D. revealed to be infiltrated by Hydra since WWII", "Bucky Barnes revealed as brainwashed Winter Soldier", "Nick Fury fakes death, goes underground", "Political thriller tone - trust no one", "S.H.I.E.L.D. falls, Hydra exposed"]
    },

    {
        id: 10, title: "Guardians of the Galaxy", year: 2014, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        summary: "Outlaw Peter Quill steals a mysterious orb coveted by Ronan. He forms an unlikely alliance with Gamora, Drax, Rocket, and Groot to stop Ronan from destroying an entire planet.",
        takeaways: ["Introduces cosmic MCU: Xandar, Knowhere, Kree", "Power Stone (Orb) introduced", "Thanos appears in person, wants the stones", "Collector explains all six Infinity Stones", "Gamora is Thanos's 'daughter' - key for Infinity War"]
    },

    {
        id: 11, title: "Avengers: Age of Ultron", year: 2015, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        summary: "Tony Stark's peacekeeping AI Ultron goes rogue and plans human extinction. The Avengers must stop him while dealing with enhanced twins Wanda and Pietro Maximoff.",
        takeaways: ["Vision created using Mind Stone, Jarvis, and vibranium", "Wanda Maximoff (Scarlet Witch) & Pietro introduced", "Tony haunted by vision of Avengers' death", "Hulk leaves Earth on Quinjet", "Seeds of Avengers fracture planted"]
    },

    {
        id: 12, title: "Ant-Man", year: 2015, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
        summary: "Ex-con Scott Lang is recruited by scientist Hank Pym to become Ant-Man and pull off a heist to prevent dangerous shrinking technology from falling into the wrong hands.",
        takeaways: ["Scott Lang becomes Ant-Man", "Quantum Realm introduced (crucial for Endgame)", "Hank Pym's history with S.H.I.E.L.D.", "Hope Van Dyne set up to become Wasp"]
    },

    {
        id: 13, title: "Captain America: Civil War", year: 2016, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        summary: "The Sokovia Accords divide the Avengers: Tony supports government oversight, Steve opposes it. When Bucky is framed for terrorism, Steve goes rogue to protect him.",
        takeaways: ["Avengers split into Team Cap vs Team Iron Man", "Spider-Man (Tom Holland) introduced - recruited by Tony", "Black Panther introduced after his father is killed", "Sokovia Accords require hero registration", "Zemo's revenge plan fractures the team"]
    },

    {
        id: 14, title: "Doctor Strange", year: 2016, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        summary: "Brilliant surgeon Stephen Strange loses use of his hands in a car accident. Seeking healing, he discovers the mystic arts and becomes Earth's Sorcerer Supreme.",
        takeaways: ["Magic and mystic dimension introduced to MCU", "Time Stone in Eye of Agamotto", "Dormammu and the Dark Dimension", "Wong and the Masters of the Mystic Arts"]
    },

    {
        id: 15, title: "Guardians of the Galaxy Vol. 2", year: 2017, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
        summary: "Peter Quill meets his father Ego, a Celestial with sinister plans. The Guardians must stop Ego while dealing with Ravager threats and family bonds.",
        takeaways: ["Peter's father Ego is a Celestial with galaxy-destroying plans", "Mantis joins the Guardians", "Yondu sacrifices himself for Peter", "Deeper family dynamics explored"]
    },

    {
        id: 16, title: "Spider-Man: Homecoming", year: 2017, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        summary: "Peter Parker balances high school life with being Spider-Man. He battles the Vulture, who sells alien tech weapons, while trying to impress Tony Stark.",
        takeaways: ["Peter adjusts to being a neighborhood hero", "Vulture as grounded, sympathetic villain", "Tony Stark mentors Peter", "Peter declines Avengers membership"]
    },

    {
        id: 17, title: "Thor: Ragnarok", year: 2017, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        summary: "Thor is trapped on Sakaar and forced to fight the Hulk in gladiatorial combat. He must escape and return to Asgard to stop his evil sister Hela from destroying everything.",
        takeaways: ["Hela (Odin's firstborn) revealed as goddess of death", "Mjolnir destroyed by Hela", "Hulk found on Sakaar after 2 years", "Asgard destroyed in Ragnarok to stop Hela", "Post-credits: Thanos's ship intercepts the Asgardians"]
    },

    {
        id: 18, title: "Black Panther", year: 2018, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        summary: "T'Challa returns to Wakanda to take the throne but is challenged by Killmonger, who wants to use Wakanda's technology to arm oppressed people worldwide.",
        takeaways: ["Wakanda fully explored - hidden advanced nation", "Vibranium technology and culture", "Killmonger's sympathetic motivation", "T'Challa decides to open Wakanda to the world"]
    },

    {
        id: 19, title: "Avengers: Infinity War", year: 2018, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        summary: "Thanos begins his quest to collect all six Infinity Stones. The Avengers, Guardians, and allies across the universe must unite to stop him from erasing half of all life.",
        takeaways: ["Thanos collects all six Infinity Stones", "THE SNAP - half of all life in universe dies", "Vision killed for Mind Stone", "Gamora killed for Soul Stone on Vormir", "Thor gets Stormbreaker, almost kills Thanos"]
    },

    {
        id: 20, title: "Ant-Man and the Wasp", year: 2018, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
        summary: "Scott Lang teams with Hope Van Dyne as the Wasp to rescue Janet Van Dyne from the Quantum Realm while evading the FBI and the phasing villain Ghost.",
        takeaways: ["Hope becomes the Wasp", "Janet Van Dyne rescued from Quantum Realm", "Ghost as sympathetic villain needing healing", "Post-credits: Scott trapped in Quantum Realm during THE SNAP"]
    },

    {
        id: 21, title: "Captain Marvel", year: 2019, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0wLsHyzbh4Elq.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
        summary: "Set in 1995, Kree warrior Vers discovers she's actually Carol Danvers, a human Air Force pilot. She uncovers the truth about the Kree-Skrull war.",
        takeaways: ["Carol Danvers becomes Captain Marvel", "Set in 1995 - origin story", "Skrulls revealed as refugees, not villains", "Nick Fury loses eye to Flerken cat"]
    },

    {
        id: 22, title: "Avengers: Endgame", year: 2019, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        summary: "Five years after the Snap, the remaining Avengers discover time travel through the Quantum Realm. They execute a 'Time Heist' to collect the Stones from the past.",
        takeaways: ["TIME HEIST through MCU history to collect stones", "THE BLIP - everyone snapped returns after 5 years", "Tony Stark dies using the Infinity Stones", "Steve Rogers retires, passes shield to Sam Wilson", "Massive final battle - 'Avengers Assemble'"]
    },

    {
        id: 23, title: "Spider-Man: Far From Home", year: 2019, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsT8xjrGK.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/dqB7k0g2F5zUsadAuyrOrxDyPBD.jpg",
        summary: "Peter Parker goes on a European school trip but is recruited by Nick Fury to fight the Elementals alongside Mysterio. He discovers not everything is as it seems.",
        takeaways: ["Post-Endgame world dealing with the Blip", "Peter inherits Tony's glasses (EDITH)", "Mysterio revealed as disgruntled ex-Stark employee", "Peter's identity exposed to the world in post-credits"]
    },

    {
        id: 24, title: "WandaVision", year: 2021, type: "series", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
        summary: "Wanda creates a sitcom reality bubble around Westview, NJ as a way to cope with Vision's death. As SWORD investigates, the truth about her powers is revealed.",
        takeaways: ["Wanda's grief creates the Hex reality", "Wanda officially becomes the Scarlet Witch", "The Darkhold book introduced - corrupts users", "Monica Rambeau gains powers from the Hex", "CRUCIAL setup for Multiverse of Madness"]
    },

    {
        id: 25, title: "The Falcon and the Winter Soldier", year: 2021, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
        summary: "Sam Wilson and Bucky Barnes team up to stop the Flag Smashers while dealing with the legacy of Captain America's shield.",
        takeaways: ["Sam Wilson officially becomes Captain America", "John Walker becomes US Agent", "Flag Smashers want pre-Blip borders erased", "Baron Zemo returns, still manipulating"]
    },

    {
        id: 26, title: "Loki Season 1", year: 2021, type: "series", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
        summary: "After escaping with the Tesseract in Endgame, Loki is arrested by the TVA for creating a branched timeline. He teams with Mobius to uncover the TVA's secrets.",
        takeaways: ["TVA (Time Variance Authority) and Sacred Timeline explained", "He Who Remains (Kang variant) controls all timelines", "Loki kills He Who Remains, breaking the timeline", "MULTIVERSE OFFICIALLY OPENS", "ABSOLUTELY ESSENTIAL for Multiverse Saga"]
    },

    {
        id: 27, title: "Black Widow", year: 2021, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        summary: "Set between Civil War and Infinity War, Natasha confronts her past as a Russian spy and reunites with her surrogate family to take down the Red Room.",
        takeaways: ["Natasha's spy training origins revealed", "Yelena Belova introduced (joins Thunderbolts)", "Red Guardian and Melina (Nat's 'parents')", "Post-credits: Valentina recruits Yelena"]
    },

    {
        id: 28, title: "Shang-Chi", year: 2021, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
        summary: "Shang-Chi must confront his father Wenwu, the real Mandarin and leader of the Ten Rings, who seeks to open a portal to find his dead wife.",
        takeaways: ["Martial arts hero introduced to MCU", "Real Ten Rings organization and Mandarin", "Ta Lo dimension and mystical creatures", "Post-credits: Wong, Bruce, Carol examine the rings"]
    },

    {
        id: 29, title: "Eternals", year: 2021, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        summary: "Ancient beings called Eternals, who have lived on Earth in secret for thousands of years, must reunite to stop the Deviants.",
        takeaways: ["Celestials created Eternals to protect humans for Emergence", "Celestials birth from populated planets", "Thanos's brother Starfox introduced", "Tiamut the Celestial frozen mid-emergence"]
    },

    {
        id: 30, title: "Hawkeye", year: 2021, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
        summary: "Clint Barton teams up with young archer Kate Bishop during Christmas in NYC. His past as Ronin catches up with him.",
        takeaways: ["Kate Bishop introduced as new Hawkeye", "Echo (Maya Lopez) introduced", "Kingpin revealed to be back in MCU", "Yelena confronts Clint about Natasha"]
    },

    {
        id: 31, title: "Spider-Man: No Way Home", year: 2021, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        summary: "Peter asks Doctor Strange to make everyone forget he's Spider-Man. The spell goes wrong, pulling villains and other Spider-Men from across the multiverse.",
        takeaways: ["Multiverse villains arrive: Doc Ock, Green Goblin, Electro", "Tobey and Andrew Spider-Men return", "Aunt May dies - 'With great power...'", "Doctor Strange's spell erases Peter from everyone's memory"]
    },

    {
        id: 32, title: "Moon Knight", year: 2022, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
        summary: "Steven Grant discovers he shares a body with mercenary Marc Spector, the avatar of Egyptian moon god Khonshu.",
        takeaways: ["Dissociative identity disorder representation", "Egyptian mythology enters MCU", "Khonshu and other Egyptian gods", "Mostly standalone but expands supernatural MCU"]
    },

    {
        id: 33, title: "Doctor Strange: Multiverse of Madness", year: 2022, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        summary: "Doctor Strange protects America Chavez, a teen who can punch portals through the multiverse. He faces a corrupted Scarlet Witch who wants to steal her powers.",
        takeaways: ["Wanda fully corrupted by the Darkhold, becomes villain", "America Chavez can travel the multiverse", "Incursions explained - universes can collide", "Illuminati from Earth-838 introduced and killed", "Wanda seemingly dies destroying all Darkholds"]
    },

    {
        id: 34, title: "Ms. Marvel", year: 2022, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/8aLEfKCS6aKP8UsoEIgpsmwcxsR.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/yU4efqcLfHy27VyiZeUUmGUJU31.jpg",
        summary: "Pakistani-American teen Kamala Khan discovers she has cosmic powers linked to a magical bangle and her family's djinn heritage.",
        takeaways: ["Kamala Khan gains crystalline energy powers", "Muslim-American representation", "Post-credits: Kamala swaps places with Captain Marvel", "Sets up The Marvels"]
    },

    {
        id: 35, title: "Thor: Love and Thunder", year: 2022, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        summary: "Thor teams with the Guardians, Valkyrie, and his ex Jane Foster (now wielding a reformed Mjolnir) to stop Gorr the God Butcher.",
        takeaways: ["Jane Foster becomes Mighty Thor via Mjolnir", "Jane dying of cancer, Mjolnir keeps her alive", "Gorr wants to kill all gods", "Thor adopts Gorr's resurrected daughter Love", "Jane dies, goes to Valhalla"]
    },

    {
        id: 36, title: "She-Hulk: Attorney at Law", year: 2022, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
        summary: "Jennifer Walters, Bruce Banner's cousin, gains Hulk powers and balances her legal career with superhero life.",
        takeaways: ["Jennifer Walters becomes She-Hulk", "Legal comedy format", "Daredevil (Matt Murdock) appears", "Breaks fourth wall, comments on MCU itself"]
    },

    {
        id: 37, title: "Black Panther: Wakanda Forever", year: 2022, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        summary: "Wakanda mourns T'Challa while facing a new threat: Namor and the underwater kingdom Talokan.",
        takeaways: ["Real tribute to Chadwick Boseman/T'Challa", "Shuri becomes the new Black Panther", "Namor and Talokan underwater kingdom introduced", "Ironheart (Riri Williams) debuts"]
    },

    {
        id: 38, title: "Ant-Man and the Wasp: Quantumania", year: 2023, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
        summary: "The Ant-Man family is pulled into the Quantum Realm and encounters Kang the Conqueror, a dangerous time-traveling tyrant.",
        takeaways: ["Kang the Conqueror full introduction as multiverse big bad", "Quantum Realm is its own civilization", "Janet's history with Kang revealed", "Post-credits: Council of Kangs"]
    },

    {
        id: 39, title: "Secret Invasion", year: 2023, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg",
        summary: "Nick Fury returns to Earth to stop a Skrull faction led by Gravik from infiltrating and taking over humanity.",
        takeaways: ["Skrulls have been living on Earth since Captain Marvel", "Gravik wants to make Skrulls super-powered", "Maria Hill killed by Gravik", "Talos killed"]
    },

    {
        id: 40, title: "Loki Season 2", year: 2023, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
        summary: "Loki faces time-slipping as the TVA falls apart without He Who Remains. He must find a way to save the multiverse.",
        takeaways: ["Loki becomes God of Stories, holds timelines together", "Victor Timely (Kang variant) introduced", "TVA exists outside time, restructured", "Bittersweet ending"]
    },

    {
        id: 41, title: "The Marvels", year: 2023, type: "film", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUmmfigg.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/4Ep2KivIBzIF6FMq682R3bdfeoB.jpg",
        summary: "Captain Marvel, Ms. Marvel, and Monica Rambeau find themselves swapping places when using their powers and team up against Kree villain Dar-Benn.",
        takeaways: ["Carol, Kamala, and Monica team up", "Power-swapping whenever they use abilities", "Dar-Benn destroying worlds for resources", "Monica trapped in alternate universe at end"]
    },

    {
        id: 42, title: "Guardians of the Galaxy Vol. 3", year: 2023, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        summary: "When Rocket is critically injured, the Guardians must find his creator, the High Evolutionary, to save him.",
        takeaways: ["Rocket's tragic origin story", "High Evolutionary wants to create perfect species", "Guardians team disbands at the end", "Peter Quill returns to Earth", "Emotional closure for the cosmic team"]
    },

    {
        id: 43, title: "Echo", year: 2024, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/vBZ0VGnVXuAeMvVxl2xKDIfvVBj.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/uGEAwELQTuAhakVFKoXfz7n1OLV.jpg",
        summary: "Maya Lopez returns to her hometown in Oklahoma, confronting her past with Kingpin while discovering her family's Choctaw heritage.",
        takeaways: ["Maya's indigenous heritage and powers", "Kingpin's past and relationship with Maya", "First 'Marvel Spotlight' series", "Sets up Daredevil: Born Again"]
    },

    {
        id: 44, title: "Agatha All Along", year: 2024, type: "series", essential: false,
        poster: "https://image.tmdb.org/t/p/w500/1VxfzV5jHD5P7Vw8qCvXzF1G9XB.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/aRPi7YBsEuFB6oNRX2RQKkDANf7.jpg",
        summary: "Agatha Harkness, depowered after WandaVision, forms a coven to walk the Witches' Road and regain her magic.",
        takeaways: ["Agatha seeks to restore her powers", "Billy Maximoff (Wiccan) revealed to be reincarnated", "Witches' Road magical journey", "Sets up future Young Avengers"]
    },

    {
        id: 45, title: "Deadpool & Wolverine", year: 2024, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        summary: "Deadpool recruits a variant Wolverine from the multiverse to save his dying timeline. They battle Cassandra Nova in the Void.",
        takeaways: ["Wade Wilson brings X-Men/mutants officially to MCU", "The Void from Loki filled with pruned variants", "Cassandra Nova (Charles Xavier's evil twin) as villain", "Many Fox universe cameos", "TVA and timeline mechanics continue"]
    },

    {
        id: 46, title: "Captain America: Brave New World", year: 2025, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
        summary: "Sam Wilson as Captain America faces a conspiracy involving President Ross, government experiments, and the emergence of Red Hulk.",
        takeaways: ["Sam Wilson's first Captain America film", "President Thaddeus Ross becomes Red Hulk", "Global political conspiracy", "The Leader returns from Incredible Hulk"]
    },

    {
        id: 47, title: "Thunderbolts*", year: 2025, type: "film", essential: true,
        poster: "https://image.tmdb.org/t/p/w500/jvKSqojjuxAkSkwmcVF4TN2qUJm.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/4iQkzSWKbBwN0ib1tABIizPo0Ng.jpg",
        summary: "Valentina Allegra de Fontaine assembles a team of anti-heroes including Yelena, Bucky, Ghost, US Agent, and Taskmaster.",
        takeaways: ["Anti-hero team assembled by Valentina", "'Present day' MCU (2027 in-universe)", "Various reformed villains and operatives", "Sets stage for next Avengers movie"]
    }
];

// Get watched state from localStorage (shared with main app)
function getWatchedIds() {
    const saved = localStorage.getItem('mcuTrackerWatched');
    return saved ? JSON.parse(saved) : [1, 2]; // Default: Iron Man & Cap 1 watched
}

// Essential film IDs from user's list
const essentialIds = [1, 5, 6, 9, 10, 11, 13, 17, 19, 22, 23, 24, 26, 31, 33, 38, 42, 45, 46, 47];

// Animated Background
class ParticleBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        const numParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        for (let i = 0; i < numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.8 ? '#e62429' : '#ffffff'
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }
            }

            // Move
            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Draw
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fill();
        });

        // Draw connecting lines
        this.ctx.globalAlpha = 0.1;
        this.ctx.strokeStyle = '#e62429';
        this.ctx.lineWidth = 0.5;
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    this.ctx.globalAlpha = 0.1 * (1 - dist / 100);
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
}

function renderTimeline() {
    const container = document.getElementById('timelineItems');
    const watchedIds = getWatchedIds();

    container.innerHTML = timelineData.map((item, index) => {
        const isWatched = watchedIds.includes(item.id);
        const isEssential = essentialIds.includes(item.id);

        return `
      <div class="timeline-item ${isEssential ? 'essential' : ''} ${isWatched ? 'watched' : ''}" 
           style="animation-delay: ${0.05 * (index % 20)}s"
           onclick="openTimelineModal(${item.id})">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-poster">
            <img src="${item.backdrop || item.poster}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${item.poster}'">
            <div class="timeline-poster-overlay"></div>
            ${isEssential && !isWatched ? '<span class="timeline-badge essential-badge">Your List</span>' : ''}
            ${isWatched ? '<span class="timeline-badge watched-badge">✓</span>' : ''}
            ${item.type === 'series' ? '<span class="timeline-badge series-badge">Series</span>' : ''}
          </div>
          <div class="timeline-info">
            <div class="timeline-year">${item.year} · ${item.type === 'series' ? 'Disney+' : 'Film'}</div>
            <div class="timeline-name">${item.title}</div>
            <div class="timeline-summary">${item.summary.substring(0, 100)}...</div>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

function openTimelineModal(id) {
    const item = timelineData.find(t => t.id === id);
    if (!item) return;

    const isEssential = essentialIds.includes(id);
    const isWatched = getWatchedIds().includes(id);

    document.getElementById('timelineModalContent').innerHTML = `
    <img src="${item.poster}" alt="${item.title}" class="modal-header-img" onerror="this.style.display='none'">
    <h2 class="modal-film-title">${item.title}</h2>
    <div class="modal-film-meta">
      <span>📅 ${item.year}</span>
      <span>${item.type === 'series' ? '📺 Series' : '🎬 Film'}</span>
      ${isWatched ? '<span style="color: #22c55e;">✓ Watched</span>' : ''}
    </div>
    <p class="modal-film-summary">${item.summary}</p>
    <div class="modal-takeaways">
      <h4>🔑 Key Takeaways</h4>
      <ul>
        ${item.takeaways.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
    ${isEssential ? '<div class="modal-essential-note">⭐ This is on your essential watch list!</div>' : ''}
  `;

    document.getElementById('timelineModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTimelineModal() {
    document.getElementById('timelineModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();

    // Init animated background
    const canvas = document.getElementById('bgCanvas');
    if (canvas) {
        new ParticleBackground(canvas);
    }

    // Header scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 50);
    });
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTimelineModal(); });
