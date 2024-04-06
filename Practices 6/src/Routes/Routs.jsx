import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../root/Root';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/public/data/news.json'),
      },
      {
        path: '/news-details/:id',
        element: (
          <PrivetRoute>
            <NewsDetails />
          </PrivetRoute>
        ),
        loader: () => fetch('/public/data/news.json'),
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
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
