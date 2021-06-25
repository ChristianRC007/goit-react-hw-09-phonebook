import { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;

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
}

Login.propTypes = { onLogin: PropTypes.func.isRequired };

export default Login;
