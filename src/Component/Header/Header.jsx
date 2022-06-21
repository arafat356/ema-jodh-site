import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <h1 className="color-h1">
        {' '}
        welcome to <span className="span">my Photography </span> world{' '}
      </h1>
      <p className="color-h1">
        {' '}
        <span className="span">i love Photography, </span> and here is some
        photos
      </p>
      <h2 className="color-h1">
        Total Number of photos is : <span className="number-30">30</span>
      </h2>
    </div>
  );
};

export default Header;
