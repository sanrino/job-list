import React, { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';
import { Loading } from './components/Loading/Loading';
import { useTokenCheckQuery } from './hooks/query/useTokenCheckQuery';
import { routing } from './routing';

const App = () => {
  const { check, isLoading, isFetching } = useTokenCheckQuery();

  useEffect(() => {
    check();
  }, []);

  if (isLoading && isFetching) {
    <Loading />
  }

  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export { App };
