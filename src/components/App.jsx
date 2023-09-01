import React, { useEffect } from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error ? <p>Loading contacts...</p> : <ContactList />}
    </div>
  );
};

export default App;
