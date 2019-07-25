import React, { Component } from 'react';

class FormValidation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      feedback: '',
      acceptedTerms: false,
      submitted: 0
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(e) {
    const target = e.target
    const name = target.name
    const value = (
      target.type === 'text'
      ? target.value
      : target.checked // !this.state.acceptedTerms
    )

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <>
      <section>
        <h3>Form Submit events:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
          </label>

          <label>
            <input
              type="text"
              name="feedback"
              placeholder="Feedback"
              value={this.state.feedback}
              onChange={this.handleOnChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={this.state.acceptedTerms}
              onChange={this.handleOnChange}
            /> I accept the terms
          </label>

          <button type="submit">Submit</button>

          <p>Submitted {this.state.submitted} times!</p>
        </form>
      </section>
      </>
    )
  }
}

export default FormValidation;