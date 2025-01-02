export const stringifySearchParams = (searchParams: URLSearchParams) => {
    const stringSP = searchParams.toString();

    return stringSP ? `?${stringSP}` : '';
};
