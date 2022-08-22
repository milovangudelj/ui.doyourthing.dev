import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: any) => (
	<Button {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
	children: "Button",
	type: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Button",
	type: "outlined",
};

export const Borderless = Template.bind({});
Borderless.args = {
	children: "Button",
	type: "borderless",
};
