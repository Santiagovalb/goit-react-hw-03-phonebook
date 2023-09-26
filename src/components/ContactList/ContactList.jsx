import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        <div className={style.contDetail}>
          <p className={style.name}>{name}</p>
          <p className={style.number}>{number}</p>
        </div>
        <button
          className={style.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Borrar
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
