import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     style={{textDecoration: 'none'}}
                     className={({isActive}) => isActive ? classes['active-class'] : classes['non-active-class']}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;