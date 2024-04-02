import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const googleProvider = new GoogleAuthProvider();
  const googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUsers) => {
      setUser(currentUsers);
      // console.log(currentUsers);
    });
    return () => unSubscribe;
  }, []);

  const authInfoProvider = { user, googleRegister, logOut };
  return (
    <ContextProvider.Provider value={authInfoProvider}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
