import React, { Component } from 'react'

class CardStateful extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: 'Lasha'
    }
  }

  componentDidMount() {}

  render() {
    return (
      <section style={{border: '1px solid black'}}>
        <h1>Hello, {this.state.fullName}</h1>
      </section>
    )
  }
}

export default CardStateful