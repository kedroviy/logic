import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseURL as url } from 'core';

class ApiService {
    private instance: AxiosInstance;

    constructor(baseURL?: string) {
        this.instance = axios.create({
            baseURL: baseURL || url,
        });
    }

    public setBaseUrl(baseURL: string) {
        this.instance.defaults.baseURL = baseURL;
    }

    public setHeader(name: string, value: string) {
        this.instance.defaults.headers.common[name] = value;
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(url, config);
    }
}

export { ApiService };