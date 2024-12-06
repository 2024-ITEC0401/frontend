import { CodiDetailCard } from "@/entities/clothes/ui/CodiDetailCard";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";

export interface Clothing {
    id: number;
    imageUri: string;
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

interface CodiDetailModalProps {
    children: React.ReactNode;
    clothingList: Clothing[];
}

export const CodiDetailModal = ({ children, clothingList }: CodiDetailModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>{children}</div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[900px] p-4 overflow-x-auto">
                <DialogHeader>
                    <DialogTitle>코디 상세 정보</DialogTitle>
                </DialogHeader>

                <div className="flex gap-2 justify-center">
                    {clothingList.map((clothing) => (
                        <CodiDetailCard
                            key={clothing.id}
                            imgSrc={clothing.imageUri}
                            name={clothing.name}
                            mainCategory={clothing.mainCategory}
                            subCategory={clothing.subCategory}
                            baseColor={clothing.baseColor}
                            pointColor={clothing.pointColor}
                            textile={clothing.textile}
                            pattern={clothing.pattern}
                            season={clothing.season}
                            style={clothing.style}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};
