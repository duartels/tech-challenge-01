import { NewTransactionFormData, newTransactionSchema } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransaction } from '@hooks';
import { Controller, useForm } from 'react-hook-form';

import { transactionOptions } from '../../constants/transaction';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';

export const NewTransaction = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { isValid },
		reset
	} = useForm<NewTransactionFormData>({
		resolver: zodResolver(newTransactionSchema)
	});

	const { saveTransaction } = useTransaction();

	const handleSaveTransaction = async (data: NewTransactionFormData) => {
		saveTransaction({
			...data,
			date: new Date(data.date),
			user: 'JohnDoe'
		});
		handleReset();
	};

	const handleReset = () => {
		reset({
			amount: 0.0,
			date: '',
			description: '',
			type: '',
			category: ''
		});
	};

	return (
		<div className="bg-gray-background w-full h-[680px]  sm:h-[450px] md:min-w-[580px] rounded-lg sm:p-8 flex flex-col items-center sm:items-start pt-8 bg-[url('/icons/new-transaction-top-mobile.svg'),url('/icons/new-transaction-bottom-mobile.svg')] sm:bg-[url('/icons/new-transaction-top.svg'),url('/icons/new-transaction-bottom.svg')] bg-no-repeat [background-position:top_left,bottom_right] sm:[background-position:top_right,bottom_left]">
			<h2 className="text-2xl text-primary font-bold">Nova Transação</h2>

			<form onSubmit={handleSubmit(handleSaveTransaction)} className="mt-8 flex flex-col gap-8 items-center sm:items-start">
				<Controller
					control={control}
					name="type"
					render={({ field }) => <Select placeholder="Selecione o tipo" options={transactionOptions} {...field} />}
				/>

				<div className="flex gap-4 flex-col sm:flex-row w-full">
					<Input label="Valor" type="number" defaultValue={0.0} step={0.01} fullWidth {...register('amount')} />
					<Input label="Data" type="date" fullWidth {...register('date')} />
				</div>

				<div className="flex gap-4 flex-col sm:flex-row w-full">
					<Input label="Descrição" fullWidth {...register('description')} />
					<Input label="Categoria" fullWidth {...register('category')} />
				</div>

				<div className="flex gap-4 flex-col sm:flex-row items-center">
					<Button type="submit" disabled={!isValid}>
						Salvar
					</Button>
					<div onClick={handleReset} className="text-white w-[250px] h-12 flex items-center justify-center cursor-pointer font-bold">
						Limpar formulário
					</div>
				</div>
			</form>
		</div>
	);
};
