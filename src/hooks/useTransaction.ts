import { TransactionFacade } from '@data-access';
import { CreateTransactionDto, TransactionValue, UpdateTransactionDto } from '@domain';

export function useTransaction() {
	const saveTransaction = async (transaction: CreateTransactionDto) => {
		await TransactionFacade.save(transaction);
	};

  const getTransactions = async () => {
      return TransactionFacade.getAll()
  }


	const getTransaction = (id: number) => {
		return TransactionFacade.getOne(id);
	};

	const updateTransaction = (id: number, transaction: UpdateTransactionDto) => {
		return TransactionFacade.update(id, transaction);
	};

	const deleteTransaction = (id: number) => {
		return TransactionFacade.delete(id);
	};

	const parseAmount = (amount: number, type: TransactionValue) => {
		const NEGATIVES = [TransactionValue.SAQUE, TransactionValue.DOC_TED];
		return NEGATIVES.includes(type) ? -amount : amount;

	}

	return { saveTransaction, getTransactions, getTransaction, updateTransaction, deleteTransaction, parseAmount };
}
