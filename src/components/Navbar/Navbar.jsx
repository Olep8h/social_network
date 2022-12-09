import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile"
                         style={{textDecoration: 'none'}}
                         className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs"
                         style={{textDecoration: 'none'}}
                         className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="news"
                         style={{textDecoration: 'none'}}
                         className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>News</NavLink>
            </div>
            <div>
                <NavLink to="music"
                         style={{textDecoration: 'none'}}
                         className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>Music</NavLink>
            </div>
            <div>
                <NavLink to="settings"
                         style={{textDecoration: 'none'}}
                         className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;