import { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./components/HomePage'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const Contacts = lazy(() => import('./components/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <Register />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
