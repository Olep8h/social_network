import React from "react";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import Users from "./Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;