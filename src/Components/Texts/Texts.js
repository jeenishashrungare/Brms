import React from 'react';
import './Texts.css';
import ss2 from './ss2.jpg';


const Texts = ({name}) => {
    return (
        <div>
          <br/>
          <div className='tc brs'>Bike Rentals</div>
          <br/>
            <div className="container">
  <img src={ss2} alt="Notebook" className="w-100"/>
  <div className="content">
    <h1>{`Welcome to BikeRentals, ${name}!`}</h1>
    <p className='f3'>You can now find a bike at any instance, or even give your bike on rent!</p>
  </div>
</div>
<br/><br/>
<div class="containers tc">
  <div className='cardhome'>
    <ul className='w tl f3'>
      <li>Suitable renting costs!</li>
      <br/>
      <li>Promising bike owners!</li>
    </ul>
</div>
  <div className='cardhome'><ul className='w tl f3'>
      <li>Easy and efficient alternative!</li>
      <br/>
      <li>Book a bike, with just one click!</li>
    </ul></div>  
  <div className='cardhome'><ul className='w tl f3'>
      <li>Inbuilt cost calculator!</li>
      <br/>
      <li>Newsletter subscription for timely updates!</li>
    </ul></div>
</div>
  </div>
    );
}



export default Texts;