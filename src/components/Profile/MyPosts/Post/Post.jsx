import React from "react";
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'/>
            post 1
            <div>
            <span>like</span>
            </div>
        </div>
    )
}

export default Post;
