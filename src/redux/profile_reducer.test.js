import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile_reducer";



    it ('length of posts should be incremented', () => {
        // 1. test data
        let action = addPostActionCreator('in-moment.com');
        let state = {
            postsData: [
                {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
                {id: 2, message: 'It`s my first post;)', likesCount: 15},
                {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
                {id: 4, message: 'I want pineapple pizza', likesCount: 25}
            ]};
        // 2. action
        let newState = profileReducer(state, action);
        // 3. expectation
        expect(newState.postsData.length).toBe(5);
    });
