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
        className="w-full h-12 bg-white rounded-lg text-black-grayish text-center border-[1px] border-primary focus:outline-none "
        {...props}
      />
    </div>
  )
}
