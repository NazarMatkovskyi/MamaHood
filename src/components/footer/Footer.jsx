import React from 'react';
import './Footer.css';
import logo from '../../images/Logo.png';
import btnApp from '../../images/btn-app.png';
import btnMarket from '../../images/btn-market.png';
import World from '../../images/world.png';
import Facebook from '../../images/brand-facebook.png';
import Twitter from '../../images/brand-twitter.png';
import YouTube from '../../images/brand-youtube.png';
import Instagram from '../../images/brand-instagram.png';
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="image-footer">
          <img className="img-footer" width={91} height={48} src={logo} alt="logo" />
        </div>
        <div className="footer-end-one">
          <ul className="footer-blocks">
            <li className="footer-itemOne">
              <a className="footer-item__title" href="/" to="about" duration={2500} spy={true} offset={-370} smooth={true}>
                Project
              </a>
              <div className="footer-about__inner">
              <a className="footer__inner" href='/'> <Link className="footer__inner footer__inner-link"  to="about" duration={2500} spy={true} offset={-370} smooth={true}>About</Link></a>
              <a className="footer__inner" href="/"><Link className="footer__inner footer__inner-link"   to="features" duration={2500} spy={true} offset={-80} smooth={true}>Features</Link></a>
              <a className="footer__inner" href="/"><Link className="footer__inner footer__inner-link"   to="tools" duration={2500} spy={true}  offset={-120} smooth={true}>Tools</Link></a>
              </div>
             
            </li>
            <li className="footer-itemTwo">
              <a className="footer-item__title" href="/">
                Contact
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner" href="/">
                  movadex@gmail.com
                </a>
                <a className="footer__inner" href="/">
                  verik@gmail.com
                </a>
              </div>
            </li>
            <li className="footer-itemThree">
              <a className="footer-item__title" href="/">
                Global
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner" href="/">
                  License
                </a>
                <a className="footer__inner" href="/">
                  Terms of Use
                </a>
                <a className="footer__inner" href="/">
                  Privacy Police
                </a>
              </div>
            </li>
            <li className="footer-itemFour ">
              <a className="footer-item__title" href="/">
                Get the App
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner__btn" href="https://www.apple.com/ua/app-store/">
                  <img src={btnApp} alt="btnApp" />
                </a>
                <a
                  className="footer__inner__btn"
                  href="https://play.google.com/store/apps?hl=uk&gl=US">
                  <img src={btnMarket} alt="btnMarket" />
                </a>
              </div>
            </li>
          </ul>

          <ul className="footer-blocks-first">
            <li className="footer-item">
              <span className="footer-item__text">© 2021 MamaHood. All rights reserved</span>
            </li>
            <li className="footer-item">
              <span className="footer-item_images" href="/">
                <img src={World} alt="" />
              </span>
            </li>
            <li className="footer-items">
              <div className="footer-about__link">
                <a className="footer__inner__btnEnd" href="https://www.facebook.com/">
                  <img src={Facebook} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://twitter.com/">
                  <img src={Twitter} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://www.youtube.com/">
                  <img src={YouTube} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://www.instagram.com/">
                  <img src={Instagram} alt="btnApp" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* footer for mobile */}
        <div className="footer-end">
          <ul className="footer-blocks">
            <li className="footer-item">
              
              <a className="footer-item__title" href="#about">
                Project
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner" href="/">
                  About
                </a>
                <a className="footer__inner" href="/">
                  Features
                </a>
                <a className="footer__inner" href="/">
                  Tools
                </a>
              </div>
            </li>

            <li className="footer-item">
              <a className="footer-item__title" href="/">
                Global
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner" href="/">
                  License
                </a>
                <a className="footer__inner" href="/">
                  Terms of Use
                </a>
                <a className="footer__inner" href="/">
                  Privacy Police
                </a>
              </div>
            </li>
            <li className="footer-item  footer-item__contact">
              <a className="footer-item__title" href="/">
                Contact
              </a>
              <div className="footer-about__inner">
                <a className="footer__inner" href="/">
                  movadex@gmail.com
                </a>
                <a className="footer__inner" href="/">
                  verik@gmail.com
                </a>
              </div>
            </li>
            <li className="footer-items footer-items__icons">
              <div className="footer-about__link">
                <a className="footer__inner__btnEnd" href="https://www.facebook.com/">
                  <img src={Facebook} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://twitter.com/">
                  <img src={Twitter} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://www.youtube.com/">
                  <img src={YouTube} alt="btnApp" />
                </a>
                <a className="footer__inner__btnEnd" href="https://www.instagram.com/">
                  <img src={Instagram} alt="btnApp" />
                </a>
              </div>
            </li>

            <li className="footer-item footer-item__btnFirst ">
              <a className="footer-item__title" href="/"></a>
              <div className="footer-about__inner">
                <a className="footer__inner__btn" href="https://www.apple.com/ua/app-store/">
                  <img src={btnApp} alt="btnApp" />
                </a>
                <a
                  className="footer__inner__btn"
                  href="https://play.google.com/store/apps?hl=uk&gl=US">
                  <img src={btnMarket} alt="btnMarket" />
                </a>
              </div>
            </li>
            <li className="footer-item footer-item_lastText">
              <span className="footer-item__text">© 2021 MamaHood. All rights reserved</span>
            </li>
            <li className='footer-last__img'>
              <span className="footer-item_images" href="/">
                <img src={World} alt="" />
              </span>
            </li>
          </ul>

          <ul className="footer-blocks-first">
            <li className="footer-item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
