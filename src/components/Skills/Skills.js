import React from 'react'
import styles from './Skills.module.scss'

export const Skills = () => {
    return (
        <div className={styles.Skills}>
            <div className={styles.Container}>
                <h3>Skills</h3>
                <div className={styles.Grid}>
                    <div className={styles.Horizontal}>
                        <h4>JavaScript</h4>
                        <p>ES5, ES6, ES7+, TypeScript</p>
                    </div>
                    <div className={styles.Horizontal}>
                        <h4>React.js</h4>
                        <p>Redux</p>
                    </div>
                    <div className={styles.Horizontal}>
                        <h4>Node.js</h4>
                        <p>Express, WebSockets</p>
                    </div>
                    <div className={styles.Horizontal}>
                        <h4>Git</h4>
                        <p>Git Submodules, SVN</p>
                    </div>
                    <div className={styles.Horizontal}>
                        <h4>Tools</h4>
                        <p>Sass, Less, PostCSS, Pug, jQuery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
