type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={`w-[144px] sm:w-[250px] h-12 bg-tertiary rounded-lg flex justify-center items-center px-12 font-inter text-primary font-bold hover:bg-primary hover:text-tertiary transition delay-100`}
    >
      {children}
    </button>
  )
}
