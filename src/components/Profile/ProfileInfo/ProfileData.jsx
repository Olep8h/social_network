import React from "react"
import classes from './ProfileData.module.css'

const ProfileData = ({profile, isOwner, activeEditMode}) => {
    return <div className={classes.profile_form}>
        {isOwner && <div>
            <button onClick={activeEditMode} className={classes.edit_button}>Edit</button>
        </div>}
        <div className={classes.full_name}>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div className={classes.about_me}>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={classes.looking_for_job}>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div className={classes.skills}>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div className={classes.contacts_caption}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileData;