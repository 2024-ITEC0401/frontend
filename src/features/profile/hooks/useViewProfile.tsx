import { fetchInstance } from "@/app/config/axios";

import { useQuery } from "@tanstack/react-query";

interface ViewProfileResponseBody {
    email: string;
    nickName: string;
    gender: number;
    age: number;
    height: number;
    weight: number;
    tone: string;
    colorList: string[];
    styleList: string[];
}

const viewProfile = async () => {
    const response = await fetchInstance.get<ViewProfileResponseBody>("/api/v1/user/profile");
    return response.data;
};

export const useViewProfile = () => {
    const query = useQuery({
        queryKey: ["profile"],
        queryFn: () => viewProfile(),
    });

    return { ...query };
};
