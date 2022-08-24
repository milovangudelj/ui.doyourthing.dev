import { FormInput, InputLabel, TextInput } from "../../atoms";

type FormElementType = "email" | "password" | "text";

interface FormElementProps {
	type: FormElementType;
	name?: string;
	label?: string;
	placeholder?: string;
}

const types: {
	[Key in FormElementType]: {
		name: string;
		label: string;
		placeholder: string;
	};
} = {
	email: {
		label: "Email",
		name: "email",
		placeholder: "hello@world.com",
	},
	password: {
		label: "Password",
		name: "password",
		placeholder: "••••••••••••",
	},
	text: {
		label: "Text",
		name: "text",
		placeholder: "Some text",
	},
};

export const FormElement = ({
	type,
	label,
	name,
	placeholder,
}: FormElementProps) => {
	return (
		<div className="flex w-fit flex-col space-y-2">
			<InputLabel
				htmlFor={name ?? types[type].name}
				label={label ?? types[type].label}
			/>
			<FormInput
				type={type}
				props={{
					name: name ?? types[type].name,
					placeholder: placeholder ?? types[type].placeholder,
				}}
			/>
		</div>
	);
};
