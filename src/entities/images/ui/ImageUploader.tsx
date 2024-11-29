import { useEffect } from "react";

import { Plus } from "lucide-react";

import { useImageUpload } from "@/entities/images/hooks/useImageUpload";

import { cn } from "@/shared/lib/utils";

export interface FileUploadProps {
    className?: string;
    onChange?: (image: File | null) => void;
}

export const ImageUploader = ({ className, onChange }: FileUploadProps) => {
    const { isUploaded, previewURL, image, fileInputRef, handleImageUpload, handleImageChange } = useImageUpload();

    useEffect(() => {
        onChange && onChange(image);
        console.log(image);
    }, [image, onChange]);

    return (
        <div
            className={cn(
                "flex w-[500px] h-[400px] border-2 rounded-md hover:cursor-pointer justify-center items-center border-dashed",
                className,
            )}
            onClick={handleImageUpload}
        >
            {!isUploaded ? (
                <div className="flex flex-col justify-center">
                    <Plus className="block mx-auto" size={30} />
                    <label>파일 업로드</label>
                </div>
            ) : (
                <img
                    className="block w-full h-full rounded-[inherit] object-cover"
                    src={previewURL}
                    alt="uploaded-image"
                />
            )}
            <input className="hidden" ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    );
};
