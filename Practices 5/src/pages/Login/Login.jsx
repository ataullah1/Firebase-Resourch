import { useForm } from 'react-hook-form';

const Login = () => {
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
          <input
            className="w-full py-2 px-4 border border-orange-400 rounded outline-none focus:border-purple-600 duration-150"
            type="password"
            placeholder="Password"
            {...register('Password', {
              required: true,
              minLength: 6,
              maxLength: 50,
            })}
          />

          <button className="relative group w-full py-2 px-4 border-2 font-bold tracking-widest active:scale-95 duration-150 hover:border-purple-600 hover:text-purple-600 border-orange-400 rounded">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
