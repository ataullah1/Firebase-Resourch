import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
  const authInf = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-5xl"> Home Page: {authInf.name}</h1>
    </div>
  );
};

export default Home;
