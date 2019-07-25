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

  render() {
    return (
      <>
      <section>
        <div>
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