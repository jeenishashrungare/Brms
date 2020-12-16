import React from 'react';
import './Findab.css';
import Cards from './Cards';

class Findab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bikeid:'',
      items: [],
      custlicno:''
    }
  }

  getemail(){

    const owner = this.props.owner;
    return owner;
  }

  onbikeidChange= (event)=> {
    this.setState({bikeid: event.target.value})
  }
  onLicencseChange= (event)=> {
    this.setState({custlicno: event.target.value})
  }

  componentDidMount() {
    fetch('http://localhost:3000/bikelist')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result
        });
      });
  }

  onSubmitSignIn=(k)=> {
    fetch('http://localhost:3000/changef', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        bikeid: this.state.bikeid,
        custlicno: this.state.custlicno,
        custemail:k
      })
    })
    .then(response=>response.json())
    .then(user=> {
      window.alert('Your bike has been booked!')
          }
        )
    .catch(err => console.log(err))
  }
 
  render() {
    const { items } = this.state;
    const k=this.getemail();
      return (
        <div>
          <br/>
          <br/>
          <div className='tc brs'>Bike Rentals</div>
          <br/>
          <br/>
          <div className='tc'>
        <form  className='form tc f4 w-30 ph3 pv2 dib white center'>
        <label className="f4">Please enter these details while booking:</label>
        <br/> <br/>
        <label className="tc">Bike Id:</label>
        <input className="w3-input w3-border"
        name="id" 
        id="id"
        type="text"
        onChange={this.onbikeidChange}/>
        <br/><br/>
        <label className="tc">License number:</label>
        <input className="w3-input w3-border"  
        name="licn" 
        id="licn"
        type="text"
        onChange={this.onLicencseChange}/>
        <br/>
        <br/>
        <p>
        <button onClick={()=>this.onSubmitSignIn(k)}>Book</button> </p>
          </form> </div>
        <div>
          {
          items.map(item => (
              (item.status==='Available')
              ? (item.emailid!==k)
              ?< Cards
              bikeid={item.bikeid}
              bikename={item.bikename}
              bikeno={item.bikeno}
              owner={item.owner}
              emailid={item.emailid}
              phoneno={item.phoneno}
              rent={item.rent}
              deposit={item.deposit}
              status={item.status}
              />
              : <div>
                </div>
                :<div></div>
          )
          )
        }
          </div> </div>
      );
    }
  }


export default Findab;
