import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         className={({isActive}) => isActive ? "active-class" : "non-active-class"}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={({isActive}) => isActive ? "active-class" : "non-active-class"}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="news"
                         className={({isActive}) => isActive ? "active-class" : "non-active-class"}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="music"
                         className={({isActive}) => isActive ? "active-class" : "non-active-class"}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="settings"
                         className={({isActive}) => isActive ? "active-class" : "non-active-class"}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;