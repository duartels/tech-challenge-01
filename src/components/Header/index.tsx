import Image from 'next/image'
import { useModal } from '../../app/hooks/useModal'
import { Modal } from '../Modal'
import React, { useCallback } from 'react'
import { TabletNavHeader } from './Components/TabletNavHeader'

export type HeaderProps = {
  name: string
  menuOptions: string[]
}

export const Header: React.FC<HeaderProps> = ({ name, menuOptions }) => {
  const { isModalOpen, closeModal, openModal } = useModal()

  const handleOpenModal = useCallback(() => openModal(), [])

  return (
    <header className='bg-primary w-full flex justify-center items-center py-3 px-4 mb-6 z-20'>
      <div className='max-w-2xl w-full flex  justify-between sm:justify-end'>
        <button
          className='sm:hidden hover:cursor-pointer'
          onClick={handleOpenModal}
        >
          <Image
            width={32}
            height={32}
            src='./icons/icon_menu.svg'
            alt='menu-button'
          />
        </button>
        <div className='flex justify-between items-center gap-x-12'>
          <h2>{name}</h2>
          <Image
            width={40}
            height={40}
            src='./icons/Avatar.svg'
            alt='avatar-icon'
          />
        </div>
      </div>
      {!!isModalOpen && (
        <Modal onCloseModal={closeModal} classNameExt='sm:hidden'>
          <div className='text-black-default flex flex-col gap-4 mt-2 mb-6 mx-6 '>
            //Header Modal (mobile view)
            {menuOptions.map((option, index) => {
              return (
                <>
                  <div
                    key={`option-${option}-${index}`}
                    className='text-center'
                  >
                    {option}
                  </div>
                  <hr
                    key={`divider-${option}-${index}`}
                    className={`h-0.5 border-t-0 bg-black-default ${
                      index === menuOptions.length - 1 ? 'hidden' : ''
                    }`}
                  />
                </>
              )
            })}
          </div>
        </Modal>
      )}
    </header>
  )
}
