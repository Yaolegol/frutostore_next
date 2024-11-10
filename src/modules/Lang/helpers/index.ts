export const getMessage = (id: string, data: any) => {
    try {
        return data[id] ?? '';
    } catch (e) {
        console.error(e);
    }

    return '';
};
