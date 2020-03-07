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

export type DialogItemType= {
    id: number;
    name: string;
}

let dialogsData: Array<DialogItemType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Zlata"},
    {id: 4, name: "Nastya"},
    {id: 5, name: "Fedor"}
];

export type MessageType= {
    id?: number;
    text: string;
}

let messagesData: Array<MessageType> = [
    {id: 1, text: "hi"},
    {id: 2, text: "hello"},
    {id: 3, text: "you"},
    {id: 4, text: "skidishhh"},
    {id: 5, text: "ssss"},
];
export type prop={
    posts:typeof postsArray,
    messagesData:typeof messagesData,
    dialogsData:typeof dialogsData
}

export type dialogspropsType={
    dialogs:typeof  dialogsData,
    messages:typeof messagesData
}



ReactDOM.render(
    <BrowserRouter>
        <App posts={postsArray} messagesData={messagesData} dialogsData={dialogsData}/>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
