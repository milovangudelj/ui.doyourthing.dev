export const Link = ({ href, label }: { href: string; label: string }) => {
	return (
		<a
			href={href}
			className="rounded bg-green-500 px-4 py-2 font-medium text-white"
		>
			{label}
		</a>
	);
};
