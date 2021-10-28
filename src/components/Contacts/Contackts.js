import React from 'react'
import styles from './Contacts.module.scss'
import insta from '../img/instagram-brands.svg'
import telegram from '../img/telegram-plane-brands.svg'
import github from '../img/github-brands.svg'
import linkedin from '../img/linkedin-in-brands.svg'

export const Contackts = () => {
    return (
        <div className={styles.Contackts}>
            <div className={styles.Container}>
                <a href="https://www.linkedin.com/in/svyatogub-zemlyanichkin-498763224/">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/Svyatogub">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://www.instagram.com/svyatogubzemlyanichkeen/">
                    <img src={insta} alt="insta"/>
                </a>
                <a href="https://t.me/svyatogub">
                    <img src={telegram} alt="telegramm"/>
                </a>
                <hr />
                <h4>svyatogybzemlyanichkeen@gmail.com</h4>
            </div>
        </div>
    )
}
