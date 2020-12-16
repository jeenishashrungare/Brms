import React from 'react';
import './Bikedetails.css';

class Bikedetails extends React.Component {

    state = {
        a: 0,
        b: 0
      }
      
      alpha = (ev) => {
        this.setState({
          [ev.target.name]: ev.target.value
        });
      }

    render() {
    return (
<div>
          <p className="f4">Enter the hourly fare and no of hours for the rent:</p>
          <input type="number" value={this.state.a} onChange={this.alpha} name="a" id="a" />
          {'                             '}
          <input type="number" value={this.state.b} onChange={this.alpha} name="b" id="b" />
          <br /> <br />
          <span>
            {'Total rent:    '}
            {this.state.a * this.state.b}
          </span>
          <br /> <br />
        
</div>
  
    );
} }


export default Bikedetails;