'use client';

import { useValidateAndSyncData } from '@hooks';

import { NavOptions } from '@/domain';

import { Header } from '../components/Header';
import { TabletNavHeader } from '../components/Header/Components/TabletNavHeader';

export default function Home() {
	useValidateAndSyncData();
	const navOptions = [
		NavOptions.HOME,
		NavOptions.INVESTMENTS,
		NavOptions.OTHER_SERVICES,
		NavOptions.TRANSFERS,
	]

	return (
		<div className="flex flex-col items-center justify-start h-screen">
			<Header name={"Joana D'arc"} menuOptions={navOptions} />
			<TabletNavHeader menuOptions={navOptions} />
		</div>
	);
}
