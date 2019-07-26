import React from 'react'

const Card = (props) => {
  const {
    contact,
    index
  } = props

  const activeClass = contact.favorite ? 'active' : ''

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={contact.initials}></span>
        <h2>{contact.name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { props.handleFavoriteToggle(index) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {contact.phone ? contact.phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {contact.email ? contact.email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Card