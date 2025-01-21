export interface SidebarProps {
	title?: string;
	menuOptions: string[];
	isOpen: boolean;
	onClose?: () => void;
	hideInBreakpoints?: boolean;
}
