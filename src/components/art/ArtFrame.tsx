import { Art } from "@/types/types";
import { HiExternalLink } from "react-icons/hi";
import { Button } from "../ui/button";
import useURLBlank from "@/api/useURLBlank";
import { GithubButton } from "../generic/GithubButton";

export function ArtFrame({ art }: { art: Art }) {
    return (
        <>
            <h1 className="text-4xl mb-4 text-center font-[Rubik] font-bold">
                {art.name}
            </h1>
            <iframe
                className="not-xl:w-3xl w-5xl aspect-video rounded-lg scale-95"
                src={art.artURI}
            />
            <div className="flex gap-2 -translate-y-1">
                <GithubButton sha={art.hash} github={art.github} />
                <Button
                    variant="link"
                    className="cursor-pointer"
                    onClick={() => useURLBlank(art.artURI)}
                >
                    <HiExternalLink size={20} />
                    open in external tab
                </Button>
            </div>
        </>
    );
}
