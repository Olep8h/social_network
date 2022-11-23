import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassname={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassname={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="news" activeClassname={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="music" activeClassname={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="settings" activeClassname={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;