import { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function FixedGrid({ children, container }: {
    children: ReactNode[], container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}) {
    console.log("fixed-grid", children.length, Math.ceil(children.length / 6))

    return <Carousel>
        <CarouselContent>
            {Array(Math.ceil(children.length / 6)).fill(null).map((_, index) =>
                <CarouselItem>
                    <div {...container}>
                        {children.slice(index * 6, (index + 1) * 6)}
                    </div>
                </CarouselItem>
            )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
}