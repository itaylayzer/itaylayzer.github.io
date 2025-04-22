import { useEffect, useState } from "react";

export const useEventMemo = <T>(
    defaultValue: T,
    handler: () => T,
    element: Window | HTMLElement,
    eventName: string
) => {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        const handlerHandler = () => {
            setValue(handler());
        };

        element.addEventListener(eventName, handlerHandler);

        return () => element.removeEventListener(eventName, handlerHandler);
    }, [element]);

    return value;
};
