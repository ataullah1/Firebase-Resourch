import { useState } from 'react';
import pImg from '../../assets/react.svg';
import { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Nav = () => {
  const [view, setView] = useState(false);
  return (
    <div>
      <Toaster />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to={'/'} className="hover:bg-slate-300">
                Home
              </NavLink>
              <NavLink to={'about'} className="hover:bg-slate-300">
                About
              </NavLink>
              <NavLink to={'contact'} className="hover:bg-slate-300">
                Contact
              </NavLink>
            </ul>
          </div>
          <Link to={'/'} className="text-3xl font-extrabold">
            SnowyFire
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <NavLink className="px-6 py-3 font-semibold hover:bg-slate-300 rounded-md">
              Home
            </NavLink>
            <NavLink
              to={'about'}
              className="px-6 py-3 font-semibold hover:bg-slate-300 rounded-md"
            >
              About
            </NavLink>
            <NavLink
              to={'contact'}
              className="px-6 py-3 font-semibold hover:bg-slate-300 rounded-md"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        {/* {user ? (*/}
        <div className="navbar-end flex gap-4 ">
          {/* <button className="ml-auto font-semibold hover:bg-black hover:text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md border border-black active:scale-90 duration-150">
            Sign Out
          </button> */}
          <img
            onClick={() => setView(!view)}
            src={pImg}
            className="border border-orange-400 rounded-full h-11 w-11 cursor-pointer p-1"
            alt=""
          />
          {view && (
            <div className="absolute top-20 right-4">
              <ProfileMenu />
            </div>
          )}
        </div>

        {/*  ) : ( */}
        {/* <div className="navbar-end flex gap-4 ">
          <Link
            to={'login'}
            className="font-semibold hover:bg-black hover:text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md border border-black active:scale-90 duration-150"
          >
            Login
          </Link>
          <Link
            to={'register'}
            className="font-semibold bg-black text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md active:scale-90 duration-150"
          >
            Register
          </Link>
        </div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Nav;
