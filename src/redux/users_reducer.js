const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersData: [
        // {id: 1, photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        //     followed: true, FullName: 'Lolita', description: 'I like nature and not too busy places, even though I live in London lol;). I usually travel to small towns in Ireland, I feel peaceful there. I also paint pictures and sometimes read books.',
        //     location: 'London'},
        // {id: 2, photo: 'https://images.unsplash.com/photo-1564568979181-0b86b0f1f2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        //     followed: false, FullName: 'Bob', description: 'I\'m already graduating from CVUT in Prague, and I intend to move from the Czech Republic to America soon. I would love to meet someone from there in absentia. I like dogs and walking in the woods. I work as an architect.',
        //     location: 'Prague'},
        // {id: 3, photo: 'https://images.unsplash.com/photo-1576800774081-68c65e87becc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80',
        //     followed: true, FullName: 'David', description: 'Hi all. I hope to find new acquaintances in Berlin, I recently moved here from Croatia. I love to write poetry. Some of my books have already been published, but my main job is as an actor in theater. I want to find creative people like me.',
        //     location: 'Berlin'},
        // {id: 4, photo: 'https://images.unsplash.com/photo-1553782376-b2e8256ab838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        //     followed: false, FullName: 'Kate', description: 'I work as a model and often go to Milan. I like to travel in general, so I\'m glad my job can give me that. I like to drink strong coffee and cannot tolerate alcohol. I also enjoy Dan Brown novels.',
        //     location: 'Rome'}
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
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