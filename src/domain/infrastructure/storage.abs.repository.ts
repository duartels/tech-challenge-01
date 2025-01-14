export abstract class StorageAbsRepository<T> {
  abstract getAll(): Promise<T>
}
