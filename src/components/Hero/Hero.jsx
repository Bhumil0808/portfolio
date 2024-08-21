import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
            <h1 className = {styles.title}>
              Hi <span className={styles.gif}><img src={getImageUrl('hero/giphy.webp')} alt="" /></span>,  I'm Bhumil Dobariya
            </h1>
            <p className={styles.description}>A Software Developer</p>
            <div className={styles.btns}>
            <a href="mailto:bhumildobariya88@gmail.com" className={styles.contactBtn}>Contact Me</a>
            <a href={getImageUrl('hero/BHUMIL_RESUME.pdf')} download={'BHUMIL_RESUME.pdf'} className={styles.contactBtn}>Download Resume</a>
            </div>
            
      </div>
      <img src={getImageUrl('hero/2311.JPG')} alt="heroImage" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
