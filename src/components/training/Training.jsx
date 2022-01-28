import React from 'react';
import FrameCard from '../frameCard/FrameCard';
import './Training.css';
import imgOne from './imgOne.png';
import imgTwo from './imgTwo.png';
import imgThree from './imgThree.png';
import imgFour from './imgFour.png';
import imgFive from './imgFive.png';
import imgSix from './imgSix.png';
import ellipseCard from './ellipseCard.png';
import imgMessage from './messageOne.png'
import imgApp from './appsTwo.png'
import imgFriends from './friendsThree.png'
import imgVector from './VectorFour.png'
import imgBitman from './Bitmap.png'
import InnerBlock from '../InnerBlock/InnerBlock';

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
  const block ={
    innerBlock: {
    title: 'MAMAHOOD',
    subTitle: 'Keep in contact',
      descriptionOne: 'The main purpose of Mamahood is to help deal with feelings by providing a unique and safe place for women to connect:',
      imgMessage: imgMessage,
      imgApp: imgApp,
      imgFriends: imgFriends,
      imgVector: imgVector,
      message: 'Chat',
      app: 'Forum divided by topics',
      friends: 'Friends Nearby',
      vector: 'Get access to professional support and advice',
      img: imgBitman,
    }
  }
  return (
    <div className="training">
      <div className="container training-container">
        <h1 className="training__title">Mamahood</h1>
        <img className="elliseCard" src={ellipseCard} alt={ellipseCard} />
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
          {/* For Mobile */}
          <div className="frame__mobile">
            <div div className="training-frame__itemMobile">
              <FrameCard
                imgUrl={ellips.ellipsSix.img}
                title={ellips.ellipsSix.title}
                text={ellips.ellipsSix.text}
              />
            </div>
            <div className="training-frame__itemMobile">
            <FrameCard
                imgUrl={ellips.ellipsFour.img}
                title={ellips.ellipsFour.title}
                text={ellips.ellipsFour.text}
              />
            </div>

            <div div className="training-frame__itemMobile">
            <FrameCard
                imgUrl={ellips.ellipsTwo.img}
                title={ellips.ellipsTwo.title}
                text={ellips.ellipsTwo.text}
              />
            </div>
            <div div className="training-frame__itemMobile">
            <FrameCard
                imgUrl={ellips.ellipsThree.img}
                title={ellips.ellipsThree.title}
                text={ellips.ellipsThree.text}
              />
            
            </div>
            <div className="training-frame__itemMobile">
            <FrameCard
                imgUrl={ellips.ellipsOne.img}
                title={ellips.ellipsOne.title}
                text={ellips.ellipsOne.text}
              />
             
            </div>
            <div className="training-frame__itemMobile">
            <FrameCard
                imgUrl={ellips.ellipsFive.img}
                title={ellips.ellipsFive.title}
                text={ellips.ellipsFive.text}
              />
              
            </div>
          </div>
        </div>
        <InnerBlock 
           title={block.innerBlock.title}
           subTitle={block.innerBlock.subTitle}
           descriptionOne={block.innerBlock.descriptionOne}
           imgMessage={block.innerBlock.imgMessage}
           imgApp={block.innerBlock.imgApp}
           imgFriends={block.innerBlock.imgFriends}
           imgVector={block.innerBlock.imgVector}
           message={block.innerBlock.message}
           app={block.innerBlock.app}
           friends={block.innerBlock.friends}
           vector={block.innerBlock.vector}
           img={block.innerBlock.img}
        />  
      </div>
    </div>
  );
};

export default Training;
