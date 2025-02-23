import { z } from 'zod';

export const newTransactionSchema = z.object({
  amount: z.coerce.number(),
  date: z.string().date().nonempty(),
  type: z.string().nonempty(),
});

export const editTransactionSchema = z.object({
	amount: z.coerce.number().positive(),
	date: z.string().date().nonempty(),
	type: z.string().nonempty(),
});
