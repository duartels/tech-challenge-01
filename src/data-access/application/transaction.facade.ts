import { Transaction } from '@/domain'

import { TransactionRepository } from '../infrastructure/transaction.repository'

export class TransactionFacade {
  #transactionRepository = new TransactionRepository()

  async getAll(): Promise<Transaction[]> {
    return this.#transactionRepository.getAll()
  }

  async save(transactions: Transaction[]): Promise<void> {
    transactions.forEach((transaction) => {
      return this.#transactionRepository.save(transaction)
    })
  }
}
