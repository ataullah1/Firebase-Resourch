import PropTypes from 'prop-types';
import { createContext } from 'react';

export const ContextProvider = createContext();
const AuthProvider = ({ children }) => {
  return (
    <ContextProvider.Provider value={'infoProvider'}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
