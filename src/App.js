// create your App component here
import React, { Component } from 'react';
import Button from './components/Button.js';
import ExampleComponent from './components/ExampleComponent';
import Greeting from './components/Greeting';

class App extends Component {

  state = {
    spacePpl: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          spacePpl: data.people
        })
      })
  }

  render(){
    console.log(this.state.spacePpl)
    return(
      <div>
        <Greeting />
        <ExampleComponent />
        <Button />
        <ul>
        {this.state.spacePpl.map((person, i)=><li key={i}>{person.name} - {person.craft}</li>)}
        </ul>
      </div>
    )
  }
}
export default App;
