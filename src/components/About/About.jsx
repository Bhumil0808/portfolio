import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItemhead}>
                        <div className={styles.aboutItemText}>
                            <p>I am a passionate and dedicated fresher full stack developer with a strong foundation in frontend and backend technologies as well as in database management. I am eager to apply my skills to build innovative software solutions and contribute to a dynamic development team.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/pdeu.png')} alt="cursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Education</h3>
                            <p>B.Tech in Computer Science & Engineering at Pandit Deendayal Energy University</p>
                            <p>2021 - 2025</p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/Qspiders.png')} alt="cursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Experience</h3>
                            <p>Summer Intern at QSpiders, Ahmedabad</p>
                            <p>Jun 2024 - July 2024</p>
                        </div>
                    </li> */}
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend</h3>
                            <p>Frontend Developer with building optimized projects</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>Backend Developer with building optimized projects</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="cursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Database</h3>
                            <p>Frontend Developer with building optimized projects</p>
                        </div>
                    </li> */}
                </ul>
            </div>

        </section>
    )
}
