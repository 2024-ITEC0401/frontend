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

const viewProfilePath = "/api/v1/user/profile";

const viewProfile = async () => {
    const response = await fetchInstance.get<ViewProfileResponseBody>(viewProfilePath);
    return response.data;
};

export const useViewProfile = () => {
    const query = useQuery({
        queryKey: ["profile"],
        queryFn: () => viewProfile(),
    });

    return { ...query };
};
