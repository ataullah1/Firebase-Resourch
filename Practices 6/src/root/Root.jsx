import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="relative w-11/12 xl:w-10/12 mx-auto max-w-[1500px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
