import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [errorText, setErrorText] = useState('');
  const [eye, setEye] = useState(false);
  const handleLogin = (e) => {
    setErrorText('');
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email, pass);
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        toast.success('Login is successful.');
        const user = userCredential.user;
        console.log(user);
      })
      .catch(() => {
        // const errorCode = error.code;
        setErrorText('Incorrect password. Please input the correct password.');
        // const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };
  const emailRef = useRef(null);
  const handleForget = () => {
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log('Forgeting', email);
    if (!email) {
      toast.error('Please input email');
      return;
    } else if (!emailRegex.test(email)) {
      toast.error('Please input a valid email.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success('Please check your email');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error('Sorry');
        // ..
      });
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
      <Toaster />
      <div className="w-full md:w-9/12 lg:w-1/2 mx-auto border border-gray-300 rounded-lg">
        <h1 className="font-bold text-4xl text-center underline py-2">
          Login Now
        </h1>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative w-full">
              <input
                type={eye ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered w-full pr-14"
                required
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer"
                onClick={() => setEye(!eye)}
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errorText.length > 0 && (
              <p className="pt-2 text-red-500">{errorText}</p>
            )}
            <label className="label">
              <a
                href="#"
                onClick={handleForget}
                className="text-primary label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary text-white font-semibold text-lg"
              value="Log In"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
