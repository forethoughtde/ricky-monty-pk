import React from 'react';
import {Link} from 'react-router-dom';
import HomeComponent from './components/HomeComponent'
import './header.css';

function Header(){
    return (
        <header className="globalHeader">
            <Link to={'/'} className="logo"><img src="https://www.stickpng.com/assets/images/58f37720a4fa116215a9240f.png" alt=""/></Link>
            <HomeComponent/>
        </header>
    );
}

export default Header;
