import React from 'react';
import { MessageType } from '../../../redux/stater';

let css = require("../dialogs.module.css");


const Message: React.FunctionComponent<MessageType> = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    )
};

export default Message;
