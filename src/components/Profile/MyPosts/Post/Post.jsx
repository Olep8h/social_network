import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'/>
            { props.message }
            <div>
            <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;
