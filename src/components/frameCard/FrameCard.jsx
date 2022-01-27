import React from 'react';
import './FrameCard.css';

const FrameCard = ({ imgUrl, title, text }) => {
  return (
    <div className="frame_card">
      <img className='frame-img' src={imgUrl} alt="frame-card_one" />
      <div className='frame_card-inner'>
      <div className="frame-card__title">{title}</div>
      <p className="frame-card__text">{text}</p>  
      </div>
    </div>
  );
};

export default FrameCard;
