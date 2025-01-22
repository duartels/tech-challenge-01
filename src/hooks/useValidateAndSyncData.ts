import { StorageFacade } from '@data-access'
import { Transaction } from '@domain'
import { useEffect, useMemo, useState } from 'react'

import { useTransaction } from './useTransaction'

export const useValidateAndSyncData = () => {
  const storage = useMemo(() => new StorageFacade(), [])
  const [transactions, setTransaction] = useState<Transaction[]>([])
  const [balance, setBalance] = useState<number>(0)

  const { getTransactions } = useTransaction()

  useEffect(() => {
    const validateAndSyncData = async () => {
      StorageFacade.syncLocalStorageWithServer()      
    }

    const fetchTransactions = async () => {
      const fetchedTransactions = await getTransactions()
      setTransaction(fetchedTransactions)
      setBalance(fetchedTransactions.reduce((acc, transaction) => acc + transaction.amount, 0))
    }

    validateAndSyncData()
    fetchTransactions()
  }, [storage])

  return { transactions, balance }
}
