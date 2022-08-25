import React, { Suspense, useEffect, useRef, useState } from "react";
import cn from "classnames";

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
	const [focused, setFocused] = useState<boolean>(false);
	const formInput = useRef<HTMLInputElement>(null);

	const element: {
		[K in keyof TypeMap]: JSX.Element;
	} = {
		email: <EmailInput ref={formInput} {...props} />,
		password: <PasswordInput ref={formInput} {...props} />,
		text: <TextInput ref={formInput} {...props} />,
	};

	const focus = () => {
		setFocused(true);
	};
	const blur = () => {
		setFocused(false);
	};

	useEffect(() => {
		formInput.current?.addEventListener("focus", focus);
		formInput.current?.addEventListener("blur", blur);

		return () => {
			formInput.current?.removeEventListener("focus", focus);
			formInput.current?.removeEventListener("blur", blur);
		};
	}, []);

	return (
		<div
			className={cn(
				"form-input flex w-full items-center rounded bg-transparent p-0 text-dark-he placeholder:text-dark-le dark:text-light-he dark:placeholder:text-light-le",
				{
					"border-primary-500 outline-none ring-1 ring-primary-500 dark:border-primary-400 dark:ring-primary-400":
						focused,
				},
				{
					"border-zinc-300 dark:border-zinc-600": !focused,
				}
			)}
		>
			<Suspense fallback={<EmailInput ref={formInput} />}>
				{element[type]}
			</Suspense>
		</div>
	);
};
