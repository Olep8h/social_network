import React from "react";

const ProfileDescription = (props) => {
    const [editMode, setEditMode] = React.useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={props.status}/>
                </div>
            }
        </div>
    )
}

export default ProfileDescription;