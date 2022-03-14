import React, {useEffect, useState} from 'react';
import "./menu.scss";
import { Link } from 'react-router-dom';
import Auth from '../../utils/Auth';


export default function Menu({ menuOpen, setMenuOpen }) {


const [logged, setInfo] = useState('true')
const [logout, setLogout] = useState('hidden');
const checkLoggedIn = () => {
    if(Auth.loggedIn()) {
        setInfo('hidden');
        setLogout('true');
    }

};

useEffect(() => {
    checkLoggedIn()
})

    return (
        <div className={"navMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to='/'>Work Orders</Link>
                </li>
                <li className={logout} onClick={() => setMenuOpen(false)}>
                    <Link to='/newform'>New Order</Link>
                </li>
                <li className={ logged } onClick={() => setMenuOpen(false)}>
                    <Link to='/login'>Login</Link>
                </li>
                <li className={logout} onClick={() => setMenuOpen(false)}>
                    <Link to='/signup'>Create Account</Link>
                </li>
                <li className={logout} onClick={() => { 
                    setMenuOpen(false);
                    Auth.logout();
                    console.log('logged out.')
                }}>
                    <a href='/'>Logout</a>
                </li>
            </ul>
        </div>
    )
}