'use server'
import { TransactionSourceFacade } from '@data-source'
import { CreateTransactionDto, Transaction } from '@domain'
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
  const newTransactions: CreateTransactionDto | Transaction[] = body;
  const res = TransactionSourceFacade.save(newTransactions)
  if (res) return NextResponse.json(res)
  else return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 })
}
export async function PUT(req: Request) {
  const data = await req.json()
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(id),
  )

  if (index !== -1) {
    TransactionSourceFacade.update(Number(id), data)
    return NextResponse.json({ ...transactions[index], ...data })
  }

  return NextResponse.json({ error: 'Transação não encontrada' }, { status: 404 })
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(id),
  )

  if (index === -1) return NextResponse.json({ error: 'Transação não encontrada' }, { status: 404 })

  TransactionSourceFacade.delete(Number(id))
  transactions.splice(index, 1)
  return NextResponse.json({ message: 'Transação removida' })
}
