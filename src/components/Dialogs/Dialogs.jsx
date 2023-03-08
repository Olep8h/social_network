import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxlengthCreator, validateRequiredField} from "../../utilities/validators/validators";
import classes from './Dialogs.module.css'


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
                <Field component={Textarea}
                       name="newMessageBody"
                       validate={[validateRequiredField, maxlengthCreator(100)]}
                       placeholder="Enter your message.."/>
            </div>
            <div>


                <button className={classes.button_sendMessage}>
                    <div className={classes.svg_wrapper_1}>
                        <div className={classes.svg_wrapper}>
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>



                {/*<button className={classes.button_sendMessage}>Send</button>*/}
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