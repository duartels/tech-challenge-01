import { Option } from '@/components/Select'

export const transactionOptions: Option[] = [
  { value: 'cambio', label: 'Câmbio de Moeda' },
  { value: 'doc-ted', label: 'DOC/TED' },
  { value: 'emprestimo-finan', label: 'Empréstimo e Financiamento' },
  { value: 'deposito', label: 'Depósito' },
] as const
