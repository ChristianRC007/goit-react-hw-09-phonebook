import PropTypes from 'prop-types';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Container from '../Container';

import './AppBar.scss';

function AppBar({ isAuthenticated }) {
  return (
    <Container>
      <div className="AppBar">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </Container>
  );
}

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AppBar;
