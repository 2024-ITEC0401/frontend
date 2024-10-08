import { ButtonElement, LogoElement } from "@/components/forms/Button/index.style";

import googleLogo from "@/assets/common/GoogleLogo.png";

export interface ButtonProps {
    variant: "primary" | "secondary" | "login";

    width: string;
    height: string;

    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonElement {...props}>
            {props.variant === "login" && <LogoElement src={googleLogo} />}
            {props.children}
        </ButtonElement>
    );
};
