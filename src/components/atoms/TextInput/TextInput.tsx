import cn from "classnames";
import { forwardRef, LegacyRef } from "react";

export interface TextInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
}

export const TextInput = forwardRef(
	(
		{
			name = "text",
			id = name,
			placeholder = "More text",
			className,
		}: TextInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<input
				ref={ref}
				type="text"
				name={name}
				id={id}
				placeholder={placeholder}
				className={cn(
					"border-none bg-transparent py-2 px-3 ring-0 focus:border-none focus:ring-0",
					className
				)}
			/>
		);
	}
);

export default TextInput;
