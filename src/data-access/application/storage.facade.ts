import { Transaction } from '@domain'

import { StorageRepository } from '../infrastructure/storage.repository'

export class StorageFacade {
  static async syncLocalStorageWithServer() {
    const localTransactions = StorageRepository.fetchFromLocalStorage()
    const apiTransactions: Transaction[] = await fetch('/api/transaction').then(
      (res) => res.json(),
    )

    const syncTransactions = this.compareTransactions(
      localTransactions,
      apiTransactions,
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
    const serverIds = serverTransactions.map(
      (transaction: Transaction) => transaction.id,
    )

    const newTransactions = localTransactions.filter(
      (transaction) => !serverIds.includes(transaction.id),
    )

    return newTransactions
  }
}
