import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
const RightSite = () => {
  return (
    <div className="">
      <h1 className="text-neutral-700 text-xl font-semibold pb-5">
        Login With
      </h1>
      <div className="flex flex-col gap-2">
        <button className="w-full rounded-md border-2 border-blue-400 bg-white text-blue-400 py-2 px-4 flex items-center gap-2 justify-center">
          <FaGoogle /> Login With Google
        </button>
        <button className="w-full rounded-md border-2 border-black bg-white text-neutral-700 py-2 px-4 flex items-center gap-2 justify-center">
          <FaGithub /> Login With GitHub
        </button>
      </div>

      <div>
        <h2 className="text-neutral-700 text-xl font-semibold pt-7 pb-5">
          Find Us On
        </h2>
        <div>
          <button className="flex gap-2 items-center px-4 py-2 border rounded-t-md w-full">
            <span className="text-indigo-800 bg-zinc-100 p-2 rounded-full">
              <FaFacebookF />
            </span>
            Facebook
          </button>
          <button className="flex gap-2 items-center px-4 py-2 border w-full">
            <span className="text-blue-400 bg-zinc-100 p-2 rounded-full">
              <FaTwitter />
            </span>
            Twitter
          </button>
          <button className="flex gap-2 items-center px-4 py-2 border rounded-b-md w-full">
            <span className="text-[#ee5b2e] bg-zinc-100 p-2 rounded-full">
              <FaInstagram />
            </span>
            Instagram
          </button>
        </div>
        <div className="w-full bg-zinc-100 space-y-7">
          <h2 className="text-neutral-700 text-xl font-semibold"> Q-Zone</h2>
          <div className="w-full bg-white rounded border border-neutral-200">
            <img
              className="w-full max-h-[129px] rounded-[5px]"
              src="https://via.placeholder.com/212x129"
            />
            <h2 className="text-center text-neutral-700 text-base font-semibold py-2">
              Swimming
            </h2>
          </div>
          <div className="w-full bg-white rounded border border-neutral-200">
            <img
              className="w-full max-h-[129px] rounded-[5px]"
              src="https://via.placeholder.com/212x129"
            />
            <h2 className="text-center text-neutral-700 text-base font-semibold py-2">
              Swimming
            </h2>
          </div>
          <div className="w-full bg-white rounded border border-neutral-200">
            <img
              className="w-full max-h-[129px] rounded-[5px]"
              src="https://via.placeholder.com/212x129"
            />
            <h2 className="text-center text-neutral-700 text-base font-semibold py-2">
              Swimming
            </h2>
          </div>
        </div>
        <div className="w-full text-center mt-7 space-y-5 py-16 bg-slate-950 bg-opacity-80">
          <h1 className=" text-center text-white text-3xl font-bold  leading-[45px]">
            Create an Amazing Newspaper
          </h1>
          <p className=" text-center text-white text-base font-normal  leading-relaxed">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="px-4 py-2 bg-rose-600 text-white text-xl font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSite;
