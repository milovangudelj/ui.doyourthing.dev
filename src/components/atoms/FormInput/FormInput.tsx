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

	return (
		<div className="form-input flex w-full items-center rounded border-zinc-300 bg-transparent p-0 text-dark-he placeholder:text-dark-le focus-within:border-accent-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-accent-500 dark:border-zinc-600 dark:text-light-he dark:placeholder:text-light-le focus-within:dark:border-accent-400 focus-within:dark:ring-accent-400">
			<Suspense fallback={<EmailInput />}>{element[type]}</Suspense>
		</div>
	);
};
