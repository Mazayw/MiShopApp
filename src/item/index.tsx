import React from 'react';
import styles from './index.module.scss';
import { IDesc } from '../types';

export default function Item({ data }: { data: IDesc }) {
	return (
		<div className={styles.card}>
            <div className={styles.circle}>
				<img
					className={styles.icon}
					src={`/icons/${data.icon}`}
					alt='icon'
				></img>
			</div>
			<div className={styles.background}>
				<p className={styles.describe}>{data.text}</p>
			</div>
			
		</div>
	);
}
