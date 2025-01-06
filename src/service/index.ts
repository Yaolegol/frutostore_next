const API_HOST = 'https://frutostore.oleg-oleinik.com/api';

export class ApiService {
    private constructor() {}

    private static instance: ApiService;

    static getInstance = () => {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    };

    private processResponse = async <TResponseData>(response: Response) => {
        const data: TResponseData = await response.json();

        return {
            data,
            response,
        };
    };

    get = async <TResponseData>(url: string) => {
        const response = await fetch(`${API_HOST}${url}`);

        return this.processResponse<TResponseData>(response);
    };
}
