import React from 'react';
import Card from '../card/Card';
import cardOne from './cardOne.png';
import cardTwo from './cardTwo.png';
import cardThree from './cardThree.png';
import './Support.css';
const Support = () => {
   const cards = {
      cardOne: {
         img: cardOne,
         title: 'Aspiring mama',
         text: 'If you’re ready to get pregnant or even just thinking about it --Mamahood can do all the fertility maths for you. Nail your fertile window with our science-driven algorithms!'
      },
      cardTwo: {
         img: cardTwo,
         title: 'Mama to be',
         text: 'Nine months feeling like a lifetime? No worries! Mamahood app will track your baby’s development and your body changes, so you feel close and connected with the little one inside you.'
      },
      cardThree: {
         img: cardThree,
         title: 'Mama',
         text: 'Undergoing postpartum is just as challenging as pregnancy. That’s why we’ll still stick around for you! Get the support you need as you recover and adjust to the new life with your tiny bundle of joy. '
      }
   }
  return (
    <div className="support">
      <div className="container support-container">
        <div className="support-header">Three Motherhood Stages – 24/7 Support</div>
        
        <div className="support-header__info">
          Save yourself from the hassle of switching from one app to another. Mamahood will <br />
          provide you the ultimate support throughout your motherhood journey.
        </div>
        <div className="support-mobile">
        <div className="support-header__mobile">Mamahood</div>
        <div className="support-header__infoMobile">
        
        MamaHood is a social and  informative platform where women  at all stages of women's lives can  connect, meet, support and learn  from each other, personal  experiences on conception,  pregnancy and motherhood.
        </div>
        </div>
        <div className="cards">
          <Card imgUrl={cards.cardOne.img} title={cards.cardOne.title} text={cards.cardOne.text}
           />
           <Card imgUrl={cards.cardTwo.img}  title={cards.cardTwo.title} text={cards.cardTwo.text}
           />
           <Card imgUrl={cards.cardThree.img} title={cards.cardThree.title} text={cards.cardThree.text}
           />
        </div>
      </div>
    </div>
  );
};

export default Support;
