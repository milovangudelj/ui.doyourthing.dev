import { FormInput, FormInputProps, InputLabel, TextInput } from "../../atoms";

type FormElementType = "email" | "password" | "text";

type FormElementProps = {
	label?: string;
} & FormInputProps;

const types: {
	[Key in FormElementType]: {
		name: string;
		label: string;
	};
} = {
	email: {
		label: "Email",
		name: "email",
	},
	password: {
		label: "Password",
		name: "password",
	},
	text: {
		label: "Text",
		name: "text",
	},
};

export const FormElement = ({ type, label, ...props }: FormElementProps) => {
	return (
		<div className="flex w-fit flex-col space-y-2">
			<InputLabel
				htmlFor={props?.name ?? types[type].name}
				label={label ?? types[type].label}
			/>
			<FormInput type={type} {...props} />
		</div>
	);
};
