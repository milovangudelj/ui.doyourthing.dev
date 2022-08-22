export const Link = ({
	href,
	children,
	className,
}: {
	href?: string;
	children?: React.ReactNode;
	className?: string;
}) => {
	const classes =
		`text-primary-500 underline hover:text-primary-400 active:text-primary-600` +
		`${className ? " " + className : ""}`;

	return (
		<a href={href} className={classes}>
			{children}
		</a>
	);
};
