import useURLBlank from "@/api/useURLBlank";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { FaGithub } from "react-icons/fa";
import { AsyncFetch } from "./AsyncFetch";
import { fetchSHA } from "@/api/fetchSHA";

export function GithubButton({
    sha,
    github,
}: {
    sha: string;
    github?: string;
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="link"
                    disabled={Boolean(!github)}
                    onClick={() => {
                        useURLBlank(github!);
                    }}
                    className="z-10 cursor-pointer"
                >
                    <FaGithub color="white" />
                    <AsyncFetch
                        promise={fetchSHA(sha)}
                        success={(sha) => <p>{sha}</p>}
                    ></AsyncFetch>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>open Github repo</p>
            </TooltipContent>
        </Tooltip>
    );
}
