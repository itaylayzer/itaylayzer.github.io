import { FixedGrid } from "./components/donald/FixedGrid";
import { GameCard, StabCard } from "./components/donald/GameCard";
import { SleepingDonald } from "./components/donald/SleepingDonald";
import { productsSample } from "./config/constants/sample";

import { GameDialog } from "./components/donald/Dialog";
import { useNullishState } from "./hooks/useNullishState";

const multiplier = 1;

export default () => {
    const [product, activeProuduct, setActiveProduct] = useNullishState(
        productsSample[0]
    );

    const closeDialog = () => {
        setActiveProduct(null);
    };

    const split = window.matchMedia("(max-width: 1536px)").matches ? 6 : 9;
    console.log(split);
    const arr = Array(
        Math.ceil((productsSample.length * multiplier) / split) * split
    ).fill(null);

    return (
        <>
            <div className="flex w-full h-full flex-col justify-center items-center">
                <div className="flex-1 mt-auto pt-20 px-40 self-center">
                    <div className="flex h-full w-full justify-center items-center">
                        <FixedGrid
                            split={split}
                            container={{
                                className:
                                    "align-content mx-auto max-w-238 max-w-238 md:gap-x-6 md:gap-y-6 scale-90 gap-x-10 gap-y-10 grid grid-cols-3 grid-rows-3 md:grid-rows-2",
                            }}
                        >
                            {arr.flatMap((_, index) => {
                                const fixedIndex = Math.floor(
                                    index / multiplier
                                );
                                if (fixedIndex < productsSample.length) {
                                    const product = productsSample[fixedIndex];
                                    return (
                                        <GameCard
                                            onClick={() => {
                                                setActiveProduct(product);
                                            }}
                                            product={product}
                                        />
                                    );
                                } else return <StabCard />;
                            })}
                        </FixedGrid>
                    </div>
                </div>

                <div className="h-60 w-full px-20">
                    <SleepingDonald />
                </div>
            </div>
            <GameDialog
                activeProuduct={activeProuduct}
                closeDialog={closeDialog}
                product={product}
            />
        </>
    );
};
