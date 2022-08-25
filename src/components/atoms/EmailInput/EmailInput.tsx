import cn from "classnames";
import { forwardRef, LegacyRef } from "react";

export interface EmailInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
}

export const EmailInput = forwardRef(
	(
		{
			name = "email",
			id = name,
			placeholder = "hello@world.test",
			className,
		}: EmailInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<input
				ref={ref}
				type="email"
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

export default EmailInput;
