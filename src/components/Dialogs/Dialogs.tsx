import React from 'react';
import Message from "./Message/Message";
import {Dialog} from "./DialogItem/DialogsItem";

let css = require("./dialogs.module.css");

export interface DialogProps {
    id: number;
    name: string;
}
const dialogsData: Array<DialogProps> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Zlata"},
    {id: 4, name: "Nastya"},
    {id: 5, name: "Fedor"}
];

export interface MessageProps {
    id?: number;
    text: string;
}
const messagesData: Array<MessageProps> = [
    {id: 1, text: "hi"},
    {id: 2, text: "hello"},
    {id: 3, text: "you"},
    {id: 4, text: "skidishhh"},
    {id: 5, text: "ssss"},
];

export const Dialogs = () => {


    let DialogsDataElements = dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>);




    let MessageDataElements = messagesData.map(
        value => <Message text={value.text}/>);

    return (
        <div className={css.dialogsContainer}>

            <div className={css.dialogs}>
                {DialogsDataElements}
            </div>
            <div className={css.messages}>
                {MessageDataElements}

            </div>
        </div>
    )
};

