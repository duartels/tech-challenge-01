import React from 'react'
import { HeaderProps } from '../..'

export type TabletNavHeaderProps = {
  menuOptions: HeaderProps['menuOptions']
}

export const TabletNavHeader: React.FC<TabletNavHeaderProps> = ({
  menuOptions
}) => {
  const gap =
    menuOptions.length > 0 ? `${100 / menuOptions.length / 2}%` : '1rem'
  return (
    <nav className='w-full flex justify-center items-center m-6'>
      <div className='w-full max-w-4xl grid grid-flow-col auto-cols-fr gap-4  justify-center px-4 hidden sm:flex md:hidden'>
        {menuOptions.map((option, index) => (
          <a
            className='text-black-default whitespace-nowrap text-sm pb-2 text-center  cursor-pointer hover:text-highlight  hover:transition-all hover:border-b-[3px] hover:border-highlight ease-in-out'
            key={`nav-${option}-${index}`}
          >
            {option}
          </a>
        ))}
      </div>
    </nav>
  )
}
