import React from 'react';
import styles from './Layout.module.css';
import githubMark from '../../assets/github-mark.png';

interface LayoutProps {
	children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className={styles.layoutWrapper}>
				<div className={styles.contentWrapper}>{children}</div>
				<div className={styles.footerWrapper}>
					<div className={styles.footerInner}>
						<span>Powered by Ruslan</span>
						<a href={'#'}>
							<img
								className={styles.githubMark}
								src={githubMark}
								alt={'Github Link'}
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
