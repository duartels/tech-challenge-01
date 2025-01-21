import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { GoAlertFill } from 'react-icons/go';

import { ModalDeleteConfirmationProps, Transaction } from '../../domain';
import { useTransaction } from '../../hooks';
import { Modal } from '../Modal';

const ModalDeleteConfirmation: React.FC<ModalDeleteConfirmationProps> = ({ closeModal, transactionId }) => {
	const { getTransaction, deleteTransaction } = useTransaction();
	const [transaction, setTransaction] = useState<Transaction>();

	useEffect(() => {
		const fetchTransaction = () => {
			const transactionFromDatabase = getTransaction(transactionId);
			if (Object.values(transactionFromDatabase).length) setTransaction(transactionFromDatabase);
		};
		fetchTransaction();
	}, [transactionId]);

	const handleDeleteTransaction = async () => {
		await deleteTransaction(transactionId);
		closeModal();
	};

	return (
		!!transaction && (
			<Modal onCloseModal={closeModal}>
				<div className="flex flex-col gap-6">
					<div className="sm:flex sm:items-start w-full">
						<div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-300 sm:mx-0 sm:size-15">
							<GoAlertFill stroke="red" color="red" size={25} />
						</div>
						<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
							<h3 className="text-base font-semibold text-gray-900" id="modal-title">
								Deletar a transação
							</h3>

							<div className="mt-2">
								<p className="text-sm text-black-default">
									Você está prestes a deletar esta transação. Esta ação é permanente e não pode ser desfeita.
								</p>
							</div>
						</div>
					</div>
					<div>
						<span className="m-0">
							<p className="text-sm text-gray-500 flex justify-start items-center">
								<br />
								<b className="my-2 text-secondary">Detalhes da Transação:</b>
							</p>
						</span>
						<span>
							<ul className=" text-sm text-gray-500 flex justify-center items-center gap-2 mt-4">
								<li>
									<b>Data:</b> {`${format(new Date(transaction?.date || ''), 'yyyy-MM-dd')}`}
								</li>
								<b>|</b>
								<li>
									<b>Valor:</b> {`R$ ${transaction?.amount}`}
								</li>
								<b>|</b>
								<li>
									<b>Tipo:</b> {`${transaction?.category}`}
								</li>
							</ul>
						</span>
					</div>
					<p className="text-sm text-gray-500 flex justify-start items-center"></p>
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
		)
	);
};

export default ModalDeleteConfirmation;
