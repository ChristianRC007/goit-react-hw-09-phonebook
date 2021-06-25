import { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import PropTypes from 'prop-types';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./components/HomePage'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const Contacts = lazy(() => import('./components/Contacts'));

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            restricted
            component={Register}
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            restricted
            component={Login}
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
};

App.propTypes = { onGetCurrentUser: PropTypes.func.isRequired };

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
