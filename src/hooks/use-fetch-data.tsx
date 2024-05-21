// Изменённый хук useFetchData
import { useState, useEffect, useRef } from 'react';
import { AxiosResponse } from 'axios';
import { ApiService } from 'services';

export const useFetchData = <T,>(url: string, baseURL?: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        const apiService = new ApiService(baseURL);
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await apiService.get<T>(url);
                setData(response.data);
                sessionStorage.setItem(url, JSON.stringify(response.data));
            } catch (err: any) {
                setError(err.message);
            } finally {
                if (isMounted.current) setLoading(false);
            }
        };

        const cachedData = sessionStorage.getItem(url);
        if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
        } else {
            fetchData();
        }

        return () => {
            isMounted.current = false;
        };
    }, [url, baseURL]);

    return { data, loading, error };
};
