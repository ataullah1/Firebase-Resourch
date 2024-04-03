import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../provider/AuthProvider';

const Register = () => {
  const {
    user,
    googleRegister,
    gitHubRegister,
    fbRegister,
    xRegister,
    emailPass,
  } = useContext(ContextProvider);

  // Handle Google Login
  const handleGoogle = () => {
    googleRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Handle GitHub Login
  const handleGitHub = () => {
    gitHubRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Handle Facebook Login
  const handleFB = () => {
    fbRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Handle Twitter Login
  const handleX = () => {
    xRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Naviget, login done then go to Home
  const naviget = useNavigate();
  useEffect(() => {
    if (user) {
      naviget('/');
    }
  }, [user, naviget]);

  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log('Sorry Your Password is not matched.');
      return;
    }

    emailPass(data.email, data.password)
      .then((result) => {
        const userDta = result.user;
        console.log(userDta);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    // console.log(data);
  };
  // console.log(errors);
  return (
    <div className="min-h-[calc(100vh-92px)] flex items-center justify-center">
      <div className="border-2 my-7 border-orange-400 rounded-md p-8 bg-gradient-to-r from-emerald-400 to-cyan-400 w-full lg:w-2/3">
        <h1 className="font-bold text-center text-3xl lg:text-6xl">
          Create Account
        </h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="text"
              placeholder="First Name"
              {...register('firstName', { required: true, maxLength: 100 })}
            />
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="text"
              placeholder="Last Name (Optional)"
              {...register('lastName', { required: false, maxLength: 100 })}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="text"
              placeholder="Username"
              {...register('userName', { required: true, maxLength: 100 })}
            />
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="number"
              placeholder="Number (Optional)"
              {...register('number', { required: false, maxLength: 100 })}
            />
          </div>
          <input
            className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
            type="email"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full relative">
              <span
                className="absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer"
                onClick={() => setEye(!eye)}
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </span>
              <input
                className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
                type={eye ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 50,
                })}
              />
            </div>
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: true,
                minLength: 6,
                maxLength: 50,
              })}
            />
          </div>
          <button className="relative group w-full py-2 px-4 border-2 font-bold tracking-widest active:scale-95 duration-150 hover:border-purple-600 hover:text-purple-600 border-orange-400 rounded">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
            Create Account
          </button>
        </form>
        <p className="pt-2">
          Already have an account?{' '}
          <Link to={'/login'} className="underline">
            Login
          </Link>
        </p>
        <div className="divider divider-error">Or</div>
        <div className="flex items-center justify-center gap-4 text-3xl pt-4">
          <button
            onClick={handleGoogle}
            className="hover:scale-125 duration-200 border-2 border-orange-500 rounded-full p-1 bg-gray-300"
          >
            <FcGoogle />
          </button>
          <button
            onClick={handleGitHub}
            className="hover:scale-125 duration-200 border-2 border-orange-500 rounded-full p-1 bg-gray-300"
          >
            <FaGithub />
          </button>
          <button
            onClick={handleFB}
            className="hover:scale-125 duration-200 text-[#1877F2] border-2 border-orange-500 rounded-full p-1 bg-gray-300"
          >
            <FaFacebook />
          </button>
          <button
            onClick={handleX}
            className="hover:scale-125 duration-200 text-[#1DA1F2] border-2 border-orange-500 rounded-full p-1 bg-gray-300"
          >
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
