import React from 'react';
import skills from "../../data/skills.json"
import styles from './Skills.module.css';
import { getImageUrl } from '../../utils';
import history from "../../data/history.json"

export const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            
            <ul className={styles.history}>{
                    history.map((historyItem,id)=>{
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
                            <div className={styles.historyItemDetails}> 
                                <h3>{`${historyItem.role}`}</h3>
                                {/* <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p> */}
                                {/* <ul> */}
                                    {historyItem.experiences.map((experiences,id)=>{
                                    return <p key={id}>{experiences}</p>
                                })}
                                {/* </ul> */}
                            </div>
                        </li>
                    })
                }
            </ul>

            <div className={styles.skills}>{
                skills.map((skill,id)=>{
                return <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
                    
                })
            }
                
            </div>
        </div>
        
    </section>
  )
}
