import { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

import './Register.scss';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, email, password } = this.state;

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
}

Register.propTypes = { onRegister: PropTypes.func.isRequired };

export default Register;
