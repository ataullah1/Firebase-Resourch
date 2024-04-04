import AllCaterogy from '../../components/AllCaterogy/AllCaterogy';
import DragonNews from '../../components/DragonNews/DragonNews';
import RightSite from '../../components/RightSite/RightSite';

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1 w-full">
        <AllCaterogy />
      </div>
      <div className="col-span-2 w-full ">
        <DragonNews />
      </div>
      <div className="col-span-4 lg:col-span-1 w-full ">
        <RightSite />
      </div>
    </div>
  );
};

export default HomeLayout;
