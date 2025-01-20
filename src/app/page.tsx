'use client';

import { Header, NewTransaction, Sidebar } from '@components';
import { NavOptions } from '@domain';
import { useValidateAndSyncData } from '@hooks';

import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';
import { useSidebar } from '../hooks/useSidebar';

export default function Home() {
	useValidateAndSyncData();

	const navOptions = [NavOptions.HOME, NavOptions.INVESTMENTS, NavOptions.OTHER_SERVICES, NavOptions.TRANSFERS];
	const { isSidebarOpen, closeSidebar } = useSidebar();

	return (
		<>
			<div className="flex flex-col items-center justify-start h-screen">
				<Header name="Joana Da Silva Oliveira" menuOptions={navOptions} />
				<TabletNavHeader menuOptions={navOptions} />
				<pre>Veja a api em /api/transaction</pre>

				<Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} menuOptions={navOptions} />

				<NewTransaction />
			</div>
		</>
	);
}
