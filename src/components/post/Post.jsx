import React from 'react';
import './Post.css';
import imgPostOne from './imgPostOne.png';
import imgPostTwo from './imgPostTwo.png';
import imgPostThree from './imgPostThree.png';
import imgPostFive from './imgPostFive.png';
import imgPostFour from './imgPostFour.png';
import Button from '../../UI/button/Button';
import postEllipseOne from './postEllipseOne.png'
import postEllipseTwo from './postEllipseTwo.png'
import postEllipseThree from './postEllipseThree.png'
import postEllipseFour from './postEllipseFour.png'
import postEllipseFive from './postEllipseFive.png'
import postEllipseSix from './postEllipseSix.png'
import postEllipseSeven from './postEllipseSeven.png'
import postEllipseEight from './postEllipseEight.png'
import postEllipseNine from './postEllipseNine.png'

const Post = () => {
  const data = [
    {
      title: 'Ovulation Tracker',
      description:
        'Find out if it is the best time to conceive. By knowing if you’re close to ovulating, you can keep tabs if you’re in your fertile window. Also, keep an eye on your period length and instantly spot any changes in your cycle.',
      img: imgPostOne,
    },
    {
      title: 'Baby growth Calendar ',
      description:
        'Your body and the baby undergo multiple changes through each trimester. You can keep up-to-date about details of your baby’s development based on your due date. This would also help you understand your changing body better.',
      img: imgPostTwo,
    },
    {
      title: 'Connect With Other Moms',
      description:
        'Never feel lonely. Connect with thousands of other moms going through the same anxieties, stresses, and joys of pregnancy and motherhood that you are. Ask questions, share experience and get the emotional support you need during this journey.',
      img: imgPostThree,
    },
    {
      title: 'Contractions Counter ',
      description:
        'Find out when it’s time to go to the hospital by tracking your contractions. By analyzing the frequency and duration of contractions, you’ll know which stage of labour you’re in at any given moment.',
      img: imgPostFour,
    },
    {
      title: '24/7 Medical Support (Coming Soon)  ',
      description:
        'Need to talk to a physician right now? No worries. Have the peace of mind that you can chat and discuss your situation with our DHA approved, UAE based practitioners any time of the day',
      img: imgPostFive,
    },
  ];
  const dataMobile = [
    {
      title: 'Ovulation Tracker',
      description:
        'The user can personalize and track their menstrual cycle and receive notification of their expected ovulation day. You can also predict which days are most likely to get pregnant. You can record how the user is feeling.',
      img: imgPostOne,
    },
    {
      title: 'Fetal development Calendar  ',
      description:
        'Description week by week of fetal development and baby growth. How the baby changes and how the mother’s body change week by week. What to expect at each checkup.',
      img: imgPostTwo,
    },
    {
      title: 'Baby growth Calendar  ',
      description:
        'Description month by month of baby growth and development. What to expect, how to help them grow healthy, how to stimulate the baby, etc Users will have an option to enter their babies weight, height, head size to see where they fall in the growth percentile in comparison with other kids of the same age.',
      img: imgPostFive,
    },
    {
      title: 'Contractions Counter ',
      description:
        'Keep track of contraction frequency. How much time between contractions. How strong they are and how long they last.',
      img: imgPostFour,
    },
   
  ]
  return (
    <div className="post">
      <div className="container">
        <h1 className="post_title">
          Mamahood equips women with tools and <br /> community to make informed decisions <br />{' '}
          about their health.
        </h1>
        <img className='postEllipseOne' src={postEllipseOne} alt={postEllipseOne} />
          <img className='postEllipseTwo' src={postEllipseTwo} alt={postEllipseTwo} />
          <img className='postEllipseThree' src={postEllipseThree} alt={postEllipseThree} />
          <img className='postEllipseFour' src={postEllipseFour} alt={postEllipseFour} />
          <img className='postEllipseFive' src={postEllipseFive} alt={postEllipseFive} />
          <img className='postEllipseSix' src={postEllipseSix} alt={postEllipseSix} />
          <img className='postEllipseSeven' src={postEllipseSeven} alt={postEllipseSeven} />
          <img className='postEllipseEight' src={postEllipseEight} alt={postEllipseEight} />
          <img className='postEllipseNine' src={postEllipseNine} alt={postEllipseNine} />

        <div className="content-block">
          {data.map((item, index) =>
              <div key={item.description}>
            {index % 2 === 1 ? (
              <div className="block">
                <div className="cardsPost">
                  <img className="card-post__image" src={item.img}  alt='picture' />
                </div>
                <div className="descriptions-content">
                  <span className="title">{item.title}</span>
                  <span className="description">{item.description}</span>
                </div>
              </div>
            ) : (
              <div className="block">
                <div className="descriptions-content">
                  <span className="title">{item.title}</span>
                  <span className="description">{item.description}</span>
                </div>
                <div className="cardsPost">
                  <img className="card-post__image" src={item.img}  alt='picture'/>
                </div>
              </div>
              )}
              </div>
          )}
        </div>
        <div className="post-button">
          <p className='post-button_title'>Download the app to your device</p>
          <div className="post-button__btn">
          <Button />
          </div>
          
        </div>
  {/* Mobile version */}
        <div className="content-blockMobile">
         
          {dataMobile.map((item, index) =>
              <div key={item.description}>
            {index & 2 === 1 ? (
              <div className="blockMobile">
                <div className="cardsPostMobile">
                <div className="titleMobile">{item.title}</div>
                  <img className="card-post__imageMobile" src={item.img}  alt='picture' />
                </div>
                <div className="descriptions-contentMobile">
                  <div className="descriptionMobile">{item.description}</div>
                </div>
              </div>
            ) : (
              <div className="blockMobile">
              <div className="cardsPostMobile">
              <div className="titleMobile">{item.title}</div>
                <img className="card-post__imageMobile" src={item.img}  alt='picture' />
              </div>
              <div className="descriptions-contentMobile">
                <div className="descriptionMobile">{item.description}</div>
              </div>
            </div>
              )}
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
