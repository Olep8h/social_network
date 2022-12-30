import React from "react";
import axios from "axios";
import userIcon from "../../assets/images/user-image.png";
import styles from "./Users.module.css";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + this.props.currentPage)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + pageNumber)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        return (
            <div>
                <div className={styles.pagination}>
                    {Array(pagesCount).fill(1).map((el, index) => {
                        return <span className={this.props.currentPage === index + 1 ? styles.selectedPage : ""}
                                     onClick={(event) => {
                                         this.onPageChanged(index + 1)
                                     }}>{index + 1}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userIcon} className={styles.photo}/>
                        </div>
                        <div >
                            {u.followed
                                ? <button
                                    className={styles.unFollowButton}
                                    onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button
                                    className={styles.followButton}
                                    onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div className={styles.fullName}> {u.name}</div>
                            <div className={styles.description}>{u.status}</div>
                        </span>
                        <span>
                            <div className={styles.location}>{"u.location"}</div>
                        </span>
                    </span>
                </div>)}
            </div>
        )
    }
}

export default Users;