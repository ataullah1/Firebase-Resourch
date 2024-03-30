'use client';

import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
function Nav() {
  const handleLogOut = () => {};
  const handleLoginFacebook = () => {};
  const handleLoginTwitter = () => {};
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Firebase
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={handleLogOut}>Log Out</Button>
          <>
            <Button onClick={handleLoginFacebook}>Facebook Login</Button>
            <Button onClick={handleLoginTwitter}>Twitter Login</Button>
          </>
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

      <div className="border-2 border-pink-500 rounded-lg md:w-4/12 mx-auto p-5 my-9">
        <img className="rounded-full h-16 w-16" src="" alt="" />
        <p>Name:</p>
        <p>Email:</p>
      </div>
    </div>
  );
}
export default Nav;
