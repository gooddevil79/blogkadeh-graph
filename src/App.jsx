import { useState } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import HomePage from './component/pages/HomePage';
import Layout from './component/layout';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import BlogPage from './component/pages/BlogPage';
import Authorpage from './component/pages/Authorpage';
import RootLayout from './component/layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/authors/:slug" element={<Authorpage />} />
      <Route path="/blogs/:slug" element={<BlogPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
