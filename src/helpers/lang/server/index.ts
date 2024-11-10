import { getLangOption, getLangText } from '@/helpers/lang';
import { headers } from 'next/headers';

export const getLangFromHeaders = () => {
    const headersList = headers();
    const acceptLanguageHeader = headersList.get('accept-language');

    return acceptLanguageHeader?.split(',')[0] ?? '';
};

export const getServerLangData = async () => {
    const lang = getLangFromHeaders();
    const defaultLangText = await getLangText(lang);
    const defaultLangOption = getLangOption(lang);

    return { defaultLangOption, defaultLangText };
};
