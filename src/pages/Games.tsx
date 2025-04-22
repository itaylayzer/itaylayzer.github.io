import useMarkdown from "@/api/useMarkdown";
import { DonaldConfused } from "@/components/games/DonaldConfused";
import { GameCard } from "@/components/games/GameCard";
import { AsyncFetch } from "@/components/generic/AsyncFetch";
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
import { games } from "@/config/constants/sample";
import { useNullishState } from "@/hooks/useNullishState";
import { HiDotsHorizontal } from "react-icons/hi";
import ReactMK from "react-markdown";
import remarkGfm from "remark-gfm";

export default () => {
    const [markDown, nullishMarkDown, setMarkDown] = useNullishState(
        games[0].markDown
    );
    const [gallery, nullishGallery, setGallery] = useNullishState(
        games[0].gallery
    );

    const closeDialog = () => {
        setMarkDown(null);
        setGallery(null);
    };

    return (
        <>
            <div className="flex items-stretch gap-10">
                <div className="w-100">
                    <DonaldConfused />
                </div>
                <div className="flex flex-col gap-10 items-center justify-center scale-95">
                    {games.map((game) => (
                        <GameCard
                            onGalleryClick={() => {
                                setGallery(game.gallery);
                                setMarkDown(null);
                            }}
                            onReadmeClick={() => {
                                setGallery(null);
                                setMarkDown(game.markDown);
                            }}
                            game={game}
                        />
                    ))}
                </div>
            </div>
            <Dialog
                open={nullishGallery}
                onOpenChange={closeDialog}
                modal={true}
                defaultOpen={false}
            >
                <DialogContent className=" min-w-max max-w-max w-[70vw] max-h-[90vh] px-20 overflow-hidden">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                    </DialogHeader>

                    <Carousel className="w-[70vw] my-auto">
                        <CarouselContent>
                            {(gallery ?? [null])[0]?.map((link) => (
                                <CarouselItem className="flex justify-center align-center ">
                                    <video
                                        src={link as string}
                                        className="rounded-2xl "
                                        controls
                                    />
                                </CarouselItem>
                            ))}
                            {(gallery ?? [[], null])[1]?.map((link) => (
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

            <Dialog
                open={nullishMarkDown}
                onOpenChange={closeDialog}
                modal={true}
                defaultOpen={false}
            >
                <DialogContent className="md:min-w-[90vw] min-w-max w-max max-h-[90vh] max-w-[90vw] overflow-hidden">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <AsyncFetch
                        promise={useMarkdown(markDown)}
                        success={(data) => (
                            <div className="react-mk max-h-[70vh] overflow-y-auto">
                                <ReactMK remarkPlugins={[remarkGfm]}>
                                    {data}
                                </ReactMK>
                            </div>
                        )}
                        failure={(r) => <p>error {r.message}</p>}
                        meanwhile={<HiDotsHorizontal color="white" size={10} />}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
