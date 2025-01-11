import { Transaction } from '@/domain'

import { TransactionSourceRepository } from '../infrastructure/transaction-source.repository'

export class TransactionSourceFacade {
  static getAll() {
    return TransactionSourceRepository.getAll()
  }

  static save(transaction: Transaction[] = []) {
    if (!transaction.length) {
      return
    }
    transaction.forEach((transaction) => {
      return TransactionSourceRepository.save(transaction)
    })
  }
}
