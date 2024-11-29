import { Card } from "@/shared/ui/card";

export interface RecommendedProductCardProps {
    imgSrc?: string;
    title: string;
    count: number;
}

export const RecommendedProductCard = ({ imgSrc, title, count }: RecommendedProductCardProps) => {
    return (
        <Card className="w-[230px] p-4">
            <img src={imgSrc} alt="" className="bg-black w-full h-[160px] rounded-sm object-cover" />
            <div className="my-1">
                <h2 className="text-lg font-bold text-center line-clamp-1">{title}</h2>

                <p className="text-sm text-center text-gray-500 line-clamp-1">
                    내 옷장에 있는
                    <span className="font-semibold text-primary"> {count}개</span> 옷과 잘 어울림
                </p>
            </div>
        </Card>
    );
};
