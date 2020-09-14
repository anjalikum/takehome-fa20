import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ]
    }
  }

  submit = () => {
    // this.setState((prevState) => ({restaurants: [prevState.restaurants, input]}))
    this.setState((prevState) => ({id: prevState.id + 1},{rating: 0}));
  }

  render() {
  return (
    <div className="App">
      <Counter count={0} />
      <Instructions complete={true} />
      <input />
      <button onClick={this.submit}>submit</button>
      {this.state.restaurants.map(x => (
        <Restaurant id={x.id} name={x.name} count={x.rating} />
      ))}
    </div>
  )
  }
}

export default App
