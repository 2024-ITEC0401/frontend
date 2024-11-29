import { fetchInstance } from "@/app/config/axios";

import { useQuery } from "@tanstack/react-query";

interface EmailValidationResponse {
    available: boolean;
}

const checkEmailValidationPath = (email: string) => `/api/v1/user/email/${email}`;

const checkEmailValidation = async (email: string): Promise<EmailValidationResponse> => {
    const response = await fetchInstance.get<EmailValidationResponse>(checkEmailValidationPath(email));
    return response.data;
};

export const useCheckEmailValidation = (email: string, enabled = true) => {
    return useQuery<EmailValidationResponse, Error>({
        queryKey: ["checkEmailValidation", email],
        queryFn: () => checkEmailValidation(email),
        enabled: !!email && enabled,
    });
};
