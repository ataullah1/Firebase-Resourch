import { Link, NavLink } from 'react-router-dom';
import userPic from '../../assets/user.png';

const Nav = () => {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
          {menus}
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        <img src={userPic} alt="" className="h-10 w-10" />
        <Link to={'/login'}>
          <button className="active:scale-90 duration-150 bg-neutral-700 hover:bg-white hover:text-neutral-700 border-2 border-neutral-700 text-white text-base md:text-xl font-semibold px-6 md:px-10 py-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
