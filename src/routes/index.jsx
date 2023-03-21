import MainLayout from '../layouts/MainLayout/MainLayout';
import { Outlet } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import ContentPage from '../pages/ContentPage';
import AboutPage from '../pages/AboutPage';
import WelcomePage from '../pages/WelcomePage';
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
            path: '',
            element: <WelcomePage />,
          },
          {
            path: 'content',
            element: <ContentPage />,
          },
          {
            path: 'content/:id',
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
