import { HashTag } from "@/components/display/HashTag";

import { fireEvent, render, screen } from "@testing-library/react";

describe("HashTag 컴포넌트", () => {
    test("클릭시 onClick 메서드가 호출된다", async () => {
        const handleClick = jest.fn();

        render(<HashTag onClick={handleClick}>TEST_HASHTAG</HashTag>);
        const el = await screen.findByText("TEST_HASHTAG");

        fireEvent.click(el);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
