type TDebounceFunc<T> = (props: T) => any;

export const debounce = <T>(func: TDebounceFunc<T>, wait: number) => {
    let timeoutId: NodeJS.Timeout;

    return (args: T) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(args);
        }, wait);
    };
};
