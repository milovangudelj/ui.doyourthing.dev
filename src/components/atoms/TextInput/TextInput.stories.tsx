import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
	title: "Atoms/Inputs/TextInput",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: any) => (
	<TextInput {...args} />
);

export const Email = Template.bind({});
Email.args = {
	name: "Email",
};
