import { useState } from "react";

export const useSignUp = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignUp = () => {
        return;
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
