import React from 'react';

const Callout: React.FC = ({ children }) => {
  return (
    <div className='p-4 text-white border rounded-lg bg-gradient-to-r from-pink-800 to-purple-900'>
      {children}
    </div>
  );
};

export default Callout;
