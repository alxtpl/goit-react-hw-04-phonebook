import React, { useState } from 'react';
import style from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const handleChange = e => {
      const { name, value } = e.currentTarget;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(name, number);
      setName('');
      setNumber('');
    };
  
        return (
        <form onSubmit={handleSubmit} className={style.Form}>
            <label >
                <span>
                    <b>Name</b>
                </span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
                <span>
                    <b>Number</b>
                </span>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
      );
  }


export default ContactForm;