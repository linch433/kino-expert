import { Outlet } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthPage from '../pages/AuthPage';
import ContentPage from '../pages/ContentPage';
import AboutPage from '../pages/AboutPage';
import FilmPage from '../pages/FilmPage';
import AdminPanelPage from '../pages/AdminPanelPage';
import FavouritesPage from '../pages/FavouritesPage';

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: '',
        element: <ContentPage />,
      },
      {
        path: '/:id',
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
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'adminPanel',
        element: <AdminPanelPage />,
      },
    ],
  },
];

export default routes;
