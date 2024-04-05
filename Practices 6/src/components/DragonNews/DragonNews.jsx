import { PropTypes } from 'prop-types';
import News from './News';
const DragonNews = ({ dta }) => {
  return (
    <div className="">
      <h1 className="text-neutral-700 text-xl font-semibold pb-5">
        Dragon News Home
      </h1>
      <div className="flex flex-col gap-7">
        {dta.map((dta, i) => (
          <News key={i} dta={dta} />
        ))}
      </div>
    </div>
  );
};

export default DragonNews;
DragonNews.propTypes = {
  dta: PropTypes.array,
};
