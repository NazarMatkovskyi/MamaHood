import React from 'react';
import Button from '../../UI/button/Button';
import HeaderInfo from '../headerInfo/HeaderInfo';
import phoneOne from './phoneOne.png';
import phoneTwo from './phoneTwo.png';
import './Header.css';
import HeaderSecond from '../headerSecond/HeaderSecond';

const Header = () => {
  const information = {
    infoOne: {
      title: 'Get Step-by-Step Guidance  at Every Stage of motherhood',
      description:
        'A women-only mobile application addressing health, emotional and social needs across three stages of motherhood',
      descriptionTwo:
        ' With Mamahood, you have the medical advice, emotional support and social circle through fertility, pregnancy and parenting',
      info: 'Download the app to your device',
      button: <Button />,
      img: phoneOne
    },
    infoTwo: {
      img: phoneTwo,
      description:
        'Need some help navigating the intimidating but incredible journey from conception, childbirth, and beyond?  ',
      descriptionTwo:
        'As a first-time mom, the period from conception to childbirth can be full of questions and worries. And with all the overwhelming, outdated, and conflicting information online, it’s hard to know what to trust. ',
      descriptionThree:
        'MamaHood will be your best friend providing you with the right knowledge and professional medical guidance at the most critical time of your life.',
      descriptionFour:
        'Youll also be able to connect with other mamas and moms-to-be, making this beautiful time an exciting, stress-free journey!',
      info: 'Download the app to your device',
      button: <Button />,
    },
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <HeaderInfo
            title={information.infoOne.title}
            description={information.infoOne.description}
            descriptionTwo={information.infoOne.descriptionTwo}
            info={information.infoOne.info}
            button={information.infoOne.button}
            imgUrl={information.infoOne.img}
          />
          <HeaderSecond
            imgUrl={information.infoTwo.img}
            description={information.infoTwo.description}
            descriptionTwo={information.infoTwo.descriptionTwo}
            descriptionThree={information.infoTwo.descriptionThree}
            descriptionFour={information.infoTwo.descriptionFour}
            info={information.infoTwo.info}
            button={information.infoTwo.button}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
