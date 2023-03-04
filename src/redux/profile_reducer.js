import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
        {id: 2, message: 'It`s my first post;)', likesCount: 15},
        {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
        {id: 4, message: 'I want pineapple pizza', likesCount: 25}
    ],
    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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

export const savePhoto = (file) => (dispatch) => {
    profileAPI.saveProfilePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
}

export const saveProfile = (profile) => async (dispatch, getState) => {

    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile, getState);

    if (response.data.resultCode === 0) {
        dispatch(retrieveUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
        // если возвращать промис, то в компоненте можно будет обработать ошибку
    }
}


export default profileReducer;