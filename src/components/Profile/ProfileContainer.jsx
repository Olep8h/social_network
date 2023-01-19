import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {retrieveUserProfile, setUserProfile} from "../../redux/profile_reducer";
import {useParams} from "react-router-dom";


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
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {retrieveUserProfile})(ProfileContainer);
