import React, { Component } from 'react'

import './AddressBook.css'
import Card from './Card'

class ShoppingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          name: 'Jane Smith',
          initials: 'JS',
          favorite: true,
          phone: '212-111-1234',
          email: 'jane@email.com'
        },
        {
          name: 'Sarah Carter',
          initials: 'SN',
          favorite: false,
          phone: '212-222-5323',
          email: 'sarah@email.com'
        },
        {
          name: 'Mike Pearson',
          initials: 'MP',
          favorite: false,
          phone: '212-333-1212',
          email: 'mike@email.com'
        }
      ]
    }
  }

  render() {
    const {
      contacts
    } = this.state

    return (
      <>
      <h3>Address Book</h3>
      { !contacts.length && <p>No contacts!</p> }
      
      {contacts.map((contact, index) => {
        return (
          <Card
            contact={contact}
            index={index}
            key={index}
          />
        )
      })}
      </>
    )
  }
}

export default ShoppingList;