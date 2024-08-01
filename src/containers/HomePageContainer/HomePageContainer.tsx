import React, { useState } from 'react';
import { HomePage } from '../../components/HomePage';
import { TLinkMode, TTtlOption } from '../../constants';

export const HomePageContainer: React.FC = () => {
	const [linkMode, setLinkMode] = useState<TLinkMode>(TLinkMode.medium);
	const [ttl, setTtl] = useState<TTtlOption>(TTtlOption.Short);

	console.log('ttl >>> ', ttl);
	console.log('linkMode >>> ', linkMode);

	const changeTtl = () => {
		setTtl((value) => {
			if (value === TTtlOption.Short) return TTtlOption.Medium;
			if (value === TTtlOption.Medium) return TTtlOption.Long;
			if (value === TTtlOption.Long) return TTtlOption.Short;

			return value;
		});
	};

	const changeLinkMode = () => {
		setLinkMode((value) => {
			if (value === TLinkMode.easy) return TLinkMode.medium;
			if (value === TLinkMode.medium) return TLinkMode.difficult;
			if (value === TLinkMode.difficult) return TLinkMode.easy;

			return value;
		});
	};

	return (
		<>
			<HomePage
				tty={ttl}
				link={linkMode}
				changeTtl={changeTtl}
				changeLinkMode={changeLinkMode}
				createSpace={async () => {}}
			/>
		</>
	);
};
