import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";

import { MODE, useMode } from "@/shared/hooks/useMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { SelectItem, Selector } from "@/shared/ui/select";

export default function ProfilePage() {
    const { isViewMode, mode, switchToEditMode, switchToViewMode } = useMode(MODE.VIEW);

    return (
        <div>
            <h1 className="my-4 text-xl font-bold">내 정보 {mode === MODE.EDIT && "수정"} </h1>

            <Avatar className="w-[100px] h-[100px] mx-auto my-8">
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback className="text-lg">홍</AvatarFallback>
            </Avatar>

            <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                    <Label>이메일</Label>
                    <Input type="text" className="w-full" disabled={true} value="test@gmail.com"></Input>
                </div>

                <div>
                    <Label>닉네임</Label>
                    <Input type="text" className="w-full" disabled={isViewMode}></Input>
                </div>

                <div>
                    <Label>키</Label>
                    <Input type="text" className="w-full" disabled={isViewMode}></Input>
                </div>

                <div>
                    <Label>몸무게</Label>
                    <Input type="text" className="w-full" disabled={isViewMode}></Input>
                </div>

                <div>
                    <Label>피부톤</Label>
                    <Selector className="w-full" placeholder="피부톤" disabled={isViewMode}>
                        <SelectItem value="warm">웜톤</SelectItem>
                        <SelectItem value="cool">쿨톤</SelectItem>
                    </Selector>
                </div>

                <div>
                    <Label>연령대</Label>
                    <Selector className="w-full" placeholder="연령대" disabled={isViewMode}>
                        <SelectItem value="10">10대</SelectItem>
                        <SelectItem value="20">20대</SelectItem>
                        <SelectItem value="30">30대</SelectItem>
                        <SelectItem value="40">40대</SelectItem>
                        <SelectItem value="50">50대</SelectItem>
                    </Selector>
                </div>

                <div>
                    <Label>선호하는 색상</Label>
                    <ColorSelector
                        disabled={isViewMode}
                        placeholder="선호하는 색상을 선택해주세요"
                        onValueChange={(color) => console.log(color)}
                    />
                </div>

                <div>
                    <Label>선호하는 스타일</Label>
                    <StyleSelector
                        disabled={isViewMode}
                        placeholder="선호하는 스타일을 선택해주세요"
                        onValueChange={(style) => console.log(style)}
                    />
                </div>
            </section>

            <div className="flex gap-1 my-4">
                <Button
                    onClick={() => {
                        if (isViewMode) switchToEditMode();
                        else switchToViewMode();
                    }}
                >
                    정보 수정하기
                </Button>
                <Button variant="destructive">회원 탈퇴하기</Button>
            </div>
        </div>
    );
}
