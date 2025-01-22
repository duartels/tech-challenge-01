import { ChangeEvent } from 'react';

import { Option } from './option.type';

export type SelectProps = {
	options: Option[];
	name: string;
	placeholder: string;
	value: string;
	onChange: (value: ChangeEvent<HTMLInputElement>) => void;
	fullWidth?: boolean;
	disabled?: HTMLInputElement['disabled'];
};
