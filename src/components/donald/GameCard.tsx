import { statusColors, statusExplenations } from "@/config/constants/constants";
import { GameProduct } from "@/types/types";
import { GoDotFill } from "react-icons/go";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function StabCard() {
    return (
        <div className="opacity-50 outline-dashed relative md:w-76 md:h-36 w-120 h-52 rounded-xl outline-1 flex flex-col"></div>
    );
}

export function GameCard({
    product,
    ...rest
}: { product: GameProduct } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) {
    const { level, name } = product;

    return (
        <div
            {...rest}
            className="cursor-pointer relative hover:bg-accent md:w-76 md:h-36 w-120 h-52 rounded-xl outline-1 flex flex-col"
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className="z-10 transition-opacity opacity-50 hover:opacity-100 cursor-grab top-2 left-2 absolute">
                        <GoDotFill
                            color={statusColors[level] ?? "orange"}
                            size={15}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{statusExplenations[level]}</p>
                </TooltipContent>
            </Tooltip>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className=" text-2xl text-center font-(font-family: Geist) font-bold">
                    {name}
                </h1>
            </div>
        </div>
    );
}
