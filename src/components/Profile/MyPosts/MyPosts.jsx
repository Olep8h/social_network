import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
    My photos
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
               <Post message="Hi everyone, how was your day?" likesCount=': 3' />
                <Post message="It`s my first post!" likesCount=': 6' />
        </div>
    </div>
}

export default MyPosts;
