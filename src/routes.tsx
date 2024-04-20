/* eslint-disable react-refresh/only-export-components */
// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import React from 'react';

// * Components
import App from './App';
import Loading from './components/Loading/Loading';

// * Pages
const Banner = lazy(() => import('./pages/Banner/Banner'));
// const Product = lazy(() => import('./pages/Product/Product'));
// const Customers = lazy(() => import('./pages/Customers/Customers'));
// const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
// const Resources = lazy(() => import('./pages/Resources/Resources'));
const Error = lazy(() => import('./pages/Error/Error'));
// const List = lazy(() => import('./pages/List/List'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

// * Element
const Element: React.FC<{ component: JSX.Element }> = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Banner />} />,
      },
      // {
      //   path: '/product',
      //   element: <Element component={<Product />} />,
      // },
      // {
      //   path: '/customers',
      //   element: <Element component={<Customers />} />,
      // },
      // {
      //   path: '/pricing',
      //   element: <Element component={<Pricing />} />,
      // },
      // {
      //   path: '/resources',
      //   element: <Element component={<Resources />} />,
      // },
      {
        path: '/registration',
        element: <Element component={<Registration />} />,
      },
      // {
      //   path: '/list',
      //   element: <Element component={<List />} />,
      // },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default routes;
