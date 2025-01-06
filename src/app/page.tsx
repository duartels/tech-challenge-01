'use client'
import { Button } from '@/components/Button'

export default function Home() {
  const teste = () => {
    console.log('teste')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Button onClick={teste}>Concluir transação</Button>
    </div>
  )
}
