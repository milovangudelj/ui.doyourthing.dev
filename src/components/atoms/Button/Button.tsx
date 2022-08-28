import {
	ReactNode,
	forwardRef,
	LegacyRef,
	ComponentPropsWithoutRef,
} from "react";
import cn from "classnames";

type ButtonVariant = "filled" | "outlined" | "text";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "primary" | "accent" | "red" | "blue" | "zinc";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
	fullWidth?: boolean;
	className?: string;
	children: ReactNode;
}

const colors = {
	filled: {
		background: {
			primary: "bg-primary-500 hover:bg-primary-400 active:bg-primary-600",
			accent: "bg-accent-500 hover:bg-accent-400 active:bg-accent-600",
			red: "bg-red-500 hover:bg-red-400 active:bg-red-600",
			blue: "bg-blue-500 hover:bg-blue-400 active:bg-blue-600",
			zinc: "bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600",
		},
		border: {
			primary:
				"border-primary-500 hover:border-primary-400 active:border-primary-600",
			accent:
				"border-accent-500 hover:border-accent-400 active:border-accent-600",
			red: "border-red-500 hover:border-red-400 active:border-red-600",
			blue: "border-blue-500 hover:border-blue-400 active:border-blue-600",
			zinc: "border-zinc-500 hover:border-zinc-400 active:border-zinc-600",
		},
		text: {
			primary: "text-white",
			accent: "text-white",
			red: "text-white",
			blue: "text-white",
			zinc: "text-white",
		},
	},
	outlined: {
		background: {
			primary:
				"bg-transparent hover:bg-primary-500/5 active:bg-primary-500/10",
			accent: "bg-transparent hover:bg-accent-500/5 active:bg-accent-500/10",
			red: "bg-transparent hover:bg-red-500/5 active:bg-red-500/10",
			blue: "bg-transparent hover:bg-blue-500/5 active:bg-blue-500/10",
			zinc: "bg-transparent hover:bg-zinc-500/5 active:bg-zinc-500/10",
		},
		border: {
			primary: "border-primary-500",
			accent: "border-accent-500",
			red: "border-red-500",
			blue: "border-blue-500",
			zinc: "border-zinc-500",
		},
		text: {
			primary: "text-primary-500",
			accent: "text-accent-500",
			red: "text-red-500",
			blue: "text-blue-500",
			zinc: "text-zinc-500",
		},
	},
	text: {
		background: {
			primary:
				"bg-transparent hover:bg-primary-500/5 active:bg-primary-500/10",
			accent: "bg-transparent hover:bg-accent-500/5 active:bg-accent-500/10",
			red: "bg-transparent hover:bg-red-500/5 active:bg-red-500/10",
			blue: "bg-transparent hover:bg-blue-500/5 active:bg-blue-500/10",
			zinc: "bg-transparent hover:bg-zinc-500/5 active:bg-zinc-500/10",
		},
		border: {
			primary: "border-transparent",
			accent: "border-transparent",
			red: "border-transparent",
			blue: "border-transparent",
			zinc: "border-transparent",
		},
		text: {
			primary: "text-primary-500",
			accent: "text-accent-500",
			red: "text-red-500",
			blue: "text-blue-500",
			zinc: "text-zinc-500",
		},
	},
};

const sizes = {
	btn: {
		sm: "py-1 px-1.5",
		md: "py-1.5 px-2",
		lg: "py-2 px-2.5",
	},
	text: {
		sm: "px-1 text-sm leading-4",
		md: "px-1 text-base leading-5",
		lg: "px-1.5 text-lg leading-6",
	},
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "filled",
			size = "lg",
			color = "primary",
			fullWidth = false,
			className,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					sizes.btn[size],
					sizes.text[size],
					colors[variant].background[color],
					colors[variant].border[color],
					colors[variant].text[color],
					"rounded border-2 font-medium transition",
					{ "w-full": fullWidth },
					className
				)}
				{...props}
			>
				<span>{children}</span>
			</button>
		);
	}
);
