import styled from "@emotion/styled";

import { Text } from "@/components/typography/Text";

import { Cloth } from "@/pages/myCloset";
import ClothesList from "@/pages/myCloset/components/ClothesList";

interface CategorySectionProps {
    category: string;
    clothes: Cloth[];
}

const CategorySection = ({ category, clothes }: CategorySectionProps) => {
    return (
        <SectionWrapper>
            <CategoryTitle size="xl" weight="bold">
                {category}
            </CategoryTitle>
            <ClothesList clothes={clothes} />
        </SectionWrapper>
    );
};

export default CategorySection;

const SectionWrapper = styled.div`
    margin: 20px 0;
    margin-bottom: 70px;
`;

const CategoryTitle = styled(Text)``;
