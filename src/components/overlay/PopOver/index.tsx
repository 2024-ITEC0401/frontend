import { forwardRef } from "react";

import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export interface PopOverProps {
    width?: SizeProp;
    height?: SizeProp;
    children?: React.ReactNode;
}

export interface PopOverItemProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const PopOverItem = ({ children, onClick }: PopOverItemProps) => {
    return (
        <Styles.Item onClick={onClick} data-testid="pop-over-item">
            <Text size="xs">{children}</Text>
        </Styles.Item>
    );
};

export const PopOver = forwardRef<HTMLDivElement, PopOverProps>(({ width, height, children }, ref) => {
    return (
        <Styles.Wrapper width={width} height={height} ref={ref}>
            <Styles.Header>
                <Text size="xs" color="red">
                    삭제
                </Text>
            </Styles.Header>
            <Styles.Body>{children}</Styles.Body>
        </Styles.Wrapper>
    );
});
