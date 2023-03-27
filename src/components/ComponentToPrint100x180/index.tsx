import React from 'react';
import styles from './index.module.scss';
import ItemSmall from '../itemSmall/index';
import { useGlobalContext } from '../../context/global-context';

export const ComponentToPrint100x180 = React.forwardRef<HTMLDivElement>(
	(props, ref) => {
		const { globalData, globalName, globalPrice } = useGlobalContext();

		const priceFormatter = (num: number) => {
			let string = num.toString().split('').reverse().join('');

			if (string.length > 3) {
				string = [string.slice(0, 3), ' ', string.slice(3)].join('');
			}
			return string.split('').reverse().join('');
		};

		return (
			<div ref={ref} className={styles.print}>
				<div className={styles.header}>
					<h1 className={styles.title}>
						{globalName.length < 15 ? globalName : 'Too long name'}
					</h1>
				</div>
				<div className={styles.body}>
					{globalData.map((el) => (
						<ItemSmall data={el} key={el.id} />
					))}
				</div>
				<div className={styles.footer}>
					{globalPrice.oldPrice !== 0 && (
						<h3 className={styles['price-old']}>
							{priceFormatter(globalPrice.oldPrice)}
							<span className={styles['price-old__uah']}>грн</span>
						</h3>
					)}

					<h2
						className={`${styles['price-new']} ${
							!globalPrice.oldPrice && styles['vertical-center']
						}`}
					>
						{priceFormatter(globalPrice.newPrice)}
						<span className={styles['price-new__uah']}>грн</span>
					</h2>
				</div>
			</div>
		);
	}
);
