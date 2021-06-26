import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Container from '../Container';

import './AppBar.scss';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Container>
      <div className="AppBar">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </Container>
  );
}
