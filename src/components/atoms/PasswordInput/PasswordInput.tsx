import { FocusEventHandler, forwardRef, LegacyRef, useState } from "react";
import { Eye, EyeClosed } from "phosphor-react";
import cn from "classnames";

export interface PasswordInputProps {
	name?: string;
	id?: string;
	placeholder?: string;
	show?: boolean;
	className?: string;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const PasswordInput = forwardRef(
	(
		{
			name = "password",
			id = name,
			placeholder = "••••••••",
			show = false,
			className,
			onBlur,
			onFocus,
		}: PasswordInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		const [visible, setVisible] = useState(show);

		const toggle = () => {
			setVisible((current) => !current);
		};

		return (
			<>
				<input
					ref={ref}
					onFocus={onFocus}
					onBlur={onBlur}
					type={visible ? "text" : "password"}
					name={name}
					id={id}
					placeholder={placeholder}
					className={cn(
						"w-full border-none bg-transparent py-2 pl-3 pr-0 ring-0 focus:border-none focus:ring-0",
						className
					)}
				/>
				<button onClick={toggle} className="p-2.5">
					{visible ? (
						<Eye className="h-5 w-5 text-dark-me transition hover:text-dark-he dark:text-light-me dark:hover:text-light-he" />
					) : (
						<EyeClosed className="h-5 w-5 text-dark-me transition hover:text-dark-he dark:text-light-me dark:hover:text-light-he" />
					)}
				</button>
			</>
		);
	}
);

export default PasswordInput;
