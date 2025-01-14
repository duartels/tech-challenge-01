import { Transaction, UpdateTransactionDto } from '@domain'

export class TransactionSourceRepository {
  static #transactions: Transaction[] = []

  static getAll() {
    return this.#transactions
  }

  static save(transaction: Transaction) {
    this.#transactions.push(transaction)
  }

  static update(id: number, updatedData: UpdateTransactionDto) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )
    this.#transactions[index] = { ...this.#transactions[index], ...updatedData }
  }
}
