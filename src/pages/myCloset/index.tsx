import { useEffect, useState } from "react";

import axios from "axios";

import styled from "@emotion/styled";

import CategorySection from "@/pages/myCloset/components/CategorySection";

export interface Cloth {
    id: number;
    brandName: string;
    imgSrc: string;
    category: string;
    subCategory?: string;
    color?: string;
    size?: string;
}

const filterClothesByCategory = (clothes: Cloth[], category: string) => {
    return clothes.filter((cloth) => cloth.category === category);
};

const MyClosetPage = () => {
    const [clothes, setClothes] = useState<Cloth[]>([]);

    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const response = await axios.get<Cloth[]>("/closet", {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN as string}`,
                    },
                });
                setClothes(response.data);
            } catch (error) {
                console.error("옷장 데이터를 불러오는데 실패했습니다.", error);
            }
        };
        fetchClothes();
    }, []);

    return (
        <PageWrapper>
            <CategorySection category="니트 / 스웨터" clothes={filterClothesByCategory(clothes, "니트 / 스웨터")} />
            <CategorySection category="셔츠 / 블라우스" clothes={filterClothesByCategory(clothes, "셔츠 / 블라우스")} />
            <CategorySection category="맨투맨 / 후드티" clothes={filterClothesByCategory(clothes, "맨투맨 / 후드티")} />
            <CategorySection
                category="정장 / 세미 정장"
                clothes={filterClothesByCategory(clothes, "맨투맨 / 후드티")}
            />
        </PageWrapper>
    );
};

export default MyClosetPage;

const PageWrapper = styled.div`
    padding: 20px;
`;
