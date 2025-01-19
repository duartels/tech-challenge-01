'use client';

type ButtonProps = {
	children: React.ReactNode;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, disabled = false, ...props }: ButtonProps) => {
	return (
		<button
			className={`w-[144px] sm:w-[250px] h-12 bg-primary rounded-lg flex justify-center items-center px-12 text-tertiary font-bold hover:filter hover:opacity-85 transition delay-100 disabled:bg-tertiary disabled:text-primary disabled:cursor-not-allowed`}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
