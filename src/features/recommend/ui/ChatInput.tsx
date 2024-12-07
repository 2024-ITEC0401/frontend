import React, { forwardRef, useRef } from "react";

import { Send } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export interface ChatInputProps {
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    disabled?: boolean;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(({ onClick, disabled }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <section className="fixed bottom-0 w-full max-w-[1180px] h-[50px] bg-white shadow-lg mx-auto px-[10px]">
            <div className="relative w-full mx-auto">
                <Input
                    ref={ref}
                    type="text"
                    className="h-[40px] rounded-full w-full absolute pr-[50px]"
                    placeholder="내용을 입력해주세요"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            buttonRef.current?.click();
                        }
                    }}
                    disabled={disabled}
                />
                <Button ref={buttonRef} className="rounded-full h-[40px] w-[40px] absolute right-0" onClick={onClick}>
                    <Send />
                </Button>
            </div>
        </section>
    );
});
