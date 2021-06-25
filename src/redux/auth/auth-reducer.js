import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authOperations from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authOperations.register.fulfilled]: (_, { payload }) => payload.user,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.user,
  [authOperations.logOut.fulfilled]: () => initialUserState,
  [authOperations.getCurrentUser.fulfilled]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [authOperations.register.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logOut.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authOperations.register.fulfilled]: () => true,
  [authOperations.logIn.fulfilled]: () => true,
  [authOperations.getCurrentUser.fulfilled]: () => true,
  [authOperations.register.rejected]: () => false,
  [authOperations.logIn.rejected]: () => false,
  [authOperations.getCurrentUser.rejected]: () => false,
  [authOperations.logOut.fulfilled]: () => false,
});

const setError = (_, { error }) => error.message;

const error = createReducer(null, {
  [authOperations.register.rejected]: setError,
  [authOperations.logIn.rejected]: setError,
  [authOperations.logOut.rejected]: setError,
  [authOperations.getCurrentUser.rejected]: setError,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  error,
});
