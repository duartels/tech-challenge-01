import { TransactionFacade } from '@data-access';
import { CreateTransactionDto } from '@domain';

export function useTransaction() {
	const saveTransaction = async (transaction: CreateTransactionDto) => {
		await TransactionFacade.save(transaction);
	};

	const getTransactions = () => {
		return TransactionFacade.getAll();
	};

	const getTransaction = (id: number) => {
		return TransactionFacade.getOne(id);
	};

	const deleteTransaction = (id: number) => {
		return TransactionFacade.delete(id);
	};

	return { saveTransaction, getTransactions, getTransaction, deleteTransaction };
}
