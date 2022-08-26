import cn from "classnames";
import { FocusEventHandler, forwardRef, LegacyRef } from "react";

export interface EmailInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const EmailInput = forwardRef(
	(
		{
			name = "email",
			id = name,
			placeholder = "hello@world.test",
			className,
			onBlur,
			onFocus,
		}: EmailInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<input
				ref={ref}
				onFocus={onFocus}
				onBlur={onBlur}
				type="email"
				name={name}
				id={id}
				placeholder={placeholder}
				className={cn(
					"w-full border-none bg-transparent py-2 px-3 text-dark-he ring-0 placeholder:text-dark-le focus:border-none focus:ring-0 dark:text-light-he dark:placeholder:text-light-le",
					className
				)}
			/>
		);
	}
);

export default EmailInput;
