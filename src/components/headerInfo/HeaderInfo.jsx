import React from 'react';
import './HeaderInfo.css';
import headerEllipsOne from '../../images/headerEllipsOne.png'
import headerEllipsTwo from '../../images/headerEllipsTwo.png'
import bntMarket from '../../images/btn-market.png'
import bntApp from '../../images/btn-app.png'
import headerEllipsMobileOne from '../../images/headerEllipse__mobile-One.png'
import headerEllipsMobileTwo from '../../images/headerEllipse__mobile-Two.png'
import headerEllipsMobileThree from '../../images/headerEllipse__mobile-Three.png'
import headerEllipsMobileFour from '../../images/headerEllipse__mobile-Four.png'
import headerEllipsMobileFive from '../../images/headerEllipse__mobile-Five.png'
import headerEllipsMobileSix from '../../images/headerEllipse__mobile-Six.png'
import CardEllipseMobileOne from '../../images/cardEllipseMobileOne.png'
import CardEllipseMobileTwo from '../../images/cardEllipseMobileTwo.png'
import CardEllipseMobileThree from '../../images/cardEllipseMobileThree.png'


const HeaderInfo = ({ title, description, descriptionTwo, info, button, imgUrl,descriptionMobile,titleMobile}) => {
  return (
    <div className="header">  
       <div className=" container header-block">
         <div className="ellipse__mobile">
         <img className="header_elipse__mobile-One"  src={headerEllipsMobileOne} alt="header_elipse__mobile-One" />
         <img className="header_elipse__mobile-Two"  src={headerEllipsMobileTwo} alt="header_elipse__mobile-Two" />
         <img className="header_elipse__mobile-Three"  src={headerEllipsMobileThree} alt="header_elipse__mobile-Three" />
         <img className="header_elipse__mobile-Four"  src={headerEllipsMobileFour} alt="header_elipse__mobile-Four" />
         <img className="header_elipse__mobile-Five"  src={headerEllipsMobileFive} alt="header_elipse__mobile-Five" />
         <img className="header_elipse__mobile-Six"  src={headerEllipsMobileSix} alt="header_elipse__mobile-Six" />
         </div>
        <div className="header__title">{title}</div>
        <div className="header__titleMobile">{titleMobile}</div>
        <div className="header__text">
          <p className="header__text-one">{description}</p>
          <p className="header__text-two">{descriptionTwo}</p>
        </div>
        <div className="header-ellipse">
      <img className="header_elipse_1"  src={headerEllipsOne} alt="headerEllipsOne" />
      </div>
        <div className="header-text__mobile">
          <div className="headerMobile-ellipse">
          <img className="elipse__mobile-One"  src={CardEllipseMobileOne} alt="elipse__mobile-One" />
        <img className="elipse__mobile-Two"  src={CardEllipseMobileTwo} alt="elipse__mobile-Two" />
        <img className="elipse__mobile-Three"  src={CardEllipseMobileThree} alt="elipse__mobile-Three" />
          </div>
       
        <p className="header__text-oneMobile">{descriptionMobile}</p>
        </div>
        <div className="header__download">
        <div className="header_info">{info}</div>
        <div className="header_button">{button}</div> 
        </div>
        <div className="header-download__mobile">
        <img className='download-mobile' src={bntApp} alt="bntApp" />
          <img className='download-mobile' src={bntMarket} alt="bntMarket" />
         
        </div>
       
      </div>
      <div className="img-header">
        <img className="img-header_first" src={imgUrl} alt="img_one" />
      </div>
      <div className="header-ellipse">
    
      <img className="header_elipse_2" src={headerEllipsTwo} alt='headerEllipsTwo' />
      </div>
    </div>
  );
};

export default HeaderInfo;
