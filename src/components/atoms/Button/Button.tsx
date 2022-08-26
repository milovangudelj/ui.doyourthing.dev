import { MouseEventHandler } from "react";
import cn from "classnames";

type ButtonType = "filled" | "outlined" | "borderless";
type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
	size?: ButtonSize;
	className?: string;
}

export const Button = ({
	children,
	type = "filled",
	size = "lg",
	...props
}: ButtonProps) => {
	const colors = {
		filled:
			"bg-primary-500 border-primary-500 hover:bg-primary-400 active:bg-primary-600 hover:border-primary-400 active:border-primary-600 text-white",
		outlined:
			"bg-transparent border-primary-500 hover:bg-primary-500/5 active:bg-primary-500/10 text-primary-500",
		borderless:
			"bg-transparent border-transparent hover:bg-primary-500/5 active:bg-primary-500/10 text-primary-500",
	};

	const sizes = {
		btn: {
			lg: "py-2 px-2.5",
			md: "py-1.5 px-2",
			sm: "py-1 px-1.5",
		},
		text: {
			lg: "px-1.5 text-lg leading-6",
			md: "px-1 text-base leading-5",
			sm: "px-1 text-sm leading-4",
		},
	};

	return (
		<button
			onClick={props.onClick}
			className={cn(
				sizes.btn[size],
				colors[type],
				"rounded border-2 font-medium transition",
				props.className
			)}
		>
			<span className={`${sizes.text[size]}`}>{children}</span>
		</button>
	);
};
