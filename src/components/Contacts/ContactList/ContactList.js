import { useEffect } from 'react';
import {
  phonebookOperations,
  phonebookSelectors,
} from '../../../redux/phonebook';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import './ContactList.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getFilteredContacts);
  const isLoading = useSelector(phonebookSelectors.getLoading);
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <div className="contact__loader">
        {isLoading && (
          <Loader
            type="Oval"
            color="#b5b5b3"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </div>
      <ul className="contact-list">
        {contacts.map(({ id, name, number }) => (
          <li className="contact-list__item" key={id}>
            <p className="contact-list__item__name">{name}</p>
            <p className="contact-list__item__number">{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              <svg viewBox="0 0 496.096 496.096">
                <g>
                  <g>
                    <path
                      d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
    L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
    c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
    l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
