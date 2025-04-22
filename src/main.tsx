import { createRoot } from "react-dom/client";
import "./index.css";
import IOGames from "./pages/IOGames.tsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./components/ui/tooltip.tsx";
import { Tabs } from "./components/ui/tabs.tsx";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "./components/ui/button.tsx";
import Arts from "./pages/Arts.tsx";
import Games from "./pages/Games.tsx";
import Resume from "./pages/Resume.tsx";

const tabs = ["Arts", "Playground", "IO Games", "Games", "Resume"];
const tabsElements = [<Arts />, , <IOGames />, <Games />, <Resume />];
const tabsTooltip = ["3D Art", "3D Demos", "IO Games", "Local Games", "CV"];

createRoot(document.getElementById("root")!).render(
    <TooltipProvider>
        <Tabs
            defaultValue={tabs[4]}
            className="w-[100vw] h-[100vh] overflow-hidden"
        >
            <TabsList className="flex gap-3 justify-center items-center pt-10">
                {tabs.map((header, index) => (
                    <Tooltip>
                        <TooltipTrigger asChild className="z-10">
                            <TabsTrigger value={header} asChild>
                                <Button
                                    variant="link"
                                    className="py-2 rounded  px-5  cursor-pointer aria-selected:bg-input/40 transition-colors bg-background aria-selected:hover:no-underline aria-selected:font-bold"
                                >
                                    {header}
                                </Button>
                            </TabsTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{[tabsTooltip[index]]}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </TabsList>
            {tabs.map((tabs, index) => (
                <TabsContent
                    className="flex-1 flex items-center mb-15 justify-center"
                    value={tabs}
                >
                    {tabsElements[index]}
                </TabsContent>
            ))}
        </Tabs>
    </TooltipProvider>
);
