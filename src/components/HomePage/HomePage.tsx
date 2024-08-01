import React, { useState } from 'react';
import styles from './HomePage.module.css';
import logo from '../../assets/quickshare-logo.png';
import { TLinkMode, TTtlOption } from '../../constants';

interface HomePageProps {
	createSpace: () => Promise<void>;
	changeTtl: () => void;
	changeLinkMode: () => void;
	tty: TTtlOption;
	link: TLinkMode;
}

export const HomePage: React.FC<HomePageProps> = ({
	tty,
	link,
	changeLinkMode,
	changeTtl,
	createSpace,
}) => {
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async () => {
		setLoading(true);
		await createSpace();
		setLoading(false);
	};

	return (
		<>
			<div className={styles.pageWrapper}>
				<div className={styles.logoWrapper}>
					<img src={logo} alt="QuickShare Logo" />
				</div>
				<div className={styles.nameWrapper}>Quick Share</div>
				<div className={styles.buttonWrapper}>
					<button
						className={styles.buttonReset}
						onClick={handleSubmit}
						disabled={loading}
					>
						create space
					</button>
					<button className={styles.buttonReset} onClick={changeTtl}>
						{tty}H
					</button>
					<button className={styles.buttonReset} onClick={changeLinkMode}>
						{link}
					</button>
				</div>
				<div>
					<ul>
						<li>
							Press to change time to live for your space, you can always delete
							or continue it.
						</li>
						<li>Press to change link difficulty (its length).</li>
					</ul>
				</div>
			</div>
		</>
	);
};
