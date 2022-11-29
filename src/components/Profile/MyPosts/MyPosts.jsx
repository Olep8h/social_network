import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h2 className={classes.titleMyPhotos}>My photos</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={classes.addPostButton}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi everyone, how was your day?" likesCount=': 3'/>
                <Post message="It`s my first post!" likesCount=': 6'/>
            </div>
        </div>
    )
}

export default MyPosts;
