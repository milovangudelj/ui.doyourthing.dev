import cn from "classnames";

export interface TextInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
}

export const TextInput = ({
	name = "text",
	id = name,
	placeholder = "More text",
	className,
}: TextInputProps) => {
	return (
		<input
			type="text"
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

export default TextInput;
