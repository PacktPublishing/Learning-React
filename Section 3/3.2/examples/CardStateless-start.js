import React from 'react'

const CardStateless = (props) => {
  const fullName = 'Lasha'

  // No constructor, component state

  // No lifecycle methods

  // Directly returns JSX
  return (
    <section style={{border: '1px solid black'}}>
      <h1>Hello, {fullName}</h1>
    </section>
  )
}

export default CardStateless