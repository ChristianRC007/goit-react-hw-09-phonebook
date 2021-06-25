import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getLoading = state => state.phonebook.loading;
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact),
    );
  },
);

// eslint-disable-next-line
export default { getContacts, getFilter, getLoading, getFilteredContacts };
