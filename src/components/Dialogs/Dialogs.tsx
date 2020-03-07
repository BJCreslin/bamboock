import React from 'react';
import Message from "./Message/Message";
import {Dialog} from "./DialogItem/DialogsItem";
import {DialogItemType, dialogspropsType} from "../../index";

let css = require("./dialogs.module.css");


export function Dialogs (props:dialogspropsType) {

    let DialogsDataElements = props.dialogs.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let MessageDataElements = props.messages.map(
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
}

