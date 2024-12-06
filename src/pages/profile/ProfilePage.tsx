import { useEffect } from "react";

import { useEditProfile } from "@/features/profile/hooks/useEditProfile";
import { useViewProfile } from "@/features/profile/hooks/useViewProfile";

import { colors } from "@/entities/clothes/config/color";
import { styles } from "@/entities/clothes/config/styles";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";

import catImg from "@/shared/assets/cat.jpg";
import { MODE, useMode } from "@/shared/hooks/useMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { SelectItem, Selector } from "@/shared/ui/select";

export default function ProfilePage() {
    const { isViewMode, mode, switchToEditMode, switchToViewMode } = useMode(MODE.VIEW);
    const {
        nicknameRef,
        heightRef,
        weightRef,
        tone,
        setTone,
        age,
        setAge,
        colorList,
        setColorList,
        styleList,
        setStyleList,
        handleSaveClick,
    } = useEditProfile();
    const { data: profile, isFetching } = useViewProfile();

    useEffect(() => {
        if (profile) {
            setTone(profile.tone);
            setAge(profile.age.toString());
            setColorList(profile.colorList);
            setStyleList(profile.styleList);
        }
    }, [profile, setTone, setAge, setColorList, setStyleList]);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="my-4 text-xl font-bold">내 정보 {mode === MODE.EDIT && "수정"} </h1>

            <Avatar className="w-[100px] h-[100px] mx-auto my-8">
                <AvatarImage src={catImg} alt="@shadcn" />
                <AvatarFallback className="text-lg"></AvatarFallback>
            </Avatar>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 px-4">
                <div className="flex flex-col gap-2">
                    <Label>이메일</Label>
                    <Input type="text" className="w-full" disabled={true} defaultValue={profile?.email}></Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>닉네임</Label>
                    <Input
                        type="text"
                        className="w-full"
                        disabled={isViewMode}
                        defaultValue={profile?.nickName}
                        ref={nicknameRef}
                    ></Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>키</Label>
                    <Input
                        type="text"
                        className="w-full"
                        disabled={isViewMode}
                        defaultValue={profile?.height}
                        ref={heightRef}
                    ></Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>몸무게</Label>
                    <Input
                        type="text"
                        className="w-full"
                        disabled={isViewMode}
                        defaultValue={profile?.weight}
                        ref={weightRef}
                    ></Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>피부톤</Label>
                    <Selector
                        className="w-full"
                        placeholder="피부톤"
                        disabled={isViewMode}
                        value={tone}
                        onValueChange={(value) => {
                            console.log("Selected Tone:", value);
                            setTone(value);
                        }}
                    >
                        <SelectItem value="warm">웜톤</SelectItem>
                        <SelectItem value="cool">쿨톤</SelectItem>
                    </Selector>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>연령대</Label>
                    <Selector
                        className="w-full"
                        placeholder="연령대"
                        disabled={isViewMode}
                        value={String(age)}
                        onValueChange={(value) => {
                            console.log("Selected Age:", value);
                            setAge(value);
                        }}
                    >
                        <SelectItem value="10">10대</SelectItem>
                        <SelectItem value="20">20대</SelectItem>
                        <SelectItem value="30">30대</SelectItem>
                        <SelectItem value="40">40대</SelectItem>
                        <SelectItem value="50">50대</SelectItem>
                    </Selector>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>선호하는 색상</Label>
                    <ColorSelector
                        disabled={isViewMode}
                        placeholder="선호하는 색상을 선택해주세요"
                        value={colorList[0]}
                        onValueChange={(value) => {
                            const selectedColor = colors.find((c) => c.colorValue === value);
                            if (selectedColor) {
                                setColorList([selectedColor.colorValue]);
                            }
                            setColorList([value]);
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>선호하는 스타일</Label>
                    <StyleSelector
                        disabled={isViewMode}
                        placeholder="선호하는 스타일을 선택해주세요"
                        value={styleList[0]}
                        onValueChange={(value) => {
                            const selectedStyle = styles.find((s) => s.value === value);
                            if (selectedStyle) {
                                setStyleList([selectedStyle.enLabel]);
                            }
                            setStyleList([value]);
                        }}
                    />
                </div>
            </section>

            <div className="flex justify-center gap-8 my-4 mt-16">
                <Button
                    variant="secondary"
                    onClick={() => {
                        if (isViewMode) switchToEditMode();
                        else switchToViewMode();
                    }}
                >
                    View / Edit 전환
                </Button>
                <Button
                    onClick={() => {
                        if (isViewMode) {
                            switchToEditMode();
                        } else {
                            switchToViewMode();
                            handleSaveClick();
                        }
                    }}
                >
                    정보 저장하기
                </Button>
                <Button variant="destructive">회원 탈퇴하기</Button>
            </div>
        </div>
    );
}
