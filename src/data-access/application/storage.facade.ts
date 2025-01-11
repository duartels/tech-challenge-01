import { Transaction } from '@/domain'

import { StorageRepository } from '../infrastructure/storage.repository'

export class StorageFacade {
  static async syncLocalStorageWithServer() {
    const localTransactions = StorageRepository.fetchFromLocalStorage()
    const response = await fetch('/api/transaction')
    const transactions: Transaction[] = await response.json()

    const syncTransactions = this.compareTransactions(
      localTransactions,
      transactions,
    )

    await StorageRepository.postToMockServer(syncTransactions)
    return localTransactions
  }

  static getAll() {
    return StorageRepository.getAll()
  }

  private static compareTransactions(
    localTransactions: Transaction[],
    serverTransactions: Transaction[],
  ) {
    console.log('localTransactions', localTransactions)
    console.log('serverTransactions', serverTransactions)

    const serverIds = serverTransactions.map(
      (transaction: Transaction) => transaction.id,
    )

    const newTransactions = localTransactions.filter(
      (transaction) => !serverIds.includes(transaction.id),
    )

    return newTransactions
  }
}
