import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormControls/FormControls.module.css";
// import classes from "./ProfileDataForm.module.css";

const classes ={}


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
                <button className={classes.save_button}>Save</button>
            </div>
            {error && <div className={style.form_summary_error}>
                {error}
            </div>}
            <div className={classes.full_name}>
                <b>Full name</b>: {createField ("Full name", "fullName", [], Input)}
            </div>
            <div className={classes.about_me}>
                <b>About me</b>:
                {createField ("About me", "aboutMe", [], Textarea )}
            </div>
            <div className={classes.looking_for_job}>
                <b>Looking for a job</b>:
                {createField ("Looking for a job", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div className={classes.skills}>
                <b>My professional skills</b>:
                {createField ("My professional skills", "lookingForAJobDescription", [], Textarea )}
            </div>

            <div className={classes.contacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={classes.contacts}
                    key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}




const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;


