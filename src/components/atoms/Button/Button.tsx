export const Button = ({ label }: { label: string }) => {
	return (
		<button className="bg-green-500 rounded px-4 py-2 text-white font-medium">
			{label}
		</button>
	);
};
