import React from 'react';
import "./menu.scss";
import { Link } from 'react-router-dom';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to='/newform'>Create</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to='/login'>Login</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
        </div>
    )
}