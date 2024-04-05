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
  const [loding, setLoding] = useState(true);
  const [userDta, setUserDta] = useState();

  const emailPass = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPassLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoding(true);
    return signOut(auth);
  };

  // Google Login
  const GoogleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  // Facebook Login
  const FacebookProvider = new FacebookAuthProvider();
  const fbLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, FacebookProvider);
  };
  // Twitter Login
  const TwitterProvider = new TwitterAuthProvider();
  const twitterLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, TwitterProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDta(currentUser);
      setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authDta = {
    loding,
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
