import React from 'react';
import {NavLink} from "react-router-dom";

let css = require("./dialogs.module.css");

interface DialogProps {
    id: number;
    name: string;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={css.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
};

interface MessageProps {
    id?: number;
    text: string;
}

const Message: React.FunctionComponent<MessageProps> = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    )
};

export const Dialogs = () => {
    const dialogsData: Array<DialogProps> = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Zlata"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Fedor"}
    ];

    let DialogsDataElements = dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>);


    const messagesData: Array<MessageProps> = [
        {id: 1, text: "hi"},
        {id: 2, text: "hello"},
        {id: 3, text: "you"},
        {id: 4, text: "skidishhh"},
        {id: 5, text: "ssss"},
    ];

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

