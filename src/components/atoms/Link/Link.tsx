import { default as NextLink } from "next/link";

export const Link = ({
	href,
	external = false,
	children,
	label,
	className,
}: {
	href: string;
	external?: boolean;
	children?: React.ReactNode;
	label?: string;
	className?: string;
}) => {
	const classes =
		`text-primary-500 underline hover:text-primary-400 active:text-primary-600` +
		`${className ? " " + className : ""}`;

	return !external ? (
		<NextLink href={href} passHref>
			<a className={classes}>{children ?? label}</a>
		</NextLink>
	) : (
		<a href={href} className={classes}>
			{children ?? label}
		</a>
	);
};
