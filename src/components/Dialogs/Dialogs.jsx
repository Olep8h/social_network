import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Oleh" id="1" />
                <DialogItem name="Alex" id="2" />
                <DialogItem name="Ann" id="3" />
                <DialogItem name="Maks" id="4" />
                <DialogItem name="Lisa" id="5" />
            </div>
                <div className={classes.messages}>
                    <Message message="Hello"/>
                    <Message message="So you can?"/>
                    <Message message="Actually no.."/>
                    <Message message="Yep i do this"/>
                    <Message message="Of course!"/>
            </div>
        </div>
    )
}

export default Dialogs;