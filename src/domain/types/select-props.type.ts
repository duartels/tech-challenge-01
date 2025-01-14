import { Option } from './option.type'

export type SelectProps = {
  options: Option[]
  placeholder: string
  value: string
  onChange: (value: string) => void
}
