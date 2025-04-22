interface Product {
    hash: string;
    name: string;
}

interface Level {
    level: number;
}

interface Github {
    github: string;
}

interface Markdown {
    markDown: string;
}

interface Gallery {
    gallery?: [string[] | undefined, string[] | undefined];
}

export interface GameProduct extends Product, Level, Github, Gallery, Markdown {
    title: string;
    tags: number;
    description: string;
}

export interface IOGameProduct extends GameProduct {
    picture: string;
    gameURI: string;
}

export interface Art extends Product, Github {
    artURI: string;
}
