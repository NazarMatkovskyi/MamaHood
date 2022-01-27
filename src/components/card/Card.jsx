import React from 'react';
import './Card.css';

const Card = ({imgUrl,title,text}) => {
 
  return (
    <div className="card">
      <img src={imgUrl} alt="card_one"/>
      <div className='card__title'>
         {title}
      </div>
      <p className='card__text'>{text}</p>
    </div>
  );
};

export default Card;
