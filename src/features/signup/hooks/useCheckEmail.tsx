import { fetchInstance } from "@/app/config/axios";

import { useQuery } from "@tanstack/react-query";

interface EmailValidationResponse {
    available: boolean;
}

const emailValidationPath = (email: string) => `/api/v1/user/email/${email}`;

const checkValidation = async (email: string): Promise<EmailValidationResponse> => {
    const response = await fetchInstance.get<EmailValidationResponse>(emailValidationPath(email));
    return response.data;
};

export const useCheckEmail = (email: string, enabled = true) => {
    return useQuery<EmailValidationResponse, Error>({
        queryKey: ["checkValidation", email],
        queryFn: () => checkValidation(email),
        enabled: !!email && enabled,
    });
};
