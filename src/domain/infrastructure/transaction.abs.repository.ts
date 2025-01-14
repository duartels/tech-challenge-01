import { Transaction } from '../types'

export abstract class TransactionAbsRepository {
  abstract getAll(): Transaction[]
  abstract save(transaction: Transaction): void
  abstract update(id: number, updatedData: Partial<Transaction>): void
}
