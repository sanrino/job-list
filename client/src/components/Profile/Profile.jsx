import React from 'react';
import { AddJob } from '../AddJob/AddJob';
import { JobListProfile } from '../JobListProfile';

import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile mt-12">
      <div className="container">
        <div className="profile-wrapper">
          <AddJob />
          <JobListProfile />
        </div>
      </div>
    </div>
  )
}

export { Profile }