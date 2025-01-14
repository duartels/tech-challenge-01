import { Storage } from '../types'

export abstract class StorageAbsFacade {
  abstract getAll(): Promise<Storage>
}
