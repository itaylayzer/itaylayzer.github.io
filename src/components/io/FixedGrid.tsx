import { ReactNode } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export function FixedGrid({
    children,
    container,
    split
}: {
    children: ReactNode[];
    container: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;
    split: number
}) {
    return (
        <Carousel className="w-238">
            <CarouselContent>
                {Array(Math.ceil(children.length / split))
                    .fill(null)
                    .map((_, index) => (
                        <CarouselItem>
                            <div {...container}>
                                {children.slice(index * split, (index + 1) * split)}
                            </div>
                        </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
