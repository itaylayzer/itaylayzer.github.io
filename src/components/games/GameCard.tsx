import { GithubButton } from "@/components/generic/GithubButton";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    statusColors,
    statusExplenations,
    TAGS,
} from "@/config/constants/constants";
import { GameProduct } from "@/types/types";
import { AiFillPicture } from "react-icons/ai";
import { FaIdCardAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
export const GameCard = ({
    game,
    onGalleryClick,
    onReadmeClick,
}: {
    game: GameProduct;
    onGalleryClick: () => void;
    onReadmeClick: () => void;
}) => {
    return (
        <div className="relative outline-1 px-5 py-3 rounded-xl flex flex-col gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className="z-10 transition-opacity opacity-50 hover:opacity-100 cursor-grab top-2 left-2 absolute">
                        <GoDotFill
                            color={statusColors[game.level] ?? "orange"}
                            size={15}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{statusExplenations[game.level]}</p>
                </TooltipContent>
            </Tooltip>
            <div className="flex items-center flex-1">
                <h1 className="flex-1 text-4xl font-medium font-[Rubik] text-center my-5">
                    {game.name}
                </h1>
            </div>
            <div className="flex  justify-center items-center gap-2">
                {TAGS.filter((_, i) => ((game.tags! >> i) & 1) === 1).map(
                    (t) => (
                        <p className="rounded px-3 py-1 text-xs font-mono opacity-50 outline-1 text-nowrap">
                            {t}
                        </p>
                    )
                )}
            </div>
            <div className="flex">
                <GithubButton github={game.github} sha={game.hash} />
                <Button
                    disabled={Boolean(!game.gallery)}
                    variant="link"
                    className="cursor-pointer"
                    onClick={onGalleryClick}
                >
                    <AiFillPicture /> View Gallery
                </Button>
                <Button
                    variant="link"
                    onClick={onReadmeClick}
                    className="cursor-pointer"
                >
                    <FaIdCardAlt /> README.md
                </Button>
            </div>
        </div>
    );
};
