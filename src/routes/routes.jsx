import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const App = lazy(() => import('../app/App'));
const Login = lazy(() => import('../pages/login'));
const Error = lazy(() => import('../pages/error'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Counter = lazy(() => import('../pages/counter'));

const routes = createBrowserRouter([
  {
    path: '/',
    exact: true,
    children: [
      {
        path: '',
        exact: true,
        element: <App />,
        children: [
          {
            path: '',
            exact: true,
            element: <Dashboard />,
          },
          {
            path: 'item',
            exact: true,
            element: <div>Item</div>,
          },
          {
            path: 'product',
            exact: true,
            element: <div>Product</div>,
          },
        ],
      },
      {
        path: 'login',
        exact: true,
        element: <Login />,
      },
      {
        path: 'counter',
        exact: true,
        element: <Counter />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
