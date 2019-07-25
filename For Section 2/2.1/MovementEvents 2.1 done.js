import React, { Component } from 'react';

class MovementEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mousePositionX: 0,
      mousePositionY: 0,
      windowScrollY: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      windowScrollY: Math.floor(window.scrollY)
    })
  }

  handleOnMouseMove = (e) => {
    this.setState({
      mousePositionX: e.nativeEvent.offsetX,
      mousePositionY: e.nativeEvent.offsetY
    })
  }

  render() {
    return (
      <>
      <section>
        <div onMouseMove={this.handleOnMouseMove}>
          <h3>Mouse Position:</h3>
          <p>x: {this.state.mousePositionX}</p>
          <p>y: {this.state.mousePositionY}</p>
        </div>
      </section>
        
      <section>
        <div>
          <h3>Window Scroll Position:</h3>
          <p>y: {this.state.windowScrollY}</p>
        </div>
      </section>
      </>
    )
  }
}

export default MovementEvents;