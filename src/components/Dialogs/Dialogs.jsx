import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                   <NavLink to="/dialogs/1">Oleh</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.act}>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Ann</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Maks</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Lisa</NavLink>
                </div>
            </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hello</div>
                    <div className={classes.message}>So you can?</div>
                    <div className={classes.message}>Actually no..</div>
                    <div className={classes.message}>Yep i do this</div>
                    <div className={classes.message}>Of course! </div>
            </div>
        </div>
    )
}

export default Dialogs;