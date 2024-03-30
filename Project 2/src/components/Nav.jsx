'use client';
import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import {
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';

function Nav() {
  const [data, setData] = useState(null);
  const auth = getAuth(app);
  const fbAuthProvider = new FacebookAuthProvider();
  const handleLoginFacebook = () => {
    signInWithPopup(auth, fbAuthProvider)
      .then((res) => {
        const output = res.user;
        console.log(output);
        setData(output);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginTwitter = () => {};
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setData(null);
        console.log('Sign-out successful.');
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
          {data ? (
            <Button onClick={handleLogOut}>Log Out</Button>
          ) : (
            <>
              <Button onClick={handleLoginFacebook}>Facebook Login</Button>
              <Button onClick={handleLoginTwitter}>Twitter Login</Button>
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
      {data && (
        <div className="border-2 border-pink-500 rounded-lg md:w-4/12 mx-auto p-5 my-9">
          <img className="rounded-full h-16 w-16" src={data.photoURL} alt="" />
          <p>Name:{data.displayName}</p>
          <p>Email:{data.email}</p>
        </div>
      )}
    </div>
  );
}
export default Nav;
