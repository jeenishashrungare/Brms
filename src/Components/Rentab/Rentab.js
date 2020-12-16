import React from 'react';
import './Rentab.css';

class Rentab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bikename: '',
      bikeno: '',
      licno: '',
      owner: '',
      emailid: '',
      aadharno: '',
      phoneno: '',
      rent: '',
      deposit: '',
      status: ''
    }
  }

  onBnChange = (event) => {
    this.setState({ bikename: event.target.value })
  }
  onBnoChange = (event) => {
    this.setState({ bikeno: event.target.value })
  }
  onLicChange = (event) => {
    this.setState({ licno: event.target.value })
  }
  onOnChange = (event) => {
    this.setState({ owner: event.target.value })
  }
  onEmailidChange = (event) => {
    this.setState({ emailid: event.target.value })
  }
  onAadharChange = (event) => {
    this.setState({ aadharno: event.target.value })
  }
  onPhChange = (event) => {
    this.setState({ phoneno: event.target.value })
  }
  onRentChange = (event) => {
    this.setState({ rent: event.target.value })
  }
  onDepositChange = (event) => {
    this.setState({ deposit: event.target.value })
  }
  onStatusChange = (event) => {
    this.setState({ status: event.target.value })
  }

  onSubmitDetails=()=> {
    fetch('http://localhost:3000/details', {
      method: 'post',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({
        bikename: this.state.bikename,
        bikeno: this.state.bikeno,
        licno: this.state.licno,
        owner: this.state.owner,
        emailid: this.state.emailid,
        aadharno: this.state.aadharno,
        phoneno: this.state.phoneno,
        rent: this.state.rent,
        deposit: this.state.deposit,
        status: this.state.status
      })
    })
      .then(response=>response.json())
      .then(user=> {
          this.props.loadDetails(user)
          window.alert('Bike added!')
      }
      );
  }

  render() {
    return (
      <div>
        <br/>
          <div className='tc brs'>Bike Rentals</div>
          <br/>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Renter and bike details</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="bikename">Bike name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="bikename"
                    id="bikename"
                    onChange={this.onBnChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="bikeno">Bike number</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="bikeno"
                    id="bikeno"
                    onChange={this.onBnoChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="licno">License number</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="licno"
                    id="licno"
                    onChange={this.onLicChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="owner">Owner name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="owner"
                    id="owner"
                    onChange={this.onOnChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="emailid">Email id</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="emailid"
                    id="emailid"
                    onChange={this.onEmailidChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="aadharno">Aadhar card number</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="aadharno"
                    id="aadharno"
                    onChange={this.onAadharChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="phoneno">Phone number</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="phoneno"
                    id="phoneno"
                    onChange={this.onPhChange}
                  />
                  <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="rent">Rent per hour (Use the table below)</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="rent"
                      id="rent"
                      onChange={this.onRentChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="deposit">Deposit</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="deposit"
                      id="deposit"
                      onChange={this.onDepositChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="status">Status(Available/Not available)</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="status"
                      id="status"
                      onChange={this.onStatusChange}
                    />
                  </div>
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitDetails}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Submit" />
              </div>
            </div>
          </main>
        </article>

        <table id="customers" className="centert">
          <tbody>
            <tr>
              <th>Type of vehicle</th>
              <th>Rent(INR per hour)</th>
              <th>Deposit(INR)</th>
            </tr>
            <tr>
              <td>Phoenix</td>
              <td>22</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Jupiter</td>
              <td>22</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Activa</td>
              <td>25</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Maestro</td>
              <td>26</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Dio</td>
              <td>26</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Activa 4G</td>
              <td>29</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Avenger 220CC</td>
              <td>30</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Duke 390</td>
              <td>80</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Royal Enfield 500 CC</td>
              <td>75</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Thunderbird 350 CC</td>
              <td>146</td>
              <td>2500</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        
      </div>
    );
  }
}

export default Rentab;