import React, { Component } from 'react';
import Form from './form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './contactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = name => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { name, id: nanoid() }],
    }));
    console.log(name);
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
// handleNameChange = e => {
//   this.setState({ [e.currentTarget.name]: e.currentTarget.value });
// };
// handleSubmit = e => {
//   e.preventDefault();
//   this.state;
// };
