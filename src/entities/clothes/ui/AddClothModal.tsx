import { useRef, useState } from "react";

import { Plus } from "lucide-react";

import { useFetchOutfitInfo } from "@/features/home/hooks/useFetchOutfitInfo";

import { useAddCloth } from "@/entities/clothes/hooks/useAddCloth";
import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { PatternSelector } from "@/entities/clothes/ui/PatternSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { TextileSelector } from "@/entities/clothes/ui/TextileSelector";
import { ImageUploader } from "@/entities/images/ui/ImageUploader";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { SpinnerOverlay } from "@/shared/ui/spinnerOverlay";

export const AddClothModal = () => {
    const previousFileRef = useRef<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const { state, dispatch, handleSubmit, handleDelete } = useAddCloth();
    const { mutate: uploadImage } = useFetchOutfitInfo();

    const handleImageUpload = (img: File) => {
        if (!img || img === previousFileRef.current) return;

        previousFileRef.current = img;
        setIsUploading(true);

        uploadImage(img, {
            onSuccess: (data) => {
                console.log("이미지 업로드 성공:", data);
                setIsUploading(false);

                dispatch({ type: "SET_NAME", payload: data.name });
                dispatch({ type: "SET_DESCRIPTION", payload: data.description });
                dispatch({ type: "SET_CATEGORY", payload: data.mainCategory });
                dispatch({ type: "SET_SUBCATEGORY", payload: data.subCategory });
                dispatch({ type: "SET_COLOR", payload: data.baseColor });
                dispatch({ type: "SET_POINTCOLOR", payload: data.pointColor });
                dispatch({ type: "SET_SEASON", payload: data.season });
                dispatch({ type: "SET_STYLE", payload: data.style });
                dispatch({ type: "SET_TEXTILE", payload: data.textile });
                dispatch({ type: "SET_PATTERN", payload: data.pattern });
            },
            onError: (error) => {
                console.error("이미지 업로드 실패:", error);
                setIsUploading(false);
            },
        });
    };

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
                    <ImageUploader
                        className="w-[60%]"
                        onChange={(img) => {
                            if (img) {
                                handleImageUpload(img);
                            }
                        }}
                    />
                    <div className="w-[40%]">
                        {isUploading && <SpinnerOverlay message="이미지 분석 중입니다..." />}
                        <div>
                            <Label>옷 이름</Label>
                            <Input
                                className="w-full"
                                value={state.name}
                                onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label>옷 설명</Label>
                            <Input
                                className="w-full"
                                value={state.description}
                                onChange={(e) => dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })}
                            />
                        </div>

                        <ul className="grid grid-cols-2 gap-1 list-none">
                            <li>
                                <Label>카테고리</Label>
                                <CategorySelector
                                    placeholder="Main Category"
                                    defaultValue={state.category}
                                    onChange={(value) => dispatch({ type: "SET_CATEGORY", payload: value })}
                                />
                            </li>

                            <li>
                                <Label>하위 카테고리</Label>
                                <SubCategorySelector
                                    placeholder="Sub Category"
                                    parentCategory={state.category}
                                    defaultValue={state.subCategory}
                                    onChange={(value) => dispatch({ type: "SET_SUBCATEGORY", payload: value })}
                                />
                            </li>

                            <li>
                                <Label>주 색상</Label>
                                <ColorSelector
                                    placeholder="Main Color"
                                    defaultValue={state.color}
                                    onColorChange={(color) => dispatch({ type: "SET_COLOR", payload: color })}
                                />
                            </li>

                            <li>
                                <Label>포인트 색상</Label>
                                <ColorSelector
                                    placeholder="Point Color"
                                    defaultValue={state.pointColor}
                                    onColorChange={(color) => dispatch({ type: "SET_POINTCOLOR", payload: color })}
                                />
                            </li>

                            <li>
                                <Label>계절</Label>
                                <SeasonSelector
                                    placeholder="Season"
                                    defaultValue={state.season}
                                    onChange={(value) => dispatch({ type: "SET_SEASON", payload: value })}
                                />
                            </li>

                            <li>
                                <Label>스타일</Label>
                                <StyleSelector
                                    placeholder="Style"
                                    defaultValue={state.style}
                                    onStyleChange={(value) => dispatch({ type: "SET_STYLE", payload: value })}
                                />
                            </li>

                            <li>
                                <Label>재질</Label>
                                <TextileSelector
                                    placeholder="Textile"
                                    defaultValue={state.textile}
                                    onTextileChange={(value) => dispatch({ type: "SET_TEXTILE", payload: value })}
                                />
                            </li>

                            <li>
                                <Label>패턴</Label>
                                <PatternSelector
                                    placeholder="Pattern"
                                    defaultValue={state.pattern}
                                    onPatternChange={(value) => dispatch({ type: "SET_PATTERN", payload: value })}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="w-full" onClick={handleSubmit}>
                        저장
                    </Button>
                    <Button className="w-full" variant="destructive" onClick={handleDelete}>
                        삭제
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
