import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Container from '../Container';

import './Login.scss';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <input
            className="login-input"
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
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </Container>
  );
}
