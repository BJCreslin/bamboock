import React from 'react';
import {MessageProps} from "../Dialogs";

let css = require("../dialogs.module.css");


const Message: React.FunctionComponent<MessageProps> = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    )
};

export default Message;
