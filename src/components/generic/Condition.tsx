import { ReactNode } from "react";

export function Condition({condition, children}:{condition: boolean, children: [ReactNode, ReactNode] | ReactNode}) {

    return Array.isArray(children) ? children[+condition] : condition ? children: null;
}