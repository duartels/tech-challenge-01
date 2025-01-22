import { ListProps } from '@domain';
import { useList } from '@hooks';
import { useState } from 'react';
import { LiaTrashSolid } from 'react-icons/lia';
import { MdEdit } from 'react-icons/md';

import ModalDeleteConfirmation from '../ModalDeleteConfirmation';
import { ModalEditTransaction } from '../ModalEditTransaction';

export const List: React.FC<ListProps> = ({ transactions }) => {
	const { groupedTransactions, parseToReal, parseDate, parseType } = useList();
	const [transactionIdToDelete, setTransactionIdToDelete] = useState<number | null>(null);
	const [transactionIdToEdit, setTransactionIdToEdit] = useState<number | null>(null);

	const transactionsByMonth = groupedTransactions(transactions);

	return (
		<>
			<div className="bg-white min-w-60 p-4 h-screen rounded-lg">
				<h2 className="text-xl font-bold text-black-default">Extrato</h2>
				<div className="mt-4"></div>

				{Object.entries(transactionsByMonth).map(([month, trns]) => (
					<div key={month} className="mt-4 border-b border-gray-200 pb-4">
						<h3 className="text-sm font-bold text-primary">{month}</h3>
						<ul className="mt-2">
							{trns.map((transaction) => (
								<li key={transaction.id} className="flex justify-between mt-2">
									<section className="flex flex-col gap-1">
										<span className="text-xs text-gray-600">{parseType(transaction)}</span>

										<span className={`text-xs text-gray-500 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
											{parseToReal(transaction.amount)}
										</span>
									</section>
									<div className="ml-8 flex items-center gap-2">
										{new Date(transaction.date) && <span className="text-xs text-gray-600">{parseDate(transaction.date)}</span>}

										<button className="bg-primary rounded-xl p-1" onClick={() => setTransactionIdToEdit(transaction.id)}>
											<MdEdit size={16} />
										</button>

										<button className="bg-primary rounded-xl p-1" onClick={() => setTransactionIdToDelete(transaction.id)}>
											<LiaTrashSolid size={16} />
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			{transactionIdToEdit && <ModalEditTransaction transactionId={transactionIdToEdit} onClose={() => setTransactionIdToEdit(null)} />}

			{transactionIdToDelete && (
				<ModalDeleteConfirmation transactionId={transactionIdToDelete} closeModal={() => setTransactionIdToDelete(null)} />
			)}
		</>
	);
};
