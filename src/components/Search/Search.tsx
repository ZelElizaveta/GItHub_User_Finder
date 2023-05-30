// import { useRef } from 'react';
import { ReactComponent as SeachIcon} from 'assets/icon-search.svg';

import styles from './Search.module.scss';
import { Button } from 'components/Button';

interface SearchProps {
	hasError: boolean,
	onSubmit: (text: string) => void
}

type FormFields = {
	username: HTMLInputElement
}

export const Search = ({hasError, onSubmit }: SearchProps) => {
	// const searchRef = useRef<HTMLInputElement | null>(null);

	const handelSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault();
		// const text = searchRef.current? searchRef.current.value : '';
		// if(text) {
		// 	onSubmit(text);
		// 	if (searchRef.current) {
		// 		searchRef.current.value = ''
		// 	}
		// }

		const text = event.currentTarget.username.value;

		if(text.trim()) {
			onSubmit(text);
			event.currentTarget.reset();
		}
	} 
	return (
		<form onSubmit={handelSubmit}  autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SeachIcon/>
				</label>
				<input 
					type='text'
					className={styles.textField}
					id='search'
					name='username'
					placeholder='Search Github username...'
					// ref={searchRef}
				/>
				{hasError && (
					<div className={styles.error}>No result</div>
				)}
				<Button childern='Search'/>
			</div>
		</form>
	)
};


