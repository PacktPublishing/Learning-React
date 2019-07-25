import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials="JS"></span>
            <h2>Jane Smith</h2>
          </header>

          <main>
            <ul>
              <li><span>Birthday</span> Jan 1, 1980</li>
              <li><span>Address</span> 123 Fulton St.</li>
              <li><span>Phone</span> 212-234-5678</li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;