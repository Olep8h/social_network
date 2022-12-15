const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postsData: [
            {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
            {id: 2, message: 'It`s my first post;)', likesCount: 15},
            {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
            {id: 4, message: 'I want pineapple pizza', likesCount: 25}
        ],
            newPostText: 'inMoment.com'
    };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;