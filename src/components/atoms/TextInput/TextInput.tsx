import cn from "classnames";
import { FocusEventHandler, forwardRef, LegacyRef } from "react";

export interface TextInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const TextInput = forwardRef(
	(
		{
			name = "text",
			id = name,
			placeholder = "More text",
			className,
			onBlur,
			onFocus,
		}: TextInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<input
				ref={ref}
				onFocus={onFocus}
				onBlur={onBlur}
				type="text"
				name={name}
				id={id}
				placeholder={placeholder}
				className={cn(
					"w-full border-none bg-transparent py-2 px-3 ring-0 focus:border-none focus:ring-0",
					className
				)}
			/>
		);
	}
);

export default TextInput;
