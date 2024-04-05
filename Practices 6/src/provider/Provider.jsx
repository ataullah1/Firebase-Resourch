import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [userDta, setUserDta] = useState();

  const emailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // Google Login
  const GoogleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // Facebook Login
  const FacebookProvider = new FacebookAuthProvider();
  const fbLogin = () => {
    return signInWithPopup(auth, FacebookProvider);
  };
  // Twitter Login
  const TwitterProvider = new TwitterAuthProvider();
  const twitterLogin = () => {
    return signInWithPopup(auth, TwitterProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDta(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authDta = {
    userDta,
    logout,
    emailPass,
    emailPassLogin,
    googleLogin,
    fbLogin,
    twitterLogin,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
