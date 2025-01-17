import { TransactionSourceFacade } from '@data-source'
import { CreateTransactionDto,Transaction } from '@domain'

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

  static async save(transaction: CreateTransactionDto) {
    const transactions = this.getAll()
    const transactionToSave = { ...transaction, id: transactions.length + 1 }
    transactions.push(transactionToSave)
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))

    const res = await fetch('api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ transaction })
    })

    if (!res.ok) throw new Error('Failed to save transaction')

    return res.json()
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
