type TStyle = string | undefined;

export const styles = (...args: TStyle[]): string => {
    return args.join(' ');
};
