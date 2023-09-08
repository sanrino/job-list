import React from 'react';
import { AddJob } from './AddJob/AddJob';
import { JobListProfile } from './JobListProfile';

const Profile = () => {
  return (
    <div className="profile mt-12">
      <div className="container">
        <AddJob />
        <JobListProfile />
      </div>
    </div>
  )
}

export { Profile }