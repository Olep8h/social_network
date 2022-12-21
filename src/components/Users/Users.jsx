import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items);
        });

    }

    return <div>
        {
            props.users?.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photo} className={styles.photo}/>
                    </div>
                    <div className={styles.button_follow}>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div className={styles.fullName}>{u.FullName}</div>
                        <div className={styles.description}>{u.description}</div>
                    </span>
                    <span>
                        <div className={styles.location}>{u.location}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;