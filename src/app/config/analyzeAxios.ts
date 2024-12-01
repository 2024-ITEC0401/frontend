import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

import { BASE_PYTHON_URL } from "@/app/constants/URI";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

import { QueryClient } from "@tanstack/react-query";

const baseURL = BASE_PYTHON_URL;

export const createInstance = (config: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create({
        timeout: 10000,
        ...config,
        baseURL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...config.headers,
        },
    });

    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const { accessToken } = useAuthStore.getState();
            if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error: unknown) => Promise.reject(error),
    );

    return instance;
};

export const fetchAnalyzeInstance = createInstance({});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
});
