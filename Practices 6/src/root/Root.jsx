import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="w-11/12 xl:w-10/12 mx-auto max-w-[1500px] min-h-[calc(100vh-90px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
