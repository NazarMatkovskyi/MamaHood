import React from 'react';
import './FooterOne.css';
import btnFooterOne from './btnFooterOne.png';
import btnFooterTwo from './btnFooterTwo.png';

const FooterOne = () => {
  const data = [
    {
      title: 'Mamahood',
      subtitle: 'App is available on the full range of iOS and Android Devices,',
      descriptions:
        'Do you want to have all the information about womanhood in your device? Just download the application in any of the available stores.',
      buttonOne: btnFooterOne,
      buttonTwo: btnFooterTwo,
    },
  ];
  return (
    <div className="footer-one">
      <div className=" footer-one__container">
        <div className="footer-block">
          {data.map((item) => (
            <div
                key={item.title}
                className="footer-block-content"
            >
              <div className="item-title">{item.title}</div>
              <div className="item-subtitle">{item.subtitle}</div>
              <div className="item-description">{item.descriptions}</div>
              <div className="items-btn">
                <img className="item-btn__one" src={item.buttonOne} />
                <img className="item-btn__two" src={item.buttonTwo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
