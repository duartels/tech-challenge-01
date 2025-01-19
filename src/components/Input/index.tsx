export type InputProps = {
	label?: string;
	fullWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, fullWidth = false, ...props }: InputProps) => {
	return (
		<div className={`${fullWidth ? 'w-full' : 'w-[144px] sm:w-[250px]'} flex flex-col text-black`}>
			{label && (
				<label htmlFor="input" className="text-primary font-semibold">
					{label}
				</label>
			)}
			<input
				className="w-full h-12 bg-white rounded-lg text-black-grayish text-center border-[1px] border-primary focus:outline-none "
				{...props}
			/>
		</div>
	);
};
