import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormControls/FormControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
                <button>Save</button>
            </div>
            {error && <div className={style.form_summary_error}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: {createField ("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>About me</b>:
                {createField ("About me", "aboutMe", [], Textarea )}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField ("Looking for a job", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills</b>:
                {createField ("My professional skills", "lookingForAJobDescription", [], Textarea )}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}




const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;


