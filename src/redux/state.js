let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
                {id: 2, message: 'It`s my first post;)', likesCount: 15},
                {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
                {id: 4, message: 'I want pineapple pizza', likesCount: 25}
            ],
            newPostText: 'inMoment.com'
        },

        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'So you can?'},
                {id: 3, message: 'Actually no..'},
                {id: 4, message: 'Don`t do this'},
                {id: 5, message: 'Of course!'}
            ],
            dialogsData: [
                {id: 1, name: 'Oleh'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Ann'},
                {id: 4, name: 'Maks'},
                {id: 5, name: 'Lisa'}
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //pattern
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
          //this._addPost()
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            //this._updateNewPostText(action.newText)
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


window.state = store

export default store;