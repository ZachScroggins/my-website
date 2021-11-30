import React from 'react';

const Callout: React.FC = ({ children }) => {
  return (
    <div className='p-4 text-gray-900 border rounded-lg bg-cyan-300 border-cyan-800'>
      {children}
    </div>
  );
};

export default Callout;
