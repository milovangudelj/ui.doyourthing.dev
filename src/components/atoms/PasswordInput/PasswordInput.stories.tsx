import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PasswordInput } from "./PasswordInput";

export default {
	title: "Atoms/Inputs/PasswordInput",
	component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args: any) => (
	<PasswordInput {...args} />
);

export const Password = Template.bind({});
Password.args = {
	name: "Password",
};
