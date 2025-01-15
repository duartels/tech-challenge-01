'use server'
import { TransactionSourceFacade } from '@data-source'
import { CreateTransactionDto, Transaction } from '@domain'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

const transactions = TransactionSourceFacade.getAll()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const transaction = transactions.find((trn) => trn.id === Number(id))

    if (transaction) {
      return NextResponse.json(transaction)
    }
    return NextResponse.json(
      { error: 'Transaction not found' },
      { status: 404 },
    )
  }

  return NextResponse.json(transactions)
}

export async function POST(req: Request) {
  const body = await req.json()

  const newTransactions: CreateTransactionDto | Transaction[] = body.transactions;
  
  TransactionSourceFacade.save(newTransactions)

  if (Array.isArray(newTransactions)) {
    return NextResponse.json(newTransactions, { status: 201 })
  }
  
  return NextResponse.json({ status: 201 })
}
export async function PUT(req: NextApiRequest) {
  const { id } = req.query
  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(id),
  )

  if (index !== -1) {
    const { body } = req
    TransactionSourceFacade.update(Number(id), body)
    return NextResponse.json({ ...transactions[index], ...body })
  }

  return NextResponse.json({ error: 'Transação não encontrada' }, { status: 404 })
}

export async function DELETE(req: NextApiRequest) {
  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(req.query.id),
  )

  if (index === -1) {
    return NextResponse.json({ error: 'Transação não encontrada' }, { status: 404 })
  }

  TransactionSourceFacade.delete(Number(req.query.id))

  transactions.splice(index, 1)

  return NextResponse.json({ message: "Deletado com sucesso" }, { status: 204 })
}
