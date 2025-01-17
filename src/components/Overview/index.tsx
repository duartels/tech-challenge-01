import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

import { OverviewProps } from '@/domain/types/overview.type'

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
    <div 
      className={`flex flex-col justify-between sm:justify-normal bg-primary w-[321px] h-[655px] sm:w-[600px] sm:h-[402px] md:w-[690px] rounded-lg bg-[url('/icons/overview-top-mobile.svg'),url('/icons/overview-bottom-mobile.svg')] sm:bg-[url('/icons/overview-top.svg'),url('/icons/overview-bottom.svg')] md:bg-none bg-no-repeat [background-position:top_left,bottom_right] sm:[background-position:top_right,bottom_left]` }
    >
      <div className="flex flex-col gap-10 sm:gap-0 items-center sm:items-start sm:flex-row justify-between p-10 sm:p-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl">Olá, {accountName}! :)</h1>

          <p>
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </p>
        </div>

        <div className="sm:pt-[60px] sm:pr-24">
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

      <div className='pb-8 sm:pb-0 sm:pl-8 flex justify-center sm:justify-start sm:relative md:hidden'>
        <Image 
          src="/icons/overview-money.svg" 
          alt='Money illustration' 
          width={283}
          height={228}
          className='sm:absolute sm:top-[-100px]'
        />
      </div>
    </div>
  )
}
