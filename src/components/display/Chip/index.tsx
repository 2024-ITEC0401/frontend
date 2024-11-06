import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export interface ChipProps {
    active?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Chip = ({ children, active = false, onClick }: ChipProps) => {
    return (
        <Styles.Container active={active} onClick={onClick}>
            <Text size="s" weight={600}>
                {children}
            </Text>
        </Styles.Container>
    );
};
