import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

export type OverviewProps = {
  accountBalance: number
  accountName: string
}

export const Overview = ({ accountBalance, accountName }: OverviewProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)

  const handleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible)
  }

  const today = new Date()
  const formattedDate = format(today, "eeee',' dd/MM/yyyy", {
    locale: ptBR,
  })

  return (
    <div className="bg-primary w-[321px] h-[655px] sm:w-[600px] sm:h-[402] md:w-[690px] rounded-lg">
      <div className="flex flex-col gap-10 sm:gap-0 items-center sm:items-start sm:flex-row justify-between p-10 sm:p-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl">Olá, {accountName}! :)</h1>

          <p>
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </p>
        </div>

        <div className="sm:pt-24 sm:pr-24">
          <div className="flex gap-6 items-center">
            <p className="font-bold text-xl">Saldo</p>
            <FaEye
              size={20}
              className="text-white cursor-pointer"
              onClick={handleBalanceVisibility}
            />
          </div>
          <div className="border-t-2 border-gray-300 mt-4 mb-4 min-w-[180px]" />
          <p>Conta Corrente</p>
          <p
            className={`text-3xl mt-2 ${isBalanceVisible ? 'text-white' : 'blur'}`}
          >
            {isBalanceVisible
              ? Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(accountBalance)
              : '???????'}
          </p>
        </div>
      </div>
    </div>
  )
}
