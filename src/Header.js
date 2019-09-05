import React from 'react';
import './index.scss';


function Header() {
  return (
    <header className = 'header' id= 'header'>
        <div className = 'call2action'>
        <h1>Get a Job in Under a Week</h1>
        <button className="btn"><span>See Our Latest Jobs</span></button>

        </div>
    </header>
  );
}

export default Header;