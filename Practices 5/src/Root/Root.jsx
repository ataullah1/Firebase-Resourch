import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
