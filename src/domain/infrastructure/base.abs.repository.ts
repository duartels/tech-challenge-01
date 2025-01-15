export abstract class BaseRepository<T> {
  abstract getAll(): T[]
  abstract getOne(id: number): T
  abstract save(data: T): T
  abstract update(id: number, updatedData: Partial<T>): T
  abstract delete(id: number): void
}
