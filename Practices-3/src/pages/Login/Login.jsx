import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

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
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
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
                {eye ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p className="pt-2 text-red-500">{errorText}</p>
            <label className="label">
              <a
                href="#"
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
