import React, { Component } from 'react'

const styles = {
  border: '1px solid black',
  margin: '20px',
  textAlign: 'center'
}

class CardStateful extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: 'Lasha Stateful'
    }
  }

  // componentDidMount() {} // Lifecycle methods...

  render() {
    return (
      <section style={styles}>
        <h1>Hello, {this.state.fullName}</h1>
        <p>Favorite food: {this.props.food}</p>
      </section>
    )
  }
}

export default CardStateful