export interface SidebarProps {
	title?: string;
	menuOptions: string[];
	isOpen: boolean;
	onClose: () => void;
	orientation?: 'left' | 'right';
	hideInBreakpoints?: boolean;
}
