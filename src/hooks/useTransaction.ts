import { TransactionFacade } from "@data-access"
import { CreateTransactionDto } from "@domain"

export function useTransaction() {
    const saveTransaction = async (transaction: CreateTransactionDto) => {
        await TransactionFacade.save(transaction)
    }

    const getTransactions = () => {
        return TransactionFacade.getAll()
    }

    return { saveTransaction, getTransactions }
}