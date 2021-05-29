import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header_style/header_style.scss';
import { auth } from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ? (<div className="option" onClick={() => (auth.signOut())}>SIGNOUT</div>) 
                : 
                (<Link to="/signin" className="option">SIGNIN</Link>)
            }
        </div>
    </div>
)

export default Header;