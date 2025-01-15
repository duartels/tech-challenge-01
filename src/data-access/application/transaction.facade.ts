import { Transaction } from '@domain'

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

  static getOne(id: number): Transaction {
    return TransactionRepository.getOne(id)
  }

  static update(id: number, transaction: Transaction): void {
    return TransactionRepository.update(id, transaction)
  }

  static delete(id: number): void {
    TransactionRepository.delete(id)
  }
}
