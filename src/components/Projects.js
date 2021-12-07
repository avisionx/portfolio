import React from 'react';
import { Row } from 'reactstrap';
import ProjectsData from '../data/ProjectsData';
import { MainHeading, SubHeading } from './Common';
import ProjectCard from './ProjectCard';

const Projects = ({ classProps, idProps }) => {
  return (
    <div className={classProps} id={idProps}>
      <div className="mt-3" />
      <MainHeading text="Projects" />
      {ProjectsData.map((data) => (
        <div key={data.sectionId}>
          <SubHeading text={data.sectionName} id={data.sectionId} />
          <Row>
            {data.sectionContent.map((card) => (
              <ProjectCard key={card.title} card={card} />
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Projects;
