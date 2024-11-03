import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";
import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export default function SignInPage() {
    return (
        <Styles.Layout>
            <Styles.Wrapper>
                <Styles.Container>
                    <Styles.TitleContainer>
                        <Styles.Title>
                            <Text size="2xl" weight={900}>
                                <span style={{ color: "var(--color-primary)" }}>Look4Me</span> 에 오신 것을 환영해요!
                            </Text>
                        </Styles.Title>
                        <Styles.SubTitle>
                            <Text size="s" color="#767676">
                                로그인 후 맞춤화된 코디 추천 서비스를 경험해보세요
                            </Text>
                        </Styles.SubTitle>
                    </Styles.TitleContainer>

                    <Styles.FormContainer>
                        <Styles.InputContainer>
                            <label>
                                <Text size="s" color="#111111" weight={700}>
                                    이메일 주소
                                </Text>
                                <Input width="100%" height="50px"></Input>
                            </label>
                        </Styles.InputContainer>

                        <Styles.InputContainer>
                            <label>
                                <Text size="s" color="#111111" weight={700}>
                                    비밀번호
                                </Text>
                                <Input width="100%" height="50px" type="password"></Input>
                            </label>
                        </Styles.InputContainer>
                    </Styles.FormContainer>

                    <Button variant="primary" width="100%" height="54px">
                        다음으로
                    </Button>

                    <Styles.NavigateToSignUp>
                        <Text size="s" color="#767676">
                            아직 Look4Me 회원이 아니신가요?
                            <span style={{ color: "var(--color-primary)", fontWeight: "bolder" }}> 회원가입</span>
                        </Text>
                    </Styles.NavigateToSignUp>
                </Styles.Container>
            </Styles.Wrapper>
        </Styles.Layout>
    );
}
