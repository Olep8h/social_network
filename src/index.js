import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App/>
                    </Provider>
            </BrowserRouter>
        </React.StrictMode>

    );
}


renderEntireTree(store.getState());


