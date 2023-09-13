import React, { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';
import { Loading } from './components/Loading/Loading';
import { useTokenCheckQuery } from './hooks/query/useTokenCheckQuery';
import { routing } from './routing';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { check, isLoading, isFetching } = useTokenCheckQuery();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check();
    }
  }, []);

  if (isLoading && isFetching) {
    return <Loading />;
  }

  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export { App };
