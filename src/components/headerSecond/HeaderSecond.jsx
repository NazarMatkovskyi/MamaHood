import React from 'react';
import './HeaderSecond.css'
import EllipseTwo from '../../images/EllipseTwo.png'
import EllipseOne from '../../images/EllipseOne.png'
import EllipseThree from '../../images/EllipseThreee.png'
import EllipseFour from '../../images/EllipseFour.png'
import EllipseFive from '../../images/EllipseFive.png'
import EllipseSix from '../../images/EllipseSix.png'
import EllipseSeven from '../../images/EllipseSeven.png'
import EllipseEight from '../../images/EllipseEight.png'
import EllipseNine from '../../images/EllipseNine.png'
import EllipseTen from '../../images/EllipseTen.png'

const HeaderSecond = ({
  description,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  info,
  button,
  imgUrl,
}) => {
  return (
    <div className="header-second">
      <div className="container header ">
      <img className="ellipse-one"  src={EllipseOne} alt="EllipseOne" />
      <img className="ellipse-two"  src={EllipseTwo} alt="EllipseTwo" />
      <img className="ellipse-three"  src={EllipseThree} alt="EllipseThree" />
      <img className="ellipse-four"  src={EllipseFour} alt="EllipseFour" />
      <img className="ellipse-five"  src={EllipseFive} alt="EllipseFive" />
      <img className="ellipse-six"  src={EllipseSix} alt="EllipseSix" />
      <img className="ellipse-seven"  src={EllipseSeven} alt="EllipseSeven" />
      <img className="ellipse-eight"  src={EllipseEight} alt="EllipseEight" />
      <img className="ellipse-nine"  src={EllipseNine} alt="EllipseNine" />
      <img className="ellipse-ten"  src={EllipseTen} alt="EllipseTen" />
        <div className="img-header_second">
          <img className="img-header_second" src={imgUrl} alt="img_one" />
        </div>
        <div className="header-second_block">
          <div className="header-second__text">
            <p className="header-second__text-one">{description}</p>
            <p className="header-second__text-two">{descriptionTwo}</p>
            <p className="header-second__text-three">{descriptionThree}</p>
            <p className="header-second__text-four">{descriptionFour}</p>
          </div>
        </div>
      </div>
      <div  className="header-second__footer">
        <div className="header-second_info">{info}</div>
        <div className="header-second_button">{button}</div>
      </div>
     
    </div>
    
  );
};

export default HeaderSecond;
