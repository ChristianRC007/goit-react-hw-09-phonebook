import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = createAsyncThunk('auth/registerUser', async creds => {
  const { data } = await axios.post('/users/signup', creds);
  token.set(data.token);
  return data;
});

const logIn = createAsyncThunk('auth/loginUser', async creds => {
  const { data } = await axios.post('/users/login', creds);
  token.set(data.token);
  return data;
});

const logOut = createAsyncThunk('auth/logoutUser', async () => {
  await axios.post('/users/logout');
  token.unset();
});

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (dispatch, { getState }) => {
    const {
      auth: { token: persistedToken },
    } = getState();

    token.set(persistedToken);

    const { data } = await axios.get('/users/current');

    return data;
  },
);

// eslint-disable-next-line
export default { register, logIn, logOut, getCurrentUser };
