import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Oleh'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Ann'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Lisa'}
    ];

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'So you can?'},
        {id: 3, message: 'Actually no..'},
        {id: 4, message: 'Don`t do this'},
        {id: 5, message: 'Of course!'}
    ]

    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let massagesElements = messagesData
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