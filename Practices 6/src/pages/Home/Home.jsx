import BrekingNews from '../../components/BrekingNews/BrekingNews';
import Header from '../../components/Header.jsx/Header';
import Nav from '../../components/Nav/Nav';
import HomeLayout from '../../layout/HomeLayout/HomeLayout';

const Home = () => {
  return (
    <div>
      <Header />
      <BrekingNews />
      <Nav />
      <HomeLayout />
    </div>
  );
};

export default Home;
