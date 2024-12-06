import { ClothInfo } from "@/features/home/hooks/useFetchAllclothes";

import { useCloth } from "@/entities/clothes/hooks/useCloth";
import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { PatternSelector } from "@/entities/clothes/ui/PatternSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { TextileSelector } from "@/entities/clothes/ui/TextileSelector";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export interface ClothCardProps {
    cloth: ClothInfo;
}

export const ClothCard = ({ cloth }: ClothCardProps) => {
    const { handleEdit, handleRecommend, handleDelete } = useCloth(cloth);

    return (
        <Dialog>
            <DialogTrigger>
                <Card className="w-[230px] p-4">
                    <img
                        src={cloth.imageUri}
                        alt={cloth.name}
                        className="bg-black w-full h-[160px] rounded-sm object-cover"
                    />
                    <div className="my-1">
                        <h2 className="text-lg font-bold text-center line-clamp-1">{cloth.name}</h2>
                        <p className="text-sm text-center line-clamp-1">{cloth.description}</p>
                    </div>
                </Card>
            </DialogTrigger>

            <DialogContent className="w-full max-w-[900px] p-4">
                <DialogHeader>
                    <DialogTitle>내 옷 정보</DialogTitle>
                </DialogHeader>

                <div className="flex gap-2">
                    <img src={cloth.imageUri} alt="" className="w-[500px] h-[400px] object-cover" />

                    <div className="w-[40%]">
                        <div>
                            <Label>옷 이름</Label>
                            <Input className="w-full" value={cloth.name} />
                        </div>

                        <div>
                            <Label>옷 설명</Label>
                            <Input className="w-full" value={cloth.description} />
                        </div>

                        <ul className="grid grid-cols-2 gap-1 list-none">
                            <li>
                                <Label>카테고리</Label>
                                <CategorySelector placeholder="Main Category" value={cloth.mainCategory} />
                            </li>

                            <li>
                                <Label>하위 카테고리</Label>
                                <SubCategorySelector
                                    placeholder="Sub Category"
                                    parentCategory={cloth.mainCategory}
                                    value={cloth.subCategory}
                                />
                            </li>

                            <li>
                                <Label>주 색상</Label>
                                <ColorSelector value={cloth.baseColor} />
                            </li>

                            <li>
                                <Label>포인트 색상</Label>
                                <ColorSelector placeholder="Point Color" value={cloth.pointColor} />
                            </li>

                            <li>
                                <Label>계절</Label>
                                <SeasonSelector placeholder="Season" value={cloth.season} />
                            </li>

                            <li>
                                <Label>스타일</Label>
                                <StyleSelector placeholder="Style" value={cloth.style} />
                            </li>

                            <li>
                                <Label>재질</Label>
                                <TextileSelector placeholder="Textile" value={cloth.textile} />
                            </li>

                            <li>
                                <Label>패턴</Label>
                                <PatternSelector placeholder="Pattern" value={cloth.pattern} />
                            </li>
                        </ul>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" className="w-full" onClick={handleRecommend}>
                        코디 추천받기
                    </Button>
                    <Button className="w-full" onClick={handleEdit}>
                        수정
                    </Button>
                    <Button className="w-full" variant="destructive" onClick={handleDelete}>
                        삭제
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
