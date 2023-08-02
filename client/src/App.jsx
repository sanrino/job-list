import React from 'react';

import FiltersProvider from './providers/FiltersProvider';

import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';

function App() {
  return (
    <>
      <div className="container">
        <FiltersProvider>
          <FilterPanel />
          <JobList />
        </FiltersProvider>
      </div>
    </>
  )
}

export { App };
