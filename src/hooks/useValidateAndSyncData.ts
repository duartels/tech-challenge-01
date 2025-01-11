import { useEffect, useMemo } from 'react'

import { StorageFacade } from '@/data-access'

export const useValidateAndSyncData = () => {
  const storage = useMemo(() => new StorageFacade(), [])

  useEffect(() => {
    const validateAndSyncData = async () => {
      await StorageFacade.syncLocalStorageWithServer()
    }

    validateAndSyncData()
  }, [storage])
}
