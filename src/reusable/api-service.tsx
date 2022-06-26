import { isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_LOCAL_URL } = process.env;

export namespace ApiService {
    export const get = async (url: string, queryParams?: any) => {
        const params = new URLSearchParams(queryParams);
        try {
            const response = axios.get(REACT_APP_LOCAL_URL + `${url}` ?? '', {
                params,
            });
            return response;
        } catch (err: any) {
            isRejectedWithValue(err);
        }
    };
}
