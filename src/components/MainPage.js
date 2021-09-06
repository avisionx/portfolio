import React from 'react';
import NavBar from './NavBar';
import MainPageContent from './MainPageContent';

const MainPage = () => {
  return (
    <div
      className="col-12 offset-md-3 col-md-9"
      style={{ position: 'relative' }}
    >
      <NavBar />
      <MainPageContent />
    </div>
  );
};

export default MainPage;
