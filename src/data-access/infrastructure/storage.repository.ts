import { Transaction } from '@domain'

import { StorageFacade } from '../application'
import { TransactionFacade } from '../application/transaction.facade'

export class StorageRepository {
  static #STORAGE_KEY = 'transactions'

  static getAll() {
    const localTransactions = TransactionFacade.getAll()

    if (localTransactions.length) {
      localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(localTransactions))
      return { transactions: localTransactions }
    }

    const data = localStorage.getItem(this.#STORAGE_KEY)

    if (data) {
      StorageFacade.syncLocalStorageWithServer()
      return { transactions: data }
    }

    return { transactions: [] }
  }

  static fetchFromLocalStorage() {
    const data = localStorage.getItem(this.#STORAGE_KEY)
    return data ? JSON.parse(data) : []
  }

  static postToMockServer(transactions: Transaction[]) {
    if (!transactions.length) return

    return fetch('/api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transactions }),
    })
  }
}
