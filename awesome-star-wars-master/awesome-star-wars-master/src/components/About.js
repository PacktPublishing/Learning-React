import React from 'react'

const About = ({match}) => {
    let who = match.params.userId || 'page'
    return (
        <h2>About {who}</h2>
    )
}

export default About