import React, { useEffect, useState } from 'react';



export default function Navbar() {
  const [navbarDark, setNavbarDark] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarDark(true);
    } else {
      setNavbarDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <nav className={`navbar ${navbarDark ? 'navbar-dark' : ''}`}>
      <a href="#" className="logo">Lucas <span>Franco</span></a>
      <div id="menu-icon"><i className="bi bi-list"></i></div>
      <ul className="navlist">
        <a className="nav-link" href="#hero">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contact">Contact</a>
      </ul>
      <div className="top-btn">
        <a href="#contact" className="h-btn">Contact Me</a>
      </div>
    </nav>
  );
}
