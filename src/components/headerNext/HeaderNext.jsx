import React from 'react';
import Button from '../../UI/button/Button';
import './HeaderNext.css';

const HeaderNext = () => {
  return (
    <section  className="header_next">
      <div className="container header header-next__back">
        <div className="header-next__left">
          <img className="img-header-next" src="/img/Group 1665.png" alt="img_header" />
        </div>
        <div className="header-next__right">
          <div className="header-next__info">
            <p className="header-next__pargs">
              Need some help navigating the intimidating
              <br /> but incredible journey from conception,
              <br />
              childbirth, and beyond?
            </p>
            <p className="header-next__pargs">
              As a first-time mom, the period from <br /> conception to childbirth can be full of
              questions
              <br />
              and worries. And with all the overwhelming,
              <br /> outdated, and conflicting information online, it’s
              <br /> hard to know what to trust.
            </p>
            <p className="header-next__pargs">
              MamaHood will be your best friend providing
              <br /> you with the right knowledge and professional
              <br /> medical guidance at the most critical time of <br /> your life.
            </p>
            <p className="header-next__pargs">
              You’ll also be able to connect with other mamas <br /> and moms-to-be, making this
              beautiful time an <br /> exciting, stress-free journey!
            </p>
          </div>
        </div>
      </div>
      <div className="header-next__first">
        <p className="header-next__post">Download the app to your device</p>
        <p className="header-next__btn">
          <Button />
        </p>
      </div>
    </section>
  );
};

export default HeaderNext;
