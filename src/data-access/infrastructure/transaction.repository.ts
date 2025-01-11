import { TransactionSourceFacade } from '@/data-source'
import { Transaction } from '@/domain'
import { TransactionAbsRepository } from '@/domain/infrastructure/transaction.abs.repository'

export class TransactionRepository implements TransactionAbsRepository {
  #STORAGE_KEY = 'transactions'
  #transactionSource = new TransactionSourceFacade()

  getAll(): Transaction[] {
    const data = localStorage.getItem(this.#STORAGE_KEY)

    if (data) {
      const dataSource = this.#transactionSource.getAll()

      if (!dataSource.length) {
        this.#transactionSource.save(JSON.parse(data))
      }
      return JSON.parse(data)
    }

    return []
  }

  save(transaction: Transaction): void {
    const transactions = this.getAll()
    transactions.push(transaction)
  }

  update(id: number, updatedData: Partial<Transaction>): void {
    const transactions = this.getAll()
    const transaction = transactions.find(
      (transaction) => transaction.id === id,
    )
    if (transaction) {
      Object.assign(transaction, updatedData)
      localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))
    }
  }
}
