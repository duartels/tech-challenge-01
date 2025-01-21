'use client';

import { Header, NewTransaction, Sidebar } from '@components';
import { NavOptions } from '@domain';
import { useValidateAndSyncData } from '@hooks';

import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';
import { useSidebar } from '../hooks/useSidebar';

export default function Home() {
	useValidateAndSyncData();

	const navOptions = [NavOptions.HOME, NavOptions.INVESTMENTS, NavOptions.OTHER_SERVICES, NavOptions.TRANSFERS];
	const { isSidebarOpen } = useSidebar();

	return (
		<>
			<div className="flex flex-col items-center justify-start h-screen">
				<Header name="Joana Da Silva Oliveira" menuOptions={navOptions} />
				<TabletNavHeader menuOptions={navOptions} />
				<pre>Veja a api em /api/transaction</pre>

				<div className="flex justify-between items-start h-screen gap-4 md:px-6">
					<Sidebar isOpen={isSidebarOpen} menuOptions={navOptions} hideInBreakpoints />
					<NewTransaction />
					{/*TO-DO: Replace by the list. This second sidebar is fulfilling the list place for better visualization.*/}
					<Sidebar isOpen={isSidebarOpen} menuOptions={navOptions} hideInBreakpoints />
				</div>
			</div>
		</>
	);
}
