import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {retrieveStatus, retrieveUserProfile, updateStatus} from "../../redux/profile_reducer";
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
        } , 1000);
    }, [profileId]);


    return (
        <Profile {...props} profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}

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
    connect(mapStateToProps, {retrieveUserProfile, retrieveStatus, updateStatus}),
    withAuthRedirect)
    (ProfileContainer);
