import React from "react";


export type myPostType = {
    id: number,
    message: string,
    likesCount: number
}

const postsArrayData: Array<myPostType> = [
    {id: 1, message: "Hello World", likesCount: 12},
    {id: 2, message: "chuma", likesCount: 23},
    {id: 3, message: "you", likesCount: 19},
    {id: 4, message: "fantastic", likesCount: 34}
];

export type postsType = {
    posts:Array<myPostType>
};

export type DialogItemType = {
    id: number;
    name: string;
}

let dialogsArrayData: Array<DialogItemType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Zlata"},
    {id: 4, name: "Nastya"},
    {id: 5, name: "Fedor"}
];

export type MessageType = {
    id?: number;
    text: string;
}

let messagesArrayData: Array<MessageType> = [
    {id: 1, text: "hi"},
    {id: 2, text: "hello"},
    {id: 3, text: "you"},
    {id: 4, text: "skidishhh"},
    {id: 5, text: "ssss"},
];
export type stateType = {
    posts: typeof postsArrayData,
    messages: typeof messagesArrayData,
    dialogs: typeof dialogsArrayData
}

export type dialogspropsType = {
    dialogs: typeof dialogsArrayData,
    messages: typeof messagesArrayData
}

let state: stateType = {
    posts: postsArrayData,
    dialogs: dialogsArrayData,
    messages: messagesArrayData
};

export default state;
