import Image from "next/image"
import React, { PropsWithChildren } from "react"

interface ModalProps extends PropsWithChildren {
  onCloseModal: VoidFunction
  classNameExt?: string
}

export const Modal: React.FC<ModalProps> = ({ onCloseModal, children, classNameExt }) => {
  return (
    <>
      <div className={`relative z-10 ${classNameExt}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-4">
              <div className="w-full flex justify-end ">
                <button className="hover:cursor-pointer hover:bg-black-grayish" onClick={onCloseModal}>
                  <Image width={14} height={14} src={'./icons/close_icon.svg'} alt="close_modal_button_icon" />
                </button>
              </div>
              <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
