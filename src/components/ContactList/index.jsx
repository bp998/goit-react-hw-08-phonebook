import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ContactListElement from './ContactListElement';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      {contacts.length > 0 ? (
        <ul>
          <ContactListElement />
        </ul>
      ) : null}
    </div>
  );
};

export default ContactList;
