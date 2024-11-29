import { fetchInstance } from "@/app/config/axios";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

import { useMutation } from "@tanstack/react-query";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    accessToken: string;
}

const loginPath = "/api/v1/user/login";

const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await fetchInstance.post<LoginResponse>(loginPath, data);
    return response.data;
};

export const useLogin = () => {
    const { setAccessToken } = useAuthStore();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
        },
        onError: (error) => {
            console.error("로그인에 실패하였습니다.", error);
        },
    });
};
