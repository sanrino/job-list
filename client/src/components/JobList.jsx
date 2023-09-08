import React from 'react';

import { useAllJobsQuery } from '../hooks/query/useAllJobsQuery';
import { useFiltersContext } from '../hooks/context/useFiltersContext';

import { Loading } from './Loading/Loading';
import { JobPosition } from "./JobPosition";

const JobList = () => {

  const { filtersСurrent, setFiltersСurrent } = useFiltersContext();

  const { isLoading, isFetching, jobs } = useAllJobsQuery(filtersСurrent);

  const handleAddFilter = (postShort) => {
    const postNew = { ...postShort };

    delete postNew.badge;

    const value = postShort.badge;

    for (let key in postNew) {
      if (postNew[key]?.split(",")?.includes(value)) {

        setFiltersСurrent((prev) => ({
          ...prev,
          [key]: Array.from(new Set([...prev[key], value.trim()]))
        }))
      }
    }
  };

  return (
    <div className="job-list">
      {isLoading || isFetching ? <Loading /> :
        jobs?.length && jobs.map((job) => (
          <JobPosition
            key={job.id}
            {...job}
            handleAddFilter={handleAddFilter}
          />
        ))}
    </div>
  );
};

export { JobList };
