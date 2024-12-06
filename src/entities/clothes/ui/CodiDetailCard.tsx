import { Card } from "@/shared/ui/card";

export interface RecommendedProductCardProps {
    imgSrc: string;
    name: string;
    mainCategory: string;
    subCategory: string;
    baseColor: string;
    pointColor: string;
    textile: string;
    pattern: string;
    season: string;
    style: string;
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
        <Card className="w-[230px] p-4 shadow-md rounded-lg border border-gray-200">
            <img src={imgSrc} alt="" className="w-full h-[160px] rounded-sm object-cover mb-4" />
            <div className="flex flex-col gap-2">
                <span className="text-lg font-bold text-center text-primary">{name}</span>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm text-center">
                    <span className="font-semibold text-gray-700">카테고리:</span>
                    <span className="text-gray-600 text-center">{mainCategory}</span>

                    <span className="font-semibold text-gray-700">하위 카테고리:</span>
                    <span className="text-gray-600">{subCategory}</span>

                    <span className="font-semibold text-gray-700">주 색상:</span>
                    <span className="text-gray-600">{baseColor}</span>

                    <span className="font-semibold text-gray-700">포인트 색상:</span>
                    <span className="text-gray-600">{pointColor}</span>

                    <span className="font-semibold text-gray-700">소재:</span>
                    <span className="text-gray-600">{textile}</span>

                    <span className="font-semibold text-gray-700">패턴:</span>
                    <span className="text-gray-600">{pattern}</span>

                    <span className="font-semibold text-gray-700">계절:</span>
                    <span className="text-gray-600">{season}</span>

                    <span className="font-semibold text-gray-700">스타일:</span>
                    <span className="text-gray-600">{style}</span>
                </div>
            </div>
        </Card>
    );
};
