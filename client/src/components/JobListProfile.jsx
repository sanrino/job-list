import React from 'react';

import { Loading } from './Loading/Loading';
import { JobPosition } from "./JobPosition";
import { useJobsUserQuery } from '../hooks/query/useJobsUserQuery';
import { useUserContext } from '../hooks/context/useUserContext';
import { InfoPanel } from './InfoPanel/InfoPanel';

const JobListProfile = () => {

  const { user } = useUserContext();
  const { id } = user;

  const { isLoading, isFetching, jobs } = useJobsUserQuery(id);

  if (!jobs?.length) {
    return <InfoPanel infoText="Your jobs were not found or you have not created them yet!" />
  }

  return (
    <div className="job-list">

      {isLoading || isFetching ? <Loading /> :

        jobs?.length && jobs.map((job) => (
          <JobPosition
            key={job.id}
            {...job}
          />
        ))
      }
    </div>
  );
};

export { JobListProfile };
