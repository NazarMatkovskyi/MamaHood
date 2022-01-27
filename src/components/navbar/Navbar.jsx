import React, { useState } from 'react';
import './Navbar.css';
import logo from './Logo.png';
import burgerList from './BurgerList.png'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className='img-navbar' width={91} height={48} src={logo} alt="logo" />
        <ul className={click ? 'nav active' : 'nav'}>
          <li className="nav-item nav-item-hov">
            <a href="#about">About</a>
          </li>
          <li className="nav-item nav-item-hov">
            <a href="/">Features</a>
          </li>
          <li className="nav-item nav-item-hov">
            <a href="/">Tools</a>
          </li>
          <li className="nav-item ">
            <a className="btn" href="/">
              Download App
            </a>
          </li>
        </ul>
        <div onClick={handleCLick} className="hamburger">
          {click ? (
            <img src={burgerList} className="icon" />
          ) : (
            <img src={burgerList} className="icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
