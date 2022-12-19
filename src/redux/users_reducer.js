const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersData: [
        {id: 1, photo: '', followed: true, FullName: 'Lolita', description: 'ffffffffffffffffff', location: 'London'},
        {id: 2, photo: '', followed: false, FullName: 'Bob', description: 'ffffffffffffffffff', location: 'Prague'},
        {id: 3, photo: '', followed: true, FullName: 'David', description: 'ffffffffffffffffff', location: 'Berlin'},
        {id: 4, photo: '', followed: false, FullName: 'Kate', description: 'ffffffffffffffffff', location: 'Rome'}
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, usersData: [...state.usersData, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;