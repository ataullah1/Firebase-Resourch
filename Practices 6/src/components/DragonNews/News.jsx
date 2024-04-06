import { PropTypes } from 'prop-types';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const News = ({ dta }) => {
  const { _id, image_url, details, author, title, total_view, rating } = dta;

  const detailsOfNews = details.slice(0, 200);
  // console.log(de tailsOfNews);
  return (
    <div className="w-full bg-white rounded-[5px] border border-neutral-200 ">
      <div className="w-full py-3 px-6 bg-zinc-100 rounded-tl-[5px] rounded-tr-[5px] border border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={author.img}
          />
          <div>
            <h2 className="text-neutral-700 text-base font-semibold">
              {author.name}
            </h2>
            <p className="text-neutral-500 text-sm font-normal">
              {author.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-neutral-700 text-xl font-bold leading-[35px]">
          {title}
        </div>
        <img className="w-full mx-auto rounded-[5px]" src={image_url} />
        <p className="text-neutral-500 text-base font-normal leading-relaxed">
          {detailsOfNews}...{' '}
          <Link
            to={`/news-details/${_id}`}
            className="text-orange-400 text-base font-semibol"
          >
            Read More
          </Link>
        </p>
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
          <span className="text-neutral-500 text-base font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-neutral-500 text-base font-medium">
          <span>
            <FaEye />
          </span>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
News.propTypes = {
  dta: PropTypes.object,
};
