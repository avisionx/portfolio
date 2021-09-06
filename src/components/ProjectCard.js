import React from 'react';

const ProjectCard = ({ card }) => {
  return (
    <div className="col-12 col-lg-4 pb-3 pb-md-4 mt-2">
      <div className="card shadow border-0">
        <img
          // eslint-disable-next-line
          src={require(`../static/projectcompressed/${card.img}`)}
          className="card-img-top"
          alt=""
        />
        <div className="card-body px-3 pb-3 pt-2">
          <h5 className="mb-0 font-weight-bold">{card.title}</h5>
          <p className="mb-0 small">
            {card.tags.map((data) => (
              <span key={data} className="badge badge-main badge-pill mr-1">
                {data}
              </span>
            ))}
          </p>
          <p className="small mb-1 mt-1">{card.desc}</p>
          <div className="row pt-2">
            {card.newlook && (
              <div className="col pr-2">
                <a
                  href={card.newlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-uppercase rounded btn-outline-main justify-content-center w-100"
                >
                  New Look
                </a>
              </div>
            )}
            {card.product && (
              <div className="col pr-2">
                <a
                  href={card.product}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-uppercase rounded btn-outline-main justify-content-center w-100"
                >
                  product website
                </a>
              </div>
            )}
            {card.website && (
              <div className="col pr-2">
                <a
                  href={card.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-uppercase rounded btn-outline-main justify-content-center w-100"
                >
                  website
                </a>
              </div>
            )}
            {card.github && (
              <div className="col pl-2">
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-uppercase rounded btn-outline-main justify-content-center w-100"
                >
                  code
                </a>
              </div>
            )}
            {card.behance && (
              <div className="col pl-2">
                <a
                  href={card.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-uppercase rounded btn-outline-main justify-content-center w-100"
                >
                  go to behance
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
