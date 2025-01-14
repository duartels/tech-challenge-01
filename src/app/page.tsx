'use client'

import { Input } from '@/components/Input'
import { useValidateAndSyncData } from '@/hooks'

export default function Home() {
  useValidateAndSyncData()

  return (
    <div className="flex items-center justify-center h-screen">
      <Input label="teste" type="number" defaultValue="0.00" />
    </div>
  )
}
