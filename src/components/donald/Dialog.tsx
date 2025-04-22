import useMarkdown from "@/api/useMarkdown";
import useURLBlank from "@/api/useURLBlank";
import { AsyncFetch } from "@/components/generic/AsyncFetch";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { TAGS } from "@/config/constants/constants";
import { IOGameProduct } from "@/types/types";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { AiFillPicture } from "react-icons/ai";
import { FaIdCardAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbClick } from "react-icons/tb";
import ReactMK from "react-markdown";
import remarkGfm from "remark-gfm";
import { GithubButton } from "../generic/GithubButton";

export function GameDialog({
    activeProuduct,
    closeDialog,
    product,
}: {
    activeProuduct: React.Dispatch<React.SetStateAction<IOGameProduct>>;
    product: IOGameProduct;
    closeDialog: () => void;
}) {
    return (
        <Dialog
            open={activeProuduct !== null}
            modal={true}
            onOpenChange={closeDialog}
            defaultOpen={false}
        >
            <DialogContent className="min-w-max w-max max-w-max">
                <div className="flex gap-2">
                    <DialogHeader className="min-w-50">
                        <div className="max-w-50">
                            <img
                                className="max-w-50 scale-65"
                                src={product.picture}
                                alt=""
                            />
                            <DialogTitle className="text-4xl mt-2 text-center font-[Rubik]">
                                {product.name}
                            </DialogTitle>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <Button
                                variant="default"
                                disabled={Boolean(!product.gameURI)}
                                className="flex-1 text-left flex justify-start cursor-pointer"
                                onClick={() => {
                                    useURLBlank(product.gameURI!);
                                }}
                            >
                                <TbClick size={40} />
                                Play
                            </Button>
                        </div>
                    </DialogHeader>
                    <div className="flex gap-2 flex-col">
                        <p className="mt-8 font-light opacity-70 text-xs font-mono">
                            {product.title}
                        </p>
                        <p className="flex-1">{product.description}</p>

                        <div className="flex gap-2 flex-wrap justify-center items-center">
                            {TAGS.filter(
                                (_, i) => ((product.tags! >> i) & 1) === 1
                            ).map((t) => (
                                <p className="rounded px-3 py-1 text-xs font-mono opacity-50 outline-1 text-nowrap">
                                    {t}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <GithubButton
                                sha={product.hash}
                                github={product.github}
                            />
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        disabled={Boolean(!product.gallery)}
                                        variant="link"
                                        className="cursor-pointer"
                                    >
                                        <AiFillPicture /> View Gallery
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="min-w-max max-w-max w-[70vw] max-h-[90vh] px-20 overflow-hidden">
                                    <Carousel className="w-[70vw] my-auto">
                                        <CarouselContent>
                                            {(product.gallery ?? [
                                                null,
                                            ])[0]?.map((link) => (
                                                <CarouselItem className="flex justify-center align-center ">
                                                    <video
                                                        src={link as string}
                                                        className="rounded-2xl "
                                                        controls
                                                    />
                                                </CarouselItem>
                                            ))}
                                            {(product.gallery ?? [
                                                [],
                                                null,
                                            ])[1]?.map((link) => (
                                                <CarouselItem className="flex justify-center align-center ">
                                                    <img
                                                        src={link as string}
                                                        className="rounded-2xl "
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="link"
                                        className="cursor-pointer"
                                    >
                                        <FaIdCardAlt /> README.md
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="md:min-w-[90vw] min-w-max w-max max-h-[90vh] max-w-[90vw] overflow-hidden">
                                    <AsyncFetch
                                        promise={useMarkdown(product.markDown!)}
                                        success={(data) => (
                                            <div className="react-mk max-h-[70vh] overflow-y-auto">
                                                <ReactMK
                                                    remarkPlugins={[remarkGfm]}
                                                >
                                                    {data}
                                                </ReactMK>
                                            </div>
                                        )}
                                        failure={(r) => (
                                            <p>error {r.message}</p>
                                        )}
                                        meanwhile={
                                            <HiDotsHorizontal
                                                color="white"
                                                size={10}
                                            />
                                        }
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
