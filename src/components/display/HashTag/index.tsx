import { HashTagElement } from "@/components/display/HashTag/index.style";

export interface HashTagProps {
    children?: React.ReactNode;
}

export const HashTag = (props: HashTagProps) => {
    return <HashTagElement>{props.children}</HashTagElement>;
};
