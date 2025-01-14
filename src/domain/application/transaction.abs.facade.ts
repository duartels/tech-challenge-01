import { Transaction } from '../types'

export abstract class TransactionAbsFacade {
  abstract getAll(): Transaction[]
  abstract save(transaction: Transaction): void
  abstract update(id: number, updatedData: Partial<Transaction>): void
}
