import { useCallback, useRef } from "react";

export const useChat = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // call api

    const handleSend = useCallback(() => {
        // Send message
        if (inputRef.current) inputRef.current.value = "";
    }, []);

    return { inputRef, handleSend };
};
