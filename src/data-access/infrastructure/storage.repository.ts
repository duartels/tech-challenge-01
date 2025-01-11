import { TransactionSourceFacade } from '@/data-source'
import { Storage, StorageAbsRepository, Transaction } from '@/domain'

import { TransactionFacade } from '../application/transaction.facade'

export class StorageRepository implements StorageAbsRepository<Storage> {
  #STORAGE_KEY = 'transactions'
  #transactionFacade = new TransactionFacade()
  #transactionSource = new TransactionSourceFacade()

  async getAll(): Promise<Storage> {
    const transactions = await this.#transactionFacade.getAll()

    if (transactions.length) {
      localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(transactions))
      return { transactions }
    }

    const data = localStorage.getItem(this.#STORAGE_KEY)

    if (data) {
      const dataToSave: Transaction[] = JSON.parse(data)
      await this.#transactionFacade.save(dataToSave)
      this.#transactionSource.save(dataToSave)

      return { transactions: dataToSave }
    }

    return { transactions: [] }
  }

  async syncWithServer() {
    const data = localStorage.getItem(this.#STORAGE_KEY)
    if (data) {
      const transactions: Transaction[] = JSON.parse(data)
      this.#transactionSource.save(transactions)
    }
  }
}
