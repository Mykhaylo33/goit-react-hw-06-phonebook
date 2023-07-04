import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import classNames from 'classnames';

const App = () => {
  return (
    <div className={classNames('container')}>
      <h1 className={classNames('title')}>Phonebook</h1>
      <ContactForm className={classNames('contact-form')} />
      <h2 className={classNames('section-title')}>Contacts</h2>
      <Filter className={classNames('filter-input')} />
      <ContactList className={classNames('contact-list')} />
    </div>
  );
}

export default App;
