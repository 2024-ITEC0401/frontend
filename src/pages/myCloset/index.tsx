import styled from "@emotion/styled";

import CategorySection from "@/pages/myCloset/components/CategorySection";

import mockImg from "@/__mocks__/sample-codi.jpg";

export interface Cloth {
    id: number;
    brandName: string;
    imgSrc: string;
    category: string;
    color: string;
    size: string;
}

// Mock Data
const exampleClothesData: Cloth[] = [
    {
        id: 1,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "화이트",
        size: "M",
    },
    {
        id: 2,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "블랙",
        size: "L",
    },
    {
        id: 3,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "화이트",
        size: "M",
    },
    {
        id: 4,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "블랙",
        size: "L",
    },
    {
        id: 5,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "화이트",
        size: "M",
    },
    {
        id: 6,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "블랙",
        size: "L",
    },
    {
        id: 7,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "화이트",
        size: "M",
    },
    {
        id: 8,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        color: "블랙",
        size: "L",
    },
    {
        id: 9,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "셔츠 / 블라우스",
        color: "화이트",
        size: "S",
    },
    {
        id: 10,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "맨투맨 / 후드티",
        color: "그레이",
        size: "M",
    },
];

const filterClothesByCategory = (clothes: Cloth[], category: string) => {
    return clothes.filter((cloth) => cloth.category === category);
};

const MyClosetPage = () => {
    return (
        <PageWrapper>
            <CategorySection
                category="니트 / 스웨터"
                clothes={filterClothesByCategory(exampleClothesData, "니트 / 스웨터")}
            />
            <CategorySection
                category="셔츠 / 블라우스"
                clothes={filterClothesByCategory(exampleClothesData, "셔츠 / 블라우스")}
            />
            <CategorySection
                category="맨투맨 / 후드티"
                clothes={filterClothesByCategory(exampleClothesData, "맨투맨 / 후드티")}
            />
        </PageWrapper>
    );
};

export default MyClosetPage;

const PageWrapper = styled.div`
    padding: 20px;
`;
