import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      name: [props.name],
      count: [props.count]
    }
  }
  
  render() {
    return (
      <p> {this.state.name} <br/> {this.state.count} </p>
    )
  }
}

export default App
