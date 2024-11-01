import { useCallback, useRef, useState } from "react";

export const useImageUpload = () => {
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] as File;
        if (!file) throw new Error("파일이 정상적으로 업로드 되지 않았습니다");

        setIsUploaded(true);
        setImage(file);
        setPreviewURL(URL.createObjectURL(file));
    }, []);

    return {
        isUploaded,
        image,
        previewURL,
        handleImageUpload,
        handleImageChange,
        fileInputRef,
    };
};
