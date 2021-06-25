import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
