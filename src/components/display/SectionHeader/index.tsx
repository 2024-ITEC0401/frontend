import * as Styles from "@/components/display/SectionHeader/index.style";
import { Text } from "@/components/typography/Text/Text";

export interface SectionHeaderProps {
    label: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <Styles.Element>
            <Text size="xl" weight="bold">
                {props.label}
            </Text>
            <Styles.Button>더 보기 {">"}</Styles.Button>
        </Styles.Element>
    );
};
