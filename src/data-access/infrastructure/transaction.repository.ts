import { CreateTransactionDto,Transaction } from '@domain'

export class TransactionRepository {
  static #STORAGE_KEY = 'transactions'

  static async getAll() {
    const transactions: Transaction[] = await fetch('api/transaction').then(res => res.json()) as Transaction[]
    return transactions
  }

  static async save(transaction: CreateTransactionDto) {
    const transactions = await this.getAll()
    const transactionToSave = { ...transaction, id: transactions.length + 1 }
    
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))

    const res = await fetch('api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( transactionToSave )
    })

    if (!res.ok) throw new Error('Failed to save transaction')

    return res.json()
  }

  static async update(id: number, updatedData: Partial<Transaction>) {
    const transactions = await this.getAll()
    const transaction = transactions.find((t) => t.id === id)
    if (transaction) {
      Object.assign(transaction, updatedData)
      localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))
    }
  }

  static async delete(id: number) {
    const transactions = await this.getAll()
    const newTransactions = transactions.filter((t) => t.id !== id)
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(newTransactions))
  }

  static async getOne(id: number) {
    const transactions = await this.getAll()
    return transactions.find((t) => t.id === id) || {} as Transaction
  }
}
