'use client';

import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';

function Nav() {
  const [userDetails, setUserDetails] = useState(null);
  // const { displayName, photoURL, email } = userDetails;
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUserDetails(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((res) => {
        const user = res.user;
        setUserDetails(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then((res) => {
        // const result = res.user;
        console.log(res);
        setUserDetails(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Firebase
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {userDetails ? (
            <Button onClick={handleLogOut}>Log Out</Button>
          ) : (
            <>
              <Button onClick={handleLoginGoogle}>Google Login</Button>
              <Button onClick={handleLoginGitHub}>GitHub Login</Button>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/'}>About</NavLink>
          <NavLink to={'/'}>Services</NavLink>
          <NavLink to={'/'}>Pricing</NavLink>
          <NavLink to={'/'}>Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
      {userDetails && (
        <div className="border-2 border-pink-500 rounded-lg md:w-4/12 mx-auto p-5 my-9">
          <img
            className="rounded-full h-16 w-16"
            src={userDetails.photoURL}
            alt=""
          />
          <p>Name:{userDetails.displayName}</p>
          <p>Email:{userDetails.email}</p>
        </div>
      )}
    </div>
  );
}
export default Nav;
