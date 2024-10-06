import { useState } from "react";

import { Dropdown } from "@/components/forms/Dropdown";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
    title: "Forms/Dropdown",
    component: Dropdown,
    argTypes: {
        setSelectedOption: { action: "selected" },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;
type Story = StoryFn<typeof Dropdown>;

const Template: Story = (args) => {
    const [selectedOption, setSelectedOption] = useState(args.selectedOption);

    return <Dropdown {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
};

export const Default = Template.bind({});
Default.args = {
    options: ["Option 1", "Option 2", "Option 3"],
    selectedOption: "Option 1",
};