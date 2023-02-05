const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Oleh'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Ann'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Lisa'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'So you can?'},
        {id: 3, message: 'Actually no..'},
        {id: 4, message: 'Don`t do this'},
        {id: 5, message: 'Of course!'}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;