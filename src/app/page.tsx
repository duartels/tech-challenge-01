'use client'
import { Input } from '@/components/Input'
import { Option, Select } from '../components/Select'
import { useCallback, useState } from 'react'
import { Header } from '../components/Header'

export default function Home() {

  const [selectValue, setSelectedValue] = useState('')

  const handleSelectValue = (value: string) => setSelectedValue(value)

  const selectOptions: () => Option[] = useCallback(() => [{
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  }], [])

  console.log('re-render')

  const navOptions = useCallback(() =>  ['Início', 'Transferências', 'Investimentos', 'Outros serviços'], [])


  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <Header name={"Joana D'arc"} menuOptions={navOptions()}/>
      <Select options={selectOptions()} onChange={handleSelectValue} value={selectValue} placeholder='Click to select a value'/>
      <Input label="teste" type="number" defaultValue="0.00" />
    </div>
  )
}
