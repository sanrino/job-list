import React from 'react';

const Stack = ({ children, pos }) => (
  <div
    className='flex flex-wrap gap-2'
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
    {children}
  </div>
);

export { Stack };