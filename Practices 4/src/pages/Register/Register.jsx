import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);

  const [eye, setEye] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    createUser(email, password)
      .then((result) => {
        toast.success('Successfully Register.');
        console.log(result.user);
      })
      .catch((err) => {
        toast.error('Sorry');
        console.log(err.massage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
      <Toaster />{' '}
      <div className="w-full md:w-9/12 lg:w-1/2 mx-auto border border-gray-300 rounded-lg">
        <h1 className="font-bold text-4xl text-center underline py-2">
          Register Now
        </h1>
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
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
                {eye ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <p className="pt-2 text-red-500">errorText</p>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary text-white font-semibold text-lg"
              value="Register Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;