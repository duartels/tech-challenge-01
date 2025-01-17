'use client';

import { Button, Input, Select } from '@components'
import { CreateTransactionDto, navOptions } from '@domain'
import { useValidateAndSyncData } from '@hooks'
import { useTransaction } from '@hooks'
import { useState } from 'react'

import { transactionOptions } from '../constants/transaction'
import { Header } from '../components/Header';
import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';

export default function Home() {
  useValidateAndSyncData()
  const { saveTransaction } = useTransaction()
  
  const navOptions = [
		NavOptions.HOME,
		NavOptions.INVESTMENTS,
		NavOptions.OTHER_SERVICES,
		NavOptions.TRANSFERS,
	]

  const [transaction, setTransaction] = useState<CreateTransactionDto>({
    amount: 0,
    date: new Date(),
    description: '',
    type: '',
    category: '',
    user: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setTransaction(prev => ({
      ...prev,
      [name]: name === 'date' ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveTransaction(transaction)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen">
        <Header name={"Joana D'arc"} menuOptions={navOptions} />
        <TabletNavHeader menuOptions={navOptions} />
      <pre>Veja a api em /api/transaction</pre>
      </div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-primary p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl text-tertiary font-bold mb-4">Criar Transação</h2>
          <hr className='my-2' />
          <div className="mb-4">
            <Input
              label="Quantidade"
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Data"
              type="date"
              name="date"
              value={transaction.date instanceof Date ? transaction.date.toISOString().split('T')[0] : ''} // Verifica se é Date
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Descrição"
              type="text"
              name="description"
              value={transaction.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <Select
              name='type'
              placeholder='Selecione o tipo'
              options={transactionOptions}
              value={transaction.type}
              onChange={handleChange}
            >
            </Select>
          </div>
          <div className="mb-4">
            <Input
              label="Categoria"
              type="text"
              name="category"
              value={transaction.category}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Nome do usuário"
              type="text"
              name="user"
              value={transaction.user}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <Button type='submit'>Save Transaction</Button>
        </form>
      </div>
    </>
  )
}
