import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import SideBar from './components/SideBar';
import MainPage from './components/MainPage';

const App = () => {
  useEffect(() => {
    document.querySelectorAll('.scroll').forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const offset = 70;
        const target = item.href.split('#')[1];
        let topVal = document.getElementById(target).offsetTop - offset;
        if (window.innerWidth <= 767.98) {
          topVal += window.innerHeight + offset;
        }
        window.scrollTo({
          top: topVal,
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <Container fluid>
      <Row className="row" style={{ minHeight: '100vh', position: 'relative' }}>
        <SideBar />
        <MainPage />
      </Row>
    </Container>
  );
};

export default App;
