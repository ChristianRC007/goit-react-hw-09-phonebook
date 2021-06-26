import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contact/changeFilter');
const toggleEditor = createAction('contact/toggleEditor');

// eslint-disable-next-line
export default { changeFilter, toggleEditor };
