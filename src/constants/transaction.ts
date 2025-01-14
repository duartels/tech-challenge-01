import { Option, TransactionLabel, TransactionValue } from '@domain'

export const transactionOptions: Option[] = [
  { value: TransactionValue.CAMBIO, label: TransactionLabel.LABEL_CAMBIO },
  { value: TransactionValue.DOC_TED, label: TransactionLabel.LABEL_DOC_TED },
  {
    value: TransactionValue.EMPRESTIMO_FIN,
    label: TransactionLabel.LABEL_EMPRESTIMO_FIN,
  },
  { value: TransactionValue.DEPOSITO, label: TransactionLabel.LABEL_DEPOSITO },
] as const
