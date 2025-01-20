import Image from 'next/image';

import { SidebarProps } from '../../domain';

export const Sidebar: React.FC<SidebarProps> = ({ title, menuOptions, isOpen, onClose, orientation = 'left', hideInBreakpoints }) => {
	const isClosable = !!onClose;
	return (
		<div
			id="drawer-navigation"
			className={`absolute top-0 ${orientation === 'left' ? 'left-0' : 'right-0'} z-40 w-64 h-full p-4 overflow-y-auto transition-transform bg-white  ${hideInBreakpoints && 'hidden sm: hidden md:block'} ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} bg-white max-w-[200px] mt-[88px]`}
			tabIndex={-1}
			aria-labelledby="drawer-navigation-label"
		>
			{!!title && (
				<h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
					{title}
				</h5>
			)}

			{/* Close button */}
			<button
				type="button"
				onClick={onClose}
				aria-controls="drawer-navigation"
				className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
			>
				{isClosable && <Image width={20} height={20} src={'./icons/close_icon.svg'} alt="close_icon" />}
				<span className="sr-only">Close menu</span>
			</button>

			{/* Menu items */}
			<div className="py-4 overflow-y-auto">
				<ul className="space-y-2 font-medium text-center">
					{menuOptions.map((option, index) => (
						<li key={index}>
							<a
								href="#"
								className="flex justify-center items-center p-2 text-primary lg border-b-[2px] border-primary  hover:font-bold group "
							>
								<span className="ms-3">{option}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
