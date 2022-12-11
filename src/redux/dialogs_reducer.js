const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;