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
	placeholder = name,
	className,
}: EmailInputProps) => {
	return (
		<input
			type="email"
			name={name}
			id={id}
			placeholder={placeholder}
			className={cn(
				"border-zinc-300 dark:border-zinc-600 form-input rounded bg-transparent text-dark-he placeholder:text-dark-le focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:text-light-he dark:placeholder:text-light-le dark:focus:border-primary-400 dark:focus:ring-primary-400",
				className
			)}
		/>
	);
};

export default EmailInput;
