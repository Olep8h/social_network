import React from "react";
import classes from "./Message.module.css";


let newMessageElement = React.createRef();

let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);

}

const Message = (props) => {
    return (
        <div
            className={classes.message}>{props.message}
            <div>
                <textarea className={classes.textMessage} ref={newMessageElement}></textarea>
            </div>
            <div>
                <button className={classes.addMessageButton} onClick={addMessage}>Reply to message...
                </button>
            </div>
        </div>
    )

}

export default Message;