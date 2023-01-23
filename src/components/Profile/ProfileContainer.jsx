import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {retrieveUserProfile} from "../../redux/profile_reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {profileId} = useParams();
    if (!profileId) {
        profileId = 2;
    }

    React.useEffect(() => {
        props.retrieveUserProfile(profileId);
    }, [profileId]);


    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export default compose(
    withAuthRedirect,
    connect
    (mapStateToProps, {retrieveUserProfile}))(ProfileContainer);
