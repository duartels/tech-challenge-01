'use client';

import { Header, NewTransaction, Overview, Sidebar } from '@components';
import { NavOptions } from '@domain';
import { useValidateAndSyncData } from '@hooks';

import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';
import { List } from '../components/List';
import { useSidebar } from '../hooks/useSidebar';

export default function Home() {
	const { balance, transactions } = useValidateAndSyncData();

	const navOptions = [NavOptions.HOME, NavOptions.INVESTMENTS, NavOptions.OTHER_SERVICES, NavOptions.TRANSFERS];
	const { isSidebarOpen } = useSidebar();

	return (
		<>
			<div className="flex flex-col gap-4">
				<Header name="Joana Da Silva Oliveira" menuOptions={navOptions} />
				<TabletNavHeader menuOptions={navOptions} />
				<div className="flex items-start gap-4 justify-center">
					<Sidebar isOpen={isSidebarOpen} menuOptions={navOptions} hideInBreakpoints />
					<section className='flex flex-col gap-4'>
						<Overview accountBalance={balance} accountName='Joana Da Silva Oliveira' />
						<NewTransaction />
					</section>
					<List transactions={transactions} />
				</div>
			</div>
		</>
	);
}
