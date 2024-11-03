import * as Styles from "@/components/display/HashTag/index.style";

export interface HashTagProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode;
    active?: boolean;
}

export const HashTag = ({ children, active = true, onClick }: HashTagProps) => {
    return (
        <Styles.HashTagElement active={active} onClick={onClick}>
            {children}
        </Styles.HashTagElement>
    );
};
