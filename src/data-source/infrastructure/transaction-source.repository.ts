import { Transaction } from '@domain'

export class TransactionSourceRepository {
  static #transactions: Transaction[] = []

  static getAll() {
    return this.#transactions
  }

  static getOne(id: number) {
    return this.#transactions.find((transaction) => transaction.id === id)
  }

  static save(transaction: Transaction) {
    this.#transactions.push(transaction)
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
