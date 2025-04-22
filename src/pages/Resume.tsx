import useURLBlank from "@/api/useURLBlank";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { HiExternalLink } from "react-icons/hi";

export default () => {
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll = scrollAreaRef.current;
        if (scroll === null) return;
        console.log("onResize", "onResize");
        const onResize = () => {
            const height = window.innerHeight - scroll.clientTop;

            console.log(height, window.innerHeight, scroll.clientTop);

            scroll.style.maxHeight = `${height}px`;
        };
        onResize();

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [scrollAreaRef]);

    return (
        <div className="flex-1 overflow-y-hidden max-h-full max-w-full flex flex-col pt-5 gap-2 justify-start items-center">
            <Button
                variant="link"
                className="cursor-pointer"
                onClick={() => useURLBlank("Resume.pdf")}
            >
                <HiExternalLink size={20} />
                view resume in external tab
            </Button>
            <ScrollArea ref={scrollAreaRef} className="flex-1">
                <img
                    src="Resume.png"
                    className="max-h-[1200px] bottom-0 rounded-xl"
                    alt=""
                />
            </ScrollArea>
        </div>
    );
};
