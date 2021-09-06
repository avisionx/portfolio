import React from 'react';
import { Row } from 'reactstrap';
import { MainHeading, SubHeading } from './Common';
import ExperienceCard from './ExperienceCard';
import ExperiencesData from '../data/ExperiencesData';

const Experience = ({ idProps }) => {
  return (
    <div id={idProps}>
      <MainHeading text="Experience" />
      {ExperiencesData.map((data) => (
        <div key={data.sectionId}>
          <SubHeading text={data.sectionName} id={data.sectionId} />
          <Row>
            {data.sectionContent.map((card) => (
              <ExperienceCard key={card.img} card={card} />
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Experience;
