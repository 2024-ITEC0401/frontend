import { useState } from "react";

import HashTag from "@/entities/tag/ui/HashTag";

import { Card } from "@/shared/ui/card";

export interface RecommendedCodiCardProps {
    imgSrc: string[];
    title: string;
    hashTags: string[];
    description: string;
    createdAt: string;
    onDelete: () => void;
}

export const RecommendedCodiCard = ({
    imgSrc,
    title,
    hashTags,
    description,
    createdAt,
    onDelete,
}: RecommendedCodiCardProps) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Card className="w-full max-w-[1400px] h-[200px] p-4 flex relative">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full w-[150px] mr-4 rounded-md">
                {imgSrc.map((src, index) => (
                    <img key={index} src={src} alt="" className="w-full h-full object-cover rounded-md" />
                ))}
            </div>
            <div className="flex flex-col justify-center gap-1">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-gray-500">{createdAt}</p>
                <p className="h-12 line-clamp-2">{description}</p>
                <div className="flex gap-2 overflow-hidden">
                    {hashTags.map((hashTag, key) => {
                        return <HashTag key={key}>{hashTag}</HashTag>;
                    })}
                </div>
            </div>
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setMenuVisible(!menuVisible)}
                    className="w-10 h-8 p-2 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
                >
                    ···
                </button>

                {menuVisible && (
                    <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded-md">
                        <button
                            onClick={() => {
                                setMenuVisible(false);
                                onDelete();
                            }}
                            className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-100 rounded-md flex justify-center"
                        >
                            삭제하기
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
};
