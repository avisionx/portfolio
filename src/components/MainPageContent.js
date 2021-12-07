import React, { useEffect, useState } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const MainPageContent = () => {
  const [year, setYear] = useState('0000');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [year]);

  return (
    <>
      <Projects classProps="pt-2 pt-md-5" idProps="projects" />
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
