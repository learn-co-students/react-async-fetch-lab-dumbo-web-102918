// create your App component here
import React from 'react'
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'

class App extends React.Component {
  state={
    data: []
  }
  render() {
    return (
      <div>
        <Button />
        <Greeting />
        <ExampleComponent />
      </div>
      )

  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(data => {
      this.setState({data})
    })
  }
}

export default App;
