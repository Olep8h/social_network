const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
};
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
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

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});


export default authenticationReducer;