import { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import imageLogin from '../../assets/Login.jpg';
import Nav from '../../components/Nav/Nav';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';
const Login = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);
  const {
    loding,
    userDta,
    emailPassLogin,
    twitterLogin,
    fbLogin,
    googleLogin,
  } = useContext(ContextAuth);

  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    }
    emailPassLogin(email, pass)
      .then((result) => {
        console.log('Succes login', result.user);
      })
      .catch((err) => {
        console.log('UnSucces login', err.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log('Succes login', result.user);
      })
      .catch((err) => {
        console.log('UnSucces login', err.message);
      });
  };
  const handleFbLogin = () => {
    fbLogin()
      .then((result) => {
        console.log('Succes login', result.user);
      })
      .catch((err) => {
        console.log('UnSucces login', err.message);
      });
  };
  const handleTwitterLogin = () => {
    twitterLogin()
      .then((result) => {
        console.log('Succes login', result.user);
      })
      .catch((err) => {
        console.log('UnSucces login', err.message);
      });
  };
  // Naviget, login done then go to Home
  const naviget = useNavigate();
  useEffect(() => {
    if (userDta) {
      naviget('/');
    }
  }, [userDta, naviget]);

  if (loding) {
    return <Loding />;
  }
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
        <div className="flex flex-col md:flex-row-reverse items-center w-full gap-5 border-2 rounded-lg border-primary min-h-[450px] md:p-10 mt-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-[450px] flex justify-center items-center">
            <img src={imageLogin} alt="" className="max-h-full mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto border-2 rounded-lg p-5">
            <h1 className="text-3xl font-bold pb-6">Login Your Account</h1>
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div>
                <label
                  className={
                    emailErr
                      ? 'input input-bordered flex items-center gap-2 border-red-500'
                      : 'input input-bordered flex items-center gap-2'
                  }
                >
                  <MdEmail />
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                  />
                </label>
                {emailErr && (
                  <p className="text-sm text-red-500 italic">{emailErr}</p>
                )}
              </div>
              <label className="relative input input-bordered flex items-center gap-2">
                <RiLockPasswordFill />
                <input
                  type={eye ? 'text' : 'password'}
                  className="grow"
                  name="password"
                  required
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
                className="w-full py-2 px-4 rounded-md text-center text-white font-bold bg-primary active:scale-95 duration-150 cursor-pointer hover:bg-[#3b02ca]"
              />
            </form>{' '}
            <p className="pt-3">
              {`Don't have an account? `}
              <Link to={'/register'} className="underline">
                Create Account
              </Link>
            </p>{' '}
            <div className="divider divider-primary">Or</div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleGoogleLogin}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 bg-white"
              >
                <span>
                  <FcGoogle />
                </span>
                Login With Google
              </button>
              <button
                onClick={handleFbLogin}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2"
              >
                <span className="text-blue-500">
                  <FaFacebook />
                </span>
                Login With Facebook
              </button>
              <button
                onClick={handleTwitterLogin}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-blue-400-900/20 rounded-md  flex items-center justify-center gap-2"
              >
                <span className="text-blue-400">
                  <FaTwitter />
                </span>
                Login With Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
