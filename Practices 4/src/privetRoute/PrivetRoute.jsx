import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    alert('Loding...');
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
