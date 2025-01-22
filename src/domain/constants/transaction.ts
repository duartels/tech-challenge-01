import { Option, TransactionLabel, TransactionValue } from '@domain'

export const transactionOptions: Option[] = [
  { value: TransactionValue.SAQUE, label: TransactionLabel.LABEL_SAQUE },
  { value: TransactionValue.DOC_TED, label: TransactionLabel.LABEL_DOC_TED },
  { value: TransactionValue.DEPOSITO, label: TransactionLabel.LABEL_DEPOSITO },
] as const
