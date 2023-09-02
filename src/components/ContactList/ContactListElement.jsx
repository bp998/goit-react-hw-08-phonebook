import css from './ContactListElement.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectSortedFilteredContacts } from 'redux/contacts/selectors';

const ContactListElement = () => {
  const sortedFilteredContacts = useSelector(selectSortedFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <ul className={css.list}>
      {sortedFilteredContacts.map(({ id, name, number }) => (
        <li className={css.listElem} key={id}>
          <p className={css.listElemName}>{name}:</p>
          <a className={css.listElemTel} href={'tel:' + { number }}>
            {number}
          </a>
          <button
            className={css.delete}
            onClick={() => handleDelete(id)}
            id={id}
            type="button"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactListElement;
