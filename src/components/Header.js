import React, { useState } from 'react';

const Header = ({ navItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <a className="navbar-brand" href="#Home">
        <img src="\images\logo.png" alt="Logo" style={{ width: '230px', height: '70px' }} />
      </a>
      <span className="navbar-toggler" role="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`#${item.href}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;


