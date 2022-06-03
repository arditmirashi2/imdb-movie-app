import React from 'react';
import CostumLoadable from '../components/Loaders/CostumLoadable';

type Route = {
  caseSensitive?: boolean;
  children?: Route[];
  element?: React.ReactNode;
  path?: string;
};

const HomePageLoader = () => import('../components/Home');
const MoviePageLoader = () => import('../components/Movie');

const routes: Route[] = [
  {
    path: '/',
    element: <CostumLoadable loader={HomePageLoader} />,
  },
  {
    path: 'movie/:movieId',
    element: <CostumLoadable loader={MoviePageLoader} />,
  },
];

export default routes;
