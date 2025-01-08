import { useEffect, useRef, useState } from 'react'

export type Option = {
  value: string
  label: string
}

export type SelectProps = {
  options: Option[]
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const Select = ({
  options,
  placeholder,
  value,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (option: { value: string; label: string }) => {
    onChange(option.value)
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === value)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="relative w-[280px] sm:w-[350px]">
      <button
        type="button"
        className={`relative w-full h-12 px-4 bg-white text-primary border-[1px] border-primary rounded-lg focus:outline-none flex justify-between items-center z-10`}
        onClick={toggleDropdown}
      >
        {selectedOption?.label || placeholder}
        <span
          className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5H7z" fill="#004D61" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border-[1px] border-primary border-t-0 rounded-b-lg mt-[-5px]">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer text-primary hover:bg-tertiary hover:font-bold last:rounded-b-lg first:pt-4 ${selectedOption?.value === option.value ? 'bg-tertiary font-bold' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
