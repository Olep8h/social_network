import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/profile_reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

    export default MyPostsContainer;