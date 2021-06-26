import { combineReducers, createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';
import phonebookOperations from './phonebook-operations';

const contacts = createReducer([], {
  [phonebookOperations.getContacts.fulfilled]: (_, { payload }) => payload,
  [phonebookOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phonebookOperations.editContact.fulfilled]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload.id),
    payload,
  ],
  [phonebookOperations.deleteContact.fulfilled]: (state, { meta }) =>
    state.filter(({ id }) => id !== meta.arg),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [phonebookOperations.getContacts.pending]: () => true,
  [phonebookOperations.getContacts.fulfilled]: () => false,
  [phonebookOperations.getContacts.rejected]: () => false,
  [phonebookOperations.addContact.pending]: () => true,
  [phonebookOperations.addContact.fulfilled]: () => false,
  [phonebookOperations.addContact.rejected]: () => false,
  [phonebookOperations.deleteContact.pending]: () => true,
  [phonebookOperations.deleteContact.fulfilled]: () => false,
  [phonebookOperations.deleteContact.rejected]: () => false,
  [phonebookOperations.editContact.pending]: () => true,
  [phonebookOperations.editContact.fulfilled]: () => false,
  [phonebookOperations.editContact.rejected]: () => false,
});

const editor = createReducer(
  {},
  {
    [phonebookActions.toggleEditor]: (_, { payload }) => payload,
  },
);

const error = createReducer(null, {
  [phonebookOperations.getContacts.rejected]: (_, { error }) => error.message,
  [phonebookOperations.addContact.rejected]: (_, { error }) => error.message,
  [phonebookOperations.deleteContact.rejected]: (_, { error }) => error.message,
  [phonebookOperations.editContact.rejected]: (_, { error }) => error.message,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  editor,
  error,
});
