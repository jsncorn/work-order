import React from 'react';
import './topBar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>jason ngo</a>
          </div>
          <div className="right">
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className='lineOne'></span>
              <span className='lineTwo'></span>
              <span className='lineThree'></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
