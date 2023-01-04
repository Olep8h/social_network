import React from "react";
import {
    followAC,
    isLoadingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/preloader.gif";
import styles from "./Users.module.css";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + this.props.currentPage)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + pageNumber)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isLoading ? <img src={preloader} className={styles.preloader}/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsLoading: (isLoading) => {
            dispatch(isLoadingAC(isLoading))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

