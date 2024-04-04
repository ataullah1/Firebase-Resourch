import BrekingNews from '../../components/BrekingNews/BrekingNews';
import Header from '../../components/Header.jsx/Header';
import Nav from '../../components/Nav/Nav';

const Home = () => {
  return (
    <div>
      <Header />
      <BrekingNews />
      <Nav />
      <h1 className="text-6xl text-center font-bold py-32">This is home ...</h1>
    </div>
  );
};

export default Home;
