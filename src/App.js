import React, { Component } from "react";
// import PropTypes from "prop-types";
import style from "./App.module.css";

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
  };

  

  render() {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <div className={style.addContact__container}>
          <h2>Name</h2>
        
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button type="submit" className={style.button}>add contact</button>
        </div>

        <div className={style.contacts__container}>
          <h2>Contacts</h2>
          <ul className={style.list}>
            {this.props.contacts.map(({ name, id, number }) => (
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
