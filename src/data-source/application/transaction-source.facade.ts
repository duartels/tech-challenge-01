import { Transaction } from '@/domain'

import { TransactionSourceRepository } from '../infrastructure/transaction-source.repository'

export class TransactionSourceFacade {
  #repository = new TransactionSourceRepository()

  getAll() {
    return this.#repository.getAll()
  }

  save(transaction: Transaction[]) {
    transaction.forEach((transaction) => {
      return this.#repository.save(transaction)
    })
  }
}
