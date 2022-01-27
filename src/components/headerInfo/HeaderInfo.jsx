import React from 'react';
import './HeaderInfo.css';

const HeaderInfo = ({ title, description, descriptionTwo, info, button, imgUrl }) => {
  return (
    <div className="header">
      <img className="header_elipse_1" src="/img/header-elipsThree.png" alt="elipses" />
      <img className="header_elipse_2" src="/img/header_elipse_2.png" alt="elipses" />
      <div className=" container header-block">
        <div className="header__title">{title}</div>
        <div className="header__text">
          <p className="header__text-one">{description}</p>
          <p className="header__text-two">{descriptionTwo}</p>
        </div>
        <div className="header_info">{info}</div>
        <div className="header_button">{button}</div>
      </div>
      <div className="img-header">
        <img className="img-header_first" src={imgUrl} alt="img_one" />
      </div>
    </div>
  );
};

export default HeaderInfo;
