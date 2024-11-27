import React from "react";

export interface HashTagProps {
    children?: React.ReactNode;
}

export default function HashTag({ children }: HashTagProps) {
    return (
        <div className="flex-shrink-0 inline-flex p-1.5 px-2 bg-[#EDFFEF] rounded-md w-fit h-fit text-primary">
            #{children}
        </div>
    );
}
