import * as Styles from "./index.style";

export interface ArrowButtonProps {
    direction: "left" | "right";
    onClick?: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
    return (
        <Styles.Button onClick={onClick}>
            {direction === "left" ? (
                <Styles.Arrow viewBox="0 0 24 24">
                    <path d="M15 6l-6 6 6 6" />
                </Styles.Arrow>
            ) : (
                <Styles.Arrow viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" />
                </Styles.Arrow>
            )}
        </Styles.Button>
    );
};

export default ArrowButton;
