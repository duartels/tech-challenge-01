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
      return { status: 201, message: 'Salvo com sucesso' }
    }
      
    if (transaction) {
      const newTransaction = { id: this.#transactions.length + 1, ...transaction }
      this.#transactions.push(newTransaction)
      return { status: 201, message: 'Salvo com sucesso' }
    }
    return { status: 500, message: 'Erro ao salvar' }
  }

  static update(id: number, updatedData: Partial<Transaction>) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )

    if (index === -1) return false

    this.#transactions[index] = { ...this.#transactions[index], ...updatedData }

    return true
  }

  static delete(id: number) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )
    this.#transactions.splice(index, 1)

    if (index === -1) return false

    return true
  }
}
