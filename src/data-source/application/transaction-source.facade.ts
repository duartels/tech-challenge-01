import { CreateTransactionDto, Transaction } from '@domain'

import { TransactionSourceRepository } from '../infrastructure/transaction-source.repository'

export class TransactionSourceFacade {
  static getAll() {
    return TransactionSourceRepository.getAll()
  }

  static save(transaction: CreateTransactionDto | Transaction[]) {
    if (Array.isArray(transaction)) {
      return transaction.forEach((trn) => TransactionSourceRepository.save(trn))
    }
    
    return TransactionSourceRepository.save(transaction)
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
