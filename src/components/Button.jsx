import React from 'react';

const Button = ({ children, style }) => {
  return (
    <button className='font-bold border rounded-l-full' style={style}>
      {children}
    </button>
  );
};

export default Button;