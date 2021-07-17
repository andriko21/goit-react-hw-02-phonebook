import React, { Component } from "react";
// import PropTypes from "prop-types";
import style from "../src/index.css";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <div className={style.addContact__container}>
          <h2>Name</h2>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button type="button">add contact</button>
        </div>

        <div className={style.contacts__container}>
          <h2>Contacts</h2>
          <ul>
            <li>Rosie Simpson</li>
          </ul>
        </div>
      </div>
    );
  }
}
