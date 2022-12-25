import React from "react";
import axios from "axios";
import userIcon from "../../assets/images/user-image.png";
import styles from "./Users.module.css";

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items);
            });

        }
    }



    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users?.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photos.small != null ? u.photos.small : userIcon } className={styles.photo}/>
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
                        <div className={styles.fullName}>{u.name}</div>
                        <div className={styles.description}>{u.status}</div>
                    </span>
                    <span>
                        <div className={styles.location}>{"u.location"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;