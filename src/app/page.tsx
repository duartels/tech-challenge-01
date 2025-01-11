'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TransactionFacade } from '@/data-access/application/transaction.facade'
import { Transaction } from '@/domain'
import { useValidateAndSyncData } from '@/hooks'

export default function Home() {
  useValidateAndSyncData()

  const handleTransaction = async () => {
    const newTransaction: Transaction[] = [
      {
        id: 1,
        amount: 100,
        category: 'teste',
        description: 'teste',
        type: 'income',
        user: 'teste',
        date: new Date(),
      },
    ]
    const createdTransaction = TransactionFacade.save(newTransaction)
    console.log(createdTransaction)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Input label="teste" type="number" defaultValue="0.00" />
      <Button
        onClick={() => {
          handleTransaction()
        }}
      >
        Click me
      </Button>
    </div>
  )
}
