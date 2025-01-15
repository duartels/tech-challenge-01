import { CreateTransactionDto, Transaction } from '@domain'

export class TransactionSourceRepository {
  static #transactions: Transaction[] = []

  static getAll() {
    return this.#transactions
  }

  static getOne(id: number) {
    return this.#transactions.find((transaction) => transaction.id === id)
  }

  static save(transaction: CreateTransactionDto | Transaction) {
    if (transaction && 'id' in transaction) {
      this.#transactions.push(transaction)
    } else {
      const newTransaction = { id: this.#transactions.length + 1, ...transaction }
      this.#transactions.push(newTransaction)
    }
  }

  static update(id: number, updatedData: Partial<Transaction>) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )
    this.#transactions[index] = { ...this.#transactions[index], ...updatedData }
  }

  static delete(id: number) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )
    this.#transactions.splice(index, 1)
  }
}
