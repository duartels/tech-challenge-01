import { StorageFacade } from '@data-access'
import { useEffect, useMemo } from 'react'

export const useValidateAndSyncData = () => {
  const storage = useMemo(() => new StorageFacade(), [])

  useEffect(() => {
    const validateAndSyncData = async () => {
      await StorageFacade.syncLocalStorageWithServer()
    }

    validateAndSyncData()
  }, [storage])
}
