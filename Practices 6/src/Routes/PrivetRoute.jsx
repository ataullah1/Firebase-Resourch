import { useContext } from 'react';
import { ContextAuth } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Loding from '../pages/Loding/Loding';

const PrivetRoute = ({ children }) => {
  const { userDta, loding } = useContext(ContextAuth);
  let location = useLocation();
  console.log(loding);
  if (loding) {
    return <Loding />;
  }
  if (userDta) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
