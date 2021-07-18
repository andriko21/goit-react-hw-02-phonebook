import React, { Component } from "react";
// import PropTypes from "prop-types";
import style from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

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
    name: "",
    number: "",
  };

  onCHangeInput = (ev) => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (ev) => {
    // const {name:}
    ev.preventDefault();
    // console.log(ev)
    const contact = {
      name: ev.currentTarget.name.value,
      number: ev.currentTarget.number.value,
      id: uuidv4(),
    };
    this.addContact(contact);
    this.reset()
  };

  addContact = (data) => {
    this.setState({
      contacts: [data, ...this.state.contacts],
    });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <div className={style.addContact__container}>
          <h2>Name</h2>
          <form className={style.form} onSubmit={this.onSubmit}>
            <input
              className={style.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onCHangeInput}
            />
            <h3>Number</h3>
            <input
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onCHangeInput}
            />
            <button type="submit" className={style.button}>
              add contact
            </button>
          </form>
        </div>

        <div className={style.contacts__container}>
          <h2>Contacts</h2>
          <ul className={style.list}>
            {this.state.contacts.map(({ name, id, number }) => (
              <li className={style.item}>
                <p className={style.userName}>{name}</p>
                <p>{number}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
