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

interface FormInputProps {}

export const FormInput = ({
	type,
	props,
}: {
	type: keyof TypeMap;
	props: TypeMap[typeof type];
}) => {
	const element: {
		[Property in keyof TypeMap]: (props: TypeMap[Property]) => JSX.Element;
	} = {
		email: (props) => <EmailInput {...props} />,
		password: (props) => <PasswordInput {...props} />,
		text: (props) => <TextInput {...props} />,
	};
	const El = element[type];

	return (
		<Suspense fallback={<EmailInput />}>
			<El />
		</Suspense>
	);
};
