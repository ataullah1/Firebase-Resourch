'use client';

import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.init';

function Nav() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={handleLogin}>Login</Button>
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
  );
}
export default Nav;
