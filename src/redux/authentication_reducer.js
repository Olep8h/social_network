import {loginAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
    captchaUrl: null,
};
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsLoading(true));
    loginAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
            dispatch(toggleIsLoading(false));
        });
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    loginAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let action = stopSubmit('login', {_error: response.data.messages[0]});
                dispatch(action);
            }
        });
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authenticationReducer;