import React, { Component } from 'react'

export default class Vehicle extends Component {
  render() {
    return (
      <h2>Vehicle ID: {this.props.match.params.vehicleId}</h2>
    )
  }
}
