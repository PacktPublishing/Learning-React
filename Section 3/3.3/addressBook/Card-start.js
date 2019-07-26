import React from 'react'

const Card = (props) => {
  const {
    contact,
    index
  } = props

  return (
    <div>
      <p>#{index}: {contact.name}</p>
    </div>
  )
}

export default Card