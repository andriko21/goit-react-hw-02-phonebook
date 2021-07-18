import React, { Component } from "react";
// import style from "./index.module.css";
import Form from "./Form/Form.js";
import ContactList from "./ContactLIst/ContactList.js";
import Filter from "./Filter/Filter.js";

export default class App extends Component {
  static defaultProps = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  state = {
    contacts: [...this.props.contacts],
    filter: "",
  };

  addContact = (data) => {
    this.setState({
      contacts: [data, ...this.state.contacts],
    });
  };

  changeFilter = (ev) => {
    this.setState({
      filter: ev.currentTarget.value,
    });
  };

  visibleItems = () => {
    const { contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    const { changeFilter, addContact } = this;
    return (
      <>
        <Form addContactItem={addContact} />
        <Filter value={filter} onChange={changeFilter} />
        <ContactList itemsRender={this.visibleItems()} />
      </>
    );
  }
}
