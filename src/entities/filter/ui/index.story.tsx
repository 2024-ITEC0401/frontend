import { Filter } from "@/entities/filter/ui/Filter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Filter> = {
    title: "FORMS/Filter",
    component: Filter,
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
    args: {
        width: "400px",
    },
    render: (args) => {
        return (
            <Filter
                width={args.width}
                height={args.height}
                filterParams={Object.freeze({
                    날씨별: [
                        {
                            displayName: "맑음",
                            filterName: "sunny",
                        },
                        {
                            displayName: "흐림",
                            filterName: "cloudy",
                        },
                    ],
                })}
            ></Filter>
        );
    },
};
