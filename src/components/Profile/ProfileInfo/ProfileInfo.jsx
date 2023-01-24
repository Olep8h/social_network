import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://static.trip101.com/paragraph_media/pictures/002/412/765/large/1200px-Cmglee_Cambridge_Trinity_College_Great_Court.jpg?1617627235'/>
            </div>
            <div className={classes.description_block}>
                <img src={props.profile.photos.large} className={classes.photo_large}/>
                <div>
                    <ProfileDescription status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
