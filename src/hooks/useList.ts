import { Transaction } from "@domain";

import { transactionOptions } from "../constants/transaction";

export const useList = () => {

    const groupedTransactions = (transactions: Transaction[]) => {
        return transactions.reduce((acc, transaction) => {
            const key = new Date(transaction.date).toLocaleString('default', { month: 'long' });
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(transaction);
            return acc;
        }, {} as { [key: string]: Transaction[] });
    }

    const parseToReal = (value: number) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const parseDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
        });
    }

    const parseType = (transaction: Transaction) => {
        const types = transactionOptions;

        return types.find((type) => type.value === transaction.type)?.label
    }

    return { groupedTransactions, parseToReal, parseDate, parseType };
    
}