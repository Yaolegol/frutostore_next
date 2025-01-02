export interface ITranslation {
    description: string;
    title: string;
}

export interface ICatalogProduct {
    id: number;
    image: string;
    price: number;
    translations: ITranslation[];
}

export interface ICatalogData {
    current_page: number;
    data: ICatalogProduct[];
    last_page: number;
    per_page: number;
    total: number;
}

export interface IQueryParams {
    [key: string]: string | undefined;
}
