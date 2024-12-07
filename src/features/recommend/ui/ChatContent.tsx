import { useState, useEffect } from "react";

export interface SendProps {
    content: string;
}

const Send = ({ content }: SendProps) => {
    return <div className="px-4 py-2 ml-auto mr-0 rounded-lg bg-primary/80 w-fit">{content}</div>;
};

export interface ReceiveProps {
    isPending: boolean;
    content: string;
    children?: React.ReactNode;
}

const Receive = ({ isPending, content, children }: ReceiveProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(
        function AnimateText() {
            let index = 0;
            let animationFrameId: number;

            const updateText = () => {
                setDisplayedText((prev) => prev + content[index++]);
                if (index < content.length - 1) animationFrameId = requestAnimationFrame(updateText);
            };
            animationFrameId = requestAnimationFrame(updateText);
            return () => cancelAnimationFrame(animationFrameId);
        },
        [content, isPending],
    );

    return (
        <div className="px-4 py-2 ml-0 mr-auto bg-gray-300 rounded-lg">
            {isPending ? (
                <span className="animate-pulse">생성중 ...</span>
            ) : (
                <>
                    <span>{displayedText}</span>
                    {children && <div className="mt-2">{children}</div>}
                </>
            )}
        </div>
    );
};

export interface ContentProps {
    children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="flex flex-col flex-grow h-full overflow-scroll [&::-webkit-scrollbar]:hidden gap-6">
            {children}
        </div>
    );
};

export const ChatContent = {
    Send,
    Receive,
    Content,
};
