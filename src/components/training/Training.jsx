import React from 'react';
import FrameCard from '../frameCard/FrameCard';
import './Training.css';
import imgOne from './imgOne.png';
import imgTwo from './imgTwo.png';
import imgThree from './imgThree.png';
import imgFour from './imgFour.png';
import imgFive from './imgFive.png';
import imgSix from './imgSix.png';
import ellipseCard from './ellipseCard.png'

const Training = () => {
  const ellips = {
    ellipsOne: {
      img: imgOne,
      title: 'Interests',
      text: 'Find friends with similar interests',
    },
    ellipsTwo: {
      img: imgTwo,
      title: 'Forum',
      text: 'Friends posts and lots of useful information',
    },
    ellipsThree: {
      img: imgThree,
      title: 'Messenger',
      text: 'The opportunity to socialize with other women',
    },
    ellipsFour: {
      img: imgFour,
      title: 'Calendars',
      text: 'Personal calendars of different types',
    },
    ellipsFive: {
      img: imgFive,
      title: 'Contractions counter',
      text: 'Сount hit the baby',
    },
    ellipsSix: {
      img: imgSix,
      title: 'Tracking',
      text: 'Keeping track of your health or child`s development',
    },
  };
  return (
    <div className="training">
      <div className="container training-container">
        <h1 className="training__title">Mamahood</h1>
        <img className='elliseCard' src={ellipseCard} alt={ellipseCard} />
        <div className="training-content">
          <div className="training-frame_card">
            <div className="training-frame__first-items">
            <FrameCard
              imgUrl={ellips.ellipsSix.img}
              title={ellips.ellipsSix.title}
              text={ellips.ellipsSix.text}
            />
           <FrameCard
              imgUrl={ellips.ellipsFive.img}
              title={ellips.ellipsFive.title}
              text={ellips.ellipsFive.text}
            />
           
            </div>
            <div className="training-frame__second-items">
            <FrameCard
            imgUrl={ellips.ellipsOne.img}
            title={ellips.ellipsOne.title}
            text={ellips.ellipsOne.text}
          />
           
            <FrameCard
              imgUrl={ellips.ellipsFour.img}
              title={ellips.ellipsFour.title}
              text={ellips.ellipsFour.text}
            />
            </div>
            <div className="training-frame__first-items">
            <FrameCard
            imgUrl={ellips.ellipsTwo.img}
            title={ellips.ellipsTwo.title}
            text={ellips.ellipsTwo.text}
          />
            <FrameCard
              imgUrl={ellips.ellipsThree.img}
              title={ellips.ellipsThree.title}
              text={ellips.ellipsThree.text}
            />
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
