import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
        {id: 2, message: 'It`s my first post;)', likesCount: 15},
        {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
        {id: 4, message: 'I want pineapple pizza', likesCount: 25}
    ],
    newPostText: 'inMoment.com',
    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const onPostChangeActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})

export const retrieveUserProfile = (profileId) => (dispatch) => {
    usersAPI.getProfileInfo(profileId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const retrieveStatus = (profileId) => (dispatch) => {
    profileAPI.getProfileStatus(profileId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;