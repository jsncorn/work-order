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

const handleOnClick = () => {
    setMenuOpen(false);
    window.location.reload();
}

    return (
        <div className={"navMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={handleOnClick}>
                    <Link to='/'>Work Orders</Link>
                </li>
                <li className={logout} onClick={handleOnClick}>
                    <Link to='/newform'>New Order</Link>
                </li>
                <li className={ logged } onClick={handleOnClick}>
                    <Link to='/login'>Login</Link>
                </li>
                <li className={logout} onClick={handleOnClick}>
                    <Link to='/signup'>Create Account</Link>
                </li>
                <li className={logout} onClick={() => { 
                    setMenuOpen(false);
                    window.location.reload();
                    Auth.logout();
                }}>
                    <a href='/'>Logout</a>
                </li>
            </ul>
        </div>
    )
}