import { Card } from "@/shared/ui/card";

export interface StyleCardProps {
    imgSrc: string;
    krLabel: string;
    enLabel: string;
}

export const StyleCard = ({ imgSrc, krLabel, enLabel }: StyleCardProps) => {
    return (
        <Card className="w-[240px] h-[240px] aspect-square rounded-lg relative">
            <img src={imgSrc} alt="스타일 카드" className="absolute top-0 left-0 w-full h-full rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/30">
                <div className="text-center text-white mt-[150px]">
                    <h2 className="text-lg font-bold">{krLabel}</h2>
                    <h2 className="font-light">{enLabel}</h2>
                </div>
            </div>
        </Card>
    );
};
