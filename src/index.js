import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </BrowserRouter>
        </React.StrictMode>

    );
}


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

