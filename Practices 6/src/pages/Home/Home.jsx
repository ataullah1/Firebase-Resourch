import BrekingNews from '../../components/BrekingNews/BrekingNews';
import Header from '../../components/Header.jsx/Header';
import Nav from '../../components/Nav/Nav';
import HomeLayout from '../../layout/HomeLayout/HomeLayout';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const dta = useLoaderData();
  // console.log(dta);
  return (
    <div>
      <Header />
      <BrekingNews />
      <Nav />
      <HomeLayout dta={dta} />
    </div>
  );
};

export default Home;
