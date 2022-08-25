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

	return (
		<span className="border-zinc-300 dark:border-zinc-600 form-input flex w-fit items-center rounded bg-transparent py-2 px-3 text-dark-he placeholder:text-dark-le focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:text-light-he dark:placeholder:text-light-le dark:focus:border-primary-400 dark:focus:ring-primary-400">
			<Suspense fallback={<EmailInput />}>{element[type]}</Suspense>
		</span>
	);
};
