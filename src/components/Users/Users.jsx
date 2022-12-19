import React from "react";

let Users = (props) => {

    return <div>
        {
            props.users?.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.FullName}</div>
                        <div>{u.description}</div>
                    </span>
                    <span>
                        <div>{u.location}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;