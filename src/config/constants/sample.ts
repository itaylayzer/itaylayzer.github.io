import { Art, GameProduct, IOGameProduct } from "@/types/types";

export const ioGames: IOGameProduct[] = [
    {
        name: "Kart.io",
        level: 0,
        picture: "https://itaylayzer.github.io/kart.io/images/favicon.png",
        gameURI: "https://itaylayzer.github.io/kart.io/",
        tags: 0b01111011,
        github: "https://github.com/itaylayzer/kart.io",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/kart.public/master/README.md",
        gallery: [
            ["https://github.com/itaylayzer/kart.public/raw/master/video.mp4"],
            [
                "https://raw.githubusercontent.com/itaylayzer/kart.public/master/kart1.png",
                "https://raw.githubusercontent.com/itaylayzer/kart.public/master/kart2.png",
                "https://raw.githubusercontent.com/itaylayzer/kart.public/master/kart3.png",
                "https://raw.githubusercontent.com/itaylayzer/kart.public/master/kart4.png",
            ],
        ],
        description: "Race with your friends for 3 rounds to provide Victory!",
        title: "Kart IO Game - Three.js & SocketIO & React.js",
        hash: "https://api.github.com/repos/itaylayzer/kart.io/commits/main",
    },
    {
        picture: "https://itaylayzer.github.io/Poker/cards.png",
        name: "Poker",
        gameURI: "https://itaylayzer.github.io/Poker/",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/Poker/main/README.md",
        github: "https://github.com/itaylayzer/Poker",
        level: 0,
        tags: 0b0101011,
        description: "Gamble with your friends!",
        title: "Poker IO Game - Three.js & Peer.js & React.js",
        hash: "https://api.github.com/repos/itaylayzer/Poker/commits/main",
    },
    {
        picture: "https://itaylayzer.github.io/Monopoly/icon.png",
        name: "Monopoly",
        gameURI: "https://itaylayzer.github.io/Monopoly/",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/README.md",
        github: "https://github.com/itaylayzer/Monopoly",
        level: 0,
        gallery: [
            undefined,
            [
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/1.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/2.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/3.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/4.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/5.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/6.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/7.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/8.PNG",
                "https://raw.githubusercontent.com/itaylayzer/Monopoly/main/public/gallery/9.PNG",
            ],
        ],
        tags: 0b10101011,
        description:
            "Know the buisness, know the market, exploit your friends!",
        title: "React Typescript Repo of Monopoly",
        hash: "https://api.github.com/repos/itaylayzer/Monopoly/commits/main",
    },
    {
        picture: "https://itaylayzer.github.io/Trivia.IO/white.png",
        name: "Trivia",
        gameURI: "https://itaylayzer.github.io/Trivia.IO/",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/Trivia.IO/main/README.md",
        github: "https://github.com/itaylayzer/Trivia.IO",
        level: 0,
        tags: 0b0101011,
        description: "Fun Trivia game to play with family and friends!",
        title: "Trivia Mini IO Game",
        hash: "https://api.github.com/repos/itaylayzer/Trivia.IO/commits/main",
    },
];

export const arts: Art[] = [
    {
        name: "Backgammon",
        artURI: "https://itaylayzer.github.io/backgammon/",
        github: "https://github.com/itaylayzer/backgammon",
        hash: "https://api.github.com/repos/itaylayzer/backgammon/commits/master",
    },
    {
        name: "Chess",
        artURI: "https://itaylayzer.github.io/chess/",
        github: "https://github.com/itaylayzer/chess",
        hash: "https://api.github.com/repos/itaylayzer/chess/commits/master",
    },
    {
        name: "Catan",
        artURI: "https://itaylayzer.github.io/catan/",
        github: "https://github.com/itaylayzer/catan",
        hash: "https://api.github.com/repos/itaylayzer/catan/commits/master",
    },
    {
        name: "Rummikub",
        artURI: "https://itaylayzer.github.io/rummikub/",
        github: "https://github.com/itaylayzer/rummikub",
        hash: "https://api.github.com/repos/itaylayzer/rummikub/commits/master",
    },
];

export const games: GameProduct[] = [
    {
        name: "Uno-C",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/Uno-C/main/Readme.md",
        github: "https://github.com/itaylayzer/Uno-C",
        level: 0,
        gallery: [["https://itaylayzer.github.io/Uno-C/short.mp4"], undefined],
        tags: 0b0010100,
        description: "todo",
        hash: "https://api.github.com/repos/itaylayzer/Uno-C/commits/main",
        title: "Uno PvE written in C using Raylib",
    },
    {
        name: "CatanFX",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/CatanFX/main/readme.md",
        github: "https://github.com/itaylayzer/CatanFX",
        level: 1,
        gallery: [
            undefined,
            [
                "https://raw.githubusercontent.com/itaylayzer/CatanFX/main/images/Capture.PNG",
            ],
        ],
        tags: 0b0010100,
        description: "todo",
        hash: "https://api.github.com/repos/itaylayzer/CatanFX/commits/main",
        title: "JavaFx Catan Collage Project",
    },
    {
        name: "FPS-Online.Unity",
        markDown:
            "https://raw.githubusercontent.com/itaylayzer/FPS-Online.Unity/main/README.md",
        github: "https://github.com/itaylayzer/FPS-Online.Unity",
        level: 1,
        tags: 0b0010011,
        description: "todo",
        hash: "https://api.github.com/repos/itaylayzer/FPS-Online.Unity/commits/main",
        title: "First Person Shooter with Online features such as Multiplayer and Servers. powerd by Unity - Game Engine",
    },
];
