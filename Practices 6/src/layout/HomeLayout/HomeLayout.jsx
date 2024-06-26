import { PropTypes } from 'prop-types';
import AllCaterogy from '../../components/AllCaterogy/AllCaterogy';
import DragonNews from '../../components/DragonNews/DragonNews';
import RightSite from '../../components/RightSite/RightSite';

const HomeLayout = ({ dta }) => {
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="col-span-1 w-full">
        <AllCaterogy />
      </div>
      <div className="grid-cols-1 md:col-span-2 lg:col-span-2 w-full ">
        <DragonNews dta={dta} />
      </div>
      <div className="col-span-1 w-full ">
        <RightSite />
      </div>
    </div>
  );
};

export default HomeLayout;
HomeLayout.propTypes = {
  dta: PropTypes.array,
};
