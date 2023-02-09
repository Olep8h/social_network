import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let massagesElements = state.messagesData
        .map(massage => <Message message={massage.message}/>);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{massagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message.."/>
            </div>
            <div>
                <button className={classes.button_sendMessage}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;


// import React from "react";
// import { Formik, Field, Form } from 'formik';
// import classes from './Dialogs.module.css'
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import {Navigate} from "react-router-dom";
//
// const Dialogs = (props) => {
//     let state = props.dialogsPage;
//
//     let dialogsElements = state.dialogsData
//         .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
//
//     let massagesElements = state.messagesData
//         .map(massage => <Message message={massage.message}/>);
//
//     if (!props.isAuth) return <Navigate to={'/login'}/>
//
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItems}>
//                 {dialogsElements}
//             </div>
//             <div className={classes.messages}>
//                 <div>{massagesElements}</div>
//                 <Formik
//                     initialValues={{ newMessageBody: '' }}
//                     onSubmit={(values, { resetForm }) => {
//                         props.sendMessage(values.newMessageBody);
//                         resetForm();
//                     }}
//                 >
//                     {({ handleSubmit }) => (
//                         <Form onSubmit={handleSubmit}>
//                             <div>
//                                 <Field
//                                     component="textarea"
//                                     name="newMessageBody"
//                                     placeholder="Enter your message.."
//                                 />
//                             </div>
//                             <div>
//                                 <button className={classes.button_sendMessage} type="submit">
//                                     Send
//                                 </button>
//                             </div>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     )
// }
//
// export default Dialogs;