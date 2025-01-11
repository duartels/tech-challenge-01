import Image from 'next/image'

export const Header = () => {
  return (
    <header className='bg-primary w-full flex justify-center items-center py-3 px-4 mb-6'>
      <div className='max-w-2xl w-full flex justify-end'>
        <div className='flex justify-between items-center gap-x-12'>
          <h2>Joana D'arc</h2>
          <Image
            width={40}
            height={40}
            src={'./icons/Avatar.svg'}
            alt='avatar-icon'
          />
        </div>
      </div>
    </header>
  )
}
