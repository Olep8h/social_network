import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";
import authenticationReducer from "./authentication_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: users_reducer,
    authentication: authenticationReducer,
});

let srote = createStore(reducers);
window.store = srote;

export default srote;