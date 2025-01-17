import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = useCallback(() => setIsModalOpen(false), [])

  const openModal = useCallback(() => setIsModalOpen(true), [])

  return { isModalOpen, closeModal, openModal }
}
