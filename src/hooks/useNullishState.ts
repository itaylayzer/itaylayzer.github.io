import { useEffect, useState } from "react";

export const useNullishState = <T>(defaultValue: T) => {
    const [state, setState] = useState<T | null>(null);

    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        if (state !== null) setValue(state);
    }, [state]);

    return [state === null ? value : state, state !== null, setState] as [
        T,
        boolean,
        (value: React.SetStateAction<T | null>) => void
    ];
};
