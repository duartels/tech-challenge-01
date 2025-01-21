import { EditTransactionFormData, ModalDeleteTransactionProps, newTransactionSchema } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransaction } from '@hooks';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { transactionOptions } from '../../constants/transaction';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Select } from '../Select';

export const ModalDeleteTransaction = ({ onClose, transactionId, openConfirmationModal }: ModalDeleteTransactionProps) => {
	const { getTransaction } = useTransaction();

	const {
		register,
		control,

		reset
	} = useForm<EditTransactionFormData>({
		resolver: zodResolver(newTransactionSchema)
	});

	useEffect(() => {
		const fetchTransaction = () => {
			const transactionFromDatabase = getTransaction(transactionId);
			reset({
				type: transactionFromDatabase.type,
				amount: transactionFromDatabase.amount,
				date: format(new Date(transactionFromDatabase.date), 'yyyy-MM-dd'),
				description: transactionFromDatabase.description,
				category: transactionFromDatabase.category
			});
		};
		fetchTransaction();
	}, [transactionId]);

	return (
		<Modal onCloseModal={onClose}>
			<div>
				<h2 className="text-2xl text-primary font-bold">Deletar Transação</h2>

				<form className="mt-8 flex flex-col gap-8 items-center sm:items-start">
					<Controller
						control={control}
						name="type"
						render={({ field }) => <Select placeholder="Selecione o tipo" fullWidth disabled options={transactionOptions} {...field} />}
					/>

					<div className="flex gap-4 flex-col sm:flex-row w-full">
						<Input label="Valor" type="number" defaultValue={0.0} step={0.01} fullWidth {...register('amount')} disabled />
						<Input label="Data" type="date" fullWidth {...register('date')} disabled />
					</div>

					<div className="flex gap-4 flex-col sm:flex-row w-full">
						<Input label="Descrição" fullWidth {...register('description')} disabled />
						<Input label="Categoria" fullWidth {...register('category')} disabled />
					</div>
					<div className="flex gap-4 flex-col sm:flex-row items-center w-full">
						<Button
							onClick={(event) => {
								event.preventDefault();
								openConfirmationModal();
							}}
							fullWidth
						>
							Deletar
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};
