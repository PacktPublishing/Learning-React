import React, { Component } from 'react'

class Vehicle extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      vehicle: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.vehicleId
    fetch(`https://swapi.co/api/vehicles/${id}/`)
      .then(response => response.json())
      .then(json => this.setState({ vehicle: json }))
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPropsString = JSON.stringify(prevProps.match.params.vehicleId)
    const updatedPropsString = JSON.stringify(this.props.match.params.vehicleId)

    if (prevPropsString !== updatedPropsString) {
      const id = this.props.match.params.vehicleId
      fetch(`https://swapi.co/api/vehicles/${id}/`)
        .then(response => response.json())
        .then(json => this.setState({ vehicle: json }))
    }
  }

  render() {
    const { vehicle } = this.state
    return (
      <>
      <h3>Name: {vehicle.name}</h3>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>URL: {vehicle.url}</p>
      </>
    )
  }
}

export default Vehicle
