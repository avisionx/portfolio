import React from 'react';
import { Row } from 'reactstrap';
import { MainHeading, SubHeading } from './Common';
import SkillsData from '../data/SkillsData';

const Skills = ({ idProps }) => {
  return (
    <div id={idProps}>
      <MainHeading text="Skills" />
      {SkillsData.map((data, index) => (
        <div key={data.sectionId}>
          <SubHeading text={data.sectionName} id={data.sectionId} />
          <Row className="mt-1">
            <div
              className={`col-12 ${
                index === SkillsData.length - 1 ? 'pb-1' : 'pb-3 pb-md-4'
              } mt-2 skills-img-container text-md-left`}
            >
              {data.sectionContent.map((image) => (
                <img
                  // eslint-disable-next-line
                  src={`https://cdn.svgporn.com/logos/${image}.svg`}
                  title={image}
                  key={image}
                  alt=""
                />
              ))}
            </div>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Skills;
