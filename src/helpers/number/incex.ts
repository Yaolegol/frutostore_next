const regexp = /^\d*$/iu;

export const isStringOnlyNumbers = (value: string) => {
    return regexp.test(value);
};
