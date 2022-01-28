import React, { useState } from 'react';
import './Navbar.css';
import logo from './Logo.png';
import burgerList from './BurgerList.png'
import {Link} from 'react-scroll'

const Navbar = ({}) => {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className='img-navbar' width={91} height={48} src={logo} alt="logo" />
        <ul className={click ? 'nav active' : 'nav'}>
          <li className="nav-item nav-item-hov">
            <a href='/'> <Link  to="about" duration={2500} spy={true} offset={-370} smooth={true}>About</Link></a>
          </li>
          <li className="nav-item nav-item-hov">
            <a href="/"><Link  to="features" duration={2500} spy={true} offset={-80} smooth={true}>Features</Link></a>
          </li>
          <li className="nav-item nav-item-hov">
          <a href="/"><Link  to="tools" duration={2500} spy={true}  offset={-120} smooth={true}>Tools</Link></a>
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
