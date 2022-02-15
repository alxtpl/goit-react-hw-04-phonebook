import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Filter from "./Components/Filter/Filter.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  const contactsArr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    { id: "id-5", name: "rosie simpson", number: "459-12-56" },
    { id: "id-6", name: "hermione kline", number: "443-89-12" },
    { id: "id-7", name: "eden clements", number: "645-17-79" },
    { id: "id-8", name: "annie copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || contactsArr
  );
  const [filter, setFilter] = useState("");
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const checkedName = contacts.some(
      (contact) => name.toLowercase() === contact.name.toLowerCase()
    );
    checkedName
      ? alert(`${name} is already in contacts.`)
      :setContacts(prevContacts=>[contact,...prevContacts])
  };
 const getContacts = () => {
        const noRegisterRequest = filter.toLowerCase();
        const filteredContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(noRegisterRequest)
        );
        return filteredContacts;
      };
        const onFilter = (e) => {
          const { value } = e.currentTarget;
          setFilter(value);
        };
    const deleteContact = (id) => {
      setContacts(prevState => prevState.filter(contact => contact.id !== id));
    };
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
    const currentContactList = getContacts();
  
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={onFilter} />
        <ContactList
          contacts={currentContactList}
          onDeleteContact={deleteContact}
        />
      </>
    );
  };

export default App;
