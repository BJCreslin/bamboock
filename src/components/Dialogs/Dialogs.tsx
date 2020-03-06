import React from 'react';
import Message from "./Message/Message";
import {Dialog} from "./DialogItem/DialogsItem";
import {propsDialogsInterface} from "../../App";

let css = require("./dialogs.module.css");


export const Dialogs = (props:propsDialogsInterface) => {


    let DialogsDataElements = props.dialogs.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>);




    let MessageDataElements = props.mesages.map(
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

