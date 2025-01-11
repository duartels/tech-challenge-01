import { Transaction } from '../types'

export interface CreateTransactionDto extends Omit<Transaction, 'id'> {}
