import { Storage, StorageAbsFacade } from '@domain/index'

import { StorageRepository } from '../infrastructure/storage.repository'

export class StorageFacade implements StorageAbsFacade {
  private storageRepository = new StorageRepository()

  async getAll(): Promise<Storage> {
    return await this.storageRepository.getAll()
  }

  async syncWithServer(): Promise<void> {
    await this.storageRepository.syncWithServer()
  }
}
