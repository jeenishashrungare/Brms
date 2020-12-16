import React from 'react';
import './Mycards.css';

const Mycards = ({bikename,bikeno,owner,emailid,phoneno, rent, deposit, bikeid}) => {
  return (
    <div className="card">
      <h1>{bikename}</h1>
      <p >
        Bike number: {bikeno}
        <br/>
        Owner: {owner}
        <br/>
        Email-id: {emailid}
        <br/>
        Phone number: {phoneno}
        <br/>
        Rent per hour: {rent}
        <br/>
        Deposit: {deposit}
        <br/>
        Bike-id: {bikeid}
        </p>
  <br/>
    </div>
  );
}

export default Mycards;
