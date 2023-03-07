import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";
import ProfileDataForm from "./ProfileDataForm";
import userIcon from "../../../assets/images/user-image.png";
import ProfileData from "./ProfileData";
import classes from './ProfileInfo.module.css'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = React.useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }
    // если профиль сохранен, то выходим из режима редактирования


    return (
        <div>
            <div>
                <img
                    src='https://static.trip101.com/paragraph_media/pictures/002/412/765/large/1200px-Cmglee_Cambridge_Trinity_College_Great_Court.jpg?1617627235'/>
            </div>
            <div className={classes.description_block}>
                <img src={profile.photos.large || userIcon } className={classes.photo_large}/>

                <div>
                    <div>
                        {/*{isOwner && <input className={classes.input_choose_new_photo} type={"file"} onChange={onMainPhotoSelected}/>}*/}
                        {isOwner && (
                            <div>
                                <input className={classes.input_choose_new_photo} type="file" id="photoInput" onChange={onMainPhotoSelected}/>
                                <label className={classes.button_choose_new_photo} htmlFor="photoInput">Add Profile Picture</label>
                            </div>
                        )}
                    </div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData activeEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                    <ProfileDescription status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
            </div>
        </div>
    )
}



export default ProfileInfo;
