import { useCallback, useState } from 'react';

export const useSidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

	const openSidebar = useCallback(() => setIsSidebarOpen(true), []);

	return { isSidebarOpen, closeSidebar, openSidebar };
};
