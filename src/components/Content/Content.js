import React from 'react'
import styles from './Content.module.scss'
import aboutme from '../img/aboutme2.jpg'

export const Content = () => {
    return (
        <div className={styles.Content}>
            <div className={styles.Container}>
                <div className={styles.Horizontal}>
                    <div className={styles.Vertical}>
                        <h3>About Me</h3>
                        <hr/>
                        <p>I am a higly focused, fast learning, competetive and obsessed with improving myself, self tought programmer. I know how to deal with stracefull situations and work under preassure.</p>
                    </div>
                    <div className={styles.VertPic}>
                        <img src={aboutme} alt="about me"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
