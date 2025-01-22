import { HeaderProps } from '@domain';
import { useModal } from '@hooks';
import Image from 'next/image';
import React, { useCallback } from 'react';

import { Modal } from '../Modal';

export const Header: React.FC<HeaderProps> = ({ name, menuOptions }) => {
	const { isModalOpen, closeModal, openModal } = useModal();

	const handleOpenModal = useCallback(() => openModal(), [openModal]);

	return (
		<header className=" sticky shadow-xl top-0 bg-primary w-full flex justify-center items-center py-3 px-4 z-20">
			<div className="max-w-2xl w-full flex justify-between sm:justify-end">
				<button className="sm:hidden hover:cursor-pointer" onClick={handleOpenModal}>
					<Image width={32} height={32} src="./icons/icon_menu.svg" alt="menu-button" />
				</button>
				<div className="flex justify-between items-center gap-x-12">
					<h2>{name}</h2>
					<Image width={40} height={40} src="./icons/Avatar.svg" alt="avatar-icon" />
				</div>
			</div>
			{!!isModalOpen && (
				<Modal onCloseModal={closeModal} classNameExt="sm:hidden">
					<div className="text-black-default flex flex-col gap-4 mt-2 mb-6 mx-6">
						{menuOptions.map((option, index) => (
							<React.Fragment key={`option-${option}-${index}`}>
								<a href={`#${option}`} className="text-center">
									{option}
								</a>
								<hr className={`h-0.5 border-t-0 bg-black-default ${index === menuOptions.length - 1 ? 'hidden' : ''}`} />
							</React.Fragment>
						))}
					</div>
				</Modal>
			)}
		</header>
	);
};
