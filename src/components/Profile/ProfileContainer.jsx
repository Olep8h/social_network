import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {retrieveStatus, retrieveUserProfile, savePhoto, updateStatus} from "../../redux/profile_reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {profileId} = useParams();
    if (!profileId) {
        profileId = props.authorizedUserId;
    }

    React.useEffect(() => {
        props.retrieveUserProfile(profileId);
        setTimeout(() => {
            props.retrieveStatus(profileId);
        }, 1000);
    }, [profileId]);


    return (
        <Profile {...props} profile={props.profile}
                 isOwner={!useParams().profileId}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 savePhoto={props.savePhoto}

        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
})


export default compose(
    connect(mapStateToProps, {retrieveUserProfile, retrieveStatus, updateStatus, savePhoto}),
    withAuthRedirect)
(ProfileContainer);
