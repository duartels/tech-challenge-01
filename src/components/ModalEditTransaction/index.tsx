import { EditTransactionFormData, ModalEditTransactionProps, newTransactionSchema, transactionOptions, TransactionValue } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransaction } from '@hooks';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Select } from '../Select';

export const ModalEditTransaction = ({ onClose, transactionId }: ModalEditTransactionProps) => {
	const { getTransaction, updateTransaction, parseAmount } = useTransaction();

	const {
		register,
		control,
		handleSubmit,
		formState: { isValid },
		reset
	} = useForm<EditTransactionFormData>({
		resolver: zodResolver(newTransactionSchema)
	});

	const handleEditTransaction = async (data: EditTransactionFormData) => {
		await updateTransaction(transactionId, {
			...data,
			amount: parseAmount(data.amount, data.type as TransactionValue),
			date: new Date(data.date),
			id: transactionId
		}).then(() => {
			window.location.reload();
			onClose();
		});
	};

	useEffect(() => {
		const fetchTransaction = async () => {
			const transactionFromDatabase = await getTransaction(transactionId);
			reset({
				type: transactionFromDatabase.type,
				amount: transactionFromDatabase.amount,
				date: format(new Date(transactionFromDatabase.date), 'yyyy-MM-dd'),
			});
		};

		fetchTransaction();
	}, [transactionId]);

	return (
		<Modal onCloseModal={onClose}>
			<div>
				<h2 className="text-2xl text-primary font-bold">Editar Transação</h2>

				<form onSubmit={handleSubmit(handleEditTransaction)} className="mt-8 flex flex-col gap-8 items-center sm:items-start">
					<Controller
						control={control}
						name="type"
						render={({ field }) => <Select placeholder="Selecione o tipo" fullWidth options={transactionOptions} {...field} />}
					/>

					<div className="flex gap-4 flex-col sm:flex-row w-full">
						<Input label="Valor" type="number" defaultValue={0.0} step={0.01} fullWidth {...register('amount')} />
						<Input label="Data" type="date" fullWidth {...register('date')} />
					</div>

					<div className="flex gap-4 flex-col sm:flex-row items-center w-full">
						<Button type="submit" disabled={!isValid} fullWidth>
							Salvar
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};
