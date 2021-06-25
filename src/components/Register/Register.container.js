import { connect } from 'react-redux';
import Register from './Register';
import { authOperations } from '../../redux/auth';

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
