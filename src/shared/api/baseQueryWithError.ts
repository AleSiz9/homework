import { fetchBaseQuery, type BaseQueryFn, type FetchArgs } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' });

interface CustomError {
    status: number | string;
    data?: unknown;
    message: string;
}

export const customBaseQuery: BaseQueryFn<
    string | FetchArgs, unknown, CustomError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
        let message = 'Ошибка запроса';
        const status = result.error.status;


        if (status === 'FETCH_ERROR') {
            message = 'Нет соединения с сервером';
        } else if (status === 404) {
            message = 'Данные не найдены (404)';
        } else if (status === 500) {
            message = 'Внутренняя ошибка сервера (500)';
        } else if (typeof status === 'number' && status >= 400 && status < 500) {
            message = 'Ошибка клиента';
        } else if (typeof status === 'number' && status >= 500) {
            message = 'Ошибка сервера';
        }

        if (result.error.data && typeof result.error.data === 'object' && 'message' in result.error.data) {
            message = String(result.error.data.message);
        }

        return {
            error: {
                ...result.error,
                message,
            },
        };
    }

    return result;
};