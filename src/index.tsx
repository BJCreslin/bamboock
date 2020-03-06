import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

export interface myPostsInterface {
    id: number,
    message: string,
    likesCount: number
}

export interface postspropsInterface{
    posts:Array<myPostsInterface>
}

const postsArray: Array<myPostsInterface>  = [
    {id: 1, message: "Hello World", likesCount: 12},
    {id: 2, message: "chuma", likesCount: 23},
    {id: 3, message: "you", likesCount: 19},
    {id: 4, message: "fantastic", likesCount: 34}
];


ReactDOM.render(
    <BrowserRouter>
        <App posts={postsArray}/>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
