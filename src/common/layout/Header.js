import React from 'react';
import './Header.css';

const AppHeader = () => {
  return (
    <header className="header">
      {/* <div className='logo'> </div> */}
      <h1 className="header-name">AutoRFP</h1>
      <button className='login-button'>Login</button>
    </header>
  );
};

export default AppHeader;
