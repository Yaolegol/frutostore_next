export interface ICatalogProduct {
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}

export interface ICatalogData {
    current_page: number;
    data: ICatalogProduct[];
    last_page: number;
    per_page: number;
    total: number;
}
