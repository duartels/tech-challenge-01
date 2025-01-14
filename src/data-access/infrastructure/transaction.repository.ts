import { TransactionSourceFacade } from '@/data-source'
import { Transaction } from '@/domain'

export class TransactionRepository {
  static #STORAGE_KEY = 'transactions'

  static getAll(): Transaction[] {
    const data = localStorage.getItem(this.#STORAGE_KEY)

    if (data) {
      const dataSource = TransactionSourceFacade.getAll()

      if (!dataSource.length) TransactionSourceFacade.save(JSON.parse(data))

      return JSON.parse(data)
    }

    return []
  }

  static save(transaction: Transaction) {
    const transactions = this.getAll()
    transactions.push(transaction)
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))
    return transaction
  }

  static update(id: number, updatedData: Partial<Transaction>): void {
    const transactions = this.getAll()
    const transaction = transactions.find((t) => t.id === id)
    if (transaction) {
      Object.assign(transaction, updatedData)
      localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))
    }
  }
}
