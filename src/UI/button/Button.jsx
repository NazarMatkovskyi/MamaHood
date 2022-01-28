import React from 'react';
import './Button.css';
import btnApp from './btn-app.png'
import btnPlay from './btn-market.png'

const Button = ({ href }) => {
  return (
    <div className="btn-download">
      <a  href="https://www.apple.com/ua/app-store/" className="btn-app">
        <img src={btnApp} alt={btnApp}/>
      </a>
      <a href="https://play.google.com/store/apps?hl=uk&gl=US"  className="btn-marker">
        <img src={btnPlay} alt={btnPlay} />
      </a>
    </div>
  );
};

export default Button;
