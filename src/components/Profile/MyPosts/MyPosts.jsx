import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator, validateRequiredField} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       placeholder={"Enter your post.."}
                       validate={[validateRequiredField, maxlengthCreator(30)]}
                       component={Textarea}/>
            </div>
            <div>

                <button className={classes.bt_send}>
                    <span className={classes.msg}></span>
                    SEND
                </button>

                {/*<button  className={classes.addPostButton}>Add Post</button>*/}
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo ((props) => {

    let postsElements = props.postsData
        .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h2 className={classes.titleMyPhotos}>My photos</h2>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;

// import React from "react";
// import classes from './MyPosts.module.css';
// import Post from "./Post/Post";
// import { Formik, Field, Form } from "formik";
//
// const MyPosts = (props) => {
//     let postsElements = props.postsData
//         .map((post) => <Post message={post.message} likesCount={post.likesCount} />);
//
//     return (
//         <div className={classes.postsBlock}>
//             <h2 className={classes.titleMyPhotos}>My photos</h2>
//             <Formik
//                 initialValues={{ newPostText: '' }}
//                 onSubmit={values => {
//                     props.addPost(values.newPostText);
//                 }}
//             >
//                 {({ handleSubmit }) => (
//                     <Form onSubmit={handleSubmit}>
//                         <div>
//                             <Field name="newPostText" component="textarea" />
//                         </div>
//                         <div>
//                             <button className={classes.addPostButton} type="submit">
//                                 Add Post
//                             </button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//             <div className={classes.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     );
// };
//
// export default MyPosts;
