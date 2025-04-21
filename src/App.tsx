import { FixedGrid } from "./components/donald/FixedGrid";
import { GameCard, StabCard } from "./components/donald/GameCard"
import { SleepingDonald } from "./components/donald/SleepingDonald";
import { productsSample } from "./config/constants/sample"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const productArr = productsSample[2];
const multiplier = 1;

export default () => {
    console.log('hi');

    const arr = Array(Math.ceil(productArr.length * multiplier / 6) * 6).fill(null);

    return <Dialog>

        <div className="flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center">

            <div className="pt-20 px-40 self-center">
                <FixedGrid container={{
                    className: "align-content mx-auto max-w-238 md:gap-x-6 md:gap-y-6 scale-90 gap-x-10 gap-y-10 grid grid-cols-3 grid-rows-2"
                }}>

                    {arr.flatMap((_, index) => {
                        const fixedIndex = Math.floor(index / multiplier);
                        if (fixedIndex < productArr.length) {

                            return (<GameCard product={productArr[fixedIndex]} />);
                        }
                        else return <StabCard />;
                    })}
                </FixedGrid>
            </div>


            <DialogTrigger></DialogTrigger>
            <div className="flex-1"></div>
            <div className="h-60 w-full px-20">
                <SleepingDonald />
            </div>
        </div>
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