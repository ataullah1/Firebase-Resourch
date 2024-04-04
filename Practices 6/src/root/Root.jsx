import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="w-11/12 xl:w-10/12 mx-auto max-w-[1500px]">
      <Outlet />
    </div>
  );
};

export default Root;
