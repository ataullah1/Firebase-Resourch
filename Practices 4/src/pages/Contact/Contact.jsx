import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[calc(100vh-92px)] flex items-center justify-center">
      <div className="w-full lg:w-3/5 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-orange-400 rounded-md p-8 space-y-5"
        >
          <div className="flex justify-between gap-3">
            <input
              type="text"
              className="border border-gray-500 rounded px-4 py-2 w-full"
              placeholder="First Name"
              name="firstName"
              {...register('firstName')}
            />
            <input
              type="text"
              className="border border-gray-500 rounded px-4 py-2 w-full"
              placeholder="Last Name"
              name="lastName"
              {...register('lastName')}
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="w-full py-2 rounded bg-secondary hover:bg-purple-500 duration-150 active:scale-95 text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
