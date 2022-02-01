import React from 'react';
import './FooterOne.css';
import btnFooterOne from '../../images/btnFooterOne.png';
import btnFooterTwo from '../../images/btnFooterTwo.png';
import footerOneEllipse1 from '../../images/footerOneEllipse1.png'
import footerOneEllipse2 from '../../images/footerOneEllipse2.png'
import footerOneEllipse3 from '../../images/footerOneEllipse3.png'
import footerOneEllipse4 from '../../images/footerOneEllipse4.png'
// import OvalEllipseOne from '../../images/ovalEllipse.png'
// import OvalEllipseTwo from '../../images/ovalEllipse.png'

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
    <div id="tools" className="footer-one">
      <div className=" footer-one__container">
        <div className="footer-block">
          {data.map((item) => (
            <div
                key={item.title}
                className="footer-block-content"
            >
              {/* <div className="elipseFooterOne">
                <img className='OvalEllipseOne' src={OvalEllipseOne} alt="OvalEllipseOne" />
                <img className='OvalEllipseTwo' src={OvalEllipseTwo} alt="OvalEllipseTwo" />
              </div> */}
              <div className="item-title">{item.title}</div>
              <div className="item-subtitle">{item.subtitle}</div>
              <div className="item-description">{item.descriptions}</div>
              <div className="items-btn">
                <img  className="item-btn__one" src={item.buttonOne} />
                <img className="item-btn__one" src={item.buttonTwo} />
              </div>
            </div>
          ))}
          <div className="footerOne-ellipse">
            <img className='footerOneEllipse1' src={footerOneEllipse1} alt="footerOneEllipse1" />
            <img className='footerOneEllipse2' src={footerOneEllipse2} alt="footerOneEllipse2" />
            <img className='footerOneEllipse3' src={footerOneEllipse3} alt="footerOneEllipse3" />
            <img className='footerOneEllipse4' src={footerOneEllipse4} alt="footerOneEllipse4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
