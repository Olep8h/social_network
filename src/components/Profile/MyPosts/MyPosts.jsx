import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
        {id: 2, message: 'It`s my first post;)', likesCount: 15},
        {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
        {id: 4, message: 'I want to try pineapple pizza', likesCount: 25}
    ]

    let postsElements = postsData
        .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

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
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
