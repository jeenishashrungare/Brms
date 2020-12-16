import React from 'react';
import './Mybikes.css';
import Mycards from './Mycards';

class Mybikes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          bikeid:'',
          items: []
        }
      }

    getemail(){

        const owner = this.props.owner;
        return owner;
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

      onbikeidChange= (event)=> {
        this.setState({bikeid: event.target.value})
      }

      onSubmitdelete=()=> {
        fetch('http://localhost:3000/delbike', {
          mode:'cors',
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            bikeid: this.state.bikeid
          })
        })
        .then(response=>response.json())
        .then(user=> {
            window.alert('Your bike has been deleted!');
          }
        )
        .catch(err => console.log(err))
      }

    render () {
        const { items } = this.state;
        const p=this.getemail()
        return (
            <div>
              <br/>
              <div className='tc'>
        <div className='form tc f4 w-30 ph3 pv2 dib white center'>
        <label className="f4">Please enter the id of the bike you want to delete:</label>
        <br/> <br/>
        <label className="tc">Bike Id:</label>
        <input className="w3-input w3-border"
        name="id" 
        id="id"
        type="text"
        onChange={this.onbikeidChange}/>
        <br/>
        <p>
        <button onClick={() =>this.onSubmitdelete()}>Delete</button> </p>
          </div> </div>
          <div className='tc brs'>BikeRentals</div>
          <br/>
            {
            items.map(item => (
                (item.emailid===p)
                ?< Mycards
                bikename={item.bikename}
                bikeno={item.bikeno}
                owner={item.owner}
                emailid={item.emailid}
                phoneno={item.phoneno}
                rent={item.rent}
                deposit={item.deposit}
                bikeid={item.bikeid}
                />
                : <div>
                  </div>
            )
            )
          }
            </div>
        );
}
}


export default Mybikes;

