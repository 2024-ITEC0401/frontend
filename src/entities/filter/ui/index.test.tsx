import { BrowserRouter, useSearchParams } from "react-router-dom";

import { useFilter } from "@/entities/filter/hooks/useFilter";
import { Filter } from "@/entities/filter/ui/Filter";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn(),
}));

jest.mock("@/hooks/useFilter", () => ({
    useFilter: jest.fn(),
}));

describe("Filter 컴포넌트", () => {
    const searchPramsMock = new URLSearchParams();
    const setSearchParamsMock = jest.fn();
    const handleFilterMock = jest.fn();

    beforeEach(() => {
        (useFilter as jest.Mock).mockReturnValue({ searchParams: searchPramsMock, handleFilter: handleFilterMock });
        (useSearchParams as jest.Mock).mockReturnValue([searchPramsMock, setSearchParamsMock]);

        render(
            <BrowserRouter>
                <Filter
                    width={"400px"}
                    filterParams={{
                        weather: [
                            {
                                displayName: "맑음",
                                filterName: "sunny",
                            },
                            {
                                displayName: "흐림",
                                filterName: "cloudy",
                            },
                        ],
                    }}
                />
            </BrowserRouter>,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("displayName 에 해당하는 해시태그가 화면에 표시된다", () => {
        expect(screen.getByText("맑음"));
        expect(screen.getByText("흐림"));
    });

    test("해시태그 클릭시 handleFilter 가 filterKey, filterValue 로 호출된다", () => {
        const el = screen.getByText("맑음");
        fireEvent.click(el);

        expect(handleFilterMock).toHaveBeenCalledWith({ filterValue: "sunny" });
    });
});
