import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { createRoot } from "react-dom/client";
import { FaGithub } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import useURLBlank from "./api/useURLBlank.ts";
import { Button } from "./components/ui/button.tsx";
import { Tabs } from "./components/ui/tabs.tsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./components/ui/tooltip.tsx";
import "./index.css";
import Arts from "./pages/Arts.tsx";
import Games from "./pages/Games.tsx";
import IOGames from "./pages/IOGames.tsx";
import Playground from "./pages/Playground.tsx";
const tabs = ["Arts", "Playground", "IO Games", "Games"];
const tabsElements = [<Arts />, <Playground />, <IOGames />, <Games />];
const tabsTooltip = ["3D Art", "3D Demos", "IO Games", "Local Games"];

const extendend = [
    {
        tooltip: "CV",
        element: <FaRegFileLines />,
        url: "Resume.pdf",
    },
    {
        tooltip: "Contact Me",
        element: <SiGmail />,
        url: "mailto:itaylayzer@gmail.com",
    },
    {
        tooltip: "View my Github",
        element: <FaGithub />,
        url: "https://github.com/itaylayzer/",
    },
];

const App = () => (
    <TooltipProvider>
        <Tabs
            defaultValue={tabs[2]}
            className="w-[100vw] h-[100vh] overflow-hidden"
        >
            <div className="flex gap-0 justify-center items-center pt-10">
                <TabsList className="flex gap-3 justify-center items-center">
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
                <div className="w-4"></div>
                {extendend.map(({ tooltip, element, url }) => (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={() => {
                                    useURLBlank(url);
                                }}
                                variant="link"
                                className="py-2 z-10 opacity-60 hover:opacity-80 active:opacity-100 active:scale-110 transition-transform rounded w-7 cursor-pointer"
                            >
                                {element}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{[tooltip]}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>

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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useURLGoto from "./api/useURLGoto.ts";
import { IoIosArrowBack } from "react-icons/io";
export function P404() {
    return (
        <div className="flex flex-col gap-2 absolute top-0 left-0 w-full h-full justify-center items-center">
            <h1 className="text-6xl font-[Rubik] ">Page not found</h1>{" "}
            <Button
                variant="link"
                className="cursor-pointer text-lg"
                onClick={() => {
                    useURLGoto();
                }}
            >
                <IoIosArrowBack />
                Go back to Home
            </Button>
        </div>
    );
}

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<P404 />} />
        </Routes>
    </BrowserRouter>
);
