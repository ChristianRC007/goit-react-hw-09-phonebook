import { NavLink } from 'react-router-dom';

import './AuthNav.scss';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/login"
        exact
        className="auth__link"
        activeClassName="auth__link--active"
      >
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        exact
        className="auth__link"
        activeClassName="auth__link--active"
      >
        Sign up
      </NavLink>
    </div>
  );
}
