import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogProps} from "../Dialogs";

let css = require("../dialogs.module.css");


export const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={css.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
};

