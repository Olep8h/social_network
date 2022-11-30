import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements = props.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let massagesElements = props.messagesData
        .map( massage => <Message message={massage.message} /> )


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
                <div className={classes.messages}>
                    { massagesElements }
            </div>
        </div>
    )
}

export default Dialogs;