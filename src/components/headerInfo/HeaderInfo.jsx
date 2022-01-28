import React from 'react';
import './HeaderInfo.css';
import headerEllipsOne from './headerEllipsOne.png'
import headerEllipsTwo from './headerEllipsTwo.png'
import bntMarket from './btn-market.png'
import bntApp from './btn-app.png'


const HeaderInfo = ({ title, description, descriptionTwo, info, button, imgUrl,descriptionMobile,titleMobile}) => {
  return (
    <div className="header">
      <div className="header-ellipse">
      <img className="header_elipse_1"  src={headerEllipsOne} alt="headerEllipsOne" />
      <img className="header_elipse_2" src={headerEllipsTwo} alt='headerEllipsTwo' />
     
      </div>
       <div className=" container header-block">
        <div className="header__title">{title}</div>
        <div className="header__titleMobile">{titleMobile}</div>
        <div className="header__text">
          <p className="header__text-one">{description}</p>
          <p className="header__text-two">{descriptionTwo}</p>
        </div>
        
        <div className="header-text__mobile">
        <p className="header__text-oneMobile">{descriptionMobile}</p>
        </div>
        <div className="header__download">
        <div className="header_info">{info}</div>
        <div className="header_button">{button}</div> 
        </div>
        <div className="header-download__mobile">
          <img className='download-mobile' src={bntMarket} alt="bntMarket" />
          <img className='download-mobile' src={bntApp} alt="bntApp" />
        </div>
       
      </div>
      <div className="img-header">
        <img className="img-header_first" src={imgUrl} alt="img_one" />
      </div>
    </div>
  );
};

export default HeaderInfo;
