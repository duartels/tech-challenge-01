import { z } from 'zod';

import { editTransactionSchema, newTransactionSchema } from '../schemas';

export type NewTransactionFormData = z.infer<typeof newTransactionSchema>;
export type EditTransactionFormData = z.infer<typeof editTransactionSchema>;

export type CommonModalTransactionProps = {
	onClose: () => void;
	transactionId: number;
};

export type ModalEditTransactionProps = CommonModalTransactionProps;

export type ModalDeleteTransactionProps = CommonModalTransactionProps & {
	openConfirmationModal: VoidFunction;
};
