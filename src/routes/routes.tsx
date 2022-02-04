import React from 'react';
import CostumLoadable from '../components/Loaders/CostumLoadable';

type Route = {
  caseSensitive?: boolean;
  children?: Route[];
  element?: React.ReactNode;
  path?: string;
};

const HomePageLoader = () => import('../pages/Home') 

const routes: Route[] = [
  {
    path: "/",
    element: <CostumLoadable loader={HomePageLoader}/>
  }
];

export default routes;
