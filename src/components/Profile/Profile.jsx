import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
    <div>
        <div>
            <img src='https://static.trip101.com/paragraph_media/pictures/002/412/765/large/1200px-Cmglee_Cambridge_Trinity_College_Great_Court.jpg?1617627235' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
)
}

export default Profile;
