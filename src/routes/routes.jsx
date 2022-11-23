import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ProtectedRoute = lazy(() => import('./protectedRoute'));
const PrivateRoute = lazy(() => import('./privateRoute'));

const App = lazy(() => import('../App'));
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

const routes = createBrowserRouter([
  {
    path: '/',
    exact: true,
    children: [
      {
        path: '',
        exact: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <PrivateRoute>
              <App />
            </PrivateRoute>
          </Suspense>
        ),
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
            path: 'products',
            exact: true,
            element: <Product />,
          },
          {
            path: 'profile',
            exact: true,
            element: <Profile />,
          },
          {
            path: 'category',
            exact: true,
            element: <Category />,
          },
          {
            path: 'category/:id',
            exact: true,
            element: <EditCategory />,
          },
          {
            path: 'news',
            exact: true,
            element: <News />,
          },
          {
            path: 'employee',
            exact: true,
            element: <Employee />,
          },
          {
            path: 'stylelist',
            exact: true,
            element: <StyleList />,
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
