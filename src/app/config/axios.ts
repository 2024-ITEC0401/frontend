import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

import { BASE_URL } from "@/app/constants/URI";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

const IS_MSW = import.meta.env.VITE_RUN_MSW === "true";

const baseURL = IS_MSW ? "http://localhost:5173" : `${BASE_URL}`;

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

export const fetchInstance = createInstance({});
