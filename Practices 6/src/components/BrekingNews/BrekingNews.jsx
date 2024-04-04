import Marquee from 'react-fast-marquee';
const BrekingNews = () => {
  return (
    <div className="w-full bg-zinc-100 flex items-center gap-5 p-2 sm:p-4 mt-3 sm:mt-7 mb-3 sm:mb-5">
      <button className="px-3 sm:px-6 py-1 sm:py-2 bg-rose-600 text-white text-base sm:text-xl font-medium leading-[30px]">
        Letest
      </button>
      <div className="text-neutral-700 text-base sm:text-lg font-semibold leading-[30px]">
        <Marquee pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default BrekingNews;
