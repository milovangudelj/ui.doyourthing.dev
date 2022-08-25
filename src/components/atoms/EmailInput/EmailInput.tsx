import cn from "classnames";

export interface EmailInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
}

export const EmailInput = ({
	name = "email",
	id = name,
	placeholder = "hello@world.test",
	className,
}: EmailInputProps) => {
	return (
		<input
			type="email"
			name={name}
			id={id}
			placeholder={placeholder}
			className={cn(
				"border-none bg-transparent p-0 ring-0 focus:border-none focus:ring-0",
				className
			)}
		/>
	);
};

export default EmailInput;
