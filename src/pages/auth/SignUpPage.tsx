import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckEmailValidation } from "@/features/auth/hooks/useCheckEmailValidation";
import { useSignUp } from "@/features/auth/hooks/useSignUp";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export default function SignUpPage() {
    const navigate = useNavigate();
    const { name, setName, email, setEmail, nickname, setNickname, password, setPassword, handleSignUp } = useSignUp();

    const { data: isEmailValid, refetch: checkEmailValidation } = useCheckEmailValidation(email, false);

    const [emailChecked, setEmailChecked] = useState(false);

    const handleEmailCheck = async () => {
        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        try {
            await checkEmailValidation();
            setEmailChecked(true);
        } catch (error) {
            console.error("이메일 중복 확인 중에 에러가 발생했습니다.", error);
        }
    };

    return (
        <div>
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold ">LOOK4ME 에 처음이신가요?</h1>
                <p className="my-1 text-gray-500">회원가입 후 맞춤화된 코디 추천 서비스를 경험해보세요.</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                        id="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력해주세요"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">닉네임</Label>
                    <Input
                        id="nickname"
                        type="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="닉네임을 입력해주세요"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">이메일 주소</Label>
                    <div className="flex gap-1">
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일을 입력해주세요"
                            required
                        />
                        <Button variant="outline" onClick={handleEmailCheck}>
                            중복 확인
                        </Button>
                    </div>
                    {emailChecked && isEmailValid !== undefined && (
                        <p className={`text-sm ${isEmailValid ? "text-green-600" : "text-red-600"}`}>
                            {isEmailValid ? "사용 가능한 이메일입니다." : "이미 사용 중인 이메일입니다."}
                        </p>
                    )}
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

                <Button
                    className="w-full"
                    onClick={() => handleSignUp()}
                    disabled={!isEmailValid || !emailChecked || !name || !nickname || !password}
                >
                    회원가입
                </Button>

                <p className="text-center">
                    <span>이미 가입하셨나요? </span>
                    <span
                        className="ml-1 font-semibold cursor-pointer text-primary"
                        onClick={() => navigate("/auth/signin")}
                    >
                        로그인
                    </span>
                </p>
            </div>
        </div>
    );
}
