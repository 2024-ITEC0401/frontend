import { Plus } from "lucide-react";

import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { ImageUploader } from "@/entities/images/ui/ImageUploader";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export const AddClothModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className="w-full">
                    <Plus /> 추가
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[900px] p-4">
                <DialogHeader>
                    <DialogTitle>내 옷 업로드</DialogTitle>
                </DialogHeader>

                <div className="flex gap-2">
                    <ImageUploader className="w-[60%]" />
                    <div className="w-[40%]">
                        <Label>옷 이름</Label>
                        <Input className="w-full" />

                        <ul className="grid grid-cols-2 gap-1 list-none">
                            <li>
                                <Label>카테고리</Label>
                                <CategorySelector />
                            </li>

                            <li>
                                <Label>하위 카테고리</Label>
                                <SubCategorySelector parentCategory={""} />
                            </li>

                            <li>
                                <Label>주 색상</Label>
                                <ColorSelector onColorChange={(color) => console.log(color)} />
                            </li>

                            <li>
                                <Label>포인트 색상</Label>
                                <ColorSelector
                                    placeholder="포인트 색상"
                                    onColorChange={(color) => console.log(color)}
                                />
                            </li>

                            <li>
                                <Label>계절</Label>
                                <SeasonSelector />
                            </li>

                            <li>
                                <Label>스타일</Label>
                                <StyleSelector onStyleChange={(value) => console.log(value)} />
                            </li>
                        </ul>
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit" className="w-full">
                        옷 등록하기
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
