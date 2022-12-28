import React from "react";
import axios from "axios";
import userIcon from "../../assets/images/user-image.png";
import styles from "./Users.module.css";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
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