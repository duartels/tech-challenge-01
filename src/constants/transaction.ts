import { TransactionLabel, TransactionValue } from '@/domain/enums'
import { Option } from '@/domain/types'

export const transactionOptions: Option[] = [
  { value: TransactionValue.cambio, label: TransactionLabel.cambio },
  { value: TransactionValue.docTed, label: TransactionLabel.docTed },
  {
    value: TransactionValue.emprestimoFinan,
    label: TransactionLabel.emprestimoFinan,
  },
  { value: TransactionValue.deposito, label: TransactionLabel.deposito },
] as const
