import React from "react";


export type myPostType= {
    id: number,
    message: string,
    likesCount: number
}

const postsArrayData: Array<myPostType>  = [
    {id: 1, message: "Hello World", likesCount: 12},
    {id: 2, message: "chuma", likesCount: 23},
    {id: 3, message: "you", likesCount: 19},
    {id: 4, message: "fantastic", likesCount: 34}
];

export type DialogItemType= {
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

export type MessageType= {
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
export type prop={
    posts:typeof postsArrayData,
    messagesData:typeof messagesArrayData,
    dialogsData:typeof dialogsArrayData
}

export type dialogspropsType={
    dialogs:typeof  dialogsArrayData,
    messages:typeof messagesArrayData
}



interface MyProps {
}

interface MyState {
    dialogsState:dialogspropsType
    postsState: Array<myPostType>

}

export class state extends React.Component<MyProps, MyState> {
    get dialogsState(): dialogspropsType {
        return this._dialogsState;
    }

    get postsState(): Array<myPostType> {
        return this._postsState;
    }
    private _dialogsState: dialogspropsType;
    private _postsState: Array<myPostType>;

constructor(props: MyProps) {
    super(props);
     this._dialogsState={
        dialogs:[
            {id: 1, name: "Dimych"},
            {id: 2, name: "Egor"},
            {id: 3, name: "Zlata"},
            {id: 4, name: "Nastya"},
            {id: 5, name: "Fedor"}
        ],
        messages: [
            {id: 1, text: "hi"},
            {id: 2, text: "hello"},
            {id: 3, text: "you"},
            {id: 4, text: "skidishhh"},
            {id: 5, text: "ssss"},
        ]
    };
     this._postsState=[
         {id: 1, message: "Hello World", likesCount: 12},
         {id: 2, message: "chuma", likesCount: 23},
         {id: 3, message: "you", likesCount: 19},
         {id: 4, message: "fantastic", likesCount: 34}
     ];

}

}
