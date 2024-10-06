import { useCallback } from "react";

import * as Styles from "@/components/forms/Dropdown/index.style";

interface DropdownProps {
    options: string[];
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = (props: DropdownProps) => {
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            props.setSelectedOption(event.target.value);
        },
        [props.setSelectedOption],
    );

    return (
        <Styles.Select value={props.selectedOption} onChange={handleChange}>
            {props.options.map((option, index) => (
                <Styles.Option key={index} value={option}>
                    {option}
                </Styles.Option>
            ))}
        </Styles.Select>
    );
};
