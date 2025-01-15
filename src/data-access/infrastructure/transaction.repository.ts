import { Transaction } from '@domain'

import { TransactionSourceFacade } from '@/data-source'

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

  static delete(id: number): void {
    const transactions = this.getAll()
    const newTransactions = transactions.filter((t) => t.id !== id)
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(newTransactions))
  }

  static getOne(id: number): Transaction {
    const transactions = this.getAll()
    return transactions.find((t) => t.id === id) || {} as Transaction
  }
}
