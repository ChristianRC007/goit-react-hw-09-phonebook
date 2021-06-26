import { useState } from 'react';
import {
  phonebookOperations,
  phonebookSelectors,
} from '../../../redux/phonebook';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../../Notification';

import './ContactForm.scss';

export default function ContactForm() {
  const [contactName, setName] = useState('');
  const [contactNumber, setNumber] = useState('');
  const [isExist, setIsExist] = useState(false);

  const dispatch = useDispatch();

  const allContacts = useSelector(phonebookSelectors.getContacts);

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('This value is not valid.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (allContacts.find(({ name }) => name === contactName)) {
      setName('');
      setNumber('');
      setIsExist(true);
      const timer = setTimeout(() => {
        setIsExist(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    dispatch(
      phonebookOperations.addContact({
        name: contactName,
        number: contactNumber,
      }),
    );
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__lable">
          <input
            className="form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={contactName}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </label>
        <label className="form__lable">
          <input
            className="form__input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={contactNumber}
            onChange={handleInputChange}
            placeholder="Number"
          />
        </label>
        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
      {isExist && <Notification>This contact is already exist!</Notification>}
    </>
  );
}
