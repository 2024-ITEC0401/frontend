import HashTag from "@/entities/tag/ui/HashTag";

import { Card } from "@/shared/ui/card";

export interface CodiCardWithHashTagsProps {
    imgSrc: string;
    title: string;
    hashTags: string[];
}

export const CodiCardWithHashTags = ({ imgSrc, title, hashTags }: CodiCardWithHashTagsProps) => {
    return (
        <Card className="w-[280px] p-4 bg-white">
            <img src={imgSrc} alt="" className="object-cover w-full bg-black rounded-md h-[200px]" />
            <h1 className="my-2 text-xl font-bold text-center">{title}</h1>
            <div className="flex gap-2 overflow-hidden">
                {hashTags.map((hashtag, key) => {
                    return <HashTag key={key}>{hashtag}</HashTag>;
                })}
            </div>
        </Card>
    );
};
