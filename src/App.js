import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Texts from './Components/Texts/Texts';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Findab from './Components/Findab/Findab';
import Rentab from './Components/Rentab/Rentab';
import Contacus from './Components/Contactus/Contactus';
import Mybikes from './Components/Rentab/Mybikes';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        mobileno: '',
        address: '',
        email: '',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        mobileno: data.mobileno,
        address: data.address,
        email: data.email,
        joined: data.joined
      }
    })
  }

  loadDetails = (data) => {
    this.setState({
      user: {
        bikeid: data.bikeid,
        bikename: data.bikename,
        bikeno: data.bikeno,
        licno: data.licno,
        owner: data.owner,
        emailid: data.emailid,
        aadharno: data.aadharno,
        phoneno: data.phoneno,
        rent: data.rent,
        deposit: data.deposit,
        status: data.status
      }
    })
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home' || route === 'findab' || route === 'rentab' || route === 'contactus') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }


  render() {
    let rtag;
    if (this.state.route === 'home') {
      rtag = <Texts name={this.state.user.name} />
    }
    if (this.state.route === 'signin') {
      rtag = <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'register') {
      rtag = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'findab') {
      rtag = <Findab loadDetails={this.loadDetails} owner={this.state.user.email} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'rentab') {
      rtag = <Rentab loadDetails={this.loadDetails} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'contactus') {
      rtag = <Contacus owner={this.state.user.email} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'mybikes') {
      rtag = <Mybikes owner={this.state.user.email} onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'signout') {
      rtag = <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    }
    return (
      <div>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {rtag}
      </div>
    );
  }
}

export default App;
