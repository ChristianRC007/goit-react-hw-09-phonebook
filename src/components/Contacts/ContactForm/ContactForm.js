import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from '../../Notification';

import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isExist: false,
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = e => {
    const { allContacts, onSubmit } = this.props;

    e.preventDefault();

    if (allContacts.find(({ name }) => name === this.state.name)) {
      this.setState({ name: '', number: '', isExist: true });
      const timer = setTimeout(() => {
        this.setState({ isExist: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
    onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleInputChange } = this;
    const { name, number, isExist } = this.state;

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
              value={name}
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
              value={number}
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  allContacts: PropTypes.array.isRequired,
};

export default ContactForm;
