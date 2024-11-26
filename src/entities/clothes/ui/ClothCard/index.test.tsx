import { ClothCard } from "@/entities/clothes/ui/ClothCard";
import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("ClothCard 컴포넌트", () => {
    test("PopOverButton 클릭시 PopOver 컴포넌트가 화면에 표시된다", () => {
        render(<ClothCard title="title"></ClothCard>);

        const popOverBtn = screen.getByTestId("pop-over-btn");
        fireEvent.click(popOverBtn);

        expect(screen.getAllByTestId("pop-over-item")[0]).toBeInTheDocument();
    });

    test("PopOverButton 외부 클릭시 PopOver 컴포넌트가 화면에서 사라진다", () => {
        render(<ClothCard title="title"></ClothCard>);

        fireEvent.click(document.body);

        expect(screen.queryByTestId("pop-over-item")).not.toBeInTheDocument();
    });
});
