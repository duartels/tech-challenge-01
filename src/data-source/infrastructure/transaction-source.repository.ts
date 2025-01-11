import { Transaction } from '@/domain'
import { UpdateTransactionDto } from '@/domain/dtos'

export class TransactionSourceRepository {
  #transactions: Transaction[] = []

  getAll() {
    console.log('Getting transactions from source', this.#transactions)

    return this.#transactions
  }

  save(transaction: Transaction) {
    this.#transactions.push(transaction)
  }

  update(id: number, updatedData: UpdateTransactionDto) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    )
    this.#transactions[index] = { ...this.#transactions[index], ...updatedData }
  }
}
