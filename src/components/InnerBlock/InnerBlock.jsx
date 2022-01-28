import React from 'react';
import './InnerBlock.css';

const InnerBlock = ({
  title,
  subTitle,
  descriptionOne,
  imgMessage,
  imgApp,
  imgFriends,
  imgVector,
  message,
  app,
  friends,
  vector,
  img,
}) => {
  return (
    <div className="inner-block">
      <div className="container inner-block__container">
        <div className="inner-title">{title}</div>
        <div className="inner-subtitle">{subTitle}</div>
        <div className="inner-descriptions">{descriptionOne}</div>
        <div className="inner-list">
          <div className="inner-onePost">
            <img className='inner-img' src={imgMessage} alt="imgMessage" />
            <span className="post-descriptions">{message}</span>
          </div>
          <div className="inner-twoPost">
            <img className='inner-img' src={imgApp} alt="imgApp" />
            <span className="post-descriptions">{app}</span>
          </div>
          <div className="inner-threePost">
            <img className='inner-img' src={imgFriends} alt="imgFriends" />
            <span className="post-descriptions">{friends}</span>
          </div>
          <div className="inner-fourPost">
            <img className='inner-img-four' src={imgVector} alt="imgVector" />
            <span className="post-descriptions">{vector}</span>
          </div>
        </div>
        
      </div>
      <div className="inner-image__first">
          <img src={img} alt="img" />
        </div>
    </div>
  );
};

export default InnerBlock;
