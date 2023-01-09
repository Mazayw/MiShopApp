import React from "react";
import styles from './index.module.scss';
import Item from '../item/index';

export const ComponentToPrint = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles.print}>
        <div className={styles.header}>
            <h1 className={styles.title}>Xiaomi 10</h1>
        </div>
        <div className={styles.body}><Item/> </div>
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                <img src="/logo.png" alt="logo" className={styles.logo} /> 
                <h2 className={styles['title-footer']}>простір розумних гаджетів</h2>
            </div>
        </div>
    </div>
  );
});