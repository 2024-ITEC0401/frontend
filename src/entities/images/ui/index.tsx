import { useEffect } from "react";

import { useImageUpload } from "@/entities/images/hooks/useImageUpload";

import * as Styles from "./index.style";
import iconPlus from "@/assets/icon-plus.svg";
import { Text } from "@/components/typography/Text";

export interface FileUploadProps {
    width?: SizeProp;
    height?: SizeProp;
    onChange?: (image: File | null) => void;
}

export const FileUpload = ({ width, height, onChange }: FileUploadProps) => {
    const { isUploaded, previewURL, image, fileInputRef, handleImageUpload, handleImageChange } = useImageUpload();

    useEffect(() => {
        onChange && onChange(image);
        console.log(image);
    }, [image, onChange]);

    return (
        <Styles.Wrapper width={width} height={height} onClick={handleImageUpload}>
            {!isUploaded ? (
                <Styles.LabelContianer>
                    <Styles.Img src={iconPlus} alt="icon-plus" />
                    <Styles.Label>
                        <Text size="s">파일 업로드</Text>
                    </Styles.Label>
                </Styles.LabelContianer>
            ) : (
                <Styles.ImagePreview src={previewURL} alt="uploaded-image" />
            )}
            <Styles.FileInput ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} />
        </Styles.Wrapper>
    );
};
