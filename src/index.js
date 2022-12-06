import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import state from "./redux/state";
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}


renderEntireTree(state);

subscribe(renderEntireTree);

