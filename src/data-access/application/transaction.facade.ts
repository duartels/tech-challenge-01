import { Transaction } from '@/domain'

import { TransactionRepository } from '../infrastructure/transaction.repository'

export class TransactionFacade {
  static getAll(): Transaction[] {
    return TransactionRepository.getAll()
  }

  static save(transactions: Transaction[]) {
    transactions.forEach((transaction) => {
      return TransactionRepository.save(transaction)
    })
  }
}
