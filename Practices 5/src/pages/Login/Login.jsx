import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [eye, setEye] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="min-h-[calc(100vh-92px)] flex items-center justify-center">
      <div className="border-2 border-orange-400 rounded-md p-8 bg-gradient-to-r from-teal-400 to-yellow-200">
        <h1 className="font-bold text-center text-3xl lg:text-6xl">
          Login Account
        </h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
            type="text"
            placeholder="Username"
            {...register('userName', { required: true, maxLength: 100 })}
          />
          <input
            className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
            type="email"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <div className="relative">
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type={eye ? 'text' : 'password'}
              placeholder="Password"
              {...register('Password', {
                required: true,
                minLength: 6,
                maxLength: 50,
              })}
            />
            <span
              className="absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer"
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" /> <label>Remember me</label>
            </div>
            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
          <button className="relative group w-full py-2 px-4 border-2 font-bold tracking-widest active:scale-95 duration-150 hover:border-purple-600 hover:text-purple-600 border-orange-400 rounded">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
            Log In
          </button>
        </form>
        <p className="pt-2">
          Don't have an account? &nbsp;
          <Link to={'/register'} className="underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
