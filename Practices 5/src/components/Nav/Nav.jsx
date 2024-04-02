import { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { ContextProvider } from '../../provider/AuthProvider';

const Nav = () => {
  const { user } = useContext(ContextProvider);
  const [view, setView] = useState(false);
  return (
    <div>
      <Toaster />
      <div className="navbar flex items-center flex-col sm:flex-row sm:justify-between bg-base-100 ">
        <div className="navbar-start flex items-center flex-row-reverse justify-between w-full sm:w-auto sm:flex-row">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 rotate-180 sm:rotate-0"
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
              className="menu menu-sm dropdown-content mt-3 ml-[-140px] sm:ml-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-2 border-solid border-orange-400"
            >
              <NavLink
                to={'/'}
                className="hover:bg-slate-300 py-2 px-4 rounded"
              >
                Home
              </NavLink>
              <NavLink
                to={'about'}
                className="hover:bg-slate-300 py-2 px-4 rounded"
              >
                About
              </NavLink>
              <NavLink
                to={'contact'}
                className="hover:bg-slate-300 py-2 px-4 rounded"
              >
                Contact
              </NavLink>
              <div className="flex flex-col-reverse gap-2 mt-2">
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
              </div>
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
        {user ? (
          <div className="navbar-end flex gap-4 w-auto">
            <img
              onClick={() => setView(!view)}
              src={user.photoURL}
              className="border border-orange-400 rounded-full h-11 w-11 cursor-pointer p-1"
              alt=""
            />
            {view && (
              <div className="absolute top-16 lg:top-20 right-4">
                <ProfileMenu />
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-end gap-4 hidden sm:flex w-auto">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
