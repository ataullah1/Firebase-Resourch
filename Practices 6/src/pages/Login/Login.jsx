import { useState } from 'react';
import { FaEye, FaEyeSlash, FaImage, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const Login = () => {
  const [eye, setEye] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
      <div className="flex flex-col md:flex-row-reverse items-center w-full gap-5">
        <div className="w-full md:w-1/2 bg-red-200 h-44 "></div>
        <div className="w-full md:w-1/2 mx-auto border-2 rounded-lg p-5">
          <h1 className="text-3xl font-bold pb-6">Create an account</h1>
          <form className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaUserAlt />
              <input type="text" className="grow" placeholder="Your Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaImage />
              <input
                type="text"
                className="grow"
                placeholder="Your Image URL"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaUserAlt />
              <input type="text" className="grow" placeholder="Your Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail />
              <input type="email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <RiLockPasswordFill />
              <input
                type={eye ? 'text' : 'password'}
                className="grow"
                placeholder="Password"
              />
              <div
                onClick={() => setEye(!eye)}
                className="cursor-pointer text-xl"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </div>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <TbPasswordFingerprint />
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>
            <input
              type="submit"
              value="Register"
              className="w-full py-2 px-4 rounded-md text-center text-white font-bold bg-secondary"
            />
          </form>{' '}
          <p className="pt-2">
            {`Don't have an account? `}
            <Link to={'/register'} className="underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
