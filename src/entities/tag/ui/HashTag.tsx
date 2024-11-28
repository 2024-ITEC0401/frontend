import React from "react";

import { cn } from "@/shared/lib/utils";

export interface HashTagProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    active?: boolean;
}

export default function HashTag({ children, className, onClick, active = false }: HashTagProps) {
    return (
        <div
            className={cn(
                "flex-shrink-0 inline-flex p-1.5 px-2 bg-[#EDFFEF] rounded-md w-fit h-fit text-primary",
                active ? "bg-primary text-[#EDFFEF]" : "",
                className,
            )}
            onClick={onClick}
        >
            #{children}
        </div>
    );
}
