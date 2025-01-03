export const MIN_PRICE = 10;
export const MAX_PRICE = 1000;

export const URL_FILTERS_KEY = 'filters';
export const URL_FILTERS_SEPARATOR = '--';
export const URL_FILTER_KEY_VALUES_SEPARATOR = '-';
export const URL_FILTER_VALUES_SEPARATOR = '_';

export enum FILTERS_KEYS {
    CATEGORY = 'category',
    PRICE = 'price',
}

export const TYPE_FILTER_OPTIONS = [
    {
        isDefaultChecked: false,
        text: 'common.fruit.title',
        valueCode: 'fruit',
    },
    {
        isDefaultChecked: false,
        text: 'common.berry.title',
        valueCode: 'berry',
    },
];
