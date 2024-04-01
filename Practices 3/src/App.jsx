import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Navber/Nav';

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
