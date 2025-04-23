import useMarkdown from "@/api/useMarkdown";
import useURLBlank from "@/api/useURLBlank";
import { DonaldConfused } from "@/components/games/DonaldConfused";
import { GameCard } from "@/components/games/GameCard";
import { AsyncFetch } from "@/components/generic/AsyncFetch";
import { GithubButton } from "@/components/generic/GithubButton";
import { PistolSpinning } from "@/components/playground/PistolSpinning";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
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
import { playgrounds } from "@/config/constants/sample";
import { FaIdCardAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PiTestTubeFill } from "react-icons/pi";
export default () => {
    const list = playgrounds.map((game) => (
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
            <div className="flex items-center flex-1 flex-col">
                <h1 className="flex-1 text-3xl scale-90 font-medium font-[Rubik] text-center mt-5">
                    {game.name}
                </h1>
                <Button
                    className="mb-5 flex-1 cursor-pointer"
                    variant="link"
                    onClick={() => {
                        useURLBlank(game.gameURI);
                    }}
                >
                    <PiTestTubeFill />
                    Test
                </Button>
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

            <div className="flex gap-2 items-stretch justify-center">
                <GithubButton github={game.github} sha={game.hash} />

                <Button variant="link" className="cursor-pointer">
                    <FaIdCardAlt /> README.md
                </Button>
            </div>
        </div>
    ));

    list.splice(
        1,
        0,
        <div className="w-100 opacity-100">
            <PistolSpinning />
        </div>
    );

    return (
        <div className="grid grid-cols-2 gird-rows-2 gap-10 items-stretch justify-center scale-95">
            {list}
        </div>
    );
};
