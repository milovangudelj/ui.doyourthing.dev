import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EmailInput } from "./EmailInput";

export default {
	title: "Atoms/Inputs/EmailInput",
	component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args: any) => (
	<EmailInput {...args} />
);

export const Email = Template.bind({});
Email.args = {
	name: "Email",
};
