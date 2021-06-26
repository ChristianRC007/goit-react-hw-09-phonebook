import { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import Container from '../Container';

import './Register.scss';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('This value is not valid.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className="register-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            className="register-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
        </label>
        <label>
          <input
            className="register-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </Container>
  );
}
