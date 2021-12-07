import Icon from '@mdi/react';
import React from 'react';
import ProfilePic from '../static/profile-pic.jpg';
import { SideBarLinks, SideBarSocialLinks } from '../data/SideBarData';

const SideBar = () => {
  return (
    <div className="col-12 col-md-3 shadow-sm d-flex justify-content-center flex-column p-4 p-md-5 pb-3 h-100 bg-offwhite side-bar">
      <img src={ProfilePic} className="rounded shadow w-100 mb-3" alt="" />
      <h2 className="mb-0 font-weight-bold color-primary">avisionx.</h2>
      <p className="mb-3">
        Hello World! Let me introduce you to <b>Avi Garg</b>. He is an{' '}
        <a
          href="https://en.wikipedia.org/wiki/Engineer"
          target="_blank"
          rel="noopener noreferrer"
        >
          engineer
        </a>
        . Jack of all trades and master of some.
      </p>
      <ul className="p-0 side-list">
        {SideBarLinks.map((data) => (
          <li key={data.text}>
            {data.isExt ? (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                {data.text}
              </a>
            ) : (
              <a className="scroll" href={data.link}>
                {data.text}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <p className="mb-0">Crawl me here.</p>
        <div className="h5 mb-1">
          {SideBarSocialLinks.map((data) => (
            <a
              key={data.title}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              title={data.title}
              className="mr-2 pr-1"
            >
              {data.path && <Icon path={data.path} size={1} />}
              {data.logo && (
                <img
                  src={data.logo}
                  alt=""
                  style={{
                    height: '1.2rem',
                    width: '1.2rem',
                    color: 'inherit',
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
