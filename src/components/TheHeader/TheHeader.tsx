import { TheameSwitcher } from 'components/TheameSwitcher';
import styles from './TheHeader.module.scss';

export const TheHeader = () => (
	<div className={styles.header}>
		<div className={styles.logo}>devfinder</div>
		<TheameSwitcher/>
	</div>
);
