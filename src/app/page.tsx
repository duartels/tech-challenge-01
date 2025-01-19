'use client';

import { Header, NewTransaction } from '@components';
import { NavOptions } from '@domain';
import { useValidateAndSyncData } from '@hooks';

import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';

export default function Home() {
	useValidateAndSyncData();

	const navOptions = [NavOptions.HOME, NavOptions.INVESTMENTS, NavOptions.OTHER_SERVICES, NavOptions.TRANSFERS];

	return (
		<>
			<div className="flex flex-col items-center justify-start h-screen">
				<Header name={"Joana D'arc"} menuOptions={navOptions} />
				<TabletNavHeader menuOptions={navOptions} />
				<pre>Veja a api em /api/transaction</pre>

				<NewTransaction />
			</div>
		</>
	);
}
