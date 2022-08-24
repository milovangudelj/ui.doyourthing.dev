import React, { Suspense } from "react";

import { EmailInputProps, PasswordInputProps, TextInputProps } from "../";

import { EmailInput } from "../";
const TextInput = React.lazy(() => import("../TextInput/TextInput"));
const PasswordInput = React.lazy(
	() => import("../PasswordInput/PasswordInput")
);

type TypeMap = {
	email: EmailInputProps;
	password: PasswordInputProps;
	text: TextInputProps;
};

type GenerateCombos<T> = {
	[K in keyof T]: {
		type: K;
	} & T[K];
}[keyof T];

export type FormInputProps = GenerateCombos<TypeMap>;

export const FormInput = ({ type, ...props }: FormInputProps) => {
	const element: {
		[K in keyof TypeMap]: JSX.Element;
	} = {
		email: <EmailInput {...props} />,
		password: <PasswordInput {...props} />,
		text: <TextInput {...props} />,
	};
	const El = element[type];

	return <Suspense fallback={<EmailInput />}>{element[type]}</Suspense>;
};
