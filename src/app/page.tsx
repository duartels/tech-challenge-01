'use client'
import { useEffect } from 'react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { StorageFacade } from '@/data-access'

export default function Home() {
  const storage = new StorageFacade()

  const handleTransaction = async () => {
    console.log('handleTransaction')
  }

  useEffect(() => {
    storage.getAll().then((data) => {
      console.log('use effect -> data', data)
    })
  })

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
