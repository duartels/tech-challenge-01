import { Transaction } from "../types";

export type CreateTransactionDto = Omit<Transaction, 'id'>;