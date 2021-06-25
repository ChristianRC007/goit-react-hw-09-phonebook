import { connect } from 'react-redux';
import Navigation from './Navigation';
import { authSelectors } from '../../../redux/auth';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
