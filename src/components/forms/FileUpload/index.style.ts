import { FileUploadProps } from "@/components/forms/FileUpload";

import styled from "@emotion/styled";

export const Wrapper = styled.button<FileUploadProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 1px dashed black;
    border-radius: 12px;
    padding: 0;

    background-color: var(--color-light-gray);

    &:hover {
        cursor: pointer;
    }
`;

export const LabelContianer = styled.div``;

export const Img = styled.img`
    display: block;
    margin: 0px auto;

    width: 30px;
    height: 30px;
    object-fit: cover;
`;

export const Label = styled.label`
    display: block;
    margin: 5px 0px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const ImagePreview = styled.img`
    display: block;
    width: 100%;
    height: 100%;

    border-radius: inherit;

    object-fit: cover;
`;
