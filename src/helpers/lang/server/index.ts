import { getLangOption, getLangText } from '@/helpers/lang';
import { LANG_COOKIE_NAME } from '@/modules/Lang/constants';
import { cookies, headers } from 'next/headers';

export const getLangFromHeaders = () => {
    const cookieStore = cookies();
    const langCookie = cookieStore.get(LANG_COOKIE_NAME);
    const lang = langCookie?.value;

    if (lang) {
        return lang;
    }

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
