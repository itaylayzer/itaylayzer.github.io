import useURLBlank from "@/api/useURLBlank";
import { statusColors, statusExplenations, TAGS } from "@/config/constants/constants";
import { Product } from "@/types/types";
import { GoDotFill, GoFileDirectoryFill } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import { MdPhotoSizeSelectActual, MdArticle } from "react-icons/md"
import { Condition } from "../generic/Condition";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TbArticleFilled } from "react-icons/tb";



export function StabCard() {

    return <div className="opacity-50 outline-dashed relative md:w-76 md:h-36 w-120 h-52 rounded-xl outline-1 flex flex-col">

    </div>
}

export function GameCard({ product }: { product: Product }) {
    const { level, title } = product;


    return <div className="cursor-pointer relative hover:bg-accent md:w-76 md:h-36 w-120 h-52 rounded-xl outline-1 flex flex-col">
        <Tooltip>
            <TooltipTrigger asChild>
                <button className="z-10 transition-opacity opacity-50 hover:opacity-100 cursor-help top-2 left-2 absolute">
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
            <h1 className=" text-2xl text-center font-(font-family: Geist) font-bold">{title}</h1>
        </div>
    </div >
}

export function GameCard2({ product }: { product: Product }) {
    const { level, title, gallery, gameURI, github, markDown, tags } = product;

    const showButtons = true && Boolean(gameURI || markDown || github)

    return <Dialog>
        <div className="cursor-pointer relative hover:bg-accent md:w-76 md:h-36 w-120 h-52 rounded-xl outline-1 flex flex-col">
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className="z-10 transition-opacity opacity-50 hover:opacity-100 cursor-help top-2 left-2 absolute">
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
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className="z-10 top-2 transition-opacity opacity-50 hover:opacity-100 right-2 absolute cursor-pointer">
                        <TbArticleFilled
                            color='white'
                            size={15}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>More details</p>
                </TooltipContent>
            </Tooltip>
            <div className="flex-1 flex flex-col translate-y-2 items-center justify-center">

                {/* <Condition condition={showButtons}>
                <div className="min-h-8"></div>
                </Condition> */}
                <div className="flex items-center gap-1">

                    <h1 className=" text-2xl text-center font-(font-family: Geist) font-bold">{title}</h1>
                </div>
                <Condition condition={showButtons}>
                    <div className="px-2 flex items-center justify-center min-h-8">

                        {gameURI ? (
                            <>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            className="p-2 cursor-pointer"

                                            onClick={() => {
                                                useURLBlank(
                                                    gameURI
                                                );
                                            }}
                                        >
                                            <IoMdLink
                                                color="white"
                                                size={15}
                                                style={{
                                                    marginBlock:
                                                        "auto",
                                                }}
                                            />{" "}
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Play On Website</p>
                                    </TooltipContent>
                                </Tooltip>
                            </>
                        ) : (
                            <></>
                        )}
                        {gallery ? (
                            <DialogTrigger asChild>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            className="p-2 cursor-pointer"

                                        >
                                            <MdPhotoSizeSelectActual
                                                color="white"
                                                size={15}
                                                style={{
                                                    marginBlock: "auto",
                                                }}
                                            />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Gallery</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DialogTrigger>


                        ) : (
                            <></>
                        )}
                        {markDown ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="p-2 cursor-pointer"

                                    >
                                        <MdArticle
                                            color="white"
                                            size={15}
                                            style={{
                                                marginBlock: "auto",
                                            }}
                                        />{" "}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>README.md</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <></>
                        )}
                        {github ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="p-2 cursor-pointer"
                                        onClick={() => {
                                            useURLBlank(github!);
                                        }}
                                    >
                                        <GoFileDirectoryFill
                                            color="white"
                                            size={15}
                                            style={{
                                                marginBlock: "auto",
                                            }}
                                        />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Browse on Github</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <></>
                        )}
                    </div>
                </Condition>
            </div>

        </div >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}