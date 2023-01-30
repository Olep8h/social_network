import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";
import authenticationReducer from "./authentication_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: users_reducer,
    auth: authenticationReducer,
    form: formReducer,
});



let srote = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = srote;

export default srote;