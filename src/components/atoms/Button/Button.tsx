export const Button = ({ label }: { label: string }) => {
	return (
		<button className="rounded bg-green-500 px-4 py-2 font-medium text-white">
			{label}
		</button>
	);
};
