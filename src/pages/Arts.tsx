import { arts } from "@/config/constants/sample";

import { ArtFrame } from "@/components/art/ArtFrame";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default () => {
    return (
        <div className="flex justify-center align-center">
            <Carousel className="z-10 w-full not-xl:max-w-3xl max-w-5xl h-full px-6">
                <CarouselContent className="gap-20">
                    {arts.map((art) => (
                        <CarouselItem className="flex justify-center items-center flex-col ">
                            <ArtFrame art={art} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
