
import React from 'react';
import './Register.css';
import emailjs from 'emailjs-com';

class Register extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:'',
      mobileno:'',
      address:'',
      email:'',
      password: ''
    }
  }

  
  onNameChange= (event)=> {
    this.setState({name: event.target.value})
  }

  onMobileChange= (event)=> {
    this.setState({mobileno: event.target.value})
  }

  onAddressChange= (event)=> {
    this.setState({address: event.target.value})
  }

  onEmailChange= (event)=> {
    this.setState({email: event.target.value})
  }

  onPasswordChange= (event)=> {
    this.setState({password: event.target.value})
  }

  wrapperFunction=(e)=>{
    this.onSubmitSignIn();
    this.sendEmail(e);
  }
  onSubmitSignIn=()=> {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        mobileno: this.state.mobileno,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response=>response.json())
    .then(user=> {
      if(user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
   
  }
  sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_344msem', 'template_mv3moem', e.target, 'user_o8yYcVTPBiXQG5qn5gomJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      window.alert('Thanks for registering!');
  } 


  render() {
    return (
      <div>
        <div className="tc brs">BikeRentals</div>
      <form onSubmit={(e)=>{this.wrapperFunction(e)}} className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="Name" 
                id="name"
                onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="mobileno">Mobile number</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="mobileno" 
                id="mobileno"
                onChange={this.onMobileChange}
                 />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="address" 
                id="address"
                onChange={this.onAddressChange}
                 />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address" 
                id="email-address"
                onChange={this.onEmailChange}
                 />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password" 
                id="password"
                onChange={this.onPasswordChange}
                 />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register" />
            </div>
          </div>
        </main>
      </form>
      </div>
    );
  }
}


export default Register;