import { z } from 'zod';

import { newTransactionSchema } from '../schemas';

export type NewTransactionFormData = z.infer<typeof newTransactionSchema>;

export type ModalDeleteConfirmationProps = {
	closeModal: VoidFunction;
	transactionId: number;
};
