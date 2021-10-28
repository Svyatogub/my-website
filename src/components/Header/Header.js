import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Container}>
                <div className={styles.Welcome}>
                    <h1>Welcome to Svytogub's website</h1>
                </div>
                <div className={styles.Message}>
                    <p>Self taught programmer</p>
                    <hr/>
                    <p>Work hard, Dream big</p>
                </div>
            </div>
        </div>
    )
}
