import { PopOver, PopOverItem } from "@/components/overlay/PopOver";

import { fireEvent, render, screen } from "@testing-library/react";

describe("PopOver 컴포넌트", () => {
    test("PopOverItem 컴포넌트가 화면에 표시된다", () => {
        render(
            <PopOver width="100px">
                <PopOverItem>item</PopOverItem>
            </PopOver>,
        );

        expect(screen.getByText("item"));
    });

    test("PopOverItem 클릭시 onClick 함수가 호출된다", () => {
        const onClick = jest.fn();

        render(
            <PopOver width="100px">
                <PopOverItem onClick={onClick}>item</PopOverItem>
            </PopOver>,
        );

        const el = screen.getByText("item");
        fireEvent.click(el);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
