import { LANG_OPTIONS } from '@/modules/Lang/constants';

export const getLangText = async (lang: string) => {
    let langText = {};

    try {
        const data = await import(`@/text/${lang}/index.json`);

        langText = data.default;
    } catch (e) {
        console.error(e);
    }

    return langText;
};

export const getLangOption = (lang: string) => {
    return LANG_OPTIONS.find(({ value }) => value === lang) ?? LANG_OPTIONS[0];
};
