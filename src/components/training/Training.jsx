import React from 'react';
import FrameCard from '../frameCard/FrameCard';
import './Training.css';
import imgOne from '../../images/imgOne.png';
import imgTwo from '../../images/imgTwo.png';
import imgThree from '../../images/imgThree.png';
import imgFour from '../../images/imgFour.png';
import imgFive from '../../images/imgFive.png';
import imgSix from '../../images/imgSix.png';
import ellipseCard from '../../images/ellipseCard.png';
import imgMessage from '../../images/messageOne.png'
import imgApp from '../../images/appsTwo.png'
import imgFriends from '../../images/friendsThree.png'
import imgVector from '../../images/VectorFour.png'
import imgBitman from '../../images/Bitmap.png'
import InnerBlock from '../InnerBlock/InnerBlock';
import postEllipseMobile1 from '../../images/postEllipseMobile1.png'
import postEllipseMobile2 from '../../images/postEllipseMobile2.png'
import postEllipseMobile3 from '../../images/postEllipseMobile3.png'
import postEllipseMobile4 from '../../images/postEllipseMobile4.png'
import postEllipseMobile5 from '../../images/postEllipseMobile5.png'
import postEllipseMobile6 from '../../images/postEllipseMobile6.png'
import postEllipseMobile7 from '../../images/postEllipseMobile7.png'
import postEllipseMobile8 from '../../images/postEllipseMobile8.png'
import innerEllipse1 from '../../images/innerEllipse1.png'
import innerEllipse2 from '../../images/innerEllipse2.png'
import innerEllipse3 from '../../images/innerEllipse3.png'

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
            <div className="elipsePostsMobile">
            <img className='postEllipseMobile1' src={postEllipseMobile1} alt="postEllipseMobile1" />
            <img className='postEllipseMobile2' src={postEllipseMobile2} alt="postEllipseMobile2" />
            <img className='postEllipseMobile3' src={postEllipseMobile3} alt="postEllipseMobile3" />
            <img className='postEllipseMobile4' src={postEllipseMobile4} alt="postEllipseMobile4" />
            <img className='postEllipseMobile5' src={postEllipseMobile5} alt="postEllipseMobile5" />
            <img className='postEllipseMobile6' src={postEllipseMobile6} alt="postEllipseMobile6" />
            <img className='postEllipseMobile7' src={postEllipseMobile7} alt="postEllipseMobile7" />
            <img className='postEllipseMobile8' src={postEllipseMobile8} alt="postEllipseMobile8" />
            </div>
            
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
        <div className="inner-blockEllipse">
          <img className='innerEllipse1'  src={innerEllipse1} alt="innerEllipse1" />
          <img className='innerEllipse2'  src={innerEllipse2} alt="innerEllipse2" />
          <img className='innerEllipse3'  src={innerEllipse3} alt="innerEllipse3" />
        </div>
      </div>
    </div>
  );
};

export default Training;
