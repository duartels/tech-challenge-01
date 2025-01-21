import { SelectProps } from '@domain';
import { useEffect, useRef, useState } from 'react';

export const Select = ({
	options,
	name = 'select',
	placeholder = 'Select an option',
	value,
	onChange,
	fullWidth = false,
	disabled = false
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => !disabled && setIsOpen((prev) => !prev);

	const handleOptionClick = (optionValue: string) => {
		onChange({
			target: { name, value: optionValue }
		} as React.ChangeEvent<HTMLInputElement>);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const selectedOption = options.find((option) => option.value === value);

	return (
		<div ref={ref} className={`relative ${fullWidth ? 'w-full' : 'w-[280px] sm:w-[350px]'}`}>
			<button
				type="button"
				className={`relative w-full h-12 px-4 bg-white text-primary border border-primary rounded-lg focus:outline-none flex justify-between items-center z-10 ${disabled && 'hover:cursor-not-allowed hover: brightness-75'}`}
				onClick={toggleDropdown}
			>
				{selectedOption?.label || placeholder}
				{!disabled && (
					<span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M7 10l5 5 5-5H7z" fill="#004D61" />
						</svg>
					</span>
				)}
			</button>
			{isOpen && (
				<ul className="absolute w-full bg-white border border-primary border-t-0 rounded-b-lg mt-[-1px] z-20">
					{options.map(({ value: optionValue, label }) => (
						<li
							key={optionValue}
							className={`px-4 py-2 cursor-pointer text-primary hover:bg-tertiary hover:font-bold ${
								selectedOption?.value === optionValue ? 'bg-tertiary font-bold' : ''
							}`}
							onClick={() => handleOptionClick(optionValue)}
						>
							{label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
