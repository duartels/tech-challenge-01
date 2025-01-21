import React from 'react';
import { GoAlertFill } from 'react-icons/go';

import { Modal } from '../Modal';

export type ModalConfirmationProps = {
	closeModal: VoidFunction;
	handleDeleteTransaction: VoidFunction;
};

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ closeModal, handleDeleteTransaction }) => {
	return (
		<Modal onCloseModal={closeModal}>
			<div className="sm:flex sm:items-start">
				<div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-300 sm:mx-0 sm:size-15">
					<GoAlertFill stroke="red" color="red" size={25} />
				</div>
				<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
					<h3 className="text-base font-semibold text-gray-900" id="modal-title">
						Deletar a transação
					</h3>
					<div className="mt-2">
						<p className="text-sm text-gray-500">
							Você tem certeza que deseja deletar esta transação? A transação será permanentemente removida. Esta ação não pode ser
							desfeita.
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-4">
				<button
					onClick={handleDeleteTransaction}
					type="button"
					className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
				>
					Deletar
				</button>
				<button
					onClick={closeModal}
					type="button"
					className="bg mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
				>
					Cancelar
				</button>
			</div>
		</Modal>
	);
};

export default ModalConfirmation;
