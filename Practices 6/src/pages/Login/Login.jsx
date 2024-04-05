import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import imageLogin from '../../assets/Login.jpg';
const Login = () => {
  const [eye, setEye] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
      <div className="flex flex-col md:flex-row-reverse items-center w-full gap-5 border-2 rounded-lg border-primary min-h-[450px] md:p-10 mt-8">
        <div className="w-full md:w-1/2 h-[300px] md:h-[450px] flex justify-center items-center">
          <img src={imageLogin} alt="" className="max-h-full mx-auto" />
        </div>
        <div className="w-full md:w-1/2 mx-auto border-2 rounded-lg p-5">
          <h1 className="text-3xl font-bold pb-6">Login Your Account</h1>
          <form className="space-y-6">
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail />
              <input type="email" className="grow" placeholder="Email" />
            </label>
            <label className="relative input input-bordered flex items-center gap-2">
              <RiLockPasswordFill />
              <input
                type={eye ? 'text' : 'password'}
                className="grow"
                placeholder="Password"
              />
              <div
                onClick={() => setEye(!eye)}
                className="cursor-pointer text-xl absolute right-3"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </div>
            </label>
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" className="cursor-pointer" />{' '}
                <label>Remember me</label>
              </div>
              <p className="underline cursor-pointer">Forgot Password</p>
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full py-2 px-4 rounded-md text-center text-white font-bold bg-primary active:scale-95 duration-150"
            />
          </form>{' '}
          <p className="pt-3">
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
