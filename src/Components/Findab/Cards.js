import React from 'react';
import Bikedetails from './Bikedetails';
import './Cards.css';

class Cards extends React.Component {

  constructor(props) {
      super(props);
  }

  getname(){
      const bikename = this.props.bikename;
      return bikename;
    }
    getnumber(){
      const bikeno = this.props.bikeno;
      return bikeno;
    }
    getowner(){
      const owner = this.props.owner;
      return owner;
    }
    getem(){
      const emailid = this.props.emailid;
      return emailid;
    }
    getph(){
      const phoneno = this.props.phoneno;
      return phoneno;
    }
    getrent(){
      const rent = this.props.rent;
      return rent;
    }
    getdep(){
      const deposit = this.props.deposit;
      return deposit;
    }
    getstatus(){
      const status = this.props.status;
      return status;
    }
    getid() {
      const bikeid=this.props.bikeid;
      return bikeid;
    }
render() {
  const b=this.getid()
  const bn=this.getname()
  const bno=this.getnumber()
  const own=this.getowner()
  const eid=this.getem()
  const ph=this.getph()
  const re=this.getrent()
  const dep=this.getdep()
  const stat=this.getstatus()
  return (
    <div className="card">
      <h1>{bn}</h1>
      <p >
        Bike number: {bno}
        <br/>
        Owner: {own}
        <br/>
        Email-id: {eid}
        <br/>
        Phone number: {ph}
        <br/>
        Rent per hour: {re}
        <br/>
        Deposit: {dep}
        <br/>
        Status: {stat}
        <br/>
        Bike id: {b}
        </p>
      <Bikedetails/>
      
    </div>
  );
}}

export default Cards;
