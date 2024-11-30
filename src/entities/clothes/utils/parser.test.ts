import { parseClothesAnalysisResponse } from "@/entities/clothes/utils/parser";

describe("parseClothesAnalysisResponse", () => {
    test("should parse response correctly", () => {
        const response = {
            baseColor: "연회색",
            category: {
                mainCategory: "상의",
                subCategory: "후드",
            },
            description: "네이비색 로고가 포인트인 연회색 후드티셔츠",
            imageUri: "gs://user_closet/images/3f288fee-09a5-4a7e-970c-e04d81a87da8.jpg",
            name: "MAEF.GRID 아치 로고 후드티",
            pattern: "무지",
            pointColor: "네이비",
            season: "가을",
            style: "데일리",
            textile: "면",
        };

        const result = parseClothesAnalysisResponse(response);

        expect(result).toEqual({
            name: "MAEF.GRID 아치 로고 후드티",
            description: "네이비색 로고가 포인트인 연회색 후드티셔츠",
            category: "TOPS",
            subCategory: "HOODIE",
            color: "LIGHT_GRAY",
            pointColor: "NAVY",
            pattern: "SOLID",
            season: "AUTUMN",
            style: "DAILY",
            textile: "COTTON",
        });
    });
});
