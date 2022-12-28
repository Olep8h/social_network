import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postsElements = props.postsData
        .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () =>  {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h2 className={classes.titleMyPhotos}>My photos</h2>
            <div>
                <div>
                    <textarea className={classes.textarea}
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button className={classes.addPostButton}
                            onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
