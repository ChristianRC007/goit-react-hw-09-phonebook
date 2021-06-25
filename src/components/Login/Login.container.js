import { connect } from 'react-redux';
import Login from './Login';
import { authOperations } from '../../redux/auth';

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
