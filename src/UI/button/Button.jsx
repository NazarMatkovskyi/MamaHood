import React from 'react';
import './Button.css';
import btnApp from './btn-app.png'
import btnPlay from './btn-market.png'

const Button = ({ href }) => {
  return (
    <div className="btn-download">
      <a href={href} className="btn-app">
        <img src={btnApp} alt={btnApp}/>
      </a>
      <a href={href} className="btn-marker">
        <img src={btnPlay} alt={btnPlay} />
      </a>
    </div>
  );
};

export default Button;
