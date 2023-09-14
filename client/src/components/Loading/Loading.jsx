import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center">
      {/* <span className="loading loading-spinner loading-lg text-primary"></span> */}
      <span className="loading loading-dots loading-lg text-primary"></span>
    </div>
  );
};

export { Loading };