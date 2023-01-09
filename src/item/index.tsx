import React from 'react'
import styles from './index.module.scss';

export default function Item() {
return (
    <div className={styles.background}>
        <p className={styles.describe}>555555555555555555555555555555555555555555 5555555555</p>
        <div className={styles.circle}>
        <img className={styles.icon} src='\icons\NFC.svg' alt='icon'></img>
        </div>
    </div>
)
}
