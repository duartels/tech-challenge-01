import { z } from 'zod';

import { editTransactionSchema, newTransactionSchema } from '../schemas';

export type NewTransactionFormData = z.infer<typeof newTransactionSchema>;
export type EditTransactionFormData = z.infer<typeof editTransactionSchema>;

export type ModalEditTransactionProps = {
	onClose: () => void;
	transactionId: number;
};

export type ModalDeleteConfirmationProps = {
	closeModal: VoidFunction;
	transactionId: number;
};
