import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto relative overflow-x-hidden min-h-screen">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
