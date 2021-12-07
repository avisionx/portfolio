import React, { useEffect, useState } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { MainHeading } from './Common';

const MainPageContent = () => {
  const [year, setYear] = useState('0000');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [year]);

  return (
    <>
      <div className="mt-3 pt-2 pt-md-5" id="myjams"></div>
      <MainHeading text="My Jams" />
      <iframe
        title="My Jams"
        allow="autoplay *; encrypted-media *; fullscreen *"
        frameborder="0"
        height="400"
        className="mt-3"
        style={{
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          background: 'transparent',
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/playlist/what-am-i-listening/pl.u-Ymb0vd2CP853rLg"
      ></iframe>
      <Projects idProps="projects" />
      <Experience idProps="experience" />
      <Skills idProps="skills" />
      <Contact idProps="contact" />
      <div className="pt-3">
        <footer className="text-center text-muted mb-2">
          {' '}
          <small>
            Copyright &copy; {year} avisionx.net | All rights reserved
          </small>{' '}
        </footer>
      </div>
    </>
  );
};

export default MainPageContent;
