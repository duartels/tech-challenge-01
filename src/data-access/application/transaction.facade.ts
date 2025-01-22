import { CreateTransactionDto,Transaction } from '@domain'

import { TransactionRepository } from '../infrastructure/transaction.repository'

export class TransactionFacade {

  static async getAll() {
    return await TransactionRepository.getAll()
  }

  static async save(transaction: CreateTransactionDto) {
    return TransactionRepository.save(transaction)
  }

  static async getOne(id: number) {
    return await TransactionRepository.getOne(id)
  }

  static async update(id: number, transaction: Transaction) {
    return await TransactionRepository.update(id, transaction)
  }

  static async delete(id: number) {
    TransactionRepository.delete(id)
  }
}
