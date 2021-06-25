import { connect } from 'react-redux';
import UserMenu from './UserMenu';
import { authSelectors, authOperations } from '../../../redux/auth';

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
