import { useCallback, useRef, useState } from "react";

import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface ChatRequestBody {
    natural_language: string;
}

const chat = async (data: ChatRequestBody): Promise<void> => {
    await fetchInstance.post("/api/v1/coordination/rec/natural-language", data);
};

export const useChat = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [chatHistory, setChatHistory] = useState<string[]>([]);

    const { mutate } = useMutation({
        mutationFn: (data: ChatRequestBody) => chat(data),
    });

    const handleSend = useCallback(() => {
        if (inputRef.current) {
            const message = inputRef.current.value;
            setChatHistory((prev) => [...prev, message]);
            mutate({ natural_language: message });
            inputRef.current.value = "";
        }
    }, [mutate]);

    return { inputRef, chatHistory, handleSend };
};
