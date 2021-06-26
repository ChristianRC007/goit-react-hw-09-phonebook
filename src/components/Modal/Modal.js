import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  phonebookActions,
  phonebookSelectors,
  phonebookOperations,
} from '../../redux/phonebook';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../Notification';

import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  const onToggleEditor = obj => dispatch(phonebookActions.toggleEditor(obj));
  const { name, number, id } = useSelector(phonebookSelectors.getEditorValues);
  const allContacts = useSelector(phonebookSelectors.getContacts);

  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isExist, setIsExist] = useState(false);

  const handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      onToggleEditor({ isOpen: false });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setEditName(value);
        break;
      case 'number':
        setEditNumber(value);
        break;
      default:
        console.log('This value is not valid.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      allContacts.find(
        ({ name, number }) => name === editName && number === editNumber,
      )
    ) {
      setIsExist(true);

      const timer = setTimeout(() => {
        setIsExist(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    dispatch(
      phonebookOperations.editContact({
        id: id,
        name: editName,
        number: editNumber,
      }),
    );
    onToggleEditor({ isOpen: false });
  };

  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div className="modal-notify">
          {isExist && (
            <Notification>This contact is already exist!</Notification>
          )}
        </div>
        <form
          className="modal__form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            <input
              className="modal__input"
              type="text"
              name="name"
              value={editName}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input
              className="modal__input"
              type="tel"
              name="number"
              value={editNumber}
              onChange={handleInputChange}
              placeholder="Number"
              required
            />
          </label>
          <div className="btn-box">
            <button
              className="cancel"
              type="button"
              onClick={() => onToggleEditor({ isOpen: false })}
            >
              Cancel
            </button>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot,
  );
}
