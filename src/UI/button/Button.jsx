import React from 'react';
import './Button.css';

const Button = ({ href }) => {
  return (
    <div className="btn-download">
      <a href={href} className="btn-app">
        <img src="/img/btn-app.png" />
      </a>
      <a href={href} className="btn-marker">
        <img src="/img/btn-market.png" />
      </a>
    </div>
  );
};

export default Button;
