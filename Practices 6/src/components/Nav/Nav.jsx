import { Link, NavLink } from 'react-router-dom';
import userPic from '../../assets/user.png';
import { useContext, useState } from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { IoMdClose } from 'react-icons/io';
import { ContextAuth } from '../../provider/Provider';

const Nav = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const { userDta } = useContext(ContextAuth);

  const menus = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/career'}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between relative">
      <div className="hidden md:flex ">
        <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
          {menus}
        </ul>
      </div>
      <div className="w-10 md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28 flex gap-1"
          >
            {menus}
          </ul>
        </div>
      </div>
      <div className="flex gap-3 items-center md:w-1/2 ">
        <div className="ml-auto">
          {userDta ? (
            <div
              className="cursor-pointer"
              onClick={() => setViewProfile(!viewProfile)}
            >
              <img
                src={userDta.photoURL ? userDta.photoURL : userPic}
                alt=""
                className="rounded-full h-12 w-12"
              />
              <div
                className={`absolute z-50 top-14 lg:top-16 right-3 duration-3000 transition-transform ${
                  viewProfile
                    ? 'translate-x-0 visible'
                    : 'translate-x-96 invisible'
                }`}
              >
                <div
                  className="text-white absolute text-2xl top-3 left-3 border rounded cursor-pointer hover:border-orange-400 duration-150"
                  onClick={() => setViewProfile(!viewProfile)}
                >
                  <IoMdClose />
                </div>
                <ProfileMenu />
              </div>
            </div>
          ) : (
            <div className=" flex gap-2">
              <Link to={'/login'}>
                <button className="active:scale-90 duration-150 bg-neutral-700 hover:bg-white hover:text-neutral-700 border-2 border-neutral-700 text-white text-base md:text-xl font-semibold px-4 md:px-10 py-1 md:py-2">
                  Login
                </button>
              </Link>
              <Link to={'/register'}>
                <button className="active:scale-90 duration-150 bg-neutral-700 hover:bg-white hover:text-neutral-700 border-2 border-neutral-700 text-white text-base md:text-xl font-semibold px-4 md:px-10 py-1 md:py-2">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
