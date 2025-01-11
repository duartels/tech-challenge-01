'use client'
import { Input } from '@/components/Input'
import { Option, Select } from '../components/Select'
import { useState } from 'react'
import { Header } from '../components/Header'

export default function Home() {
  const options: Option[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
  ]

  const [selectedOption, setSelectedOption] = useState<Option>()

  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <Header />
      <Select
        options={options}
        onChange={(value) => setSelectedOption({ label: value, value })}
        placeholder='click to select a value'
        value={selectedOption?.value || ''}
      />
      <Input label='teste' type='number' defaultValue='0.00' />
    </div>
  )
}
