import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassname={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassname={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="news" activeClassname={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="music" activeClassname={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="settings" activeClassname={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;