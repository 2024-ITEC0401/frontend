import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const mutation = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            alert(`회원가입에 성공하였습니다.`);
        },
        onError: () => {
            alert(`회원가입에 실패하였습니다.`);
        },
    });

    const handleSignUp = () => {
        if (!name || !email || !nickname || !password) {
            alert("모든 필드를 올바르게 입력해주세요.");
            return;
        }
        mutation.mutate({ name, email, nickName: nickname, password });
        navigate("/auth/signin");
    };

    return {
        name,
        setName,
        email,
        setEmail,
        nickname,
        setNickname,
        password,
        setPassword,
        handleSignUp,
    };
};
