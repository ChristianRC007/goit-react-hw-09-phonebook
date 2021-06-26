import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

import './Navigation.scss';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
