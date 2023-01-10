import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {useParams} from "react-router-dom";

function ProfileContainer(props) {
    let {profileId} = useParams();
    if (!profileId) {
        profileId = 2;
    }

    React.useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [profileId]);

    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
