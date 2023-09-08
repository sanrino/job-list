import React from 'react';
import { FilterPanel } from './FilterPanel';
import { JobList } from './JobList';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </div>
  )
}

export { Home };