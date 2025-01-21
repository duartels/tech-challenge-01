import { HeaderProps } from '@domain';
import React from 'react';

type TabletNavHeaderProps = {
	menuOptions: HeaderProps['menuOptions'];
};

export const TabletNavHeader: React.FC<TabletNavHeaderProps> = ({ menuOptions }) => {
	const gap = menuOptions.length > 0 ? `4` : '1rem';
	return (
		<nav className="w-full flex justify-center items-center m-6 hidden sm:flex md:hidden">
			<div className={`w-full max-w-4xl grid grid-flow-col auto-cols-fr gap-[${gap}] justify-center px-4 `}>
				{menuOptions.map((option, index) => (
					<a
						key={index}
						className="text-black-default whitespace-nowrap text-sm pb-2 text-center cursor-pointer hover:text-highlight hover:transition-all hover:border-b-[3px] hover:border-highlight ease-in-out"
					>
						{option}
					</a>
				))}
			</div>
		</nav>
	);
};
