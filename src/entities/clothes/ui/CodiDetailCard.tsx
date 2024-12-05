import { Card } from "@/shared/ui/card";

export interface RecommendedProductCardProps {
    imgSrc?: string;
    name: string;
    mainCategory: string;
    subCategory: string;
    baseColor: string;
    pointColor: string;
    textile: string;
    pattern: string;
    season: string;
    style: string;
    description: string;
}

export const CodiDetailCard = ({
    imgSrc,
    name,
    mainCategory,
    subCategory,
    baseColor,
    pointColor,
    textile,
    pattern,
    season,
    style,
}: RecommendedProductCardProps) => {
    return (
        <Card className="w-[230px] p-4">
            <img src={imgSrc} alt="" className="bg-black w-full h-[160px] rounded-sm object-cover" />
            <div className="my-1 flex flex-col justify-center ">
                <span className="font-semibold text-primary">옷 이름: {name}</span>
                <span className="font-semibold text-primary">카테고리: {mainCategory}</span>
                <span className="font-semibold text-primary">하위 카테고리: {subCategory}</span>
                <span className="font-semibold text-primary">주 색상: {baseColor}</span>
                <span className="font-semibold text-primary">포인트 색상: {pointColor}</span>
                <span className="font-semibold text-primary">소재: {textile}</span>
                <span className="font-semibold text-primary">패턴: {pattern}</span>
                <span className="font-semibold text-primary">계절: {season}</span>
                <span className="font-semibold text-primary">스타일: {style}</span>
            </div>
        </Card>
    );
};
