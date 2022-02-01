import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import activeBtn from '../../images/activeBtn.png';
import noActiveBtn from '../../images/NoActiveBtn.png';
import ellipseFormOne from '../../images/ellipseFormOne.png'
import ellipseFormTwo from '../../images/ellipseFormTwo.png'
import ellipseFormThree from '../../images/ellipseFormThree.png'
import ellipseFormFour from '../../images/ellipseFormFour.png'

const Form = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const [checkedItems, setCheckedItems] = useState([]);
  const marker = [
    {
      img: noActiveBtn,
      imgTwo: activeBtn,
      text: 'Career opportunities',
    },
    {
      img: noActiveBtn,
      imgTwo: activeBtn,
      text: 'Partnership & collaboration',
    },
    {
      img: noActiveBtn,
      imgTwo: activeBtn,
      text: 'Advertising',
    },
    {
      img: noActiveBtn,
      imgTwo: activeBtn,
      text: 'General questions',
    },
    {
      img: noActiveBtn,
      imgTwo: activeBtn,
      text: 'Other',
    },
  ];

  const handleCheck= (event) => {

    if (checkedItems.includes(event)){
     return  setCheckedItems(checkedItems.filter(item => item !== event))
    }
   return  setCheckedItems(prevState => {
      return [...prevState, event]
    })
  }

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form">
      <div className="container">
        <div className="form-block">
          <div className="form-title">Contact us</div>
          <div className="subtitle">To serve you better please share 
more details here</div>
          <div className="form-block__content">
          <div className="elipseFormMobileInner">
                  <img className='ellipseFormOne' src={ellipseFormOne} alt="ellipseFormOne" />
                 <img className='ellipseFormTwo' src={ellipseFormTwo} alt="ellipseFormTwo" />
                 <img className='ellipseFormThree' src={ellipseFormThree} alt="ellipseFormThree" />
                 <img className='ellipseFormFour' src={ellipseFormFour} alt="ellipseFormFour" />
                  </div>
            <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-input form-input-one"
                type="text"
                placeholder="First name"
                {...register('First name', { required: true, maxLength: 30 })}
              />
              <input
                className="form-input"
                type="text"
                placeholder="Last name"
                {...register('Last name', { required: true, maxLength: 50 })}
              />
              <input
                className="form-input"
                type="text"
                placeholder="Email"
                {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                className="form-input"
                type="tel"
                placeholder="Phone"
                {...register('Phone', { required: true, minLength: 6, maxLength: 12 })}
              />
           
              <div className="inner-list">
                <div className="inner-title">Specify your enquiry:</div>
                
                <div className="content-block-btn">
                  {marker.map((item) => (
                      <div className="blocks"
                           key={item.text}
                           onClick={() => handleCheck(item.text)}
                      >
                        <div className="form-post">
                          <img className="form-btn-cheked" alt='picture' src={ (checkedItems.includes(item.text)) ? item.imgTwo : item.img} />
                        </div>
                        <span className="form-text">{item.text}</span>
                      </div>
                      
                  ))}
                  </div>
                  <div className="form-area">
                  <textarea
                      className="form-area-block"
                      name="" id=""
                      cols="30"
                      rows="10"
                      defaultValue='To serve better please share more details here'
                  />
                  </div>
                  <div className="form-btn">
                    <input type="submit" value="Send" className='btn-send' />
                  </div>
                
         
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
