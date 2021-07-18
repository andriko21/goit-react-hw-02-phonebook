import React from 'react'
import style from './ContactList.module.css'

const ContactList = ({ itemsRender }) => (

    <div className={style.contacts__container}>
          <h2>Contacts</h2>
          <ul className={style.list}>
            {itemsRender.map(({ name, id, number }) => (
              <li className={style.item}>
                <p className={style.userName}>{name}</p>
                <p>{number}</p>
              </li>
            ))}
          </ul>
        </div>
)

export default ContactList;