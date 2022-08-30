import React from "react";
import { Meta, Story } from "@storybook/react";

import { GoogleButton, GoogleButtonProps } from "./GoogleButton";

export default {
	title: "Atoms/GoogleButton",
	component: GoogleButton,
} as Meta<GoogleButtonProps>;

const Template: Story<GoogleButtonProps> = (args) => <GoogleButton {...args} />;

export const SignIn: Story<GoogleButtonProps> = Template.bind({});
SignIn.args = {
	label: "Sign in with Google",
};

export const SignUp: Story<GoogleButtonProps> = Template.bind({});
SignUp.args = {
	label: "Sign up with Google",
};
