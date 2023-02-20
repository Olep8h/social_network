import React from "react";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers

} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    GetCurrentPage, GetFollowingInProgress,
    GetIsFetching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsers
} from "../../redux/selectors/users_selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ?
                <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: GetUsers(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isLoading: GetIsFetching(state),
        followingInProgress: GetFollowingInProgress(state)

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(isLoadingAC(isLoading))
//         }
//     }
// }


// let withRedirect = withAuthRedirect(UsersContainer);

export default compose(
    withAuthRedirect,
    connect
    (mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))(UsersContainer);

