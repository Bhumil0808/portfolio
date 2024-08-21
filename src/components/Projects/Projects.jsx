import React from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import  {Projectcard}  from "./ProjectCard";

export const Projects = () => {
  return (
  <section className={styles.container} id='project'>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.content}>
        {
            projects.map((project,id)=>{
                return( 
                    <Projectcard key={id} project={project}/>
                );
            })
        }
    </div>
  </section>
  )
}
