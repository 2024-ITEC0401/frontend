import { useState } from "react";

import { ClothInfo } from "@/features/home/hooks/useFetchAllclothes";

import { useCloth } from "@/entities/clothes/hooks/useCloth";
import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector_closet } from "@/entities/clothes/ui/ColorSelector_closet";
import { PatternSelector } from "@/entities/clothes/ui/PatternSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector_closet } from "@/entities/clothes/ui/StyleSelector_closet";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { TextileSelector } from "@/entities/clothes/ui/TextileSelector";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export interface ClothCardProps {
    cloth: ClothInfo;
    isActive: boolean;
    isSelected: boolean;
    onToggleSelect: (id: number) => void;
}

export const ClothCard = ({ cloth, isActive, isSelected, onToggleSelect }: ClothCardProps) => {
    const { handleEdit, handleDelete } = useCloth(cloth);

    const [editableCloth, setEditableCloth] = useState(cloth);

    const handleChange = (field: keyof ClothInfo, value: string) => {
        setEditableCloth((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaveEdit = () => {
        handleEdit(editableCloth);
    };

    const handleCardClick = () => {
        if (isActive) {
            onToggleSelect(cloth.id);
        }
    };

    return (
        <Dialog>
            {!isActive ? (
                <DialogTrigger>
                    <Card className="w-[230px] p-4 relative cursor-pointer" onClick={handleCardClick}>
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
            ) : (
                <Card
                    className={`w-[230px] p-4 relative cursor-pointer border ${
                        isSelected ? "ring-2 ring-green-500" : "ring-gray-300"
                    }`}
                    onClick={handleCardClick}
                >
                    <img
                        src={cloth.imageUri}
                        alt={cloth.name}
                        className={`bg-black w-full h-[160px] rounded-sm object-cover ${
                            isSelected ? "opacity-100" : "opacity-50"
                        }`}
                    />
                    <div className="my-1">
                        <h2 className="text-lg font-bold text-center line-clamp-1">{cloth.name}</h2>
                        <p className="text-sm text-center line-clamp-1">{cloth.description}</p>
                    </div>
                </Card>
            )}

            {!isActive && (
                <DialogContent className="w-full max-w-[900px] p-4">
                    <DialogHeader>
                        <DialogTitle>내 옷 정보</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                        <img src={cloth.imageUri} alt="" className="w-[500px] h-[400px] object-cover" />

                        <div className="w-[40%]">
                            <div>
                                <Label>옷 이름</Label>
                                <Input
                                    className="w-full"
                                    value={editableCloth.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                />
                            </div>

                            <div>
                                <Label>옷 설명</Label>
                                <Input
                                    className="w-full"
                                    value={editableCloth.description}
                                    onChange={(e) => handleChange("description", e.target.value)}
                                />
                            </div>

                            <ul className="grid grid-cols-2 gap-1 list-none">
                                <li>
                                    <Label>카테고리</Label>
                                    <CategorySelector
                                        placeholder="Main Category"
                                        value={editableCloth.mainCategory}
                                        onValueChange={(value) => handleChange("mainCategory", value)}
                                    />
                                </li>

                                <li>
                                    <Label>하위 카테고리</Label>
                                    <SubCategorySelector
                                        placeholder="Sub Category"
                                        parentCategory={editableCloth.mainCategory}
                                        value={editableCloth.subCategory}
                                        onValueChange={(value) => handleChange("subCategory", value)}
                                    />
                                </li>

                                <li>
                                    <Label>주 색상</Label>
                                    <ColorSelector_closet
                                        value={editableCloth.baseColor}
                                        onValueChange={(value) => handleChange("baseColor", value)}
                                    />
                                </li>

                                <li>
                                    <Label>포인트 색상</Label>
                                    <ColorSelector_closet
                                        placeholder="Point Color"
                                        value={editableCloth.pointColor}
                                        onValueChange={(value) => handleChange("pointColor", value)}
                                    />
                                </li>

                                <li>
                                    <Label>계절</Label>
                                    <SeasonSelector
                                        placeholder="Season"
                                        value={editableCloth.season}
                                        onValueChange={(value) => handleChange("season", value)}
                                    />
                                </li>

                                <li>
                                    <Label>스타일</Label>
                                    <StyleSelector_closet
                                        placeholder="Style"
                                        value={editableCloth.style}
                                        onValueChange={(value) => handleChange("style", value)}
                                    />
                                </li>

                                <li>
                                    <Label>재질</Label>
                                    <TextileSelector
                                        placeholder="Textile"
                                        value={editableCloth.textile}
                                        onValueChange={(value) => handleChange("textile", value)}
                                    />
                                </li>

                                <li>
                                    <Label>패턴</Label>
                                    <PatternSelector
                                        placeholder="Pattern"
                                        value={editableCloth.pattern}
                                        onValueChange={(value) => handleChange("pattern", value)}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className="w-full" onClick={handleSaveEdit}>
                            수정
                        </Button>
                        <Button className="w-full" variant="destructive" onClick={handleDelete}>
                            삭제
                        </Button>
                    </DialogFooter>
                </DialogContent>
            )}
        </Dialog>
    );
};
