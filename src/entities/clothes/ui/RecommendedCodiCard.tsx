import HashTag from "@/entities/tag/ui/HashTag";

import { Card } from "@/shared/ui/card";

export interface RecommendedCodiCardProps {
    imgSrc: string;
    title: string;
    hashTags: string[];
    description: string;
    createdAt: string;
}

export const RecommendedCodiCard = ({ imgSrc, title, hashTags, description, createdAt }: RecommendedCodiCardProps) => {
    return (
        <Card className="w-full max-w-[1400px] h-[200px] p-4 flex">
            <img src={imgSrc} alt="" className="h-full mr-4 rounded-md aspect-square" />
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
        </Card>
    );
};
