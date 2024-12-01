import { useCallback, useRef, useState } from "react";

import { fetchInstance } from "@/app/config/axios";
import { queryClient } from "@/app/config/query";

import { useMutation } from "@tanstack/react-query";

interface EditProfileRequestBody {
    nickname: string;
    gender: number;
    age: number;
    height: number;
    weight: number;
    tone: string;
    colorList: string[];
    styleList: string[];
}

interface Profile {
    tone: string;
    age: number;
    colorList: string[];
    styleList: string[];
}

const editProfile = async (data: EditProfileRequestBody): Promise<void> => {
    const response = await fetchInstance.put("/api/v1/user/profile", data);
    return response.data;
};

export const useEditProfile = () => {
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const heightRef = useRef<HTMLInputElement | null>(null);
    const weightRef = useRef<HTMLInputElement | null>(null);

    const [tone, setTone] = useState("");
    const [age, setAge] = useState("");
    const [color, setColor] = useState<string>("");
    const [style, setStyle] = useState<string>("");

    const { mutate } = useMutation({
        mutationFn: () => {
            const payload = {
                nickname: nicknameRef.current?.value as string,
                gender: 0,
                age: Number(age),
                height: Number(heightRef.current?.value),
                weight: Number(weightRef.current?.value),
                tone: tone,
                colorList: [color],
                styleList: [style],
            };
            console.log(payload);
            return editProfile(payload);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
            alert("성공적으로 저장되었습니다!");
        },
        onError: (error) => {
            console.error("Error response:", error.message);
            alert("프로필 수정에 실패하였습니다.");
        },
    });

    const handleSaveClick = useCallback(() => {
        mutate();
    }, [mutate]);

    const initializeFields = (profile: Profile) => {
        setTone(profile?.tone || "");
        setAge(profile?.age.toString() || "");
        setColor(profile?.colorList[0] || "");
        setStyle(profile?.styleList[0] || "");
    };

    return {
        nicknameRef,
        heightRef,
        weightRef,
        tone,
        setTone,
        age,
        setAge,
        color,
        setColor,
        style,
        setStyle,
        handleSaveClick,
        initializeFields,
    };
};
