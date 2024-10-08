import styled from "@emotion/styled";

export const Select = styled.select`
    width: 200px;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 16px;
    background-color: #f9fafb;
    color: #6b7280;

    /* 기본 화살표 숨김 */
    appearance: none;

    /* 화살표 추가 */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"%3E%3Cpath fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 1.5em;

    &:hover {
        border-color: var(--color-primary);
    }

    &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 2px var(--color-primary);
    }
`;

export const Option = styled.option`
    font-size: 16px;
    color: #111827;
    background-color: #ffffff;
    padding: 10px;

    &:hover {
        background-color: var(--color-primary);
    }
`;
