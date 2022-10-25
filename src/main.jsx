import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './app/store';

import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

// import './assets/css/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
