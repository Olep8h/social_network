import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let postsData = [
    {id: 1, message: 'Hi everyone, how was your day?', likesCount: 23},
    {id: 2, message: 'It`s my first post;)', likesCount: 15},
    {id: 3, message: 'I want to create my own social network!!', likesCount: 22},
    {id: 4, message: 'I want to try pineapple pizza', likesCount: 25}
]

let dialogsData = [
    {id: 1, name: 'Oleh'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Ann'},
    {id: 4, name: 'Maks'},
    {id: 5, name: 'Lisa'}
];

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'So you can?'},
    {id: 3, message: 'Actually no..'},
    {id: 4, message: 'Don`t do this'},
    {id: 5, message: 'Of course!'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
      </BrowserRouter>
  </React.StrictMode>
);


