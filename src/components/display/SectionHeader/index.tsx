import * as Styles from "@/components/display/SectionHeader/index.style";
import { Text } from "@/components/typography/Text";

export interface SectionHeaderProps {
    label: string;
    variant?: "primary" | "default";
}

export const SectionHeader = ({ label, variant = "default" }: SectionHeaderProps) => {
    return (
        <Styles.Element>
            <Text size="xl" weight="bold" color={variant === "primary" ? "primary" : undefined}>
                {label}
            </Text>
            <Styles.Button>더 보기 {">"}</Styles.Button>
        </Styles.Element>
    );
};
