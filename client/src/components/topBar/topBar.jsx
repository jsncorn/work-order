import React from 'react';
import './topBar.scss';
import { Link } from 'react-router-dom';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
          <div className="left">
            <Link to="/" href="#home" className='logo'>SHOP NAME</Link>
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
