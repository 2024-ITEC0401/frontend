import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface SignUpRequest {
    name: string;
    email: string;
    nickName: string;
    password: string;
}

interface SignUpResponse {
    message: string;
}

const signUpPath = "/api/v1/user/new";

const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
    const response = await fetchInstance.post<SignUpResponse>(signUpPath, data);
    return response.data;
};

export const useSignUp = () => {
    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            console.log(`회원가입 성공: ${data.message}`);
            alert(`회원가입에 성공하였습니다.`);
        },
        onError: (error) => {
            console.error("회원가입에 실패하였습니다.", error);
            alert(`회원가입에 실패하였습니다.`);
        },
    });
};
