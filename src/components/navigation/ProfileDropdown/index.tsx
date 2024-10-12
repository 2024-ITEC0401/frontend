import * as Styles from "@/components/navigation/ProfileDropdown/index.style";

const ProfileDropdown: React.FC = () => {
    return (
        <Styles.DropdownContainer>
            <Styles.DropdownMenu
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
            >
                <Styles.MenuItem>
                    {/* 여기도 나중에 프로필 이미지 넣어야 함  */}
                    <Styles.ProfileImage src="src/assets/SubLogo.png" alt="Profile" />
                    <Styles.ProfileID>people@gmail.com</Styles.ProfileID>
                </Styles.MenuItem>
                <Styles.MenuItem>내 정보 수정</Styles.MenuItem>
                <Styles.MenuItem>좋아요 표시한 코드</Styles.MenuItem>
                <Styles.MenuItem>로그아웃</Styles.MenuItem>
            </Styles.DropdownMenu>
        </Styles.DropdownContainer>
    );
};

export default ProfileDropdown;
