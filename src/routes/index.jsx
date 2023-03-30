import MainLayout from '../layouts/MainLayout/MainLayout';
import { Outlet } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import ContentPage from '../pages/ContentPage';
import AboutPage from '../pages/AboutPage';
import FilmPage from '../pages/FilmPage';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: 'films',
            element: <ContentPage />,
          },
          {
            path: 'films/:id',
            element: <FilmPage />,
          },
          {
            path: 'about',
            element: <AboutPage />,
          },
          {
            path: 'auth',
            element: <AuthPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
