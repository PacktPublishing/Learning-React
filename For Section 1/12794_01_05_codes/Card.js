import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Jane Smith',
      initials: 'JS',
      info: [
        { title: 'Birthday', text: 'Jan 1, 1980' },
        { title: 'Address', text: '123 Fulton St.' },
        { title: 'Phone', text: '212-234-5678' },
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials={this.state.initials}></span>
            <h2>{this.state.firstName}</h2>
          </header>

          <main>
            <ul>
              <li>
                <span>{this.state.info[0].title}</span>
                {this.state.info[0].text}
              </li>
              <li>
                <span>{this.state.info[1].title}</span>
                {this.state.info[1].text}
              </li>
              <li>
                <span>{this.state.info[2].title}</span>
                {this.state.info[2].text}
              </li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;