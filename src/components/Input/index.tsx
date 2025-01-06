export type InputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="w-[144px] sm:w-[250px] flex flex-col gap-4">
      {label && (
        <label htmlFor="input" className="text-tertiary font-semibold">
          {label}
        </label>
      )}
      <input
        className="w-full h-12 bg-tertiary rounded-lg text-black text-center font-bold border-0 focus:outline-none "
        {...props}
      />
    </div>
  )
}
