import { Transaction } from '@domain'

import { TransactionSourceRepository } from '../infrastructure/transaction-source.repository'

export class TransactionSourceFacade {
  static getAll() {
    return TransactionSourceRepository.getAll()
  }

  static save(transaction: Transaction[] = []) {
    if (!transaction.length) {
      return
    }
    transaction.forEach((trn) => {
      return TransactionSourceRepository.save(trn)
    })
  }

  static update(id: number, updatedData: Partial<Transaction>) {
    return TransactionSourceRepository.update(id, updatedData)
  }

  static delete(id: number) {
    return TransactionSourceRepository.delete(id)
  }

  static getOne(id: number) {
    return TransactionSourceRepository.getOne(id)
  }
}
