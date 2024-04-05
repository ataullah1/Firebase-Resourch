import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../root/Root';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
