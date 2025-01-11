'use server'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

import { TransactionSourceFacade } from '@/data-source'
import { Transaction } from '@/domain'

const transactions = TransactionSourceFacade.getAll()

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

  return NextResponse.json(transactions)
}

export async function POST(req: Request) {
  const body = await req.json()

  const newTransactions: Transaction[] = body.transactions.map(
    (transaction: Transaction) => {
      return { ...transaction }
    },
  )

  newTransactions.forEach((transaction) => {
    transactions.push(transaction)
  })

  return NextResponse.json(newTransactions)
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
