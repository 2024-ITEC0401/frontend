import { useCallback, useRef, useState } from "react";

import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface ChatRequestBody {
    natural_language: string;
}

interface ChatResponseBody {
    id: number;
    name: string;
    description: string;
    hashtags: string;
    createdAt: string;
    clothingImages: string[];
}

const chat = async (data: ChatRequestBody): Promise<ChatResponseBody> => {
    const response = await fetchInstance.post("/api/v1/coordination/rec/natural-language", data);
    return response.data;
};

export const useChat = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [chatHistory, setChatHistory] = useState<(string | ChatResponseBody)[]>([]);
    const [isPending, setIsPending] = useState(false);

    const { mutate } = useMutation({
        mutationFn: (data: ChatRequestBody) => chat(data),
        onMutate: () => {
            if (!isPending) {
                setIsPending(true);
            }
        },
        onSuccess: (data) => {
            setChatHistory((prev) => [...prev, data]);
        },
    });

    const handleSend = useCallback(() => {
        if (inputRef.current) {
            const message = inputRef.current.value;
            setChatHistory((prev) => [...prev, message]);
            mutate({ natural_language: message });
            inputRef.current.value = "";
        }
    }, [mutate]);

    return { inputRef, chatHistory, handleSend, isPending };
};
