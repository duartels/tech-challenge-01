'use client'

type ButtonProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-[144px] sm:w-[250px] h-12 bg-tertiary rounded-lg flex justify-center items-center px-12 text-primary font-bold hover:bg-primary hover:text-tertiary transition delay-100`}
      {...props}
    >
      {children}
    </button>
  )
}
