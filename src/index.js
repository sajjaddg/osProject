import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProductsProvider } from './contexts/products/products';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
);

