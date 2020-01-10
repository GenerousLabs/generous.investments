import React from 'react';
import { useSelector } from 'react-redux';

const DearName = () => {
  const name = useSelector(({ name }) => name);
  return (
    <div>
      <p>Dear {name}</p>
    </div>
  );
};

export default DearName;
