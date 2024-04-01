import React from 'react';
import TitleWithStar from '../../../../components/TitleWithStar/TitleWithStar';
import { ProjectsData } from '../../../../textContent/typescript/home.ts';
import styles from './style.module.scss';
import ProjectsContent from '../../../../components/ProjectsContent/ProjectsContent.tsx';
import MaxWidth from '../../../../components/MaxWidth/MaxWidth.tsx';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  return (
    <section className={styles.projectsSection} id='projects'>
      <MaxWidth>
        <TitleWithStar> {data.title} </TitleWithStar>
        <div className={styles.projectsContent}>
          {data.projects.map((project) => {
            return <ProjectsContent {...project} />;
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Projects;
