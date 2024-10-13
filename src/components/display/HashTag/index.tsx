import * as Styles from "@/components/display/HashTag/index.style";

export interface HashTagProps {
    children?: React.ReactNode;
}

export const HashTag = (props: HashTagProps) => {
    return <Styles.HashTagElement>{props.children}</Styles.HashTagElement>;
};
