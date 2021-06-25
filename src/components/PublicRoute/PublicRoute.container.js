import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import PublicRoute from './PublicRoute';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
