import styles from './index.module.scss';
import { IDesc } from '../../types';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useGlobalContext } from '../../context/global-context';

export default function Item({ data }: { data: IDesc }) {
	const { setGlobalData } = useGlobalContext();

	const [showButton, setShowButton] = useState(false);

	const mouseInHandler = () => {
		setShowButton(true);
	};

	const mouseOutHandler = () => {
		setShowButton(false);
	};

	const clickHandler = () => {
		setGlobalData((prev) => prev.filter((el) => el.id !== data.id));
	};

	return (
		<div
			className={styles.card}
			onMouseEnter={mouseInHandler}
			onMouseLeave={mouseOutHandler}
		>
			<div className={styles.circle}>
				<img
					className={styles.icon}
					src={`/icons/${data.icon}`}
					alt='icon'
				></img>
			</div>
			<div className={styles.background}>
				<p className={styles.describe}>{data.text}</p>
				{showButton && (
					<IconButton
						aria-label='delete'
						sx={{ left: 290, top: -10 }}
						onClick={clickHandler}
					>
						<DeleteIcon />
					</IconButton>
				)}
			</div>
		</div>
	);
}
