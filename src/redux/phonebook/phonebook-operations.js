import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('phonebook/getContacts', async () => {
  const { data } = await axios.get('/contacts');

  return data;
});

const addContact = createAsyncThunk(
  'phonebook/addContact',
  async ({ name, number }) => {
    const contact = { name, number };

    const { data } = await axios.post('/contacts', contact);

    return data;
  },
);

const editContact = createAsyncThunk(
  'phonebook/editContact',
  async ({ id, name, number }) => {
    const contact = { name, number };

    const { data } = await axios.patch(`/contacts/${id}`, contact);

    return data;
  },
);

const deleteContact = createAsyncThunk('phonebook/deleteContact', async id => {
  await axios.delete(`/contacts/${id}`);
});

// eslint-disable-next-line
export default { getContacts, addContact, deleteContact, editContact };
