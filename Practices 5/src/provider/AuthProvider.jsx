import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubRegister = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const fbRegister = () => {
    return signInWithPopup(auth, faceBookProvider);
  };

  const xRegister = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  // Email Password Login
  const emailPass = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass);
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

  const authInfoProvider = {
    user,
    googleRegister,
    gitHubRegister,
    fbRegister,
    xRegister,
    emailPass,
    logOut,
  };
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
