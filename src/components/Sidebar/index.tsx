import { SidebarProps } from '../../domain';

export const Sidebar: React.FC<SidebarProps> = ({ title, menuOptions, isOpen, onClose, orientation = 'left', hideInBreakpoints }) => {
	return (
		<div
			id="drawer-navigation"
			className={`fixed top-0 ${orientation === 'left' ? 'left-0' : 'right-0'} z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white  ${hideInBreakpoints && 'hidden sm: hidden md:block'} ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} bg-white`}
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
				<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
				<span className="sr-only">Close menu</span>
			</button>

			{/* Menu items */}
			<div className="py-4 overflow-y-auto">
				<ul className="space-y-2 font-medium">
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
