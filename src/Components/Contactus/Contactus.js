import React from 'react';
import './Contactus.css';
import { SocialIcon } from 'react-social-icons';


class Contactus extends React.Component {

   getemail(){

    const owner = this.props.owner;
    return owner;
  }
 
  onSubscribe=(p)=> {
    fetch('http://localhost:3000/newsletter', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email:p
      })
    })
    .then(response=>response.json())
    .then(user=> {
        window.alert('Thanks for subscribing!');
      }
    )
    .catch(err => console.log(err))
  }
 
  render() {
    const p=this.getemail()
    return (
<div className='tc'>
<br/>
          <div className='tc brs'>BikeRentals</div>
          <br/>
          <p></p>
<div class="cardcont">
  <h1>Jeenisha Shrungare</h1>
  <p  className='b tc'>Pimpri Chinchwad College of Engineering</p>
  <div className='tl'>
  <SocialIcon url="http://email.com/in/jaketrent" /><a className='f6 pointer white'>jeenishashrungare.js@gmail.com</a> </div>
  <div className='tl'>
  <SocialIcon url="http://linkedin.com/in/jaketrent" /><a className='f6 pointer white'>https://www.linkedin.com/in/jeenisha-shrungare-68ab801aa</a> </div>
</div>
<br/>
<div class="cardcont">
  <h1>Radhika Mundada</h1>
  <p  className='b tc'>Pimpri Chinchwad College of Engineering</p>
  <div className='tl'>
  <SocialIcon url="http://email.com/in/jaketrent" /><a className='f6 pointer white'>radhimundada.js@gmail.com</a> </div>
  <div className='tl'>
  <SocialIcon url="http://linkedin.com/in/jaketrent" /><a className='f6 pointer white'>https://www.linkedin.com/in/radhika-mundada-7462881a3/</a> </div>
</div>
<br/>
<div class="cardcont">
  <h1>Priyanka Ambekar</h1>
  <p  className='b tc'>Pimpri Chinchwad College of Engineering</p>
  <div className='tl'>
  <SocialIcon url="http://email.com/in/jaketrent" /><a className='f6 pointer white'>piyaambekar1610@gmail.com</a> </div>
  <div className='tl'>
  <SocialIcon url="http://linkedin.com/in/jaketrent" /><a className='f6 pointer white'>https://www.linkedin.com/in/priyanka-a-8038bb1a7/</a> </div>
</div><br/>
<div class="cardcont">
  <h1>Priya Chougule</h1>
  <p  className='b tc'>Pimpri Chinchwad College of Engineering</p>
  <div className='tl'>
  <SocialIcon url="http://email.com/in/jaketrent" /><a className='f6 pointer white'>priyachougule1020@gmail.com</a> </div>
  <div className='tl'>
  <SocialIcon url="http://linkedin.com/in/jaketrent" /><a className='f6 pointer white'>https://www.linkedin.com/in/priya-chougule-69894418b/</a> </div>
</div><br/>
<br/> <br/>
  <p className='tc b f2 i brs1'>Do subscribe to our newsletter!</p>
  <input
  onClick={() =>this.onSubscribe(p)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                type="submit"
                value="Subscribe" /> <br/><br/>
    
</div>
    );
}}


export default Contactus;