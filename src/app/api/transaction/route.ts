'use server'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

import { TransactionSourceFacade } from '@/data-source'

const transactionsSource = new TransactionSourceFacade()
const transactions = transactionsSource.getAll()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const transaction = transactions.find(
      (transaction) => transaction.id === Number(id),
    )

    if (transaction) {
      return NextResponse.json(transaction)
    }
    return NextResponse.json(
      { error: 'Transaction not found' },
      { status: 404 },
    )
  }

  return NextResponse.json(transactionsSource)
}

export async function POST(req: NextApiRequest) {
  const newTransaction = { id: Date.now(), ...req.body }
  transactionsSource.save(newTransaction)
  return NextResponse.json(newTransaction)
}

export async function PUT(req: NextApiRequest) {
  const { id } = req.query
  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(id),
  )
  if (index > -1) {
    transactions[index] = { ...transactions[index], ...req.body }
    return NextResponse.json(transactions[index])
  }
  return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
}

export async function DELETE(req: NextApiRequest) {
  const index = transactions.findIndex(
    (transaction) => transaction.id === Number(req.query.id),
  )
  transactions.splice(index, 1)
  return NextResponse.json(undefined, { status: 204 })
}
