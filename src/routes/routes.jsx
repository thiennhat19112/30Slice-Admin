import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import ProtectedRoute from './protectedRoute';
const ProtectedRoute = lazy(() => import('./protectedRoute'));
import PrivateRoute from './privateRoute';

import App from '../App';
const Login = lazy(() => import('../pages/login'));
const Error = lazy(() => import('../pages/error'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Profile = lazy(() => import('../pages/profile'));
const ForgetPassword = lazy(() => import('../pages/forget-password'));
const ResetPassword = lazy(() => import('../pages/reset-password'));
const Category = lazy(() => import('../pages/category'));
const Product = lazy(() => import('../pages/product'));
const News = lazy(() => import('../pages/news'));
const EditCategory = lazy(() => import('../pages/category/edit'));
const Employee = lazy(() => import('../pages/employee'));
const StyleList = lazy(() => import('../pages/stylelist'));
const Combo = lazy(() => import('../pages/combo'));
const TestCk = lazy(() => import('../pages/ckeditortest'));

const routes = createBrowserRouter([
  {
    path: '/',
    exact: true,
    children: [
      {
        path: '',
        exact: true,
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),
        children: [
          {
            path: '',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: 'products',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Product />
              </Suspense>
            ),
          },
          {
            path: 'profile',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: 'category',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Category />
              </Suspense>
            ),
          },
          {
            path: 'combo',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Combo />
              </Suspense>
            ),
          },
          {
            path: 'category/:id',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <EditCategory />
              </Suspense>
            ),
          },
          {
            path: 'news',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <News />
              </Suspense>
            ),
          },
          {
            path: 'employee',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Employee />
              </Suspense>
            ),
          },
          {
            path: 'stylelist',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <StyleList />
              </Suspense>
            ),
          },
          {
            path: 'test',
            exact: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TestCk />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'login',
        exact: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'forget-password',
        exact: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProtectedRoute>
              <ForgetPassword />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'reset-password',
        exact: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <Error />,
      </Suspense>
    ),
  },
]);

export default routes;
