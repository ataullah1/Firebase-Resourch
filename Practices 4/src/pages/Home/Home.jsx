import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
  const authInf = useContext(AuthContext);
  console.log(authInf);
  return (
    <div>
      <h1 className="text-5xl"> Home Page</h1>
    </div>
  );
};

export default Home;
