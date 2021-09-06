import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import NavBarLinks from '../data/NavBarData';

const NavBar = () => {
  return (
    <Nav className="justify-content-center justify-content-md-end py-2 w-100 px-3 mt-3 mt-md-0 shadow-sm bg-offwhite nav-bar">
      {NavBarLinks.map((data) => (
        <NavItem key={data.text}>
          <NavLink className="scroll" href={data.link}>
            {data.text}
          </NavLink>
        </NavItem>
      ))}
      <li className="nav-item d-flex py-1">
        <a
          className="nav-link btn btn-gradient rounded-pill btn-sm px-4 py-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://avisionx.net/cv/Resume avi17223@iiitd.ac.in.pdf"
        >
          Resume
        </a>
      </li>
    </Nav>
  );
};

export default NavBar;
