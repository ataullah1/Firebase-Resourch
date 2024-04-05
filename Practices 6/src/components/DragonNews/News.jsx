import { PropTypes } from 'prop-types';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
const News = ({ dta }) => {
  const {
    thumbnail_url,
    details,
    image_url,
    author,
    title,
    total_view,
    rating,
    _id,
  } = dta;
  return (
    <div className="w-full bg-white rounded-[5px] border border-neutral-200 ">
      <div className="w-full py-3 px-6 bg-zinc-100 rounded-tl-[5px] rounded-tr-[5px] border border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={image_url}
          />
          <div>
            <h2 className="text-neutral-700 text-base font-semibold">
              Md Ataullah
            </h2>
            <p className="text-neutral-500 text-sm font-normal">2022-08-21</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-neutral-700 text-xl font-bold leading-[35px]">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </div>
        <img className="w-full mx-auto rounded-[5px]" src={thumbnail_url} />
        <p className="text-neutral-500 text-base font-normal leading-relaxed">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States, Worthy News (Worthy News) – U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military a...
        </p>
        <a href="#" className="text-orange-400 text-base font-semibol">
          Read More
        </a>
      </div>
      <div className="w-full h-[0px] border border-neutral-200"></div>
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-orange-400 flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-neutral-500 text-base font-medium">4.9</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-500 text-base font-medium">
          <span>
            <FaEye />
          </span>
          <span>499</span>
        </div>
      </div>
    </div>
  );
};

export default News;
News.propTypes = {
  dta: PropTypes.object,
};
