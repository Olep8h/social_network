import React from "react";
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Oleh
                </div>
                <div className={classes.dialog + ' ' + classes.act}>
                    Alex
                </div>
                <div className={classes.dialog}>
                    Ann
                </div>
                <div className={classes.dialog}>
                    Maks
                </div>
                <div className={classes.dialog}>
                    Lisa
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