import React, { Component } from 'react';

class InputEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hello world',
      formInputText: 'Hello world 2'
    }
  }

  render() {
    return (
      <>
      <section>
        <h3>Mouse events:</h3>
        <button>
          Click me
        </button>
        <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
        <p>Button clicked: {this.state.mouseClicked}</p>
      </section>

      <section>
        <h3>Input change events:</h3>
        <input
          type="text"
          value={this.state.inputText}
        />
        <p>Input value: {this.state.inputText}</p>
      </section>

      <section>
        <h3>Form Submit events:</h3>
        <form>
          <input
            type="text"
            value={this.state.formInputText}
          />
          <button type="submit">Submit</button>
          <p>Input value: {this.state.formInputText}</p>
          <p>Submitted value: {this.state.formInputTextSubmitted}</p>
        </form>
      </section>
      </>
    )
  }
}

export default InputEvents;