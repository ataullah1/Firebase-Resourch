import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
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
      <div className="border-2 border-orange-400 rounded-md p-8 bg-gradient-to-r from-emerald-400 to-cyan-400 w-full lg:w-2/3">
        <h1 className="font-bold text-center text-3xl lg:text-6xl">
          Create Account
        </h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="text"
              placeholder="First Name"
              {...register('First Name', { required: true, maxLength: 100 })}
            />
            <input
              className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
              type="text"
              placeholder="Last Name"
              {...register('Last Name', { required: true, maxLength: 100 })}
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
              placeholder="Number"
              {...register('Number', { required: true, maxLength: 100 })}
            />
          </div>
          <input
            className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
            type="email"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
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
                {...register('Password', {
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
              {...register('Confirm Password', {
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
      </div>
    </div>
  );
};
export default Register;
