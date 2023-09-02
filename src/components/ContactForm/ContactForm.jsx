import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const [isOnList, setIsOnList] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contacts.items.find(el => el.name === name)) {
      setIsOnList(true);
    } else {
      setIsOnList(false);
      dispatch(addContact({ name, number }));
    }
    form.reset();
  };

  return (
    <form className={css.contact} onSubmit={handleSubmit}>
      <label>
        <p className={css.text}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.text}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
        {isOnList ? (
          <span className={css.alert}>Contact is already on your list</span>
        ) : null}
      </button>
    </form>
  );
};

export default ContactForm;
