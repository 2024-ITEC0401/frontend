import { ButtonElement, LogoElement } from "@/components/forms/Button/index.style";

import googleLogo from "@/assets/common/GoogleLogo.png";

export interface ButtonProps {
    variant: "primary" | "secondary" | "login";

    width: SizeProp;
    height: SizeProp;

    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonElement variant={props.variant} width={props.width} height={props.height}>
            {props.variant === "login" && <LogoElement src={googleLogo} />}
            {props.children}
        </ButtonElement>
    );
};
