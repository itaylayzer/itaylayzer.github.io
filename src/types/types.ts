export type GameProduct = {
    title: string;
    name: string;
    picture: string;
    gameURI: string;
    markDown: string;
    github: string;
    level: number;
    gallery?: [string[] | undefined, string[] | undefined];
    tags: number;
    description: string;
    hash: string;
};
