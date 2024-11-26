import { useState } from "react";

import { Chip } from "@/components/display/Chip";
import { Input } from "@/components/forms/Input";

import * as Styles from "@/pages/myPage/index.style";
import { ageList, type AgeOption } from "@/pages/myPage/utils/ageList";
import { colorList } from "@/pages/myPage/utils/colorList";
import { skintoneList, type SkinToneOption } from "@/pages/myPage/utils/skintoneList";
import { styleList, type StyleOption } from "@/pages/myPage/utils/styleList";

import StyleCard, { SelectedCard } from "@/entities/clothes/ui/StyleCard";
import { ColorPalette, SelectedColor } from "@/entities/color/ui/ColorPalette/ColorPalette";

const MyPage = () => {
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [selectedSkinTone, setSelectedSkinTone] = useState<SkinToneOption | null>(null);
    const [selectedAge, setSelectedAge] = useState<AgeOption | null>(null);
    const [selectedColors, setSelectedColors] = useState<SelectedColor | undefined>(undefined);
    const [selectedStyles, setSelectedStyles] = useState<SelectedCard | undefined>(undefined);

    const handleHeight = () => {
        setHeight(height);
    };

    const handleWeight = () => {
        setWeight(weight);
    };

    const handleSkinToneSelect = (tone: SkinToneOption) => {
        setSelectedSkinTone((prevTone) => (prevTone === tone ? null : tone));
    };

    const handleAgeSelect = (age: AgeOption) => {
        setSelectedAge((prevAge) => (prevAge === age ? null : age));
    };

    const handleColorSelect = (color: SelectedColor) => {
        setSelectedColors(color);
    };

    const handleStyleSelect = (style: StyleOption) => {
        setSelectedStyles(style);
    };

    return (
        <Styles.Container>
            <Styles.Title>내 정보 수정</Styles.Title>

            <Styles.InputContainer>
                <Input label="키" width="400px" height="70px" onBlur={handleHeight} />
                <Input label="몸무게" width="400px" height="70px" onBlur={handleWeight} />
            </Styles.InputContainer>

            <Styles.SectionTitle>피부톤</Styles.SectionTitle>
            <Styles.ChipContainer>
                {skintoneList.map((tone) => (
                    <Chip key={tone} active={selectedSkinTone === tone} onClick={() => handleSkinToneSelect(tone)}>
                        {tone}
                    </Chip>
                ))}
            </Styles.ChipContainer>

            <Styles.SectionTitle>연령대</Styles.SectionTitle>
            <Styles.ChipContainer>
                {ageList.map((age) => (
                    <Chip key={age} active={selectedAge === age} onClick={() => handleAgeSelect(age)}>
                        {age}
                    </Chip>
                ))}
            </Styles.ChipContainer>

            <Styles.SectionTitle>선호하는 색상</Styles.SectionTitle>
            <Styles.ColorPaletteContainer>
                <ColorPalette
                    width="800px"
                    height="100px"
                    colors={colorList.map((c) => ({
                        colorLabel: c.colorLabel,
                        colorValue: c.colorValue,
                        color: c.color,
                    }))}
                    onChange={(selectedColors) => {
                        if (selectedColors) {
                            handleColorSelect(selectedColors);
                        }
                    }}
                    defaultSelectedColor={selectedColors}
                />
            </Styles.ColorPaletteContainer>

            <Styles.SectionTitle>선호하는 스타일</Styles.SectionTitle>
            <Styles.StyleCardContainer>
                {styleList.map((style) => (
                    <StyleCard
                        key={style.id}
                        id={style.id}
                        imgSrc={style.imgSrc}
                        koreanCategory={style.koreanCategory}
                        englishCategory={style.englishCategory}
                        onChange={(selectedStyles) => {
                            if (selectedStyles) {
                                handleStyleSelect(selectedStyles);
                            }
                        }}
                        defaultSelectedCard={selectedStyles}
                    />
                ))}
            </Styles.StyleCardContainer>

            <Styles.SaveButton>저장하기</Styles.SaveButton>
        </Styles.Container>
    );
};

export default MyPage;
