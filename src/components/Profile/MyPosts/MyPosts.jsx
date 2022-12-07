import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";




const MyPosts = (props) => {
    let postsElements = props.postsData
        .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>  {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h2 className={classes.titleMyPhotos}>My photos</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className={classes.addPostButton} onClick={addPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
