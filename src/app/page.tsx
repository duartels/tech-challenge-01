'use client'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Input label="teste" type="number" defaultValue="0.00" />
    </div>
  )
}
