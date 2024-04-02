// import { useContext } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';

import { useEffect, useRef } from 'react';

const Home = () => {
  // const authInf = useContext(AuthContext);
  // console.log(authInf);
  const inpRef = useRef();
  useEffect(() => {
    inpRef.current.focus();
  }, []);
  return (
    <div className="h-[calc(100vh-92px)] flex items-center justify-center">
      <input
        ref={inpRef}
        className="border-2 p-3 min-w-[500px] rounded-sm focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Enter Your Name"
      />
    </div>
  );
};

export default Home;
