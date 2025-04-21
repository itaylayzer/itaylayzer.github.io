import { useEffect, useState } from "react";

export function AsyncFetch<T>({
    promise,
    success,
    failure,
    meanwhile,
}: {
    promise: Promise<T>;
    success: (data: T) => JSX.Element;
    failure?: (reason: Error) => JSX.Element;
    meanwhile?: JSX.Element;
}) {
    const [response, setResponse] = useState<T | undefined | Error>(undefined);
    const [type, setType] = useState<boolean | undefined>(undefined);
    useEffect(() => {
        promise
            .then((data) => {
                setResponse(data);
                setType(true);
            })
            .catch((res) => {
                setResponse(res as Error);
                setType(false);
            });
    }, []);

    switch (true) {
        case type === undefined:
            return meanwhile ?? null;
        case type === false:
            return failure ? failure(response as Error) : null;
        default:
            return success(response as T);
    }
}
