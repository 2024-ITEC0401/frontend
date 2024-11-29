import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "@/entities/tokens/hooks/useLogin";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export default function SignInPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const loginMutation = useLogin();

    const handleLogin = () => {
        if (!email || !password) {
            alert("이메일과 비밀번호를 모두 입력해주세요.");
            return;
        }

        loginMutation.mutate(
            { email, password },
            {
                onSuccess: () => {
                    alert("로그인 성공!");
                    navigate("/");
                },
                onError: () => {
                    alert("로그인에 실패했습니다. 다시 시도해주세요.");
                },
            },
        );
    };

    return (
        <div>
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold ">LOOK4ME에 오신 것을 환영합니다</h1>
                <p className="my-1 text-gray-500">로그인 후 맞춤화된 코디 추천 서비스를 경험해보세요</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">이메일 주소</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일을 입력해주세요"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해주세요"
                        required
                    />
                </div>

                <Button className="w-full" onClick={handleLogin} disabled={loginMutation.status === "pending"}>
                    {loginMutation.status === "pending" ? "로그인 중..." : "로그인"}
                </Button>

                <p className="text-center">
                    <span>아직 LOOK4ME 회원이 아니신가요?</span>
                    <span className="font-semibold text-primary"> 회원가입</span>
                </p>
            </div>
        </div>
    );
}
