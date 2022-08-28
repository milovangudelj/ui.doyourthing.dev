import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput, TextInputProps } from "./TextInput";

export default {
	title: "Atoms/FormInputs/TextInput",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const Text = Template.bind({});
Text.args = {};
