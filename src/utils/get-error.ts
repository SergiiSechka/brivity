import axios, { AxiosError } from 'axios';

export const getError = (err: unknown | AxiosError): string => {
    if (axios.isAxiosError(err)) {
        return err.response?.data.error;
    }

    return JSON.stringify(err);
};
