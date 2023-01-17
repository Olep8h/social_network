import React from "react";
import userIcon from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.css";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            <div className={styles.pagination}>
                {Array(pagesCount).fill(1).map((el, index) => {
                    return <span className={props.currentPage === index + 1 ? styles.selectedPage : ""}
                                 onClick={(event) => {
                                     props.onPageChanged(index + 1)
                                 }}>{index + 1}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userIcon} className={styles.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={styles.unFollowButton}
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}>Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={styles.followButton}
                                    onClick={() => {
                                        props.follow(u.id);
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

export default Users;