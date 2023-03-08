import React from "react";
import userIcon from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.css";
import axios from "axios";
import Paginator from "../common/Pagination/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {


    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {/*<div className={styles.pagination}>*/}
                {/*    {Array(pagesCount).fill(1).map((el, index) => {*/}
                {/*        return <span className={props.currentPage === index + 1 ? styles.selectedPage : ""}*/}
                {/*                     onClick={(event) => {*/}
                {/*                         props.onPageChanged(index + 1)*/}
                {/*                     }}>{index + 1}</span>*/}
                {/*    })}*/}
                {/*</div>*/}
                {users.map(u => <div key={u.id}>
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
                                    }}>
                                    <p>Unsubscribe</p>
                                    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round"
                                              stroke-linecap="round"></path>
                                    </svg>
                            </button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={styles.followButton}
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}>
                                    <p>Subscribe</p>
                                    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                         className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round"
                                              stroke-linecap="round"></path>
                                    </svg>
                                </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div className={styles.fullName}> {u.name}</div>
                            <div className={styles.description}>{u.status}</div>
                        </span>
                        <span>
                            {/*<div className={styles.location}>{"u.location"}</div>*/}
                        </span>
                    </span>
                </div>)}
            </div>
        </div>
    )
}

export default Users;