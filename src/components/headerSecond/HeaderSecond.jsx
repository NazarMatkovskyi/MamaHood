import React from 'react';
import './HeaderSecond.css'

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
      <div className="header-second__footer">
        <div className="header-second_info">{info}</div>
        <div className="header-second_button">{button}</div>
      </div>
    </div>
  );
};

export default HeaderSecond;
