import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EmailInput, EmailInputProps } from "./EmailInput";

export default {
	title: "Atoms/FormInputs/EmailInput",
	component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args: EmailInputProps) => (
	<EmailInput {...args} />
);

export const Email = Template.bind({});
Email.args = {};
