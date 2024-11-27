import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export default function SignInPage() {
    return (
        <div>
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold ">LOOK4ME에 오신 것을 환영합니다</h1>
                <p className="my-1 text-gray-500">로그인 후 맞춤화된 코디 추천 서비스를 경험해보세요</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label>이메일주소</Label>
                    <Input></Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>이메일주소</Label>
                    <Input></Input>
                </div>

                <Button className="w-full">로그인</Button>

                <p className="text-center">
                    <span>아직 LOOK4ME 회원이 아니신가요?</span>
                    <span className="font-semibold text-primary"> 회원가입</span>
                </p>
            </div>
        </div>
    );
}
