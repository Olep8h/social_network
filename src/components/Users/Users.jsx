import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {

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