import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
	color,
	...props
}: ButtonProps) => (
	<div className="flex space-x-4">
		<Button color="primary" {...props} />
		<Button color="accent" {...props} />
		<Button color="red" {...props} />
		<Button color="blue" {...props} />
		<Button color="zinc" {...props} />
	</div>
);

export const Filled = Template.bind({});
Filled.args = {
	children: "Button",
	variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Button",
	variant: "outlined",
};

export const Borderless = Template.bind({});
Borderless.args = {
	children: "Button",
	variant: "text",
};
