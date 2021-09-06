import React from 'react';

const ExperienceCard = ({ card }) => {
  return (
    <div
      className={`col-12 ${
        card.isLarge ? 'col-lg-6' : 'col-lg-4'
      } pb-3 pb-md-4 mt-2`}
    >
      <div className="card shadow border-0">
        <div className="card-body d-flex">
          <div className="flex-grow-0">
            <img
              // eslint-disable-next-line
              src={require(`../static/experience/${card.img}`)}
              width="50px"
              className="mr-3"
              alt=""
            />
          </div>
          <div className="flex-grow-1">
            <p className="font-weight-bold mb-0">{card.title}</p>
            <p className="color-primary small mb-0">{card.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
